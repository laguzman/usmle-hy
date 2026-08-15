import { NextResponse } from "next/server";
import { getDb } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const nombre = typeof body?.nombre === "string" ? body.nombre.trim() : "";
  const programa = typeof body?.programa === "string" ? body.programa.trim() : "";
  const mensaje = typeof body?.mensaje === "string" ? body.mensaje.trim() : "";
  const calificacion = Number(body?.calificacion);

  if (
    !nombre ||
    !mensaje ||
    !Number.isInteger(calificacion) ||
    calificacion < 1 ||
    calificacion > 5
  ) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos requeridos." },
      { status: 400 }
    );
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json(
      { ok: false, error: "El almacenamiento de reseñas no está configurado todavía." },
      { status: 503 }
    );
  }

  await db.collection("resenas").add({
    nombre,
    programa,
    mensaje,
    calificacion,
    approved: true,
    createdAt: new Date(),
  });

  return NextResponse.json({ ok: true });
}
