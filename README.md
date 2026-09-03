# HomeWise website

An independent, responsive website for the HomeWise mobile app. The white canvas, rounded type, soft cards, and phone composition follow the supplied Foodnoms / Refero style reference. Orange and navy come from the supplied HomeWise artwork.

## Local development

Run `npm install`, then `npm run dev`. Open the local address printed by the server. Run `npm run build` for a production build.

## Content and assets

- `app/page.tsx`: landing page content and section links.
- `app/globals.css`: responsive layout and brand colors.
- `app/layout.tsx`: page metadata and font loading.
- `public/homewise-logo.png`: original supplied symbol.
- `public/homewise-wordmark.png`: original supplied full logo.

All four app screen areas are intentionally blank. Replace the contents of the `Phone` component with real app screenshots when ready. Labels remain outside the frames. There are no fabricated store links, testimonials, pricing plans, or signup forms.

The site does not require database credentials. Navigation links scroll to the corresponding page sections. Google Fonts has a system-font fallback.
