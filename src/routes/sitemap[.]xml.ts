import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { artigos } from "@/data/artigos";
import { siteUrl } from "@/lib/site";

const BASE_URL = siteUrl;

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Data da publicação mais recente — usada como lastmod do índice de publicações.
        const ultimaPublicacao = artigos
          .map((a) => a.data)
          .sort()
          .at(-1);

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "monthly", priority: "1.0" },
          { path: "/advogado", changefreq: "monthly", priority: "0.8" },
          {
            path: "/publicacoes",
            lastmod: ultimaPublicacao,
            changefreq: "weekly",
            priority: "0.9",
          },
          // Uma entrada por artigo do CMS, gerada automaticamente.
          ...artigos.map((a) => ({
            path: `/publicacoes/${a.slug}`,
            lastmod: a.data,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
