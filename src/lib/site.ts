export const site = {
  lawyer: "Dr. Celso Menocci Junior",
  oab: "OAB/SP nº 483.209",
  office: "Menocci Junior Advocacia",
  city: "Jales/SP",
  address: "R. Quatro, 2055 - Jardim Ana Cristina, Jales - SP, 15700-058",
  phoneDisplay: "(17) 99765-3307",
  whatsappNumber: "5517997653307",
  instagram: "https://www.instagram.com/celsomenoccijunior/",
  mapsEmbed:
    "https://www.google.com/maps?q=R.+Quatro,+2055+-+Jardim+Ana+Cristina,+Jales+-+SP,+15700-058&output=embed",
};

export const whatsappLink = (
  message = "Olá! Vim pelo seu site e gostaria de solicitar uma análise do meu caso trabalhista.\n\nSegue algumas informações iniciais:\n\n👤 Nome:\n🏢 Empresa:\n💼 Cargo/Função:\n📅 Período trabalhado:\n⚠️ Resumo da situação:\n\nGostaria de saber se tenho direito de ingressar com uma ação trabalhista.\n\nAguardo seu retorno. Obrigado!",
) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

/** URL pública do site — base para canonical, Open Graph e sitemap. */
export const siteUrl = import.meta.env.VITE_SITE_URL ?? "https://advogadocelsomenocci.lovable.app";

/** Converte um caminho interno em URL absoluta. */
export const absUrl = (path: string) => `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
