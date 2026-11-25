# brian chang — portfolio v2

Static Astro site. Editorial layout, light/dark themes, almost no JavaScript.

## Run

Needs Node ≥ 22.23 (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## Where things live

| What | Where |
|---|---|
| Name, headline, experience, skills, links | `src/data/site.ts` |
| Case studies | `src/content/work/*.md` (schema in `src/content.config.ts`) |
| Lab entries | `src/content/lab/*.mdx` |
| Colors, type, motion | `src/styles/global.css` |
| Pages | `src/pages/` |

Add a project: drop a Markdown file in `src/content/work/`. Set `caseStudy: false` to show it as a row only, with no page.
Add a lab entry: drop an `.mdx` file in `src/content/lab/` with a `date`, a `kind` and a `summary`.

Case-study drafts contain `<!-- ... -->` notes marking what still needs real details and numbers.

## Deploy

Static output: works on Cloudflare Pages/Workers, Vercel or Netlify with build command `npm run build` and output directory `dist`.
Update `site` in `astro.config.mjs` if the domain changes.
