# STAR HOUSE

Static website for STAR HOUSE, ready to deploy on Vercel.

## Project structure

- `public/index.html` - site shell and SEO metadata.
- `public/assets/css/site.css` - site styling.
- `public/assets/js/site.js` - client-side page rendering and routing.
- `public/images/` - product and page images.
- `public/PHOTO-2025-05-13-16-20-20.jpg` - brand logo used by the header/footer.
- `vercel.json` - Vercel static hosting config with SPA route rewrites.
- `.vercelignore` - excludes local/editor files from Vercel uploads.
- `api/contact.js` - Vercel serverless contact endpoint.
- `lib/contact.js` - shared Formspree forwarding logic.
- `server.js` - optional local/Render-style static server.
- `scripts/check-site.js` - production sanity check for local asset references and Vercel routing.

## Vercel deployment

Use these settings in Vercel:

- Framework Preset: `Other`
- Build Command: `npm run build`
- Output Directory: `public`
- Install Command: `npm install`

The `vercel.json` file rewrites product/contact routes back to `index.html`, so direct visits to paths like `/contact` and `/equestrian` will work in production.

Add this Environment Variable in Vercel before deploying:

- `FORMSPREE_ENDPOINT` = your real Formspree endpoint, for example `https://formspree.io/f/abcdwxyz`

The browser form posts to `/api/contact`; the serverless function then forwards the enquiry to Formspree, so your Formspree/Gmail setup is not exposed in the frontend code.

If you still deploy the Node server on Render, set the same `FORMSPREE_ENDPOINT` environment variable there too. `render.yaml` already keeps it secret and sets `HOST=0.0.0.0` for hosted Node binding.

## Local commands

```sh
npm run check
npm start
```

`npm run check` validates that referenced local assets exist and that the Vercel fallback route is configured.

For a Node host that requires public binding, set `HOST=0.0.0.0`. Vercel uses `api/contact.js` for the form instead of `server.js`.
