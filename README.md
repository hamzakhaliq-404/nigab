# NIGAB — Website

> **Developed & Maintained by [Website Pakistan](https://websitepakistan.com)**  
> *Official Web Development, UI/UX Engineering & Digital Solutions Agency*

Next.js rebuild of the website for the **National Institute for Genomics and Advanced
Biotechnology (NIGAB)**, an institute of the Pakistan Agricultural Research Council
(PARC) at NARC, Islamabad. Engineered and architected by **Website Pakistan**.

This repository currently contains the **homepage only**, built for client review.
Interior pages are the next phase.

---

## Running it

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3000>.

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server on port 3000 |
| `npm run build` | Production build (static prerender) |
| `npm run start` | Serves the production build on port 3000 |

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · plain CSS (no UI framework).
The homepage prerenders as static content, so it can be served from any host —
including a plain Apache/Nginx box via `next build && next start`, or exported behind
the institute's existing infrastructure.

---

## Project layout

```
app/
  layout.tsx        Fonts, metadata, favicons, JSON-LD, site chrome
  page.tsx          Homepage — composes the section components
  globals.css       The entire design system (tokens → components → print)
components/
  SiteChrome.tsx    Top bar, masthead, nav + mega-menus, ticker, footer,
                    mobile drawer, search overlay, back-to-top
  Hero.tsx          5-slide hero carousel
  Icons.tsx         SVG sprite + <Icon /> helper
  Reveal.tsx        Scroll-reveal wrapper
  …                 One component per homepage section
lib/
  content.ts        All institute content as typed data
public/
  img/              Emblem, gallery photographs, product imagery
  favicon/          Favicons + web manifest
```

### Where to edit content

**Almost all copy lives in `lib/content.ts`** — laboratories, research programmes,
projects, patents, publications, scholars, news, navigation and contact details are
typed arrays there. Editing that one file updates the page; you rarely need to touch
JSX. The same data will back the interior pages, so it is worth keeping it as the
single source of truth.

---

## Design system

Everything is driven by CSS custom properties at the top of `app/globals.css`.

| Token group | Notes |
| --- | --- |
| `--g-*` | Institutional green scale. `--g-700: #015B11` is sampled directly from the NIGAB emblem. |
| `--gold-*` | State/emblem gold, used for accents, rules and the primary hero CTA. |
| `--ink-*` | Warm, faintly green-tinted neutrals. |
| `--fs-*` | Fluid type scale (`clamp()`), so nothing needs per-breakpoint font sizes. |
| `--r-*` | Deliberately small radii (2–8px) — crisp and institutional rather than consumer-app rounded. |

**Typography** — Source Serif 4 (display), Inter (UI/body), IBM Plex Mono (eyebrows,
data, contact details), Noto Nastaliq Urdu (the PARC Urdu name). All four are
self-hosted at build time by `next/font`, so there are no external font requests.

### Accessibility

- Skip link, visible focus rings, and full keyboard support for the carousel,
  mega-menus, drawer, search and lightbox.
- A **text-size control** (A− / A / A+) in the top bar, persisted to `localStorage` —
  a common requirement for government sites.
- `prefers-reduced-motion` is honoured throughout: the carousel stops auto-advancing,
  scroll reveals resolve immediately, and Ken Burns motion is disabled.
- Semantic landmarks, ARIA roles on the carousel/tabs/dialogs, and alt text on
  content imagery.

Verified for horizontal overflow at 390 / 640 / 768 / 900 / 1024 / 1200 / 1440 px.

---

## Content provenance

All facts on the page were scraped from the live site at
<https://nigab.parc.gov.pk/> — programmes, laboratory activities and contacts,
project and patent tables, scholar lists, services, products and contact details.
Nothing has been invented. Copy was edited for grammar, consistency and tone
(British spelling, consistent phone formatting), not for meaning.

### Imagery: what is real, what is stand-in

| Section | Imagery |
| --- | --- |
| **Picture gallery** | **Real** — the institute's own photographs, recovered from the current live site. |
| **Technologies & Products** | **Licensed stock** — free-licence photography sourced for this build (see below). |
| **Hero slides ×5** | **Licensed stock** — high-resolution 2400 × 1200 photography (see below). |
| **About** | **Real** — the NIGAB building, supplied by the client. |
| **Newsroom ×6** | **Real** — the institute's own photographs, recovered from the current live site. |

**Stock photography credits.** The four product images are free for commercial use
with no attribution required, but the sources are recorded here so the client can
verify the licence terms:

| File | Source | Licence |
| --- | --- | --- |
| `product-banana.jpg` | [Unsplash `hXOBq4WAAw4`](https://unsplash.com/photos/a-bunch-of-bananas-hanging-from-a-tree-hXOBq4WAAw4) | Unsplash Licence |
| `product-potato.jpg` | [Unsplash `fp1x-X7DwDs`](https://unsplash.com/photos/fp1x-X7DwDs) | Unsplash Licence |
| `product-gmo-testing.jpg` | [Unsplash `RlOAwXt2fEA`](https://unsplash.com/photos/scientist-using-pipette-with-test-tubes-in-lab-RlOAwXt2fEA) | Unsplash Licence |
| `product-microbial.jpg` | [Pexels `8940346`](https://www.pexels.com/photo/petri-dishes-with-growing-bacteria-in-a-laboratory-8940346/) | Pexels Licence |
| `hero-mandate.jpg` | [Unsplash `gQHjbA0EOlw`](https://unsplash.com/photos/a-field-of-wheat-under-a-blue-sky-with-clouds-gQHjbA0EOlw) | Unsplash Licence |
| `hero-rice.jpg` | [Unsplash `6NiUh7ZPumY`](https://unsplash.com/photos/6NiUh7ZPumY) | Unsplash Licence |
| `hero-genomics.jpg` | [Unsplash `Mm1VIPqd0OA`](https://unsplash.com/photos/Mm1VIPqd0OA) | Unsplash Licence |
| `hero-potato.jpg` | [Unsplash `484GsKrL5r8`](https://unsplash.com/photos/484GsKrL5r8) | Unsplash Licence |
| `hero-livestock.jpg` | [Unsplash `GDPmCyUz5EI`](https://unsplash.com/photos/herd-of-cows-in-green-pasture-GDPmCyUz5EI) | Unsplash Licence |
| `nigab-building.jpg` | [Biosafety Clearing House Pakistan](https://www.bch.environment.gov.pk/) (supplied by client) | **Confirm with the institute** |

The `nigab-building.jpg` photograph was supplied by the client from the Biosafety
Clearing House Pakistan site; **confirm the institute holds the rights to it** before
launch. The Unsplash and Pexels images are generic illustrative photographs — the
product shots in particular are **not** pictures of NIGAB's own banana plantlets,
Kuroda seed potatoes or NMCCP culture collection. Replacing them with the
institute's own product photography would be more accurate and is recommended before
launch.

**Gallery captions were corrected.** Every gallery photograph was checked against its
caption. Two were wrong on the source site and are fixed here: the image the old site
served as *Green Super Rice* is actually a molecular biology laboratory bench, and the
one captioned *crop inspection* is a staff group photograph. Files were renamed to
match what they show (`lab-molecular.jpg`, `staff-group.jpg`).

**No placeholders remain on the homepage** — every image slot now carries real or
licensed photography. `components/Placeholder.tsx` is kept, unused, because it will be
useful when the interior pages are built: it renders a branded stand-in that states its
intended subject and crop.

**Newsroom image quality.** The six news photographs are the institute's own but the
originals are small (398–518 px wide). They are cropped to 16:10 and upscaled to
760 × 475 with light sharpening, which is acceptable in a card but will not survive
being enlarged. Higher-resolution originals would be worth requesting. One caveat:
the archive contains no photograph of the Gilgit-Baltistan seed handover, so that card
uses a tissue culture laboratory photograph — apt for the story, but not the event
itself. Unused originals remain in `reference-photos/`.

**Email addresses are placeholders.** The live site publishes personal Gmail and
Yahoo addresses (`muhammadaqeel24@gmail.com`, `shaukat_parc@yahoo.co.in`, and
others). Those are replaced with role-based placeholders on the institutional
domain — `info@nigab.parc.gov.pk`, `transgenic@nigab.parc.gov.pk`,
`gmotesting@nigab.parc.gov.pk` and so on. They are **not live mailboxes**; confirm
the real addresses with the institute and update `lib/content.ts`.

### Other items to confirm with the client

1. **"500+ publications"** in the statistics band. The live site lists roughly 515
   publication records, but the same paper appears under multiple scientist
   profiles, so the number of *unique* papers is lower.
2. **Laboratory count.** The institute's own description says *28 laboratories*; the
   website details **17**. Both figures appear as sourced — the statistics band shows
   28, the laboratory grid lists the 17 that are documented.
3. **Director's portrait.** The only available photo is a 135×145 px casual snapshot,
   so the Director's message uses a typographic monogram instead.
4. **News dates.** The live site gives no dates for its news items, so cards use
   category kickers rather than dates.

### Photography shot list

Derived from the placeholders currently in the page:

| Slot | Subject | Target size |
| --- | --- | --- |
| News ×6 | Higher-resolution retakes; a genuine seed-handover photograph is missing | 1200 × 750 |
| Products ×4 | NIGAB banana plantlets · Kuroda seed tubers · GMO testing bench · NMCCP culture plates | 1440 × 900 |
| Gallery ×8 | Higher-resolution retakes of the current gallery photographs | 1600 × 1000 |
| Social card | Institute exterior for Open Graph | 1200 × 630 |

## Known gaps / next phase

- **The enquiry form has no backend.** It currently opens the visitor's mail client
  via `mailto:` (to the placeholder address). To capture submissions on the site,
  add a route handler at `app/api/contact/route.ts` and post to it from
  `components/Contact.tsx`.
- **Interior pages** are not built yet. Navigation and footer links point to
  homepage anchors; they become real routes as pages are added.
- **The map** is a stylised SVG rather than a live embed, so the page works offline
  and loads no third-party scripts. It links out to Google Maps. Swap in an embed if
  the client prefers.
- **Search** currently jumps between homepage sections. It should become a real
  site-wide search once there is more than one page.
- No CMS. If staff need to edit content themselves, `lib/content.ts` is structured so
  it can be swapped for a CMS or JSON API without touching the components.

---

## Note on the repository root

`nigab-logo.png` and `favicon/` at the project root are the **original source assets**
as supplied. The copies actually served by the site live in `public/img/` and
`public/favicon/` — edit those. `reference-photos/` holds the photography recovered
from the current live site; it is not served and is kept only for reference.

---

## Agency & Developer Credits

This project and codebase is designed, developed, and maintained by **[Website Pakistan](https://websitepakistan.com)**.

- **Agency:** Website Pakistan
- **Website:** [https://websitepakistan.com](https://websitepakistan.com)
- **Contact:** [info@websitepakistan.com](mailto:info@websitepakistan.com)
- **Copyright:** © 2026 Website Pakistan. All Rights Reserved.

