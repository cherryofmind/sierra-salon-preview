# SIERRA Site Audit

Date: 2026-05-31

## Fixed in Current Pass

- Restored full-screen hero image behavior.
- Moved project assets into `assets/css`, `assets/js`, and `assets/images`.
- Removed dependency on the old Tilda folder for the app image.
- Added SEO basics: title, description, canonical, Open Graph, Twitter Card, JSON-LD `BeautySalon`, `robots.txt`, `sitemap.xml`.
- Added unique useful copy from the live site:
  - intro manicure offer, 1900r.
  - intro pedicure offer, 2800r.
  - main services in SIERRA.
  - manicure, pedicure, brows, lash extension, four-hands set, additional services.
- Added premium-segment trust blocks:
  - standards and sterility.
  - four-hands service.
  - app and online booking.
  - warranty.
  - price guide.
  - pre-visit FAQ.
- Added descriptive hero image alt text, high-priority image preload, `fetchpriority`, focus-visible styles, `referrer` policy meta, and `noopener noreferrer` for external links.
- Added lazy loading and async decoding for non-critical images, richer service image alt text, service-card CTAs, an offer caption, and a mobile sticky CTA for phone/booking actions.

## Security Headers Recommendation

GitHub Pages does not allow custom response headers such as HSTS or CSP from repository files. On the final hosting/CDN layer, configure:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; img-src 'self' https: data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' https://w2114769.yclients.com https://static.tildacdn.com; frame-src https://w2114769.yclients.com https://*.yclients.com; connect-src 'self' https:;
```

The CSP must be tested after connecting the final booking widget and analytics.

## Competitor Signals

Premium and well-indexed beauty/nail competitors usually expose more factual data than the previous SIERRA export:

- Clear service taxonomy and direction filters.
- Online booking visible in the first screen.
- Prices and durations for top procedures.
- Team/master profiles with experience.
- Portfolio or real work examples.
- Reviews and social proof.
- Sterility, materials, professional standards.
- Address, working hours, map, phone, messengers.
- FAQ and certificate rules.

Reference examples checked:

- Lavanda Beauty Studio: services, portfolio, booking, reviews, FAQ, contacts, news, sterile service, exact prices, experienced masters.
- VESNA Beauty: nail service page with standards, master profiles, experience, price list, address, phone, email, working hours.
- Alex Salons: service categories, prices, team, certificates, reviews, portfolio, promotions, contacts, premium positioning, online booking.
- Lerush: first visit pricing, all-inclusive procedure composition, guarantee, professional approach, sterility, reviews, working hours.

## Still Missing Business Data

These should not be invented:

- Exact studio address or multiple addresses.
- Studio email.
- Full price list with durations.
- Master names, photos, experience.
- Real portfolio gallery.
- Real reviews and rating source.
- Brand/material names actually used in the studio.
- Certificate denominations and rules.
- Map embed or Yandex/Google business profile URL.

## Recommended Next Content Pass

1. Export real services/prices/durations from YCLIENTS.
2. Add location block with address, metro, hours, map link.
3. Add 6-12 real portfolio images.
4. Add master profiles.
5. Add real reviews with source attribution.
6. Add certificate rules and denominations.
7. Add separate service landing pages if SEO growth is the target:
   - `/manicure/`
   - `/pedicure/`
   - `/brows/`
   - `/lashes/`
   - `/four-hands/`
