# HomeWise website

An independent, responsive website for the HomeWise mobile app. The white canvas, rounded type, soft cards, and phone composition follow the supplied Foodnoms / Refero style reference. Orange and navy come from the supplied HomeWise artwork.

## Local development

Run `npm install`, then `npm run dev`. Open the local address printed by the server. Run `npm run build` for a production build. Production is hosted on Vercel at `https://homewise.khayll-labs.com`.

## Content and assets

- `app/page.tsx`: landing page content and section links.
- `app/globals.css`: responsive layout, brand colors, and animations. All motion is skipped for visitors who prefer reduced motion.
- `app/layout.tsx`: page metadata and font loading.
- `app/scroll-reveal.tsx`: reveals the children of any element marked `data-reveal` as they scroll into view, and resets them after they leave through the bottom of the screen so they replay.
- `public/homewise-logo.png`: original supplied symbol.
- `public/homewise-wordmark.png`: original supplied full logo.

All four app screen areas are intentionally blank. Replace the contents of the `Phone` component with real app screenshots when ready. Labels remain outside the frames. There are no fabricated store links, testimonials, pricing plans, or signup forms.

The site does not require database credentials. Navigation links scroll to the corresponding page sections. Google Fonts has a system-font fallback. The project uses standard Next.js so Vercel can build each update pushed to GitHub.
