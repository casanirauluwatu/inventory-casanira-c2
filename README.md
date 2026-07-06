# Casa Nira · Villa C2 — Upgraded Inventory

A static single-page inventory site modeled on the Villa C7 reference, with the data
sourced from **UPGRADE SSOT - UPGRADE NEW FORMAT FF&E 3BR.pdf**.

## Files
- `index.html` — page shell
- `styles.css` — design system (Bricolage Grotesque + JetBrains Mono, warm cream palette)
- `data.js` — the full inventory (edit here to change items / brands / notes)
- `app.js` — rendering, filtering, search, share-view, inline line icons

## Run locally
```bash
cd inventory_upgrade_c2
python3 -m http.server 4173
# open http://localhost:4173
```

## Deploy to Vercel
No build step — it's fully static.
```bash
npx vercel        # from this folder, follow prompts
```
Or drag the folder onto the Vercel dashboard (or Netlify). Set no framework / output = root.

## Editing content
- **Villa name / owner / year / dates:** the `VILLA` object at the top of `data.js`.
- **Items:** the `INVENTORY` array. Each item:
  - `status`: `"upgrade"` (gold badge, old → new brand), `"new"` (green badge), or `"asis"` (no badge).
  - `old` = current/example brand, `brand` = upgraded brand, `qty`, `note`, `loc`.
  - `custom: true` flags an item for the **Custom Branding** tab.
- **Sections & order:** the `SECTIONS` array.
- Item icons auto-map from the name (`iconFor` in `app.js`); add keywords there if needed.
