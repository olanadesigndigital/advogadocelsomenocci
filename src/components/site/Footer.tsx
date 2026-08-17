import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import logo from "@/assets/logo-cm.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <img src={logo} alt="Monograma CM — Celso Menocci Junior" className="h-12 w-auto" />
          <h3 className="mt-4 text-xl">{site.lawyer}</h3>
          <p className="mt-1 text-xs tracking-wide text-muted-foreground">{site.oab}</p>
          <span className="rule-gold mt-4" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Advocacia especializada em Direito do Trabalho, com atendimento a trabalhadores e
            empresas presencialmente em {site.city} e todo o Brasil de forma online.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
              <MessageCircle className="size-4 text-gold" strokeWidth={1.5} /> WhatsApp
            </a>
            <a href={`tel:+${site.whatsappNumber}`} className="inline-flex items-center gap-2 hover:text-foreground">
              <Phone className="size-4 text-gold" strokeWidth={1.5} /> {site.phoneDisplay}
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
              <Instagram className="size-4 text-gold" strokeWidth={1.5} /> Instagram
            </a>
            <span className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} /> {site.address}
            </span>
          </div>
        </div>

        <div>
          <p className="eyebrow">Navegação</p>
          <nav className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Escritório</Link>
            <Link to="/advogado" className="hover:text-foreground">Advogado</Link>
            <Link to="/publicacoes" className="hover:text-foreground">Publicações</Link>
          </nav>
        </div>

        <div>
          <p className="eyebrow">Localização</p>
          <div className="mt-5 overflow-hidden border border-border">
            <iframe
              title="Mapa do escritório"
              src={site.mapsEmbed}
              loading="lazy"
              className="h-52 w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.office}. Todos os direitos reservados.</p>
          <p>Conteúdo informativo, sem caráter de publicidade — conforme o Código de Ética da OAB.</p>
        </div>
      </div>
    </footer>
  );
}
