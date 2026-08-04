import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight, Clock3 } from "lucide-react";
import { artigos, categorias } from "@/data/artigos";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/publicacoes/")({
  head: () => ({
    meta: [
      { title: "Publicações Jurídicas | Dr. Celso Menocci Junior" },
      {
        name: "description",
        content:
          "Artigos sobre Direito do Trabalho escritos pelo Dr. Celso Menocci Junior: horas extras, rescisão, verbas, assédio moral e acidentes de trabalho.",
      },
      { property: "og:title", content: "Publicações Jurídicas | Dr. Celso Menocci Junior" },
      {
        property: "og:description",
        content: "Conteúdos sobre Direito do Trabalho para trabalhadores e empresas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/publicacoes" },
      { name: "twitter:title", content: "Publicações Jurídicas | Dr. Celso Menocci Junior" },
      {
        name: "twitter:description",
        content: "Conteúdos sobre Direito do Trabalho para trabalhadores e empresas.",
      },
    ],
    links: [{ rel: "canonical", href: "/publicacoes" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Escritório", item: "/" },
            { "@type": "ListItem", position: 2, name: "Publicações", item: "/publicacoes" },
          ],
        }),
      },
    ],
  }),
  component: Publicacoes,
});

function Publicacoes() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const lista = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return artigos.filter((a) => {
      const okCat = categoria === "Todos" || a.categoria === categoria;
      const okBusca =
        !termo ||
        a.titulo.toLowerCase().includes(termo) ||
        a.resumo.toLowerCase().includes(termo) ||
        a.categoria.toLowerCase().includes(termo);
      return okCat && okBusca;
    });
  }, [busca, categoria]);

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-24">
          <Breadcrumbs items={[{ label: "Escritório", to: "/" }, { label: "Publicações" }]} />
          <p className="eyebrow mt-6">Conteúdo jurídico</p>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl">Publicações Jurídicas</h1>
          <span className="rule-gold mt-8" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Conteúdos produzidos pelo Dr. Celso Menocci Junior sobre Direito do Trabalho, escritos em
            linguagem acessível para quem precisa entender seus direitos e deveres.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/50">
        <div className="container-page py-10">
          <label className="relative block max-w-xl">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por assunto, título ou categoria"
              aria-label="Buscar publicações"
              className="w-full border border-border bg-background py-4 pl-11 pr-4 text-sm outline-none focus:border-gold"
            />
          </label>
          <div className="mt-6 flex flex-wrap gap-2">
            {categorias.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategoria(c)}
                className={`border px-4 py-2 text-xs transition-colors ${
                  categoria === c
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-gold hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          {lista.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Nenhuma publicação encontrada para esses filtros.
            </p>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {lista.map((a) => (
                <article key={a.slug} className="group flex flex-col border border-border">
                  <img
                    src={a.imagem}
                    alt={a.titulo}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="text-gold">{a.categoria}</span>
                      <span>·</span>
                      <time dateTime={a.data}>{a.dataLabel}</time>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="size-3" strokeWidth={1.5} /> {a.leitura} min
                      </span>
                    </div>
                    <h2 className="mt-4 text-xl leading-snug">{a.titulo}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.resumo}</p>
                    <Link
                      to="/publicacoes/$slug"
                      params={{ slug: a.slug }}
                      className="mt-6 inline-flex items-center gap-2 text-sm text-gold"
                    >
                      Ler artigo
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
