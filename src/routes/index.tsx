import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scale,
  FileText,
  Clock3,
  ShieldAlert,
  HeartPulse,
  Wallet,
  Building2,
  BookOpenCheck,
  Star,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";
import escritorio from "@/assets/escritorio.jpg";
import { Picture } from "@/components/site/Picture";
import { FALLBACK_REVIEWS_DATA, GOOGLE_REVIEWS_URL, type ReviewsData } from "@/lib/reviews";
import { absUrl, site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advogado Trabalhista em Jales | Dr. Celso Menocci Junior" },
      {
        name: "description",
        content:
          "Escritório especializado em Direito do Trabalho em Jales/SP. Atuação estratégica para trabalhadores e empresas, com atendimento personalizado e transparente.",
      },
      { property: "og:title", content: "Advogado Trabalhista em Jales | Dr. Celso Menocci Junior" },
      {
        property: "og:description",
        content:
          "Escritório especializado em Direito do Trabalho em Jales/SP. Atuação estratégica para trabalhadores e empresas, com atendimento personalizado e transparente.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absUrl("/") },
      {
        name: "twitter:title",
        content: "Advogado Trabalhista em Jales | Dr. Celso Menocci Junior",
      },
      {
        name: "twitter:description",
        content:
          "Escritório especializado em Direito do Trabalho em Jales/SP. Atuação estratégica para trabalhadores e empresas, com atendimento personalizado e transparente.",
      },
    ],
    links: [{ rel: "canonical", href: absUrl("/") }],
  }),
  component: Home,
});

const areas = [
  {
    icon: Scale,
    titulo: "Reclamações Trabalhistas",
    texto: "Condução completa da ação, da análise inicial à execução.",
  },
  {
    icon: FileText,
    titulo: "Rescisão de Contrato",
    texto: "Conferência de verbas e correção de valores pagos a menor.",
  },
  {
    icon: Clock3,
    titulo: "Horas Extras",
    texto: "Apuração de jornada, adicionais e reflexos devidos.",
  },
  {
    icon: ShieldAlert,
    titulo: "Assédio Moral",
    texto: "Proteção da dignidade e reparação por danos sofridos.",
  },
  {
    icon: HeartPulse,
    titulo: "Acidente de Trabalho",
    texto: "Estabilidade, indenizações e responsabilidade da empresa.",
  },
  {
    icon: Wallet,
    titulo: "Verbas Rescisórias",
    texto: "Cálculo e cobrança de tudo o que ficou em aberto.",
  },
  {
    icon: Building2,
    titulo: "Defesa de Empresas",
    texto: "Estratégia processual e redução de passivo trabalhista.",
  },
  {
    icon: BookOpenCheck,
    titulo: "Consultoria Preventiva",
    texto: "Contratos, jornada e rotinas em conformidade com a lei.",
  },
];

const filosofia = [
  "Atendimento próximo, com escuta atenta a cada história.",
  "Explicação clara, sem juridiquês desnecessário.",
  "Segurança jurídica em cada decisão tomada.",
  "Soluções estratégicas, e não respostas prontas.",
  "Ética como limite e como método.",
];

const fetchReviews = async (): Promise<ReviewsData> => {
  // Em hospedagem estática (sem Node) a rota /api/reviews não existe:
  // nesse caso usamos as avaliações fixas em vez de quebrar a seção.
  try {
    const res = await fetch("/api/reviews");
    if (!res.ok) return FALLBACK_REVIEWS_DATA;
    return (await res.json()) as ReviewsData;
  } catch {
    return FALLBACK_REVIEWS_DATA;
  }
};


