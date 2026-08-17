export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface ReviewsData {
  source: "google" | "static";
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
}

export const GOOGLE_PLACE_ID = "ChIJ_Y40IvcEGG0RcOVhVaWtVME";

export const GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}&q=*&hl=pt-BR&gl=BR`;

export const GOOGLE_RATING = 5;
export const GOOGLE_REVIEW_COUNT = 28;

/**
 * Avaliações reais publicadas no perfil do Google Empresas do escritório.
 * Servem como base exibida de imediato e como fallback quando nenhuma
 * GOOGLE_PLACES_API_KEY está configurada.
 */
export const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    author: "Isabelly Costa",
    rating: 5,
    text: "Excelente profissional! Comprometido e muito competente. Explica tudo com clareza e busca a melhor solução para o caso. Recomendo de olhos fechados!",
    relativeTime: "há um ano",
  },
  {
    author: "Tamires Chile",
    rating: 5,
    text: "Tive uma experiência ótima, super recomendo! Um trabalho excelente, atendimento impecável, super prestativo e atencioso, agradeço muito pela qualidade nota 10 e dedicação, do início ao fim.",
    relativeTime: "há um ano",
  },
  {
    author: "Valdereza Correa",
    rating: 5,
    text: "Excelente profissional, estava há anos tentando resolver um problema e ele resolveu rapidamente. Recomendo demais!",
    relativeTime: "há um ano",
  },
  {
    author: "Wilton Watanabe",
    rating: 5,
    text: "Recebi um atendimento excelente do Dr. Celso. Profissionalismo, atenção e cuidado em cada detalhe, tornando a experiência muito positiva. Recomendo fortemente",
    relativeTime: "há um ano",
  },
  {
    author: "Livia Olhier",
    rating: 5,
    text: "Excelente profissional, muito educado, resolveu o meu caso de uma forma ética e integra!!",
    relativeTime: "há um ano",
  },
  {
    author: "Gustavo Nishimoto",
    rating: 5,
    text: "Excelente serviço, conseguiu me ajudar e me explicar tudo o que precisava saber. Cumpriu seu trabalho de forma correta e de forma atenciosa.",
    relativeTime: "há um ano",
  },
  {
    author: "Ana Lívea Robete",
    rating: 5,
    text: "Atendimento excelente, sempre muito atencioso ao cliente e resolutivo",
    relativeTime: "há um ano",
  },
  {
    author: "Gabriela Aguilar",
    rating: 5,
    text: "Só tenho que agradecer ao Dr. Celso. Muito atencioso e gentil com seus clientes. Obrigada!",
    relativeTime: "há um ano",
  },
  {
    author: "DiH Ramalho",
    rating: 5,
    text: "Foi profissional, atencioso e coerente com minha causa, recomendo!",
    relativeTime: "há um ano",
  },
  {
    author: "Kizze Perri",
    rating: 5,
    text: "Profissional competente, responsável, oferece excelente respaldo, e cumpre os compromissos.",
    relativeTime: "há um ano",
  },
  {
    author: "Neto May",
    rating: 5,
    text: "Excelente profissional! Recomendo",
    relativeTime: "há um ano",
  },
  {
    author: "Ado Amadeu",
    rating: 5,
    text: "Atendimento rápido e eficaz. Solucionou meu problema em alguns dias.",
    relativeTime: "há um ano",
  },
];

export const FALLBACK_REVIEWS_DATA: ReviewsData = {
  source: "static",
  rating: GOOGLE_RATING,
  userRatingCount: GOOGLE_REVIEW_COUNT,
  reviews: FALLBACK_REVIEWS,
};
