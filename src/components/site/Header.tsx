import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink, site } from "@/lib/site";

const nav = [
  { to: "/", label: "Escritório" },
  { to: "/advogado", label: "Advogado" },
  { to: "/publicacoes", label: "Publicações" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-[family-name:var(--font-display)] text-base tracking-wide md:text-lg">
            {site.lawyer.replace("Dr. ", "")}
          </span>
          <span className="eyebrow mt-1 text-[0.6rem]">Advocacia Trabalhista</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            <MessageCircle className="size-4" strokeWidth={1.5} />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 border border-gold px-5 py-3 text-sm text-gold"
            >
              <MessageCircle className="size-4" strokeWidth={1.5} />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
