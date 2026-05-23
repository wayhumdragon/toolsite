# ToolBox - Frontend Tools Site

## Overview
A 100% client-side web tools collection. All computation happens in the browser via JavaScript — nothing is uploaded to any server. Deployed on Cloudflare Pages with a custom domain. Monetized via Google Ads after SEO traffic grows.

## Tech Constraints
- **No frameworks.** Vanilla HTML + CSS + JS only.
- **No build step.** Files are served directly.
- **No external runtime dependencies** unless absolutely necessary (QR library is the only exception, loaded from CDN with fallbacks).
- **70% width** content area with a `max-width: 1100px` centered container. Mobile: 92%.

## File Structure
```
/
├── index.html          Homepage with category grid
├── global.css          All shared styles (design tokens, buttons, forms, cards, layout)
├── layout.js           Injects header + footer + GA into every page
├── robots.txt          SEO
├── sitemap.xml         SEO (replace REPLACE_WITH_YOUR_DOMAIN)
├── CLAUDE.md           This file
└── tools/
    ├── image-converter.html   Multi-format converter (JPG/PNG/WebP)
    └── qrcode.html            QR code generator
```

## Adding a New Tool
1. Copy the structure from an existing tool page in `tools/`.
2. Each page must include:
   - `<link rel="stylesheet" href="../global.css">` in `<head>`
   - `<header id="site-header"></header>` at top of `<body>`
   - `<footer id="site-footer"></footer>` at bottom of `<body>`
   - `<script src="../layout.js"></script>` before `</body>`
   - SEO meta tags (title, description, og:title, og:description)
3. Add a card for it on `index.html` under the appropriate category.
4. Add a URL entry to `sitemap.xml`.

## Design System
- CSS variables defined in `global.css` (`:root`). Use them, don't hardcode colors.
- Primary: `#3b82f6`, Success: `#10b981`, Warning: `#f59e0b`
- Tool pages use `.tool-wrap` for max-width 760px content area.
- Use `.card` class for content panels, `.btn` for buttons.

## Header / Footer
Managed by `layout.js`. It looks for `#site-header` and `#site-footer` elements and injects the shared content. To change the header or footer across all pages, edit `layout.js`.

## GA (Google Analytics)
Placeholder in `layout.js` at `GA_MEASUREMENT_ID`. When you have a real GA4 ID, replace it and all pages get tracking automatically.

## SEO Notes
- Each tool page is a landing page — unique title, description, and h1 are mandatory.
- `sitemap.xml` and `robots.txt` have `REPLACE_WITH_YOUR_DOMAIN` — replace before launch.
- Coming Soon cards on homepage are placeholders; replace them as tools are built.
