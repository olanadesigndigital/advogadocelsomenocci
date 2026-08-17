import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";
import advogado from "@/assets/advogado.jpg";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Picture } from "@/components/site/Picture";
import { absUrl, site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/advogado")({
  head: () => ({
    meta: [
      { title: "Dr. Celso Menocci Junior | Advogado Trabalhista em Jales" },
      {
        name: "description",
        content:
          "Conheça a trajetória, a formação e a filosofia de trabalho do Dr. Celso Menocci Junior, advogado especialista em Direito do Trabalho.",
      },
      { property: "og:title", content: "Dr. Celso Menocci Junior | Advogado Trabalhista" },
      {
        property: "og:description",
        content: "Trajetória, formação e valores do advogado especialista em Direito do Trabalho.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: absUrl("/advogado") },
      { name: "twitter:title", content: "Dr. Celso Menocci Junior | Advogado Trabalhista" },
      {
        name: "twitter:description",
        content: "Trajetória, formação e valores do advogado especialista em Direito do Trabalho.",
      },
    ],
    links: [{ rel: "canonical", href: absUrl("/advogado") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          name: "Dr. Celso Menocci Junior",
          jobTitle: "Advogado especialista em Direito do Trabalho",
          areaServed: "Jales e região, São Paulo, Brasil",
          knowsAbout: [
            "Direito do Trabalho",
            "Verbas rescisórias",
            "Horas extras",
            "Assédio moral",
            "Acidente de trabalho",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Escritório", item: "/" },
            { "@type": "ListItem", position: 2, name: "Advogado", item: "/advogado" },
          ],
        }),
      },
    ],
  }),
  component: Advogado,
});

const formacao = [
  { titulo: "Graduação", itens: ["Bacharelado em Direito"] },
  { titulo: "Especializações", itens: ["Direito e Processo do Trabalho"] },
  {
    titulo: "Cursos",
    itens: ["Atualização em Reforma Trabalhista", "Prática processual trabalhista"],
  },
  {
    titulo: "Pós-graduações",
    itens: ["Pós-Graduação Lato Sensu em Carreira Trabalhista - ZZLMTED7"],
  },
  { titulo: "Certificações", itens: ["Inscrição regular na OAB/SP"] },
];

const valores = [
  "Ética",
  "Compromisso",
  "Responsabilidade",
  "Atualização",
  "Respeito",
  "Excelência",
];

const filosofia = [
  "Atendimento próximo, com escuta atenta a cada história.",
  "Explicação clara, sem juridiquês desnecessário.",
  "Segurança jurídica em cada decisão tomada.",
  "Soluções estratégicas, e não respostas prontas.",
  "Ética como limite e como método.",
];

function Advogado() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid items-center gap-14 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div className="relative order-2 md:order-1">
            <div className="absolute -bottom-4 -right-4 hidden h-full w-full border border-gold-soft md:block" />
            <Picture
              src={advogado}
              alt="Retrato profissional do Dr. Celso Menocci Junior"
              width={956}
              height={1920}
              sizes="(min-width: 768px) 42vw, 100vw"
              className="relative w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <Breadcrumbs items={[{ label: "Escritório", to: "/" }, { label: "Advogado" }]} />
            <p className="eyebrow mt-6">O advogado</p>
            <h1 className="mt-5 text-4xl md:text-5xl">{site.lawyer}</h1>
            <span className="rule-gold mt-8" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Advogado inscrito na OAB/SP, dedicado exclusivamente ao Direito do Trabalho. Atende
                trabalhadores e empresas em Jales e região, unindo rigor técnico e uma relação de
                confiança com o cliente.
              </p>
              <p>
                Sua trajetória foi construída na prática forense diária, no estudo constante da
                legislação e da jurisprudência e no contato direto com pessoas que precisam de
                respostas claras em momentos delicados.
              </p>
              <p>
                Atua com valores firmes: transparência sobre riscos e prazos, comunicação acessível
                e compromisso com o resultado possível — não com promessas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-b border-border bg-secondary/50">
        <div className="container-page">
          <p className="eyebrow">Formação</p>
          <h2 className="mt-5 text-3xl md:text-4xl">Formação acadêmica e qualificação</h2>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {formacao.map((f) => (
              <div key={f.titulo} className="bg-background p-8">
                <h3 className="text-lg">{f.titulo}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {f.itens.map((i) => (
                    <li key={i} className="border-l border-gold pl-4">
                      {i}
                    </li>
                  ))}
                </ul>
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

      <section className="section border-b border-border">
        <div className="container-page">
          <p className="eyebrow">Valores</p>
          <h2 className="mt-5 text-3xl md:text-4xl">Princípios que orientam a atuação</h2>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <div key={v} className="bg-background p-10 text-center">
                <span className="font-[family-name:var(--font-display)] text-xl">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-primary-foreground">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl">Agende sua consulta</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-80">
            Atendimento presencial em Jales/SP e on-line para todo o Brasil.
          </p>
          <a
            href={whatsappLink("Olá, Dr. Celso. Gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            <CalendarCheck className="size-4" strokeWidth={1.5} /> Agendar consulta
          </a>
        </div>
      </section>
    </>
  );
}
