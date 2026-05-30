# SIERRA salon site

Static landing page for `sierra-salon.ru`.

## Structure

- `index.html` - main page markup and SEO structured data.
- `assets/css/styles.css` - layout, responsive styles, visual system.
- `assets/js/main.js` - mobile menu, header state, desktop YCLIENTS widget loader.
- `assets/images/` - local assets copied from the old export.
- `robots.txt` - crawler rules.
- `sitemap.xml` - sitemap for production domain.
- `docs/audit.md` - site audit, competitor notes, next business-data gaps.

## Run Locally

```powershell
cd "d:\wibe codding\sierra"
python -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173/
```

## Production Checklist

- Confirm final studio address and email.
- Confirm full price list and service durations from YCLIENTS.
- Replace or add real portfolio photos if available.
- Add real masters and reviews only after receiving source data.
- Update `sitemap.xml` `lastmod` on release.
