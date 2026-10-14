# The Valuation & Consultants — Search-first (heritage navy)

Navy, search-first layout inspired by Sotheby's International Realty: navy header, serif headline with a Buy / Rent / Sell request panel in the hero, a facts strip, and a photo-tile grid of property types.

One of several alternative design directions for the website of **The Valuation & Consultants Co., Ltd.**
(Thai-owned property valuation company, founded 1992). Next.js 14 (App Router) + TypeScript + Tailwind CSS. Thai / English.

## Run

```bat
npm install
npm run dev      :: http://localhost:3000
npm run build && npm start
```

> If the project folder path contains an `&` (for example `V&C web`), `npm run` breaks on Windows.
> Call node directly instead: `node node_modules/next/dist/bin/next dev` (or `build` / `start`),
> or use `start-dev.cmd` / `build.cmd` / `start.cmd`.

## Content

All copy lives in `src/lib/content.ts` (Thai + English) and comes from the live thevaluation.com site.
Nothing is invented: there are deliberately no client or project counts, testimonials, listings, news items or
opening hours, because the source site does not state them.

## Notes

- The Buy / Sell / Rent form is in-page and sends via `mailto:info@thevaluation.com` (there is no backend);
  the live site posted these forms to an external service.
- Motion is intentionally light (short fades, no parallax / tilt / blur) and respects `prefers-reduced-motion`.

## Images

Five of the eight "type of property" tiles (`public/images/real/gen-*.jpg`: factory, machinery, power plant, transport, heavy equipment) are **AI-generated illustrative images**, because the company's own photo library has no suitable photos for those categories. Replace them with real or licensed photos before public use (same file names will work).
