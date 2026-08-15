const YOUTUBE_CHANNEL_ID = "UCCA47DnAUnRNKb4vvVaVRYg";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

export type YoutubeVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  publishedAt: string;
};

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
};

function decodeEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&(amp|lt|gt|quot|apos);/g, (_, name) => NAMED_ENTITIES[name]);
}

function matchTag(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? decodeEntities(match[1].trim()) : "";
}

function matchAttr(block: string, tag: string, attr: string): string {
  const match = block.match(new RegExp(`<${tag}[^>]*\\s${attr}="([^"]*)"`));
  return match ? decodeEntities(match[1]) : "";
}

export async function getChannelVideos(): Promise<YoutubeVideo[]> {
  const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
  if (!res.ok) return [];

  const xml = await res.text();
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

  return entries.map((entry) => {
    const id = matchTag(entry, "yt:videoId");
    return {
      id,
      title: matchTag(entry, "title"),
      description: matchTag(entry, "media:description"),
      thumbnail: matchAttr(entry, "media:thumbnail", "url"),
      url: `https://www.youtube.com/watch?v=${id}`,
      publishedAt: matchTag(entry, "published"),
    };
  });
}
