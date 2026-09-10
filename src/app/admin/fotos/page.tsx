import type { Metadata } from "next";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { listGalleryImages } from "@/lib/galleryStorage";
import { gallerySections } from "@/lib/data";
import { AdminLogin } from "@/components/AdminLogin";
import { AdminNav } from "@/components/AdminNav";
import { AdminGalleryUpload } from "@/components/AdminGalleryUpload";

export const metadata: Metadata = {
  title: "Admin · Fotos — USMLE HY Tutor",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminFotosPage() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return (
      <section className="relative pt-40 pb-28">
        <AdminLogin />
      </section>
    );
  }

  const sections = gallerySections.filter((s) => s.key !== "equipo");
  const imagesByCategory = Object.fromEntries(
    await Promise.all(sections.map(async (s) => [s.key, await listGalleryImages(s.key)] as const))
  );

  return (
    <section className="relative pt-40 pb-28">
      <AdminNav />
      <AdminGalleryUpload sections={sections} imagesByCategory={imagesByCategory} />
    </section>
  );
}
