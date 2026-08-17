/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL pública definitiva do site — usada em canonical, Open Graph e sitemap. */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
