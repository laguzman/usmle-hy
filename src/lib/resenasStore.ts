import { getDb } from "./firebaseAdmin";
import { programas } from "./data";

export type ResenaItem = {
  name: string;
  role: string;
  quote: string;
  rating: number;
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
