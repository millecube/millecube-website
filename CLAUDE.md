@AGENTS.md

# Millecube Website — Architecture & Convention Guide

## Stack
- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Inline `style={}` props + scoped `<style>` blocks for hover and responsive states. No Tailwind for component styling — only utility classes like `max-w-7xl mx-auto`.
- **Animation:** Framer Motion imported from `framer-motion`. Use `whileInView` with `viewport={{ once: true }}` for scroll reveals.
- **Fonts:** `Plus_Jakarta_Sans` loaded via `next/font/google`, aliased as `--font-bebas` (bold display weights) and `--font-montserrat` (body).
- **Icons:** `@phosphor-icons/react` only. Never mix icon libraries.
- **Hosting:** Vercel, auto-deploys on push to `main`.

## Design Language (DARK PREMIUM)
- **Background base:** `#061f17` (near-black), `#07503c` (dark green)
- **Accent colors:** `#32cd32` (lime), `#FFD600` (gold)
- **Glass cards on dark:** `border: 1px solid rgba(255,255,255,0.07)`, `background: rgba(255,255,255,0.025)`, inner shadow `inset 0 1px 1px rgba(255,255,255,0.05)`
- **Text on dark:** white headlines, `rgba(255,255,255,0.50-0.52)` body copy
- **Card hover:** border becomes `rgba(50,205,50,0.22)`, shadow strengthens
- **Animations:** `filter: "blur(6-8px)"` → `blur(0)` on whileInView. Ease `[0.32, 0.72, 0, 1]` for blur-fades.
- **Atmospheric glows:** radial `rgba(50,205,50,0.05-0.07)` at section tops, tinted right-edge glows
- **Grain overlay:** fixed grain in Hero.tsx — do not duplicate on every section
- **Double-bezel card pattern:** outer shell (18px radius, 3px padding, light border + shadow) + inner core (14px radius, `rgba(255,255,255,0.025)`)

## Component Architecture
- **Server components by default.** Pages with `export const metadata` are server components.
- **Client components** get `"use client"` at the top and handle all interactivity.
- **Shared service components:** `ServiceContent.tsx` and `ServiceCarousel.tsx` render the content for all 7 service pages.
- All service pages follow the pattern: `InnerHero` → `ServiceContent` → `CtaStrip`

## Environment Variables
Never hardcode tracking IDs. All live in `.env.local` (dev) and Vercel Environment Variables (production).

| Variable | Used in | Purpose |
|---|---|---|
| `NEXT_PUBLIC_GTM_ID` | `layout.tsx` → `GoogleTagManager.tsx` | GTM container ID |
| `NEXT_PUBLIC_GA4_ID` | GTM (not in code) | GA4 — configure inside GTM |
| `GOOGLE_ADS_CONVERSION_ID` | GTM (not in code) | Ads conversion — configure inside GTM |
| `META_PIXEL_ID` | `app/api/contact/route.ts` | Meta CAPI pixel ID (server-only) |
| `META_CAPI_ACCESS_TOKEN` | `app/api/contact/route.ts` | Meta CAPI access token (server-only) |
| `LEAD_WEBHOOK_URL` | `app/api/contact/route.ts` | Optional: POST leads to Make/Zapier/n8n |

## Tracking & Analytics Architecture

### Consent Gate
- `ConsentBanner.tsx` — renders a PDPA-compliant banner on first visit
- On accept: sets `localStorage.millecube_consent = "granted"` and fires `millecube_consent_update` event
- `GoogleTagManager.tsx` — listens for the event, loads GTM only after consent

### Conversion Flow (WhatsApp lead)
1. User lands on any page with `?gclid=...` or `?fbclid=...` in the URL
2. `ContactForm.tsx` captures these on mount and stores them in `sessionStorage`
3. On form submit: POSTs to `/api/contact` with form data + click IDs
4. `app/api/contact/route.ts` fires:
   - **Meta CAPI** `Lead` event (SHA-256 hashed user data)
   - Webhook to `LEAD_WEBHOOK_URL` (if set) for lead storage
5. WhatsApp opens in a new tab (primary conversion action)

### Google Ads Enhanced Conversions (server-side)
Not yet implemented — currently handled client-side via GTM.
To implement server-side: set up a Google Ads API service account, then use
the `/api/contact` route to upload click conversions via `gclid`.
See: https://developers.google.com/google-ads/api/docs/conversions/upload-clicks

## SEO Architecture
- **Metadata API:** Every page uses `export const metadata: Metadata = {}` or `generateMetadata()`
- **JSON-LD schemas in `layout.tsx`:** `Organization` + `LocalBusiness` (applies to all pages)
- **Sitemap:** `app/sitemap.ts` — update when adding new pages
- **Robots:** `app/robots.ts`
- **llms.txt:** `public/llms.txt` — AI search visibility file, update quarterly

## File Structure
```
app/
  layout.tsx          — root layout: fonts, JSON-LD, GTM, ConsentBanner
  page.tsx            — homepage
  sitemap.ts          — dynamic XML sitemap
  robots.ts           — robots.txt
  about/page.tsx
  contact/page.tsx
  work/page.tsx
  services/
    media-advertisement/page.tsx
    social-media/page.tsx
    seo/page.tsx
    marketplace-management/page.tsx
    website/page.tsx
    content-creative/page.tsx
    branding-strategy/page.tsx
  api/
    contact/route.ts  — Meta CAPI + lead webhook
components/
  GoogleTagManager.tsx  — consent-gated GTM loader
  ConsentBanner.tsx     — PDPA consent UI
  ServiceContent.tsx    — shared service page sections (Features, Process, Deliverables)
  ServiceCarousel.tsx   — "other services" carousel
  ContactForm.tsx       — multi-step form with gclid/fbclid capture
public/
  llms.txt             — AI discovery file
```

## Conventions
- Hover and responsive states go in `<style>` blocks with CSS class selectors
- Use `clamp()` for fluid typography and spacing (e.g. `clamp(36px, 4.5vw, 58px)`)
- Container width: `max-w-7xl mx-auto` with `padding: "clamp(52px,6.5vw,88px) clamp(20px,3vw,40px)"`
- Image imports: always use `<Image>` from `next/image` with `fill` or explicit dimensions
- Links: always use `<Link>` from `next/link`
