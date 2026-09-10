import { getBucket } from "./firebaseAdmin";

export type StorageImage = {
  name: string;
  url: string;
};

function publicUrl(bucketName: string, path: string): string {
  return `https://storage.googleapis.com/${bucketName}/${encodeURI(path)}`;
}

export async function listGalleryImages(category: string): Promise<StorageImage[]> {
  const bucket = getBucket();
  if (!bucket) return [];

  const [files] = await bucket.getFiles({ prefix: `gallery/${category}/` });

  return files
    .filter((file) => !file.name.endsWith("/"))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((file) => ({
      name: file.name.replace(`gallery/${category}/`, ""),
      url: publicUrl(bucket.name, file.name),
    }));
}

export async function uploadGalleryImage(
  category: string,
  filename: string,
  buffer: Buffer,
  contentType: string
): Promise<StorageImage> {
  const bucket = getBucket();
  if (!bucket) throw new Error("Storage no configurado.");

  const path = `gallery/${category}/${filename}`;
  const file = bucket.file(path);
  await file.save(buffer, { contentType, resumable: false });
  await file.makePublic();

  return { name: filename, url: publicUrl(bucket.name, path) };
}

export async function deleteGalleryImage(category: string, filename: string): Promise<void> {
  const bucket = getBucket();
  if (!bucket) throw new Error("Storage no configurado.");
  await bucket.file(`gallery/${category}/${filename}`).delete({ ignoreNotFound: true });
}
