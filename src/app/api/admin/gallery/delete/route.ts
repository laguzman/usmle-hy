import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { deleteGalleryImage } from "@/lib/galleryStorage";
import { gallerySections } from "@/lib/data";

export const runtime = "nodejs";

const VALID_CATEGORIES = new Set(gallerySections.map((s) => s.key));

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "No autorizado." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const category = typeof body?.category === "string" ? body.category : "";
  const filename = typeof body?.filename === "string" ? body.filename : "";

  if (!VALID_CATEGORIES.has(category) || !filename) {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  await deleteGalleryImage(category, filename);
  return NextResponse.json({ ok: true });
}
