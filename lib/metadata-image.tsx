import { siteConfig } from "@/lib/site";

export const siteImageSize = { width: 1200, height: 630 } as const;
export const siteImageAlt = `${siteConfig.name} social preview`;
export const siteImageContentType = "image/png";

export function SiteImage() {
  return (
    <div style={{ background: "#f8fafc", color: "#0f172a", display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", padding: "80px", width: "100%" }}>
      <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>{siteConfig.name}</div>
      <div style={{ color: "#475569", display: "flex", fontSize: 32, marginTop: 24, maxWidth: 900 }}>{siteConfig.description}</div>
    </div>
  );
}
