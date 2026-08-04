/**
 * Otimização de imagens: variantes AVIF e WebP em múltiplas larguras,
 * geradas em tempo de build pelo vite-imagetools (conteúdo original preservado).
 */
import advogadoAvif from "@/assets/advogado.jpg?w=480;768;1024;1600&format=avif&as=srcset";
import advogadoWebp from "@/assets/advogado.jpg?w=480;768;1024;1600&format=webp&as=srcset";
import advogadoJpg from "@/assets/advogado.jpg?w=480;768;1024;1600&as=srcset";
import retratoAvif from "@/assets/advogado-retrato.jpg?w=480;768;1024;1600&format=avif&as=srcset";
import retratoWebp from "@/assets/advogado-retrato.jpg?w=480;768;1024;1600&format=webp&as=srcset";
import retratoJpg from "@/assets/advogado-retrato.jpg?w=480;768;1024;1600&as=srcset";
import escritorioAvif from "@/assets/escritorio.jpg?w=480;768;1024;1600&format=avif&as=srcset";
import escritorioWebp from "@/assets/escritorio.jpg?w=480;768;1024;1600&format=webp&as=srcset";
import escritorioJpg from "@/assets/escritorio.jpg?w=480;768;1024;1600&as=srcset";
import horasAvif from "@/assets/artigo-horas-extras.jpg?w=480;768;1024;1600&format=avif&as=srcset";
import horasWebp from "@/assets/artigo-horas-extras.jpg?w=480;768;1024;1600&format=webp&as=srcset";
import horasJpg from "@/assets/artigo-horas-extras.jpg?w=480;768;1024;1600&as=srcset";
import rescisaoAvif from "@/assets/artigo-rescisao.jpg?w=480;768;1024;1600&format=avif&as=srcset";
import rescisaoWebp from "@/assets/artigo-rescisao.jpg?w=480;768;1024;1600&format=webp&as=srcset";
import rescisaoJpg from "@/assets/artigo-rescisao.jpg?w=480;768;1024;1600&as=srcset";
import gestanteAvif from "@/assets/artigo-gestante.jpg?w=480;768;1024;1600&format=avif&as=srcset";
import gestanteWebp from "@/assets/artigo-gestante.jpg?w=480;768;1024;1600&format=webp&as=srcset";
import gestanteJpg from "@/assets/artigo-gestante.jpg?w=480;768;1024;1600&as=srcset";
import insalubridadeAvif from "@/assets/artigo-insalubridade.jpg?w=480;768;1024;1600&format=avif&as=srcset";
import insalubridadeWebp from "@/assets/artigo-insalubridade.jpg?w=480;768;1024;1600&format=webp&as=srcset";
import insalubridadeJpg from "@/assets/artigo-insalubridade.jpg?w=480;768;1024;1600&as=srcset";

type Variants = { avif: string; webp: string; fallback: string };

const registry: Record<string, Variants> = {
  advogado: { avif: advogadoAvif, webp: advogadoWebp, fallback: advogadoJpg },
  "advogado-retrato": { avif: retratoAvif, webp: retratoWebp, fallback: retratoJpg },
  escritorio: { avif: escritorioAvif, webp: escritorioWebp, fallback: escritorioJpg },
  "artigo-horas-extras": { avif: horasAvif, webp: horasWebp, fallback: horasJpg },
  "artigo-rescisao": { avif: rescisaoAvif, webp: rescisaoWebp, fallback: rescisaoJpg },
  "artigo-gestante": { avif: gestanteAvif, webp: gestanteWebp, fallback: gestanteJpg },
  "artigo-insalubridade": {
    avif: insalubridadeAvif,
    webp: insalubridadeWebp,
    fallback: insalubridadeJpg,
  },
};

function keyOf(src: string) {
  const file = src.split("/").pop() ?? src;
  return file.replace(/-[A-Za-z0-9_-]{6,}(?=\.[a-z]+$)/i, "").replace(/\.[a-z]+$/i, "");
}

export function imageSources(src: string): Partial<Variants> {
  return registry[keyOf(src)] ?? {};
}
