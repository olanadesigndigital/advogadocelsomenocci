import { test as __t } from "@/lib/__imgtest";
/**
 * Otimização de imagens: gera variantes AVIF e WebP em múltiplas larguras
 * em tempo de build (vite-imagetools) e expõe os srcsets por nome de arquivo.
 */
const WIDTHS = "480;768;1024;1600";

const avifSets = import.meta.glob("/src/assets/*.{jpg,jpeg,png}", {
  query: `?w=${WIDTHS}&format=avif&as=srcset`,
  import: "default",
  eager: true,
}) as Record<string, string>;

const webpSets = import.meta.glob("/src/assets/*.{jpg,jpeg,png}", {
  query: `?w=${WIDTHS}&format=webp&as=srcset`,
  import: "default",
  eager: true,
}) as Record<string, string>;

const fallbackSets = import.meta.glob("/src/assets/*.{jpg,jpeg,png}", {
  query: `?w=${WIDTHS}&as=srcset`,
  import: "default",
  eager: true,
}) as Record<string, string>;

function keyOf(src: string) {
  // "/assets/advogado-BX12.jpg" -> "advogado"
  const file = src.split("/").pop() ?? src;
  return file.replace(/-[A-Za-z0-9_-]{6,}(?=\.[a-z]+$)/, "").replace(/\.[a-z]+$/, "");
}

function lookup(map: Record<string, string>, src: string) {
  const key = keyOf(src);
  const path = Object.keys(map).find((p) => keyOf(p) === key);
  return path ? map[path] : undefined;
}

export function imageSources(src: string) {
  return {
    avif: lookup(avifSets, src),
    webp: lookup(webpSets, src),
    fallback: lookup(fallbackSets, src),
  };
}
