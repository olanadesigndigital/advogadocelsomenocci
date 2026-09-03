#!/usr/bin/env node
/**
 * Build estático para hospedagem Apache (Hostinger).
 *
 *   npm run build:static
 *
 * Resultado: pasta `dist-hostinger/` pronta para upload em `public_html/`,
 * com index.html na raiz, .htaccess, HTML pré-renderizado de cada rota,
 * CSS, JS, imagens e fontes. Não requer Node.js no servidor.
 */
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const build = spawnSync("npx", ["vite", "build"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, STATIC_EXPORT: "1", NODE_ENV: "production" },
});
if (build.status !== 0) process.exit(build.status ?? 1);

const from = join(root, "dist", "client");
const to = join(root, "dist-hostinger");
if (!existsSync(from)) {
  console.error(`[static] Saída não encontrada em ${from}`);
  process.exit(1);
}
rmSync(to, { recursive: true, force: true });
cpSync(from, to, { recursive: true });

const required = ["index.html", ".htaccess", "robots.txt", "sitemap.xml"];
const missing = required.filter((f) => !existsSync(join(to, f)));
if (missing.length) {
  console.error(`[static] Arquivos obrigatórios ausentes: ${missing.join(", ")}`);
  process.exit(1);
}

let files = 0;
let bytes = 0;
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else {
      files += 1;
      bytes += statSync(p).size;
    }
  }
};
walk(to);

console.log(`\n[static] Pronto: dist-hostinger/ (${files} arquivos, ${(bytes / 1048576).toFixed(1)} MB)`);
console.log("[static] Envie TODO o conteúdo dessa pasta para public_html/ na Hostinger.");
