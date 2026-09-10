import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { uploadGalleryImage } from "@/lib/galleryStorage";
import { gallerySections } from "@/lib/data";

export const runtime = "nodejs";

const VALID_CATEGORIES = new Set(gallerySections.map((s) => s.key));
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"]);

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "No autorizado." }, { status: 401 });
  }

  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  const category = String(formData.get("category") ?? "");
  if (!VALID_CATEGORIES.has(category)) {
    return NextResponse.json({ ok: false, error: "Categoría inválida." }, { status: 400 });
  }

  const files = formData.getAll("files").filter((f): f is File => f instanceof File);
  if (files.length === 0) {
    return NextResponse.json({ ok: false, error: "No se recibieron archivos." }, { status: 400 });
  }

  const uploaded = [];
  for (const file of files) {
    if (!IMAGE_TYPES.has(file.type)) continue;
    const buffer = Buffer.from(await file.arrayBuffer());
    const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const image = await uploadGalleryImage(category, safeName, buffer, file.type);
    uploaded.push(image);
  }

  return NextResponse.json({ ok: true, uploaded });
}
