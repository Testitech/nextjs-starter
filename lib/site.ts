export const siteConfig = {
  name: "My Website",
  description: "A reusable Next.js starter for building modern web experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
