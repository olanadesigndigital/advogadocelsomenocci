// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

// Build estático para hospedagem Apache (Hostinger):
//   STATIC_EXPORT=1 npm run build  →  gera HTML pré-renderizado + fallback SPA.
const staticExport = process.env["STATIC_EXPORT"] === "1";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(staticExport
      ? {
          // Gera index.html em cada rota + fallback SPA para as rotas dinâmicas.
          spa: { enabled: true, prerender: { outputPath: "/index.html" } },
          prerender: { enabled: true, crawlLinks: true, filter: ({ path }: { path: string }) => !path.startsWith("/api") },
        }
      : {}),
  },
  ...(staticExport ? { nitro: false as const } : {}),
  vite: {
    plugins: [imagetools()],
    server: {
      allowedHosts: [".monkeycode-ai.live"],
    },
  },
});
