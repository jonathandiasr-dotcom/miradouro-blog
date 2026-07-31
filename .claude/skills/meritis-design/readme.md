# Meritis Design System

The design system of **Meritis** — a French IT consulting group (cabinet de conseil en transformation des Systèmes d'Information et Organisations), founded in 2007, +900 consultants, 98 M€ revenue in 2025, offices in France, Portugal, Belgium and the UK. B Corp™ certified, repeatedly Great Place To Work®.

Everything here is derived from the official **Charte graphique Meritis 2025** and the live corporate site. Nothing is invented: colours, type, the onde motif and the logo lockups are lifted from those two sources.

## Sources used

| Source | Reference |
| --- | --- |
| Charte graphique 2025 (22 pages, PDF) | https://infos.meritis.fr/hubfs/Charte%20graphique%20et%20templates/CharteGraphique_Meritis_2025.pdf |
| Corporate site (structure, copy, figures) | https://meritis.fr/ and https://meritis.fr/activite-meritis/ |
| Logos (4 variants × 2 lockups) | user upload → `assets/logos/` |
| Onde graphic assets (10 PNG) | user upload → `assets/waves/` |
| Aptos font family (28 TTF) | user upload → `assets/fonts/` (Microsoft Aptos EULA applies) |
| Pictogram bank named by the charte (not redistributable) | The Noun Project — Made x Made: thenounproject.com/elki, thenounproject.com/christian933 |

No codebase or Figma file was provided; the UI kit is reconstructed from the charte's website mockups and the live site's DOM/content.

## Products / surfaces represented

1. **meritis.fr** — corporate marketing site: hero, key-figure band, client logo wall, expertise grid, three-entity block (Meritis · Navigacom · Neofin Advisory), accordion "notre vision", news & jobs, footer.
2. **Generic slide deck** ("Book des offres") — 16:9 deck: cover, sommaire, section divider, offers grid, org chart, contact.
3. **Emails** — external newsletter and internal announcements (same tokens, table-based layout).

## Brand positioning

"Premium" consulting: gold + navy + grey, sober geometry, black-and-white photography with a warm filter. Tagline: *Meritis, le talent d'aller plus loin.* Four founding values: **exigence, humilité, bienveillance, proximité**.

---

## CONTENT FUNDAMENTALS

- **Language**: French, France-French, always with correct typographic apostrophes (') and non-breaking space before `:`, `?`, `!`, `%`.
- **Voice**: first person plural — *nous accompagnons*, *nos +900 experts*. The reader is addressed as **vous** (never *tu*) in client-facing copy; internal emails switch to **tu** (*"Tu reçois cet e-mail car tu es l'un de nos collaborateurs"*).
- **Register**: affirmative, factual, short. Claims are quantified: *"+900 experts"*, *"NPS 63"*, *"75 % des sociétés du CAC 40 sont nos clients"*, *"Nos équipes reviennent vers vous sous 24h"*.
- **Anti-hype**: the brand sells proof, not adjectives. *"Valeur livrée, pas promesse."* *"Zéro approche générique."* *"Pas de junior placé pour occuper un poste."* Negative-space claims like these are a signature move.
- **Titles**: uppercase, ≤ 2 lines, no full stop — `CONSEIL, PILOTAGE & DÉVELOPPEMENT IT`, `NOS OFFRES D'ACCOMPAGNEMENT`. Section headings in sentence case with a full stop when they read as a sentence: *"Des experts qui vous conseillent. Une organisation qui délivre."*
- **Subtitles** (doré) are noun phrases without punctuation: *Les 6 offres principales*, *Cloud & DevOps*.
- **Numbers**: French formatting — `98 M€`, `34,6 pt`, `75 %` (space before %). Job titles and surnames in caps: *Sébastien VIDEMENT*.
- **CTA wording**: `Parlons de votre projet`, `Nous contacter`, `Nous rejoindre`, `En savoir plus`, `Voir nos offres`, `Télécharger`, `Envoyer`, `Lire les conditions`. Verb-first, no exclamation marks except internal comms.
- **Emoji**: never in client-facing material. Blog/LinkedIn copy occasionally uses a single arrow glyph (➡) — treat that as the ceiling.
- **Bullets**: onde-glyph bullets for section names and headline lists; plain • for running text.

## VISUAL FOUNDATIONS

- **Colour**: bleu marine `#005B6A` is the brand; doré `#E0B55F` is the single accent; beige `#FBF9F2` is the default page ground (not white); gris clair `#F3F3F3` for alternating bands; gris foncé `#3B3B3B` for low-contrast body text. Secondary palette (`#0B3941`, `#B6934C`, `#D9D9D9`, `#9DCDF0`, `#6CA2AA`) exists for charts and slide nuance only. Two grounds maximum per document.
- **Ground pairings** (charte p.10): on beige — navy titles + doré subtitles; on navy — beige titles + doré subtitles (or the reverse); on doré — beige titles + navy subtitles (or the reverse). Doré text never sits on beige at body size.
- **Type**: Aptos only. Hierarchy = weight + case, never a second family. Black uppercase for main titles, Black sentence case for secondary titles, Bold doré for subtitles, Regular for body. Ratio X · 2/3X · 2/3X · X/2 (52 / 34,6 / 34,6 / 26 pt at 1920×1080).
- **Layout**: ragged-left, never justified; ≤ 70 characters per line; centring only for ≤ 3 very short lines; a title always keeps a clear band equal to its own size (X) above and below. 1240px content container, 96px section rhythm, 96px slide margin.
- **Backgrounds**: flat colour fields, no gradients, no textures, no patterns. Depth comes from full-bleed colour blocks and from the onde cropped off an edge. Photography can sit full-bleed behind a navy block.
- **The onde**: the sole decorative motif — a quarter disc (`Onde_Pleine`) or concentric quarter arcs (`Onde_Arcs`). Principal-palette colours only, 90° rotations only, never recoloured mid-shape, never re-weighted, never two colours in one onde. One permitted superposition: white at 10 % opacity over bleu marine.
- **Corner radii**: buttons and fields 4px; cards 16px; large asset-kit panels 24px; pictogram cartouches fully round; the onde is a 100 % single-corner radius. No mixed radii inside one component.
- **Cards**: flat, no border at rest (or a 1px `#D9D9D9` hairline for the outline variant), 32px padding, 16px radius, white or beige on a beige page. **No shadow at rest, no coloured left border.** Clickable cards lift 1px with `--shadow-md` on hover.
- **Shadows**: reserved for floating UI (sticky header, dropdown, modal): `0 6px 20px rgb(11 57 65 / .08)` and `0 18px 48px rgb(11 57 65 / .14)`. Shadows are navy-tinted, never neutral black.
- **Transparency & blur**: essentially unused. The two exceptions are the white-10 % onde overlay and a navy 90 % sticky-header ground. No frosted glass, no protection gradients — text over photography sits inside a solid navy block instead of a scrim.
- **Borders**: 1px hairlines in `#D9D9D9` on light, `rgb(255 255 255 / .16)` on dark. 2px only for the outline CTA at large sizes.
- **Animation**: sober. 160–240 ms, `cubic-bezier(.4,0,.2,1)`, fade + ≤ 8px translate on scroll reveal. No bounce, no spring, no parallax, no looping motion. `prefers-reduced-motion` zeroes every duration.
- **Hover**: solid CTAs deepen to `#0B3941` / `#B6934C`; outline CTAs fill; links swap navy ⇄ doré foncé; cards lift 1px. **Press**: `scale(.985)`, no colour change. **Focus**: 2px doré outline, 2px offset.
- **Iconography colour**: line pictograms in doré or navy on light grounds; gris clair or beige on dark grounds. Round cartouches only.
- **Imagery**: contrasted black & white with a warm filter (`grayscale(1) contrast(1.12) sepia(.16)`) — business, people, excellence, service. Colour photography is allowed sparingly and must stay desaturated; saturated, flashy or non-corporate imagery is off-brand.

## ICONOGRAPHY

- The charte specifies **line-drawing pictograms** ("dessin au trait") sourced from The Noun Project collections *Made x Made* (thenounproject.com/elki, thenounproject.com/christian933). Those files are licensed per-download and were **not** provided, so they are not in this repo.
- **Substitution (flagged)**: `components/core/Icon.jsx` masks **Lucide** icons from the `lucide-static` CDN — the closest freely available single-weight line set. Stroke weight is Lucide's 2px versus the charte's thinner ~1.5px drawing, and the brand's pictograms are more illustrative (buildings, bank, data platform) than Lucide's UI-first set. **Please supply the Noun Project SVGs** and they will replace Lucide one-for-one.
- No icon font, no sprite sheet, no PNG icon set was provided. The live site serves individual PNG pictograms tinted `#005B6A` (e.g. `noun-recruitment-…-005b6a.png`) — same family, exported per use.
- Emoji are never used as icons. Unicode glyphs are limited to `•`, `·`, `➡`, `«  »` and the large `"` used as a quote mark.
- The **onde** doubles as a bullet glyph (see `WaveBullet`) — that is the brand's most recognisable "icon".

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link — `@import`s only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `base.css` |
| `assets/logos/` | 7 logo files — principal / secondaire × colour, white, black + square |
| `assets/waves/` | 10 onde PNGs — arcs & pleine × bleue, dorée, beige, claire, grise |
| `assets/fonts/` | 16 Aptos TTFs wired into `tokens/fonts.css` |
| `components/core/` | Icon, Button, IconButton, TextLink, Wave, Logo |
| `components/content/` | Card, StatBlock, ExpertiseCard, WaveBullet, Quote, Badge, PhotoFrame, Accordion, SectionHeader |
| `components/forms/` | Field, Select, Checkbox |
| `guidelines/` | 20 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills front-matter for use in Claude Code |

### Components

Core: **Icon**, **Button**, **IconButton**, **TextLink**, **Wave**, **Logo**.
Content: **Card**, **StatBlock**, **ExpertiseCard**, **WaveBullet**, **Quote**, **Badge**, **PhotoFrame**, **Accordion**, **SectionHeader**.
Forms: **Field**, **Select**, **Checkbox**.

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage example).

### Intentional additions

The charte is a brand book, not a component library, so the inventory above maps its "Kit des assets graphiques" (buttons, CTAs, onde bullets, charts, pictograms) plus the patterns visible on meritis.fr (cards, key figures, accordion, badges, forms, footer). Two wrappers have no direct counterpart in the sources and exist for practical reasons:

- **Icon** — a wrapper so pictograms inherit the correct brand colour; needed because the real pictogram set is unavailable.
- **PhotoFrame** — encodes the charte's photography treatment (B&W + warm filter, rectangle / onde / circle masks) as one reusable element.

### Not yet built

- `ui_kits/website/` — the meritis.fr recreation (hero, figures, expertises, entities, accordion, news, jobs, footer).
- `templates/generic-deck/` — the 16:9 "Book des offres" slide template (cover, sommaire, divider, offers grid, org chart, contact).
- `templates/newsletter/` — the external newsletter email.
