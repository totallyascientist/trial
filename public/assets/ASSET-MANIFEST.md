# T.A.S. asset manifest

All supplied photographs and artwork in this project were provided in the `assets website.zip` upload. Images were resized or converted to WebP for web performance where appropriate.

## Brand assets

- `cover.png` — homepage hero background, derived from `cover image.png`.
- `cover-fanzone.png` — Fan Zone intro background, derived from the supplied Williams Fan Zone event photo (`17.JPG`).
- `logo-no-bg.png` — transparent white T.A.S. mark used in the header, mobile menu and footer.
- `favicon.png` — T.A.S. mark used for the browser tab icon.
- `IntegralCF-Bold.otf` — uploaded display font. Confirm the web embedding and redistribution licence before publishing.
- `Northwell-Alt.ttf` — uploaded handwritten accent font, used sparingly. Confirm the web embedding and redistribution licence before publishing.

## Optimised images in `media/`

- `featured-1.webp` through `featured-11.webp` — supplied channel/Reel covers. The About page's horizontal channel carousel is configured in `src/data/site.ts` under `channelGallery`.
- `idol-of-the-week-cover.webp` — Idol of the Week graphic.
- `creator-portrait.webp` — creator portrait/kart photograph, used on Home and About the Creator.
- `car-1.webp` through `car-8.webp` — supplied motorsport images, used in the Creator gallery and the TWICE × F1 mod resource page.
- `williams-tzuyu-portrait.webp`, `williams-tzuyu-press-graphic.webp`, `williams-tzuyu-press-conference.webp`, `williams-fanzone-event.webp`, `williams-tzuyu-panel.webp`, `williams-tzuyu-event-poster.webp`, and `williams-fanzone-mascot.webp` — supplied images configured in `campaignHighlights` in `src/data/site.ts`.

## Where to edit

- Homepage and Fan Zone background filenames are referenced in `src/styles.css`.
- The About page channel carousel and Williams × Tzuyu highlights are configured in `src/data/site.ts` (`channelGallery` and `campaignHighlights`). Add an item to the relevant array to add another slide.
- The four audience figures are configured once in `src/data/site.ts` under `metrics`. Home, About, Partnerships and Media Kit all read from this object.
- Creator gallery images and captions are configured in the `racingGallery` array at the top of `src/pages/Creator.tsx`.
- Approved collaborator logo files belong in `public/assets/logos/`. The current SVGs are labelled placeholders and should be replaced with approved artwork before making claims about formal partnerships.

## Image replacement guidance

Keep the existing filenames if you are replacing an image in place. For new images, use descriptive lowercase filenames, preferably WebP for photography. For gallery additions, add a matching `src`, `alt`, `caption` and optional `category` entry to the corresponding data array. Use accurate alt text and only publish imagery you have permission to use.
