# Millecube Website — Build Brief for Claude Code

Give this to Claude Code as the starting brief (or save as `CLAUDE.md` in the repo root) before building/continuing the site. It covers the architecture decisions that make SEO, GEO, Google Ads, Meta Ads, and future maintenance work cleanly without rework later.

---

## 1. Stack & Hosting (already decided)
- **Framework:** Next.js, App Router
- **Hosting:** Vercel (auto-deploy on push to `main`)
- **Domain:** millecube.com, DNS managed at Namecheap, pointed to Vercel via A + CNAME records
- **No WordPress** — content, design, and SEO metadata all live in the same codebase

**Ask Claude Code for:** a `staging`/preview branch workflow — every PR gets its own Vercel preview URL automatically. Review changes there before merging to `main` so production never breaks mid-edit.

---

## 2. Environment Variables — never hardcode tracking IDs
All of the following go into Vercel's Environment Variables (and a gitignored `.env.local` for development), not into the codebase directly:

- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GA4_ID`
- `GOOGLE_ADS_CONVERSION_ID`
- `META_PIXEL_ID`
- `META_CAPI_ACCESS_TOKEN`
- `GOOGLE_SEARCH_CONSOLE_VERIFICATION` (if using meta-tag verification instead of DNS)

Use separate values for Production vs. Preview environments where it matters, so test/preview traffic doesn't pollute real Analytics or Ads data.

---

## 3. SEO Architecture
- Use the **Metadata API** (`generateMetadata`) per route — title, description, OG image, canonical URL, all dynamic per page
- `sitemap.ts` and `robots.ts` — built into Next.js, generate dynamically if blog/case-study pages get added later
- **JSON-LD structured data:**
  - `Organization` schema with `sameAs` links to Facebook Page, Instagram, LinkedIn (ties "Millecube Digital" to "Cadoo Venture Sdn. Bhd." for entity clarity)
  - `LocalBusiness` schema (Penang address)
  - `Service` schema per offering (Meta Ads, TikTok, Shopee/Lazada management, content production)
  - `FAQPage` schema on service pages
  - `BreadcrumbList` on nested pages

---

## 4. GEO (AI Search Visibility)
- Lead each page/section with a direct answer in the first ~150 words — don't bury it
- FAQ sections phrased as the real questions clients search ("how much does Meta Ads management cost in Malaysia")
- Visible "last updated" dates; revisit key pages quarterly
- Add an `llms.txt` at the root — low effort, may help ChatGPT/Perplexity-style engines even though Google says it doesn't use it

---

## 5. Tracking & Analytics — single tag-management layer
**Don't hardcode separate scripts for GA4, Google Ads, and Meta Pixel individually.** Install one **Google Tag Manager** container via `next/script` in the root layout, then manage GA4, Google Ads conversion tags, and Meta Pixel *inside* GTM. This means future tag changes happen in GTM's dashboard, not a code redeploy.

- **Google Search Console:** verify via DNS TXT record at Namecheap (covers all subdomains, independent of hosting — preferred over meta-tag verification)
- **Consent banner required before tags fire** — Malaysia's PDPA expects this, and Google Consent Mode v2 is effectively required now for full Ads/Analytics functionality. Gate all tracking behind consent, not just cookie banners for show.

---

## 6. Conversion Tracking — the part that protects ad spend
Don't track "page view" as the goal. Define the real conversion per page: form submit, WhatsApp click, or call click.

- Capture `gclid` (Google) and `fbclid` (Meta) on landing — store alongside the lead, not just in a cookie
- **Server-side tracking, not just client pixels** — wire up Meta Conversions API + Google Ads Enhanced Conversions through a Next.js API route, so ad blockers and Safari ITP don't quietly kill attribution. This mirrors the `ctwa_clid` fix already used across your Meta Ads client accounts — same underlying problem, same fix, different platform.
- Route form submissions through a serverless API route that: (1) fires server-side conversion events to both platforms, (2) stores the lead somewhere checkable (even a simple Sheet/Airtable to start)

---

## 7. Performance
- Use `next/image` for all images (automatic optimization)
- Enable **Vercel Speed Insights** to catch Core Web Vitals regressions early
- Default to server components; use client components only where real interactivity is needed — keeps landing pages lean

---

## 8. Maintenance
- Keep a **`CLAUDE.md`** at the repo root documenting this architecture, env var *names* (never values), and conventions — so any future Claude Code session has full context without re-explaining from scratch
- Ask Claude Code to periodically check `npm outdated` rather than letting dependencies silently drift
- Vercel's built-in logs cover serverless function errors; consider Sentry only if the site grows more interactive/complex later

---

## What to literally tell Claude Code, in one prompt

> Build this as a Next.js App Router project. Use the Metadata API for all SEO tags and JSON-LD for schema (Organization, LocalBusiness, Service, FAQPage). Install Google Tag Manager via `next/script`, gated behind a PDPA-compliant consent banner. Read all tracking IDs from environment variables — never hardcode them. Build a conversion-tracking API route that captures `gclid`/`fbclid` on form submission and fires server-side events to both Meta Conversions API and Google Ads Enhanced Conversions. Generate `sitemap.ts`, `robots.ts`, and an `llms.txt`. Document the full structure in a `CLAUDE.md` at the repo root.
