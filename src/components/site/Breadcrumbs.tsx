import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      {items.map((item, i) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          {i > 0 && <ChevronRight className="size-3" strokeWidth={1.5} />}
          {item.to ? (
            <Link to={item.to as "/"} className="hover:text-foreground">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
