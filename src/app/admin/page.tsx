import type { Metadata } from "next";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getAllResenas } from "@/lib/resenasStore";
import { AdminLogin } from "@/components/AdminLogin";
import { AdminResenas } from "@/components/AdminResenas";

export const metadata: Metadata = {
  title: "Admin — USMLE HY Tutor",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return (
      <section className="relative pt-40 pb-28">
        <AdminLogin />
      </section>
    );
  }

  const resenas = await getAllResenas();

  return (
    <section className="relative pt-40 pb-28">
      <AdminResenas resenas={resenas} />
    </section>
  );
}
