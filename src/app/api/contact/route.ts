import { NextResponse } from "next/server";
import { Resend } from "resend";
import { programas } from "@/lib/data";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const nombre = typeof body?.nombre === "string" ? body.nombre.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const telefono = typeof body?.telefono === "string" ? body.telefono.trim() : "";
  const pais = typeof body?.pais === "string" ? body.pais.trim() : "";
  const programaSlug = typeof body?.programa === "string" ? body.programa.trim() : "";
  const mensaje = typeof body?.mensaje === "string" ? body.mensaje.trim() : "";

  if (!nombre || !email || !telefono || !pais || !mensaje) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos requeridos." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { ok: false, error: "El envío de mensajes no está configurado todavía." },
      { status: 503 }
    );
  }

  const programaTitle = programas.find((p) => p.slug === programaSlug)?.title;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "USMLE HY Tutor <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `Nuevo mensaje de contacto — ${nombre}`,
    text: [
      `Nombre: ${nombre}`,
      `Correo: ${email}`,
      `Teléfono: ${telefono}`,
      `País: ${pais}`,
      `Programa de interés: ${programaTitle ?? "No especificado"}`,
      "",
      "Mensaje:",
      mensaje,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje. Intenta de nuevo." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
