import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-2xl space-y-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Next.js starter</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{siteConfig.name}</h1>
        <p className="text-lg leading-8 text-slate-600">{siteConfig.description}</p>
      </div>
    </main>
  );
}
