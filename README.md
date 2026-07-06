# Casa Nira · Villa C2 — Upgraded Inventory

A single self-contained web page (`index.html`) showing the FF&E upgrade inventory and
custom-branding catalog for **Villa C2 · The Sanctuary (3BR)**. Built on the shared Casa
Nira inventory template; data sourced from *UPGRADE SSOT — FF&E 3BR*.

## Structure
Everything lives in **`index.html`** — HTML, CSS, and JS in one file, no build step and no
dependencies (fonts load from Google Fonts).

Two data arrays inside the `<script>` block near the bottom:
- **`ITEMS`** — the inventory (137 items). Each row:
  `{ cat, name, location, status, qty, prevBrand, newBrand, note? }`
  - `status`: `"Upgrade"` (gold ribbon, prev → new brand), `"New"` (green ribbon), or `"As Is"`.
  - `prevBrand` / `newBrand`: string or `null`. `note`: optional string.
  - `cat`: one of Electronics & Appliances, Fixed Furniture, Loose Furniture, Amenities, Cleaning Tools.
- **`BRANDED`** — the shared custom-branding catalog (In-Room Amenities + Signage) with
  material/finish/dimension specs and Google Drive asset links. Shared across villas.

## Run locally
```bash
cd inventory_upgrade_c2
python3 -m http.server 4173      # then open http://localhost:4173
```
Or just double-click `index.html`.

## Deploy to Vercel
No build step — fully static.
```bash
gh repo create inventory-casanira-c2 --public --source=. --push   # push to GitHub
npx vercel --prod                                                 # go live
```
Or import the repo at vercel.com/new (Framework: **Other**, no build command).

## Notes
- The source PDF and the reference template file are git-ignored (not published).
- "Last updated" shows the current month automatically.
