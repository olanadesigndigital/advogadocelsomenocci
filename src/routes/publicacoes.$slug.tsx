import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock3, MessageCircle } from "lucide-react";
import { artigos, getArtigo, type Artigo } from "@/data/artigos";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/publicacoes/$slug")({
  loader: ({ params }) => {
    const artigo = getArtigo(params.slug);
    if (!artigo) throw notFound();
    return { artigo };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Publicação indisponível" }, { name: "robots", content: "noindex" }] };
    }
    const { artigo } = loaderData;
    const url = `/publicacoes/${params.slug}`;
    return {
      meta: [
        { title: `${artigo.titulo} | ${site.lawyer}` },
        { name: "description", content: artigo.resumo },
        { property: "og:title", content: artigo.titulo },
        { property: "og:description", content: artigo.resumo },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: artigo.data },
        { name: "twitter:title", content: artigo.titulo },
        { name: "twitter:description", content: artigo.resumo },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: artigo.titulo,
            description: artigo.resumo,
            datePublished: artigo.data,
            dateModified: artigo.data,
            articleSection: artigo.categoria,
            inLanguage: "pt-BR",
            author: { "@type": "Person", name: site.lawyer },
            publisher: { "@type": "Organization", name: site.office },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Escritório", item: "/" },
              { "@type": "ListItem", position: 2, name: "Publicações", item: "/publicacoes" },
              { "@type": "ListItem", position: 3, name: artigo.titulo, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ArtigoPage,
});

function ArtigoPage() {
  const { artigo } = Route.useLoaderData() as { artigo: Artigo };
  const relacionados = artigos.filter((a) => a.slug !== artigo.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="border-b border-border">
          <div className="container-page py-14 md:py-20">
            <Breadcrumbs
              items={[
                { label: "Escritório", to: "/" },
                { label: "Publicações", to: "/publicacoes" },
                { label: artigo.categoria },
              ]}
            />
            <p className="eyebrow mt-6">{artigo.categoria}</p>
            <h1 className="mt-5 max-w-3xl text-3xl leading-tight md:text-5xl">{artigo.titulo}</h1>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span>Por {site.lawyer}</span>
              <span>·</span>
              <time dateTime={artigo.data}>{artigo.dataLabel}</time>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="size-3" strokeWidth={1.5} /> {artigo.leitura} min de leitura
              </span>
            </div>
          </div>
        </header>

        <div className="container-page py-12">
          <img
            src={artigo.imagem}
            alt={artigo.titulo}
            width={1200}
            height={800}
            className="w-full object-cover"
          />
        </div>

        <div className="container-page grid gap-14 pb-20 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Índice</p>
            <nav className="mt-5 flex flex-col gap-3 border-l border-border pl-5 text-sm text-muted-foreground">
              {artigo.secoes.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="hover:text-foreground">
                  {s.titulo}
                </a>
              ))}
            </nav>
          </aside>

          <div className="max-w-2xl">
            {artigo.secoes.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 pb-12">
                <h2 className="text-2xl md:text-3xl">{s.titulo}</h2>
                {s.paragrafos.map((p) => (
                  <p key={p} className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {s.citacao && (
                  <blockquote className="mt-8 border-l-2 border-gold pl-6 font-[family-name:var(--font-display)] text-lg leading-relaxed">
                    {s.citacao}
                  </blockquote>
                )}
              </section>
            ))}

            <div className="border border-border p-8">
              <h2 className="text-xl">Ficou com dúvidas sobre o seu caso?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Cada situação tem particularidades. Envie sua dúvida e receba uma orientação inicial.
              </p>
              <a
                href={whatsappLink(`Olá, Dr. Celso. Li o artigo "${artigo.titulo}" e gostaria de tirar uma dúvida.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="size-4" strokeWidth={1.5} /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="section border-t border-border bg-secondary/50">
        <div className="container-page">
          <p className="eyebrow">Continue lendo</p>
          <h2 className="mt-5 text-3xl">Artigos relacionados</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {relacionados.map((a) => (
              <Link
                key={a.slug}
                to="/publicacoes/$slug"
                params={{ slug: a.slug }}
                className="border border-border bg-background p-8 transition-colors hover:border-gold"
              >
                <span className="eyebrow">{a.categoria}</span>
                <h3 className="mt-4 text-xl leading-snug">{a.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.resumo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
