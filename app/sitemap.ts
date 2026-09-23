import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = ["/"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: new URL(route, siteConfig.url).toString() }));
}
