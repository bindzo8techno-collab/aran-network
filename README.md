# Aran Network website

The site is built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The app is available at [http://localhost:3000](http://localhost:3000).

## Available commands

- `pnpm dev` — start the development server
- `pnpm lint` — run ESLint
- `pnpm build` — generate the static site in `out/`

Deploy the contents of `out/` to any static web host. The site does not require
a Node.js server at runtime. Configure any required URL redirects with your
static host, as Next.js redirects are not available in static exports.

## Routes

- `/` — home
- `/about` — about Aran Network
- `/products` — product categories
- `/products/[slug]` — product details
- `/contact` — contact form and business details
- `/robots.txt` — generated crawl rules and sitemap reference
- `/sitemap.xml` — canonical public routes and product pages

Shared metadata and the canonical site origin are maintained in `lib/seo.ts`.

Product and category content is maintained in `constants.ts`. Product enquiry
forms submit to the existing `https://arannetwork.com/email/email.php`
endpoint.
