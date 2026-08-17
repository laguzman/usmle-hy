import { getDb } from "./firebaseAdmin";
import { programas } from "./data";

export type ResenaItem = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type AdminResenaItem = {
  id: string;
  nombre: string;
  programa: string;
  programaTitle: string;
  mensaje: string;
  calificacion: number;
  approved: boolean;
  createdAt: string | null;
};

function programTitle(slug: string): string {
  return programas.find((p) => p.slug === slug)?.title ?? "";
}

export async function getApprovedResenas(): Promise<ResenaItem[]> {
  const db = getDb();
  if (!db) return [];

  const snapshot = await db
    .collection("resenas")
    .where("approved", "==", true)
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      name: typeof data.nombre === "string" ? data.nombre : "",
      role: typeof data.programa === "string" ? programTitle(data.programa) : "",
      quote: typeof data.mensaje === "string" ? data.mensaje : "",
      rating: typeof data.calificacion === "number" ? data.calificacion : 5,
    };
  });
}

export async function getAllResenas(): Promise<AdminResenaItem[]> {
  const db = getDb();
  if (!db) return [];

  const snapshot = await db.collection("resenas").orderBy("createdAt", "desc").get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    const programaSlug = typeof data.programa === "string" ? data.programa : "";
    const createdAt = data.createdAt?.toDate?.() as Date | undefined;
    return {
      id: doc.id,
      nombre: typeof data.nombre === "string" ? data.nombre : "",
      programa: programaSlug,
      programaTitle: programTitle(programaSlug),
      mensaje: typeof data.mensaje === "string" ? data.mensaje : "",
      calificacion: typeof data.calificacion === "number" ? data.calificacion : 5,
      approved: data.approved === true,
      createdAt: createdAt ? createdAt.toISOString() : null,
    };
  });
}