function ReviewsSection() {
  const { data } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: fetchReviews,
    placeholderData: FALLBACK_REVIEWS_DATA,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  const dados = data ?? FALLBACK_REVIEWS_DATA;
  const visiveis = dados.reviews.slice(0, 6);

  return (
    <section className="section border-b border-border">
      <div className="container-page">
        <p className="eyebrow">Depoimentos</p>
        <h2 className="mt-5 text-3xl md:text-4xl">Avaliações de clientes no Google</h2>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="flex gap-1 text-gold" aria-label={`Nota ${dados.rating} de 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-current" strokeWidth={0} aria-hidden="true" />
            ))}
          </span>
          <span className="text-lg font-medium">{dados.rating.toFixed(1).replace(".", ",")}</span>
          <span className="text-sm text-muted-foreground">
            com base em {dados.userRatingCount} avaliações reais no Google
          </span>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold underline underline-offset-4"
          >
            Ver avaliações no Google
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((r) => (
            <figure key={r.author} className="flex flex-col border border-border p-8">
              <div className="flex gap-1 text-gold" aria-label={`${r.rating} de 5 estrelas`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-current"
                    strokeWidth={0}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium">{r.author}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Avaliação no Google · {r.relativeTime}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center border border-gold px-7 py-3.5 text-sm text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          Ver todas as avaliações no Google
        </a>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">
              Advocacia Trabalhista — presencialmente em {site.city} e Online para todo o Brasil
            </p>
            <h1 className="mt-6 text-4xl leading-[1.1] md:text-5xl">
              {site.lawyer}
              <span className="mt-3 block text-lg text-muted-foreground md:text-xl">
                Advogado Especialista em Direito do Trabalho
              </span>
            </h1>
            <span className="rule-gold mt-8" />
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Atuação jurídica estratégica para trabalhadores e empresas, oferecendo soluções
              seguras, atendimento personalizado e defesa dos seus direitos.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink("Olá, Dr. Celso. Gostaria de agendar uma consultoria.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <CalendarCheck className="size-4" strokeWidth={1.5} /> Agendar Consultoria
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-gold px-7 py-4 text-sm tracking-wide text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
              >
                <MessageCircle className="size-4" strokeWidth={1.5} /> Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border border-gold-soft md:block" />
            <Picture
              src={escritorio}
              alt="Fachada do escritório Celso A. Menocci Junior Advogado em Jales/SP"
              width={1600}
              height={1199}
              sizes="(min-width: 768px) 50vw, 100vw"
              loading="eager"
              className="relative w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section border-b border-border">
        <div className="container-page grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Sobre o escritório</p>
            <h2 className="mt-5 text-3xl md:text-4xl">
              Direito do Trabalho com técnica e proximidade
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              O escritório nasceu do propósito de oferecer uma advocacia trabalhista próxima,
              honesta e tecnicamente rigorosa. Cada caso recebe atenção individual, porque nenhuma
              história de trabalho é igual à outra.
            </p>
            <p>
              O atendimento é humanizado e conduzido com ética e transparência: o cliente entende o
              que está acontecendo, quais são os riscos reais e quais caminhos existem antes de
              qualquer decisão.
            </p>
            <p>
              A estratégia jurídica é construída com excelência técnica e linguagem clara — do
              primeiro contato até o desfecho do caso.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-b border-border bg-secondary/50">
        <div className="container-page">
          <p className="eyebrow">Áreas de atuação</p>
          <h2 className="mt-5 max-w-2xl text-3xl md:text-4xl">
            Soluções para quem trabalha e para quem emprega
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <div
                key={a.titulo}
                className="bg-background p-8 transition-colors hover:bg-accent/40"
              >
                <a.icon className="size-6 text-gold" strokeWidth={1.25} />
                <h3 className="mt-6 text-lg">{a.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b border-border bg-secondary/50">
        <div className="container-page grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mt-5 text-3xl md:text-4xl">Como o escritório atende</h2>
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {filosofia.map((f) => (
                <li key={f} className="border-l border-gold pl-5">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div className="border border-border bg-background p-8">
              <p className="eyebrow">Missão</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Defender direitos com técnica e humanidade, oferecendo segurança jurídica a
                trabalhadores e empresas em cada etapa da relação de trabalho.
              </p>
            </div>
            <div className="border border-border bg-background p-8">
              <p className="eyebrow">Visão</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Ser referência regional em Direito do Trabalho, reconhecido pela clareza, pela ética
                e pela qualidade do atendimento prestado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="section border-y border-gold bg-white text-[#1a1a1a]">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl">Precisa de Atendimento?</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-80">
            Explique sua situação e receba uma análise inicial do seu caso com clareza e sem
            compromisso.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-sm tracking-wide text-[#1a1a1a] transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" strokeWidth={1.5} /> Falar no WhatsApp
          </a>
          <p className="mt-8 text-xs opacity-70">
            Conheça também as{" "}
            <Link to="/publicacoes" className="underline underline-offset-4">
              publicações jurídicas
            </Link>{" "}
            do escritório.
          </p>
        </div>
      </section>
    </>
  );
}
