import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@tanstack/react-router", () => ({
  Link: ({
    to,
    children,
    onClick,
    className,
    activeProps: _activeProps,
    inactiveProps: _inactiveProps,
    activeOptions: _activeOptions,
    ...rest
  }: {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    activeProps?: unknown;
    inactiveProps?: unknown;
    activeOptions?: unknown;
  }) => (
    <a
      href={to}
      onClick={(event) => {
        event.preventDefault();
        onClick?.();
      }}
      className={className}
      {...rest}
    >
      {children}
    </a>
  ),
}));

import { Header } from "@/components/site/Header";

describe("Header — retorno ao topo", () => {
  let scrollTo: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    scrollTo = vi.fn();
    Object.defineProperty(window, "scrollTo", { value: scrollTo, writable: true });
  });

  const expectScrollToTop = () => {
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  };

  it("rola ao topo ao clicar na marca (monograma + nome + OAB)", () => {
    render(<Header />);
    const brand = screen
      .getByAltText("Monograma CM — Celso Menocci Junior")
      .closest("a") as HTMLAnchorElement;

    fireEvent.click(brand);

    expectScrollToTop();
  });

  it.each(["Escritório", "Advogado", "Publicações"])(
    "rola ao topo ao clicar no link de navegação desktop: %s",
    (label) => {
      render(<Header />);

      fireEvent.click(screen.getByRole("link", { name: label }));

      expectScrollToTop();
    },
  );

  it.each(["Escritório", "Advogado", "Publicações"])(
    "rola ao topo ao clicar no link do menu mobile: %s",
    (label) => {
      render(<Header />);

      fireEvent.click(screen.getByRole("button", { name: "Abrir menu" }));
      fireEvent.click(screen.getAllByRole("link", { name: label }).at(-1)!);

      expectScrollToTop();
    },
  );
});
