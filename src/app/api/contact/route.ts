import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.nombre !== "string" ||
    !body.nombre.trim() ||
    typeof body.email !== "string" ||
    !body.email.trim() ||
    typeof body.mensaje !== "string" ||
    !body.mensaje.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos requeridos." },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
