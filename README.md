# BigLight React (Modules + Blocks)

Minimal React app (no UI frameworks) that mirrors the George-style landing page using **modules** and **blocks**:
- **Modules**: Navbar, Hero, PromoGrid, OfferBanner, ProductGrid
- **Blocks**: NavItem, PromoCard, ProductCard
- **Data-first**: JSON is embedded in the page (`<script id="page-data">`), React consumes it and renders modules

## Quick start
```bash
npm install
npm run build
npm run dev
# open http://localhost:5173
```

## How it works
- `public/index.html` contains the structured data.
- `src/lib/readPageData.ts` reads the JSON.
- `src/Page.tsx` loops through `modules`, and `src/lib/mapModule.tsx` maps `type` to the correct React component.
- Each **module** uses smaller **blocks** for repeatable UI.

## Edit content
Update the JSON in `public/index.html` to add/remove/reorder modules or change content. Save to hot-reload.

## Add a new module
1) Create `src/components/<Module>/<Module>.tsx` + `<Module>.module.scss`  
2) (Optional) Create reusable blocks in `src/blocks/...` and import them into your module  
3) Register the module in `src/lib/mapModule.tsx`  
4) Add a matching object in `public/index.html` JSON

This follows the approach described in Task 1 (Agile, data-driven, modular).

## AI Use
This react app base code was made using AI and then vite config bug fix was AI generated to.