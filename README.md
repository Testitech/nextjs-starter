# Next.js Starter

A clean, reusable starting point for small-to-large Next.js projects.

## Stack

- Next.js 16.3.4 with the App Router
- React 19.2.8
- TypeScript
- Tailwind CSS v4
- ESLint
- pnpm

## Folder structure

```text
app/                 Routes, layouts, metadata, and global styles
components/          Reusable UI and project-level components
hooks/               Custom React hooks
lib/                 Utilities, constants, and site configuration
types/               Shared TypeScript types
public/images/       Static images
public/icons/        Static icons
```

Create only the folders you need as the project grows. The default favicon remains in `app/favicon.ico`.

## Create a project from this starter

Copy or clone the repository, then install dependencies:

```bash
pnpm install
```

Update `lib/site.ts`, then replace the starter homepage in `app/page.tsx` with your project UI.

## Environment variables

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`. It is used for absolute metadata, robots, and sitemap URLs. Do not commit `.env.local` or secrets.

## Metadata and social images

Global metadata is configured in `app/layout.tsx` and derives shared values from `lib/site.ts`. Modify `app/opengraph-image.tsx`, `app/twitter-image.tsx`, or their shared design in `lib/metadata-image.tsx`.

## Robots and sitemap

- `app/robots.ts` generates `/robots.txt`.
- `app/sitemap.ts` generates `/sitemap.xml`; add future public routes to its `routes` array.

## Run locally

```bash
pnpm dev
```

Open http://localhost:3000.

## Validate and build

```bash
pnpm lint
pnpm build
pnpm start
```
