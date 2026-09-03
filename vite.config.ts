// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

// Build estático (SSG) para hospedagem compartilhada (Hostinger PHP/HTML).
// Ative com STATIC_EXPORT=1 — mantém o build padrão (Lovable/Cloudflare) intacto.
const staticExport = process.env["STATIC_EXPORT"] === "1";

export default defineConfig({
  ...(staticExport ? { nitro: false as const } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(staticExport
      ? {
          // SSG: pré-renderiza cada rota como index.html dentro da própria pasta.
          // Resultado 100% estático — serve na Hostinger sem Node.js e sem depender
          // de renderização client-side para o conteúdo.
          pages: [
            { path: "/" },
            { path: "/advogado" },
            { path: "/publicacoes" },
            { path: "/publicacoes/o-que-sao-horas-extras" },
            { path: "/publicacoes/como-funciona-a-rescisao" },
            { path: "/publicacoes/estabilidade-da-gestante" },
            { path: "/publicacoes/adicional-de-insalubridade" },
            { path: "/sitemap.xml" },
          ],
          prerender: {
            enabled: true,
            failOnError: false,
          },
        }
      : {}),
  },
  vite: {
    plugins: [imagetools()],
    server: {
      allowedHosts: [".monkeycode-ai.live"],
    },
  },
});
