# KOG Hub

The overarching site that lists and links to every KOG site in this repo.

- `index.html` — the gallery page (cards with description, inspiration, screenshot, and a link to each live site).
- `assets/screenshots/` — one preview image per site.
- `sites/<name>/` — each site's **production build**, copied in from `<project>/dist/public` after a `vite build`. This folder is generated — don't hand-edit it.

## Viewing it locally

From this folder:

```
npx serve .
```

Then open the printed localhost URL.

## Adding a new site

1. Build the new project with a base path matching where it'll live here:
   ```
   cd ../kog-<new-site>
   npx vite build --base=/sites/<new-site>/
   ```
2. Copy the build output in:
   ```
   rm -rf ../kog-hub/sites/<new-site>
   mkdir -p ../kog-hub/sites/<new-site>
   cp -r dist/public/. ../kog-hub/sites/<new-site>/
   ```
3. Take a screenshot of the running site (1440-wide is a good width) and save it as
   `kog-hub/assets/screenshots/<new-site>.jpg`.
4. Copy one of the existing `<a class="card">` blocks in `index.html`, update the title,
   tagline, description, inspiration note, fonts, accent color (`--card-accent`), swatch hex label,
   image src/alt, and the `href="sites/<new-site>/"` link.
5. Bump the "Sites live" / "Design directions" counters near the top of the page.

## Note on `kog-studio-1` and `kog-studio-2`

Some images in these two sites are referenced via `/manus-storage/...` paths, which only resolve
inside the Manus build environment that generated them. Outside of that environment (including here,
in the static build checked into this repo) those specific images will 404. Everything else in both
sites renders correctly. To fix permanently, replace those `/manus-storage/...` src values with
self-hosted image files (e.g. in `client/public/`) or another stable image host, then rebuild.

## Routing fix applied

`kog-come-gather`, `kog-faith-circle`, `kog-pink`, and `kog-studio-2` use client-side routing
(`wouter`). Their `App.tsx` was updated to wrap the router in `<Router base={import.meta.env.BASE_URL...}>`
so the app still matches routes correctly when served from a sub-path like `/sites/pink/` instead of
the site root `/`. Keep this pattern in any new project that uses wouter and might be nested here.
