export const site = {
  lawyer: "Dr. Celso Menocci Junior",
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
  message = "Olá, Dr. Celso. Gostaria de tirar uma dúvida trabalhista.",
) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
