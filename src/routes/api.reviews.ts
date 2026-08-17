import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import {
  FALLBACK_REVIEWS_DATA,
  GOOGLE_PLACE_ID,
  type GoogleReview,
  type ReviewsData,
} from "@/lib/reviews";

const PLACES_API = "https://places.googleapis.com/v1";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

let cache: { data: ReviewsData; expiresAt: number } | undefined;

function staticData(): ReviewsData {
  return FALLBACK_REVIEWS_DATA;
}

async function liveData(apiKey: string): Promise<ReviewsData> {
  const url = `${PLACES_API}/places/${GOOGLE_PLACE_ID}?fields=rating,userRatingCount,reviews&languageCode=pt-BR`;
  const res = await fetch(url, {
    headers: { "X-Goog-Api-Key": apiKey },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    throw new Error(`Google Places API respondeu ${res.status}`);
  }
  const payload = (await res.json()) as {
    rating?: number;
    userRatingCount?: number;
    reviews?: Array<{
      rating?: number;
      text?: { text?: string };
      authorAttribution?: { displayName?: string };
      relativePublishTimeDescription?: string;
    }>;
  };

  const reviews: GoogleReview[] = (payload.reviews ?? [])
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? "Cliente Google",
      rating: r.rating ?? 5,
      text: r.text?.text?.trim() ?? "",
      relativeTime: r.relativePublishTimeDescription ?? "",
    }))
    .filter((r) => r.text.length > 0);

  return {
    source: "google",
    rating: payload.rating ?? FALLBACK_REVIEWS_DATA.rating,
    userRatingCount: payload.userRatingCount ?? FALLBACK_REVIEWS_DATA.userRatingCount,
    reviews: reviews.length > 0 ? reviews : FALLBACK_REVIEWS_DATA.reviews,
  };
}

export const Route = createFileRoute("/api/reviews")({
  server: {
    handlers: {
      GET: async () => {
        const now = Date.now();
        if (cache && cache.expiresAt > now) {
          return Response.json(cache.data, {
            headers: { "Cache-Control": "public, max-age=3600" },
          });
        }

        let data: ReviewsData;
        const apiKey = process.env["GOOGLE_PLACES_API_KEY"];
        if (apiKey) {
          try {
            data = await liveData(apiKey);
          } catch (error) {
            console.error("Falha ao buscar avaliações do Google:", error);
            data = staticData();
          }
        } else {
          data = staticData();
        }

        cache = { data, expiresAt: now + CACHE_TTL_MS };
        return Response.json(data, {
          headers: { "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
