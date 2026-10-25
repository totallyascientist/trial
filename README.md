# T.A.S. — Totally A Scientist

A React + TypeScript + Vite website for T.A.S., a Singapore-based creator-led media brand connecting K-pop and motorsport. The visual direction is cinematic and editorial, with supplied photography, swipeable galleries, animated channel metrics, a creator/racing page and a partnership enquiry form.

## 1. Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

Before deploying, run:

```bash
npm run typecheck
npm run test
npm run build
```

The build output is written to `dist/`.

## 2. Project structure

```text
src/
  components/
    AnimatedNumber.tsx   Count-up animation for audience metrics
    ImageCarousel.tsx    Reusable swipe/scroll image carousel
    Layout.tsx           Header, dropdown navigation, mobile menu and footer
    ScrollReveal.tsx     Shared scroll reveal animation
    Shared.tsx           Eyebrows, section intros, destination and work cards
  data/
    site.ts              Social links, channel metrics, galleries and work cards
  pages/
    Home.tsx             Homepage
    FanZone.tsx          Full-screen Fan Zone destinations
    About.tsx             Channel story, carousel, Williams × Tzuyu highlights and metrics
    Creator.tsx           Creator profile, racing journey and photo gallery
    Partnerships.tsx     Partnership formats, statistics and enquiry form
    MediaKit.tsx          Printable media kit
    Contact.tsx           Contact links
    Legacy.tsx            Existing resource/voting routes and privacy page
  styles.css              Global styles, responsive layouts and motion styling
public/
  assets/
    cover.png             Homepage hero background
    cover-fanzone.png     Fan Zone landing background
    logo-no-bg.png        Transparent T.A.S. header/footer mark
    favicon.png           Browser tab icon
    media/                Optimised supplied photographs and graphics
    logos/                Replaceable collaborator logo placeholders
```

The `.tsx` files have been rewritten into multi-line, sectioned components so the page structure and editing points are easier to scan. Shared elements such as the header, carousel, metric animation and content cards live in components instead of being duplicated across pages.

## 3. Replace or add images

### Homepage hero background

Replace `public/assets/cover.png` with your new image, keeping the same filename. The image is used as a full-bleed background with a dark overlay for text contrast. A wide image works best; aim for around 2600 × 1460 px or larger.

### Fan Zone background

Replace `public/assets/cover-fanzone.png` to change the full-screen Fan Zone introduction background. It is currently derived from your supplied Williams Fan Zone event photograph. Use a wide image around 2600 × 1460 px or larger.

### Header, footer and browser-tab logo

- Header, mobile menu and footer: `public/assets/logo-no-bg.png`
- Browser tab icon: `public/assets/favicon.png`

Keep the logo background transparent. If you replace the logo, use the same filename or update the references in `src/components/Layout.tsx` and `index.html`.

### About the channel carousel

The first horizontal carousel on `/about` uses the `channelGallery` array in `src/data/site.ts`. Each item looks like this:

```tsx
{
  src: '/assets/media/featured-1.webp',
  alt: 'Describe the image for accessibility',
  caption: 'Short visible caption',
  category: 'Explainer',
}
```

To add more slides, add another item to `channelGallery` and put its image in `public/assets/media/`. Eleven slides are currently configured. The carousel supports swipe, trackpad scrolling, and previous/next buttons.

### Williams × Tzuyu highlights

The second carousel directly below the channel carousel is configured in `campaignHighlights` in `src/data/site.ts`. It currently uses the supplied event photos and graphics. To add another highlight, add an item to that array with an image path, descriptive `alt`, visible `caption` and optional `category`.

Only publish photos you have permission to use. The copy deliberately describes this as an event archive and does not imply a paid or official commercial partnership.

### Creator / racing gallery

The images and captions on `/creator` are in the `racingGallery` array at the top of `src/pages/Creator.tsx`. Add, remove or reorder entries there. Use accurate descriptions and only list cars, karting experiences and achievements that are genuine.

### Work cards and Fan Zone items

- Homepage and About work cards: `portfolio` in `src/data/site.ts`.
- Fan Zone destinations: `fanDestinations` in `src/data/site.ts`.
- Keep public links blank until the matching post or destination is live. A card with an empty `href` is displayed as non-clickable.

The full-screen `/fan-zone` page intentionally excludes the resources destination. The existing `/resources` route is still present for the TWICE × F1 mod page.

## 4. Edit the channel statistics

All four figures are configured in one place: `metrics` in `src/data/site.ts`.

```ts
export const metrics = {
  updatedAt: 'OWNER-SUPPLIED · OCTOBER 2026',
  followers: 34_500,
  monthlyReach: 2_000_000,
  averageLikes: 10_000,
  engagementRate: 17.8,
};
```

The current display is:

- 34.5K followers
- 2M+ accounts reached monthly
- Approximately 10,000 average likes
- 17.8% engagement rate

Home, About, Partnerships and Media Kit use the same config. The numbers animate up when the metrics enter the viewport; users who prefer reduced motion see the final values immediately. Update the date when you refresh the figures and be ready to explain the calculation/reporting window if a partner asks.

## 5. Typography and brand colours

- Display font: `public/assets/IntegralCF-Bold.otf`
- Handwritten accent: `public/assets/Northwell-Alt.ttf`
- Cyan: `#49c0ec`
- Paddock black: `#0b0c0e`

The uploaded fonts are loaded locally in `src/styles.css`. Confirm that the licence allows web embedding and redistribution before publishing. If not, replace the `@font-face` source or change `--display` to a licensed alternative. The body font has a system fallback.

## 6. Routes

- `/` — Home
- `/fan-zone` — Full-screen Fan Zone
- `/about` — About the channel, image carousel, campaign highlights and channel statistics
- `/creator` — Creator profile and racing journey
- `/partnerships` — Partnership formats, audience stats and enquiry form
- `/media-kit` — Printable media kit
- `/contact` — Contact links
- `/resources` — Existing TWICE × F1 mod and community resource page
- `/vote` — Migration reminder for the original voting integration
- `/privacy` — Privacy information

`public/_redirects` contains the single-page-app fallback for Cloudflare Pages.

## 7. Partnership form

The form is configured to fail safely. Without a form endpoint, it offers to open a pre-filled email rather than pretending that a message has been sent.

To connect Formspree or another compatible endpoint, create a `.env` file in the project root:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Use the endpoint provided by your form service; do not publish private API keys in frontend environment variables. Rebuild and test a submission after connecting it.

## 8. Deploy to Cloudflare Pages

1. Commit and push the project to your GitHub repository.
2. In Cloudflare Pages, create or update the project using that repository.
3. Set the build command to `npm run build`.
4. Set the build output directory to `dist`.
5. Use Node.js 20+ for the build environment.
6. Add `VITE_FORMSPREE_ENDPOINT` only if a form endpoint has been configured.
7. Deploy and test `/`, `/about`, `/creator`, `/fan-zone`, `/partnerships`, `/media-kit`, `/contact`, `/resources` and `/vote` directly.
8. Verify the favicon, background images, image carousels, external links and enquiry form on both desktop and mobile.

## 9. Before launch

- Confirm the Twitch profile URL in `src/data/site.ts` before promoting it.
- Confirm the public links for portfolio cards.
- Replace collaborator logo placeholders with approved logo assets and ensure the wording accurately describes the relationship.
- Confirm font web-licensing permissions.
- Restore the live voting integration if the `/vote` route is expected to accept votes.
- Confirm all campaign photos may be published in this context.
- Run `npm run typecheck`, `npm run test` and `npm run build` in an environment with dependencies installed.
