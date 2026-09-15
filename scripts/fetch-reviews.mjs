#!/usr/bin/env node
/**
 * Busca as avaliações do Google Places no momento do build e grava
 * `public/reviews.json`, que passa a ser um arquivo estático servido pela
 * Hostinger. Assim as avaliações ficam atualizadas sem precisar de Node
 * no servidor.
 *
 *   node scripts/fetch-reviews.mjs
 *
 * Sem GOOGLE_PLACES_API_KEY, não faz nada (o site usa o fallback do código).
 */
import { writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const PLACE_ID = "ChIJ_Y40IvcEGG0RcOVhVaWtVME";
const apiKey = process.env["GOOGLE_PLACES_API_KEY"];
const out = join(resolve(import.meta.dirname, ".."), "public", "reviews.json");

if (!apiKey) {
  console.log("[reviews] GOOGLE_PLACES_API_KEY ausente — mantendo avaliações fixas.");
  process.exit(0);
}

const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount,reviews&languageCode=pt-BR`;

try {
  const res = await fetch(url, {
    headers: { "X-Goog-Api-Key": apiKey },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Google Places respondeu ${res.status}`);

  const payload = await res.json();
  const reviews = (payload.reviews ?? [])
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? "Cliente Google",
      rating: r.rating ?? 5,
      text: r.text?.text?.trim() ?? "",
      relativeTime: r.relativePublishTimeDescription ?? "",
    }))
    .filter((r) => r.text.length > 0);

  if (reviews.length === 0) throw new Error("nenhuma avaliação retornada");

  const data = {
    source: "google",
    rating: payload.rating ?? 5,
    userRatingCount: payload.userRatingCount ?? reviews.length,
    reviews,
  };
  writeFileSync(out, JSON.stringify(data, null, 2) + "\n");
  console.log(`[reviews] public/reviews.json atualizado (${reviews.length} avaliações).`);
} catch (error) {
  console.warn(`[reviews] Falha ao buscar avaliações: ${error.message}. Mantendo as existentes.`);
}
