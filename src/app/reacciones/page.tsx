import type { Metadata } from "next";
import { Reacciones } from "@/components/Reacciones";
import { getChannelVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Videos — USMLE HY Tutor",
  description: "Testimonios en video, directo de quienes ya lo lograron.",
};

export default async function ReaccionesPage() {
  const videos = await getChannelVideos();
  return <Reacciones videos={videos} />;
}
