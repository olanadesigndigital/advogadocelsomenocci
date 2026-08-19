# Design: Tema Escuro com Alto Contraste

## Contexto

O site do escritório Menocci Junior Advocacia roda atualmente apenas em tema claro.
O CSS já contém um bloco `.dark` em `src/styles.css:89`, mas nenhum código o ativa.
Todos os componentes usam variáveis CSS (não há cores fixas hardcoded), o que torna a
migração centralizada e de baixo risco.

O cliente pediu: tema escuro com contraste adequado entre fundo e texto.

## Decisões de escopo

- Tema **somente escuro** (sem alternância claro/escuro).
- CTA (seção `bg-primary` no fim de cada página): **fundo claro com borda dourada**.
- Layout e conteúdo não mudam — apenas cores.

## Implementação

### 1. Ativação do tema escuro

Em `src/routes/__root.tsx` (RootShell, `<html>`): adicionar `class="dark"`.
Assim o bloco `.dark` do CSS passa a valer para o documento inteiro.

### 2. Refinamento da paleta escura em `src/styles.css` (bloco `.dark`)

Objetivo: contraste WCAG AA (≥4.5:1 texto normal, ≥7:1 desejável) sobre fundo carvão.

| Variável | Valor atual | Novo valor (proposto) |
|---|---|---|
| `--background` | `oklch(0.16 0 0)` | `oklch(0.17 0.008 60)` (carvão quente) |
| `--foreground` | `oklch(0.97 0 0)` | `oklch(0.97 0.003 60)` |
| `--muted-foreground` | `oklch(0.72 0.01 75)` | `oklch(0.78 0.015 75)` |
| `--gold` | `oklch(0.72 0.08 72)` | `oklch(0.78 0.09 72)` |
| `--card` | `oklch(0.2 0 0)` | `oklch(0.21 0.01 60)` |
| `--secondary` | `oklch(0.26 0 0)` | `oklch(0.24 0.01 60)` |
| `--secondary-foreground` | `oklch(0.97 0 0)` | `oklch(0.97 0.003 60)` |
| `--accent` | `oklch(0.3 0.02 80)` | `oklch(0.28 0.02 70)` |
| `--accent-foreground` | `oklch(0.97 0 0)` | `oklch(0.97 0.003 60)` |
| `--border` | `oklch(1 0 0 / 12%)` | manter |
| `--input` | `oklch(1 0 0 / 16%)` | manter |
| `--ring` | `oklch(0.72 0.08 72)` | `oklch(0.78 0.09 72)` |
| `--sidebar*` | — | acompanhar background/card |

### 3. CTA clara com borda dourada

As seções CTA de `src/routes/index.tsx` e `src/routes/advogado.tsx` usam hoje
`bg-primary text-primary-foreground`. Para garantir fundo claro independente do tema:

- Trocar para um wrapper com `border border-gold bg-card` (ou classe utilitária própria).
- Texto escuro sobre fundo claro: usar `text-foreground` (no tema escuro o foreground é claro —
  por isso a CTA precisa de cores explícitas claras, não das variáveis de tema).

Solução concreta: manter a seção com fundo claro fixo (ex.: `bg-white/95` no claro e no escuro,
ou uma variável nova `--cta-bg`/`--cta-fg`), borda dourada `border-gold`, texto escuro fixo
(`text-black`/`#1a1a1a`), botão `bg-gold text-black`.

O botão `bg-gold` dentro da CTA permanece dourado.

### 4. Sombra do WhatsApp float

`--shadow-soft` (clara) fica invisível sobre fundo escuro. Ajustar no `.dark` para uma sombra
mais perceptível ou usar borda/borda-glow sutil.

## Verificação

- `tsc --noEmit` passa.
- ESLint/Prettier nos arquivos alterados.
- Inspeção visual no preview (fundo escuro, textos legíveis, CTA clara com borda dourada).
