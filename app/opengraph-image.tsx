import { ImageResponse } from "next/og";
import { SiteImage, siteImageAlt, siteImageContentType, siteImageSize } from "@/lib/metadata-image";

export const alt = siteImageAlt;
export const size = siteImageSize;
export const contentType = siteImageContentType;

export default function Image() {
  return new ImageResponse(<SiteImage />, size);
}
