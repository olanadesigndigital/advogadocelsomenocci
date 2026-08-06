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
      { name: "twitter:title", content: "Advogado Trabalhista em Jales | Dr. Celso Menocci Junior" },
      {
        name: "twitter:description",
        content: "Escritório especializado em Direito do Trabalho em Jales/SP. Atuação estratégica para trabalhadores e empresas, com atendimento personalizado e transparente.",
      },
    ],
    links: [{ rel: "canonical", href: absUrl("/") }],
  }),
  component: Home,
});

const areas = [
  { icon: Scale, titulo: "Reclamações Trabalhistas", texto: "Condução completa da ação, da análise inicial à execução." },
  { icon: FileText, titulo: "Rescisão de Contrato", texto: "Conferência de verbas e correção de valores pagos a menor." },
  { icon: Clock3, titulo: "Horas Extras", texto: "Apuração de jornada, adicionais e reflexos devidos." },
  { icon: ShieldAlert, titulo: "Assédio Moral", texto: "Proteção da dignidade e reparação por danos sofridos." },
  { icon: HeartPulse, titulo: "Acidente de Trabalho", texto: "Estabilidade, indenizações e responsabilidade da empresa." },
  { icon: Wallet, titulo: "Verbas Rescisórias", texto: "Cálculo e cobrança de tudo o que ficou em aberto." },
  { icon: Building2, titulo: "Defesa de Empresas", texto: "Estratégia processual e redução de passivo trabalhista." },
  { icon: BookOpenCheck, titulo: "Consultoria Preventiva", texto: "Contratos, jornada e rotinas em conformidade com a lei." },
];

const diferenciais = [
  "Especialização em Direito do Trabalho",
  "Atendimento Personalizado",
  "Transparência",
  "Comunicação Clara",
  "Estratégia Individualizada",
  "Atualização Jurídica Constante",
];

const etapas = [
  { n: "01", titulo: "Contato", texto: "Você relata o caso pelo WhatsApp ou em consulta agendada." },
  { n: "02", titulo: "Análise do Caso", texto: "Documentos e provas são estudados com atenção aos detalhes." },
  { n: "03", titulo: "Estratégia Jurídica", texto: "Definimos o melhor caminho: acordo, ação ou solução preventiva." },
  { n: "04", titulo: "Acompanhamento", texto: "Você recebe atualizações claras em cada fase do processo." },
];

const depoimentos = [
  { nome: "Ana Paula R.", texto: "Atendimento atencioso do início ao fim. Explicou cada etapa com clareza e resolveu meu caso." },
  { nome: "Marcos T.", texto: "Profissional extremamente competente. Recuperei verbas que eu nem sabia que tinha direito." },
  { nome: "Fernanda L.", texto: "Seriedade e transparência. Recomendo para quem precisa de orientação trabalhista." },
];

function Home() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">Advocacia Trabalhista — {site.city}</p>
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
              alt="Escritório de advocacia com ambiente sóbrio e acolhedor"
              width={1448}
              height={1086}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="relative w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section border-b border-border">
        <div className="container-page grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Sobre o escritório</p>
            <h2 className="mt-5 text-3xl md:text-4xl">Direito do Trabalho com técnica e proximidade</h2>
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
              <div key={a.titulo} className="bg-background p-8 transition-colors hover:bg-accent/40">
                <a.icon className="size-6 text-gold" strokeWidth={1.25} />
                <h3 className="mt-6 text-lg">{a.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b border-border">
        <div className="container-page grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">Diferenciais</p>
            <h2 className="mt-5 text-3xl md:text-4xl">Por que confiar o seu caso ao escritório</h2>
            <span className="rule-gold mt-8" />
          </div>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {diferenciais.map((d) => (
              <li key={d} className="border-l border-gold pl-5 text-sm leading-relaxed">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-b border-border bg-secondary/50">
        <div className="container-page">
          <p className="eyebrow">Como funciona</p>
          <h2 className="mt-5 text-3xl md:text-4xl">Um processo claro do começo ao fim</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {etapas.map((e) => (
              <div key={e.n} className="border-t border-border pt-6">
                <span className="font-[family-name:var(--font-display)] text-3xl text-gold">{e.n}</span>
                <h3 className="mt-4 text-lg">{e.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b border-border">
        <div className="container-page">
          <p className="eyebrow">Depoimentos</p>
          <h2 className="mt-5 text-3xl md:text-4xl">Avaliações de clientes no Google</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {depoimentos.map((d) => (
              <figure key={d.nome} className="border border-border p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-6 text-sm">{d.nome}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Depoimentos ilustrativos — conecte o perfil do Google Empresas para exibir as avaliações
            reais automaticamente.
          </p>
        </div>
      </section>

      <section className="section bg-primary text-primary-foreground">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl">Precisa de orientação jurídica?</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-80">
            Explique sua situação e receba uma análise inicial do seu caso com clareza e sem
            compromisso.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
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
