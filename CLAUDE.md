@AGENTS.md

# Bayou Builders

Marketing site for a fictional New Orleans general contractor. Static content, no backend — the quote form and lead tracking fire GTM/GA4 events only.

## Stack

- **Next.js 16** (App Router) — see the warning imported above: read `node_modules/next/dist/docs/` before writing Next.js code; this version differs from training data.
- **TypeScript**, strict. Path alias `@/*` maps to the repo root.
- **Tailwind CSS v4** — no `tailwind.config.*`. Design tokens are defined in the `@theme` block in `app/globals.css` and used as normal utilities (e.g. `text-brand`, `bg-charcoal`).
- **React 19**, `@next/third-parties` for Google Tag Manager (loaded in `app/layout.tsx`).

Scripts: `npm run dev`, `npm run build`, `npm run lint`.

## File structure

```
app/
  layout.tsx              Root layout: Inter font, GTM, Header/Footer/BackToTop, metadata
  globals.css             Tailwind import + @theme tokens + global keyframes
  page.tsx                Home
  about/page.tsx
  contact/page.tsx        Quote form page
  projects/page.tsx
  services/page.tsx       Services index
  services/[slug]/page.tsx  Per-service detail (slug from lib/data.ts services)
components/               Shared components (one per file, PascalCase)
lib/data.ts               ALL site content — see rule below
```

## Hard rule: content lives in `lib/data.ts`

Every piece of site content — services, company info, stats, testimonials, team, gallery, projects, process steps, values, audiences — is exported from `lib/data.ts` with typed shapes (`Service`, `Project`, etc.). Components and pages **never hardcode content**: no inline copy, names, phone numbers, image URLs, or FAQ text in JSX. To change or add content, edit `lib/data.ts`; to render new content, add a typed export there and map over it in the component.

## Design system

Brand tokens (from `@theme` in `app/globals.css`):

| Token | Value | Use |
|---|---|---|
| `charcoal` / `charcoal-deep` | `#1a1a17` / `#141412` | Dark section backgrounds, text on light |
| `cream` | `#faf9f5` | Light backgrounds, text on dark |
| `brand` / `brand-dark` | `#ef9f27` / `#ba7517` | Amber accent; `brand-dark` on light backgrounds for contrast |
| `brand-text` | `#412402` | Text on amber backgrounds |

Conventions:

- **Section pattern**: each section opens with an eyebrow label — `<p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">` (use `text-brand-dark` on light backgrounds) — followed by the section heading. Follow this for any new section.
- **Server components by default.** `"use client"` only for interactive islands (sliders, tabs, forms, scroll/count-up effects — e.g. `Gallery`, `QuoteForm`, `TestimonialSlider`). Pages stay server-rendered and compose the client islands.
- Sections alternate `bg-charcoal`/`bg-charcoal-deep` and `bg-cream` backgrounds. Amber is never a section background — it's reserved for accents and CTA buttons (`bg-brand text-brand-text`, hover `bg-brand-dark text-white`).
