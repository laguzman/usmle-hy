import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

export function getGalleryImages(category: string): string[] {
  const dir = path.join(process.cwd(), "public", "gallery", category);

  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => `/gallery/${category}/${file}`);
}
