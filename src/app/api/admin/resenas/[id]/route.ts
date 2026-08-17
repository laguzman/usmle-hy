import { NextResponse } from "next/server";
import { getDb } from "@/lib/firebaseAdmin";
import { isAdminAuthenticated } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "No autorizado." }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json().catch(() => null);
  if (typeof body?.approved !== "boolean") {
    return NextResponse.json({ ok: false, error: "Falta el campo approved." }, { status: 400 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({ ok: false, error: "Base de datos no configurada." }, { status: 503 });
  }

  await db.collection("resenas").doc(id).update({ approved: body.approved });
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "No autorizado." }, { status: 401 });
  }

  const { id } = await params;
  const db = getDb();
  if (!db) {
    return NextResponse.json({ ok: false, error: "Base de datos no configurada." }, { status: 503 });
  }

  await db.collection("resenas").doc(id).delete();
  return NextResponse.json({ ok: true });
}
