# Tech Stacks, Tooling, Hosting, Performance & Accessibility for Developer Portfolios (late 2026)

Research date: 2026-11-24. About 20 search/fetch calls. Primary sources were used where possible. Items I could not verify are listed under Gaps instead of being guessed.

## Frameworks: current versions, popularity, and fit for a content-heavy portfolio with a few interactive pieces

### Takeaway
Astro (now 7.x, team owned by Cloudflare since Jan 2026) is the best fit for a content-heavy personal site with a few interactive islands. It sends no JS by default, React components can still be used as islands, and it leads developer satisfaction. Next.js (16.4) has the most users and is the stronger choice if the site needs app-like behavior or the developer wants Next.js experience for a resume. It carries more complexity and has a heavy cadence of security releases. Several alternatives were mid-transition in late 2026: SvelteKit 3 and Nuxt 5 were still pre-release, and React Router moved to v8.

### Cited Findings
**Next.js**
- Next.js 16 shipped Oct 21, 2025, with Cache Components, stable Turbopack (now the default bundler), file system caching, React Compiler support, new caching APIs and React 19.2 features. Middleware was replaced by `proxy.ts`. — [Next.js 16 blog](https://nextjs.org/blog/next-16); [heise](https://heise.de/-10794114)
- Release line: 16.1 (Dec 18, 2025), 16.2 (Mar 18, 2026: stable Adapter API, AGENTS.md in create-next-app), 16.3 (Aug 3, 2026: "Instant Navigations"), 16.4 (Oct 6, 2026: lazy compilation, smaller Turbopack output, React 19.3 features). No Next.js 17 had been announced as of the Nov 17, 2026 blog post. — [Next.js blog index](https://nextjs.org/blog)
- Security cadence: a critical RSC vulnerability (CVE-2025-66478, Dec 2025), a formal monthly security release program from July 2026, and out-of-band upstream security updates in Sept and Oct 2026. The team says AI-assisted auditing is why more advisories are appearing. — [Next.js blog index](https://nextjs.org/blog)
- State of JS 2025: Next.js was used by 59% of respondents and "keeps on gaining ground," yet its satisfaction ratio trails leader Astro by 39 points. The survey cites its learning curve and developer experience as pain points. — [State of JS 2025 meta-frameworks](https://2025.stateofjs.com/en-US/libraries/meta-frameworks/); [Strapi summary](https://strapi.io/blog/state-of-javascript-2025-key-takeaways); [InfoQ](https://www.infoq.com/news/2026/03/state-of-js-survey-2025)

**Astro**
- Astro 6 went stable Mar 10, 2026: a redesigned `astro dev` that can run on workerd, stable Live Content Collections, a stable CSP API, a built-in Fonts API, Node 22+, Vite 7, Zod 4, and removal of `Astro.glob()`. — [Astro 6 blog](https://astro.build/blog/astro-6); [AlternativeTo](https://alternativeto.net/news/2026/3/astro-6-0-brings-new-astro-dev-built-in-fonts-api-live-content-collections-and-csp-api); [Netlify changelog](https://netlify.com/changelog/2026-03-10-astro-6/)
- Astro 7.0 shipped Jun 22, 2026. It moves to Vite 8 with Rolldown and a Rust `.astro` compiler (oxc + Lightning CSS). Sätteri, a Rust Markdown/MDX processor, is now the default; unified/remark/rehype is opt-in via `@astrojs/markdown-remark`. Queued rendering is the default, route caching (`Astro.cache`, `routeRules`) is stable, and `src/fetch.ts` adds advanced routing with Hono middleware. The team reports 15–61% faster builds. Breaking changes: stricter HTML syntax, no silent HTML correction, and JSX-style whitespace. — [Astro 7 blog](https://astro.build/blog/astro-7/)
- The latest release is Astro 7.4 (Oct 15, 2026). 7.1 came Jul 16, 7.2 Aug 6 and 7.3 Sep 3. — [Astro blog index](https://astro.build/blog/)
- Cloudflare acquired the Astro team/company on Jan 16, 2026. Astro stays MIT-licensed and platform-agnostic. — [Cloudflare press release](https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-astro-to-accelerate-the-future-of-high-performance-web-development/); [The New Stack](https://thenewstack.io/cloudflare-acquires-team-behind-open-source-framework-astro/)
- State of JS 2025: Astro leads meta-framework satisfaction and went "from virtually unknown to serious contender." Its islands architecture lets React, Vue and Svelte components run on one page. — [State of JS 2025](https://2025.stateofjs.com/en-US/libraries/meta-frameworks/); [Strapi](https://strapi.io/blog/state-of-javascript-2025-key-takeaways)

**SvelteKit / Nuxt**
- The SvelteKit 3 alpha arrived in early June 2026. By August it was at 3.0.0-next.15, which requires Node 22+. I found no stable release. — [releases.sh digest Jun 2026](https://releases.sh/collections/frontend-frameworks/digest/2026-06-01); [Svelte blog Aug 2026](https://svelte.dev/blog/whats-new-in-svelte-august-2026)
- Nuxt 4.5 is the current stable line, with the focus on stabilizing Nuxt 5 (Nitro v3). Nuxt 3 reached EOL Jul 31, 2026. I found no stable Nuxt 5. — [Nuxt 4.5 blog](https://nuxt.com/blog/v4-5); [Nuxt roadmap](https://nuxt.com/docs/community/roadmap); [InfoQ](https://infoq.com/news/2026/08/nuxt-4-5-streaming)

**React Router / Remix / TanStack Start**
- React Router v8 was announced Jun 17, 2026, the first release on a yearly major cadence. v6 and Remix v2 are EOL; v7 still gets security fixes. Wikipedia lists 8.3.0 (Jul 23, 2026). — [React Router v8 blog](https://remix.run/blog/react-router-v8); [InfoQ](https://infoq.com/news/2026/08/react-route-v8); [Wikipedia](https://en.wikipedia.org/wiki/React_Router)
- Remix 3, a new non-React direction, had an RC on Aug 31, 2026, with a planned release Oct 2 at Remix Jam. A later newsletter still called it pre-release, so its stable status is unconfirmed. — [Remix 3 RC](https://remix.run/blog/remix-3-release-candidate); [Remix newsletter 45](https://remix.run/newsletter/45)
- TanStack Start 1.0 was announced stable and production-ready. Third-party sources date it Oct 13, 2026, after an RC that began Sept 2025. — [TanStack blog](https://tanstack.com/blog/tanstack-start-1-0); [tech-insider](https://tech-insider.org/tanstack-start-1-0-stable-release-2026/)

**Vite**
- Vite 8 uses Rolldown, a Rust bundler, in place of esbuild/Rollup. Astro 7 adopted it. — [Astro 7 blog](https://astro.build/blog/astro-7/)

### Inferences
- For the user's case (old site is React + Vite, content-heavy, a few interactive pieces), Astro 7 keeps their React components usable as islands, gives zero-JS content pages, and has first-class Markdown/MDX content collections. That makes it the lowest-friction choice for perf and SEO. Next.js 16 is the "showcase React/RSC skills" choice. Plain Vite + React gives SPA-only rendering, which hurts SEO/LCP unless prerendered.
- SvelteKit and Nuxt are viable, but both were mid-major-transition in late 2026. Starting there would mean either the outgoing major or a pre-release.
- TanStack Start and React Router v8 are app-oriented. They are overkill for a mostly static portfolio but fine if the user wants to learn them.

### Gaps
- No hard data on which frameworks portfolios specifically use. Survey data covers all developers, not portfolio sites.
- The Astro 7 post didn't detail the content collections/islands/view-transitions status or Node requirement. Astro 6 required Node 22+, and 7 is presumably the same or higher (unverified).
- Stable status of Remix 3, SvelteKit 3 and Nuxt 5 as of late Nov 2026 is unconfirmed. Current Vite version number beyond "Vite 8" is also unconfirmed.

## Styling: Tailwind v4, alternatives, shadcn/ui, and modern CSS features

### Takeaway
Tailwind CSS v4 is mature (v4.3, May 2026; v4.3.1 Jun 2026). Modern CSS (:has, container queries, nesting, same-document view transitions) is broadly Baseline. Anchor positioning, scroll-driven animations and cross-document view transitions are Interop 2026 focus areas: usable but still being made consistent, so use them as progressive enhancement.

### Cited Findings
- Tailwind v4.0 released Jan 22, 2025, v4.1 Apr 3, 2025, and v4.3 May 8, 2026 (scrollbar utilities, more logical properties, zoom/tab-size utilities, better `@variant`). v4.2 shipped without its own post (webpack plugin `@tailwindcss/webpack`, logical property utilities, new mauve/olive/mist/taupe palettes, faster recompiles). — [Tailwind blog](https://tailwindcss.com/blog); [Tailwind v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3); [InfoQ on 4.2](https://infoq.com/news/2026/04/tailwind-css-4-2-webpack); [Laravel News](https://laravel-news.com/tailwindcss-4-2-0)
- Latest patch reported: v4.3.1, Jun 12, 2026. — [releases.sh](https://releases.sh/tailwind-css/tailwind-css/highlights)
- State of CSS 2025: anchor positioning is the top "favorite new feature" and its share almost doubled. The View Transition API rose to 3rd and container style queries gained 11 spots. :has() and nesting lost ground "since these features are now supported in all major browsers." Ranking snippets were slightly inconsistent across localized pages. — [State of CSS 2025 usage](https://2025.stateofcss.com/en-US/usage/)
- Container queries, :has(), CSS nesting and subgrid were already Baseline Newly available per the 2024 survey analysis. — [web.dev State of CSS/HTML 2024](https://web.dev/blog/state-of-css-html-2024)
- Interop 2025 brought same-document view transitions to Baseline Newly available. Interop 2026 focus areas include anchor positioning, scroll-driven animations (both carried over), and cross-document view transitions. — [web.dev Interop 2026](https://web.dev/blog/interop-2026); [WebKit Interop 2026](https://webkit.org/blog/17818/announcing-interop-2026)
- Anchor positioning support was listed as Chrome/Edge 144, Firefox 151 and Safari 26. Anchor-positioning *animations* are not yet in Firefox. — [web.dev Interop 2026](https://web.dev/blog/interop-2026); [Can I Use](https://caniuse.com/wf-anchor-positioning-animations)
- `:active-view-transition` became Baseline Newly available (Jan 2026). — [Baseline digest Jan 2026](https://web.dev/blog/baseline-digest-jan-2026.md.txt)
- Scroll-driven animations of transform/opacity run off the main thread. — [Chrome I/O 2024 recap](https://developer.chrome.com/blog/new-in-web-ui-io-2024)

### Inferences
- Tailwind v4 (CSS-first config) is a safe default. CSS Modules or plain modern CSS with nesting and container queries is an equally valid zero-dependency choice for a small site.
- For a portfolio, scroll-driven animations and view transitions can replace much JS animation, with JS libraries as a fallback. Wrap them in `@supports` and `prefers-reduced-motion`.

### Gaps
- Exact Tailwind v4 browser floor not verified this session (commonly cited: Safari 16.4+, Chrome 111+, Firefox 128+, from the v4.0 announcement).
- No sourced data on shadcn/ui adoption on portfolios, vanilla-extract's 2026 status, or @starting-style Baseline status.
- Firefox/Safari support for scroll-driven animations and cross-document view transitions in late 2026 was not confirmed. Check caniuse.com.

## Content: MDX, content collections, Velite, Contentlayer, CMS

### Takeaway
Contentlayer is unmaintained and should be avoided. For Next.js, Velite or Content Collections (content-collections.dev) are the common replacements. For Astro, built-in content collections cover the need natively, now with a Rust Markdown pipeline in v7.

### Cited Findings
- Contentlayer is widely reported as abandoned/discontinued, with its last commit about 2 years before the cited posts. — [wisp.blog](https://www.wisp.blog/blog/contentlayer-has-been-abandoned-what-are-the-alternatives); [GitHub discussion](https://github-redirect.dependabot.com/contentlayerdev/contentlayer/discussions/628)
- Velite turns Markdown/MDX/YAML/JSON into a type-safe data layer with Zod schemas. — [Velite GitHub](https://github.com/zce/velite)
- Content Collections is recommended as a drop-in Contentlayer replacement (Dub migration write-up). — [Dub blog](https://dub.co/blog/content-collections)
- Astro 6 stabilized Live Content Collections. Astro 7 makes Sätteri (Rust) the default Markdown/MDX processor, with remark/rehype opt-in. — [AlternativeTo](https://alternativeto.net/news/2026/3/astro-6-0-brings-new-astro-dev-built-in-fonts-api-live-content-collections-and-csp-api); [Astro 7 blog](https://astro.build/blog/astro-7/)

### Inferences
- If the user relies on remark/rehype plugins (e.g., rehype-pretty-code), they need the opt-in unified pipeline on Astro 7.

### Gaps
- Velite's current (2026) release/maintenance status was not verified; older posts call it beta.
- Keystatic, TinaCMS, Sanity and other headless CMS options were not researched this session.

## Animation: Motion, GSAP, Lenis, 3D, Rive/Lottie

### Takeaway
GSAP is fully free, including formerly Club plugins (SplitText, MorphSVG), since Webflow's 2025 move. Motion (formerly Framer Motion) is very active at v14.x. Its core API remains MIT, with paid Motion+ extras. Lenis respects prefers-reduced-motion by default from 1.3.26.

### Cited Findings
- Webflow made GSAP "100% free" for everyone, including non-Webflow users and the formerly paid Club plugins. The plugins are now in the main GSAP npm package/GitHub repo and allowed in commercial projects. — [Webflow blog](https://webflow.com/blog/gsap-becomes-free); [GSAP pricing](https://gsap.com/pricing/); [GSAP 3.13 blog](https://gsap.com/blog/3-13/); [gsap-trial deprecated README](https://cdn.jsdelivr.net/npm/gsap-trial@3.13.0/README.md)
- Motion's latest library release is 14.14.0 (Nov 13, 2026). 14.0.0 (Oct 2, 2026) removed internal APIs kept for framer-motion compatibility. Motion UI 5.0.0 came Nov 24, 2026. The paid Motion+ is a one-time lifetime fee (Carousel, Ticker, Cursor, AnimateNumber, splitText, examples). The changelog says "All other APIs remain MIT." — [Motion changelog](https://motion.dev/changelog)
- Motion v12 had no breaking changes for React. — [Motion upgrade guide](https://motion.dev/docs/upgrade-guide)
- Lenis (darkroom.engineering) disables smoothing under prefers-reduced-motion by default from v1.3.26 (`respectReducedMotion: true`). — [Lenis README](https://raw.githubusercontent.com/darkroomengineering/lenis/main/README.md); [Motion docs on Lenis](https://motion.dev/docs/lenis)
- WCAG doesn't address smooth scrolling directly, but motion sensitivity is a design concern. — [Webflow University](https://university.webflow.com/lesson/check-system-motion-settings); [web.dev prefers-reduced-motion](https://web.dev/articles/prefers-reduced-motion)

### Inferences
- GSAP and Motion are both free for a portfolio. Pick Motion for React-idiomatic UI and layout animation, and GSAP (ScrollTrigger, SplitText) for timeline and scroll-heavy storytelling. On Astro, either works inside islands, or GSAP via plain scripts.
- Lenis is a common enhancement but should be optional. Native CSS `scroll-behavior` plus scroll-driven animations may suffice.

### Gaps
- No session research on React Three Fiber/Three.js/OGL, Rive or Lottie current versions or status.
- The exact core Motion license wasn't stated on the changelog page beyond "other APIs remain MIT."

## Hosting & analytics & OG images

### Takeaway
All three major hosts are free for a static portfolio. Cloudflare is the most generous: unlimited static bandwidth, commercial use allowed, and natural Astro alignment. Vercel Hobby is the smoothest for Next.js but non-commercial only. Netlify moved to credit-based billing in Sept 2025, which makes limits less predictable.

### Cited Findings (checked Sept 16, 2026 by source)
- Vercel Hobby: 100 GB transfer, 1M edge requests, 1M function invocations and 4 CPU-hours a month, 100 deployments a day. Personal, non-commercial use only. Features pause at the limit with no overage billing. — [flaviocopes free tiers](https://flaviocopes.com/hosting-free-tiers/)
- Netlify Free: 300 credits/month (1 GB bandwidth = 20 credits; production deploy = 15 credits; previews free). Commercial use is allowed. Going over pauses every project on the account until the next cycle. Credit billing began Sept 2025. — [flaviocopes](https://flaviocopes.com/hosting-free-tiers/); [DEV comparison](https://dev.to/lazydev_oh/vercel-vs-netlify-vs-cloudflare-pages-2026-deep-comparison-with-real-numbers-8pl)
- Cloudflare Pages/Workers: unlimited static requests and bandwidth, 500 builds/month, and Workers/Pages Functions at 100k requests/day with 10 ms CPU each. Commercial use is allowed. — [flaviocopes](https://flaviocopes.com/hosting-free-tiers/)
- Sources conflict on some Vercel numbers (e.g., build minutes 6,000 vs 300). — [DEV comparison](https://dev.to/build996/vercel-vs-netlify-vs-cloudflare-pages-free-frontend-hosting-compared-3h9g)
- Next.js 16.2 introduced a stable Adapter API and a cross-platform working group (OpenNext) for consistent non-Vercel deployment. — [Next.js across platforms](https://nextjs.org/blog/nextjs-across-platforms.md)

### Inferences
- Astro + Cloudflare is the natural pairing post-acquisition, but Astro still deploys anywhere. Next.js + Vercel is the lowest-friction Next.js option. A personal non-commercial portfolio fits Hobby terms.

### Gaps
- GitHub Pages limits were not verified this session (commonly cited: 1 GB site, 100 GB/month soft bandwidth).
- Vercel Analytics, Plausible and Umami pricing/free tiers for 2026 were not researched.
- OG image generation (next/og / Satori, Astro equivalents) was not researched this session.

## Performance & accessibility expectations

### Takeaway
Core Web Vitals thresholds are unchanged in 2026: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, measured at the 75th percentile of field data. WCAG 2.2 AA remains the applicable standard. WCAG 3 is still a Working Draft (latest Sept 10, 2026) and won't replace 2.x for years.

### Cited Findings
- Good / poor thresholds: LCP ≤ 2,500 ms / > 4,000 ms; INP ≤ 200 ms / > 500 ms; CLS ≤ 0.1 / > 0.25. All are assessed at p75 of CrUX field data, and a page passes only if all three are good. The official page was last updated May 2025 and has no 2026 change. — [web.dev thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds); [corewebvitals.io](https://corewebvitals.io/core-web-vitals)
- A third-party report says 85.3% of origins had good INP in Aug 2026 (unverified against CrUX release notes). — [corewebvitals.io](https://corewebvitals.io/core-web-vitals)
- WCAG 3: Working Drafts in Mar 2026 and Sept 10, 2026. W3C says it won't supersede WCAG 2 soon, and WCAG 2 won't be deprecated for several years after WCAG 3 is final. Keep using WCAG 2. — [W3C WCAG 3 news Mar 2026](https://www.w3.org/WAI/news/2026-03-03/wcag3); [WCAG 3 explainer Sept 2026](https://www.w3.org/TR/2026/DNOTE-wcag-3.0-explainer-20260910/); [WCAG 3 intro](https://www.w3.org/WAI/WCAG3)
- prefers-reduced-motion guidance: reduce or remove non-essential motion when set. — [web.dev](https://web.dev/articles/prefers-reduced-motion)

### Inferences
- Practical targets for a portfolio: Lighthouse 95–100 in all categories in lab, plus all-green CWV in the field. A mostly static Astro site reaches this by default. Heavy hero WebGL/animation is the main LCP/INP risk.
- WCAG 2.2 AA basics to apply include visible focus not obscured by sticky headers, 24×24 px minimum targets, keyboard-operable menus and modals, skip link, colour contrast 4.5:1, alt text, and reduced-motion handling for every animation library used.

### Gaps
- The WCAG 2.2 criterion text (2.4.11 Focus Not Obscured, 2.5.8 Target Size 24×24 CSS px) comes from model knowledge and was not fetched this session. Verify at w3.org/TR/WCAG22.
- No authoritative "Lighthouse target" exists. The 90+ "good" band is Lighthouse's scoring convention and was not sourced here.
- SEO specifics (Next.js Metadata API, Astro sitemap integration, JSON-LD Person schema per schema.org, OG image requirements) were not researched this session.
