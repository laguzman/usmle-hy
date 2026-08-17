import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_MAX_AGE, ADMIN_COOKIE_NAME, getSessionToken, verifyAdminPassword } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "El acceso de administrador no está configurado todavía." },
      { status: 503 }
    );
  }

  if (!password || !verifyAdminPassword(password)) {
    return NextResponse.json({ ok: false, error: "Contraseña incorrecta." }, { status: 401 });
  }

  const token = getSessionToken();
  const store = await cookies();
  store.set(ADMIN_COOKIE_NAME, token!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  });

  return NextResponse.json({ ok: true });
}
