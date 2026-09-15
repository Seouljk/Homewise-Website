# HomeWise website

An independent, responsive website for the HomeWise mobile app. The white canvas, rounded type, soft cards, and phone composition follow the supplied Foodnoms / Refero style reference. Orange and navy come from the supplied HomeWise artwork.

## Local development

Run `npm install`, then `npm run dev`. Open the local address printed by the server. Run `npm run build` for a production build. Production is hosted on Vercel at `https://homewise.khayll-labs.com`. `next.config.ts` turns off Turbopack's build cache, because a cache restored by Vercel once deployed an out-of-date stylesheet.

## Content and assets

- `app/page.tsx`: landing page content, section links, the FAQ, and the page's structured data (JSON-LD). The FAQ structured data is built from the same questions shown on the page, so edit them in one place.
- `app/globals.css`: responsive layout, brand colors, and animations. All motion is skipped for visitors who prefer reduced motion.
- `app/layout.tsx`: page title, description, canonical address, sharing metadata, and the Google Analytics tag (`G-QF35HEZTVE`), which only loads in production builds.
- `app/scroll-reveal.tsx`: reveals the children of any element marked `data-reveal` as they scroll into view, and resets them after they leave through the bottom of the screen so they replay.
- `app/site.ts`: the production address used by the metadata, sitemap, and structured data.
- `app/robots.ts` and `app/sitemap.ts`: generate `/robots.txt` and `/sitemap.xml`.
- `app/images/`: the logo and wordmark as WebP files sized for where they appear (240 and 384 pixels wide). They are marked `unoptimized`, so browsers load them straight from Vercel's CDN and cache them instead of waiting for on-demand resizing.
- `app/favicon.ico`, `app/icon.png`, and `app/apple-icon.png`: browser tab, search result, and home screen icons.
- `app/opengraph-image.png`: the 1200 × 630 image shown when the site is shared, with its alt text in `opengraph-image.alt.txt`.
- `brand/homewise-logo.png` and `brand/homewise-wordmark.png`: original supplied artwork. They are not served by the site; regenerate the images and icons above from them if the artwork changes.

All four app screen areas are intentionally blank. Replace the contents of the `Phone` component with real app screenshots when ready. Labels remain outside the frames. There are no fabricated store links, testimonials, pricing plans, or signup forms.

The site does not require database credentials. Navigation links scroll to the corresponding page sections. Google Fonts has a system-font fallback. The project uses standard Next.js so Vercel can build each update pushed to GitHub.

## Search

`next.config.ts` redirects `homewise-website.vercel.app` to the main domain, so search engines index a single copy of the site. After a domain change, update `app/site.ts` and that redirect, then submit the new `/sitemap.xml` in Google Search Console.
