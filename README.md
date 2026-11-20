# Masum Reza - Portfolio (Next.js)

A dark, single-page developer portfolio built with **Next.js 16.4.6** (App Router), TypeScript, **Tailwind CSS v4** for styling and **Framer Motion** for animations.

Requires **Node.js 20.9 or newer** (Next.js 16 dropped Node 18).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000 (Turbopack is the default in Next.js 16)
```

Production build:

```bash
npm run build
npm start
```

Lint (Next.js 16 removed `next lint`, so this runs ESLint directly):

```bash
npm run lint
```

## Edit your content

Almost everything lives in one file: `lib/data.ts` (name, contact, stats, services, projects, skills, experience).

| To change | Edit |
| --- | --- |
| Accent colour and other colours | `@theme` block in `app/globals.css` (`--color-accent` etc.) |
| Shared button / heading styles | `lib/ui.ts` |
| Animations (speed, distance, hover) | `components/Motion.tsx` (`Reveal`, `Stagger`, `StaggerItem`, `MotionLink`) |
| Project screenshots | files in `public/images/` (1400x637 JPG works well) |
| Your photo | replace `public/images/me.jpg` (4:5 crops best) |
| Résumé link | `profile.resume` in `lib/data.ts` (use a public "Anyone with the link" Drive link) |
| SEO title / description | `app/layout.tsx` |

Animations respect the visitor's "reduce motion" system setting automatically.

## SEO

- Title, description, Open Graph and Twitter tags are set in `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- Person structured data (JSON-LD) is added in `app/page.tsx`.
- Set your real domain so canonical and sitemap URLs are correct:

```bash
# .env.local  (and in your host's environment variables)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deploy

**Vercel (easiest):** push to GitHub, import the repo on vercel.com, add `NEXT_PUBLIC_SITE_URL`, deploy. Add your domain under Project > Settings > Domains.

**VPS (Node + PM2 + Nginx):**

```bash
npm install && npm run build
pm2 start npm --name portfolio -- start     # runs on port 3000
```

Then point Nginx `proxy_pass http://127.0.0.1:3000;` at it and add HTTPS with Certbot.

**Netlify:** use the Next.js runtime (auto-detected) with build command `npm run build`.
