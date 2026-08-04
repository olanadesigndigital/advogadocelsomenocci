export const site = {
  lawyer: "Dr. Celso Menocci Junior",
  office: "Menocci Junior Advocacia",
  city: "Jales/SP",
  address: "Av. Francisco Jalles, Centro — Jales/SP",
  phoneDisplay: "(17) 99999-9999",
  whatsappNumber: "5517999999999",
  instagram: "https://instagram.com/",
  mapsEmbed:
    "https://www.google.com/maps?q=Jales,SP,Brasil&output=embed",
};

export const whatsappLink = (
  message = "Olá, Dr. Celso. Gostaria de tirar uma dúvida trabalhista.",
) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
