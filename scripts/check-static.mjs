#!/usr/bin/env node
/**
 * Verificação do build estático (Hostinger / Apache, sem Node.js).
 *
 *   npm run test:static
 *
 * Simula as regras de reescrita do `.htaccess` e confere que:
 *   1. os arquivos obrigatórios existem na raiz;
 *   2. cada rota pré-renderizada resolve para um `index.html` existente;
 *   3. todo asset referenciado (src, href, srcset) existe no pacote;
 *   4. o conteúdo principal está no HTML (funciona mesmo sem JavaScript);
 *   5. as imagens das publicações abrem o respectivo artigo.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist-hostinger");

if (!existsSync(dist)) {
  console.error("[check-static] Pasta dist-hostinger/ ausente. Rode: npm run build:static");
  process.exit(1);
}

const failures = [];
const notes = [];

const requiredFiles = [
  "index.html",
  ".htaccess",
  "robots.txt",
  "sitemap.xml",
  "favicon.ico",
  "og-image.jpg",
];
const pages = [
  "/",
  "/advogado",
  "/publicacoes",
  "/publicacoes/o-que-sao-horas-extras",
  "/publicacoes/como-funciona-a-rescisao",
  "/publicacoes/estabilidade-da-gestante",
  "/publicacoes/adicional-de-insalubridade",
];

/** Reproduz a lógica de reescrita do .htaccess para uma URL. */
function resolveApache(urlPath) {
  const clean = (urlPath.split("?")[0] ?? urlPath).split("#")[0];
  const direct = join(dist, clean);
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  const asDir = join(dist, clean, "index.html");
  if (existsSync(asDir)) return asDir;
  return join(dist, "index.html");
}

for (const file of requiredFiles) {
  if (!existsSync(join(dist, file))) failures.push(`Arquivo obrigatório ausente: ${file}`);
}

const read = (path) => readFileSync(path, "utf8");

const assetRef = /(?:src|href)="([^"]+)"/g;
const srcsetRef = /srcset="([^"]+)"/g;
const isExternal = (ref) =>
  /^(https?:)?\/\//.test(ref) ||
  /^(mailto:|tel:|data:|javascript:)/.test(ref) ||
  ref.startsWith("#") ||
  ref.startsWith("blob:");

for (const page of pages) {
  const file = resolveApache(page);
  if (!existsSync(file)) {
    failures.push(`Rota ${page} não resolve para um arquivo existente`);
    continue;
  }
  const html = read(file);

  if (!html.includes("Celso Menocci")) {
    failures.push(`Rota ${page}: HTML sem o conteúdo principal (conteúdo não pré-renderizado)`);
  }
  if (html.includes("Esta página não carregou")) {
    failures.push(`Rota ${page}: HTML contém a tela de erro`);
  }

  const refs = new Set();
  for (const m of html.matchAll(assetRef)) refs.add(m[1]);
  for (const m of html.matchAll(srcsetRef)) {
    for (const part of m[1].split(",")) {
      const url = part.trim().split(/\s+/)[0];
      if (url) refs.add(url);
    }
  }

  for (const ref of refs) {
    if (isExternal(ref) || ref.startsWith("/api/")) continue;
    const clean = ref.split("?")[0].split("#")[0];
    const target = join(dist, clean.replace(/^\//, ""));
    if (!existsSync(target)) failures.push(`Rota ${page}: referência quebrada -> ${ref}`);
  }
}

// As imagens das publicações devem apontar para o artigo correspondente.
const publicacoesHtml = read(resolveApache("/publicacoes"));
const pictureCount = (publicacoesHtml.match(/<picture/g) ?? []).length;
const linkedAnchors = [
  ...publicacoesHtml.matchAll(/<a\b[^>]*aria-label="Ler artigo: [^"]*"[^>]*>/g),
].map((m) => m[0]);
if (pictureCount === 0) {
  failures.push("/publicacoes: nenhuma imagem de artigo encontrada");
} else if (linkedAnchors.length !== pictureCount) {
  failures.push(
    `/publicacoes: ${linkedAnchors.length} de ${pictureCount} imagens estão clicáveis (esperado: todas)`,
  );
} else {
  const semHref = linkedAnchors.filter((a) => !/href="\/publicacoes\//.test(a));
  if (semHref.length > 0) {
    failures.push(`/publicacoes: ${semHref.length} imagem(ns) clicável(is) sem link de artigo`);
  } else {
    notes.push(`/publicacoes: ${linkedAnchors.length} imagens clicáveis abrindo o artigo`);
  }
}

// O fetch de /api/reviews precisa degradar para o conteúdo estático.
const homeHtml = read(resolveApache("/"));
if (!homeHtml.includes("avaliações")) {
  notes.push("Home: bloco de avaliações não pré-renderizado (depende do fetch em runtime)");
}
if (!existsSync(join(dist, "api"))) {
  notes.push(
    "Sem /api no pacote: o fallback de avaliações é usado no navegador (comportamento esperado)",
  );
}

if (failures.length > 0) {
  console.error("\n[check-static] FALHOU:\n");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log("\n[check-static] OK — pacote estático pronto para public_html/");
console.log(`  Rotas verificadas: ${pages.length}`);
console.log(`  Arquivos obrigatórios: ${requiredFiles.length}`);
for (const n of notes) console.log(`  Nota: ${n}`);
