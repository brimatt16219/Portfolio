# Exemplar Developer / Design-Engineer Portfolio Teardowns (state as of Nov 2026)

Method note: every site below was fetched live on 2026-11-24 with a text-extraction fetcher. That tool returns page text and links, not rendered visuals. So structure, copy, page inventory and freshness are verified. Visual claims (colors, fonts, motion, cursor effects) are verified only where the page states them (e.g. a footer colophon). Anything else about visuals is marked "(from prior knowledge, not re-verified)" and should be treated as lower confidence.

## 1. Per-site teardowns (16 sites)

### Takeaway
The admired sites split into three archetypes. **Text-first "senior minimal"** sites (leerob, paco, emilkowal.ski, shud.in, delba.dev, antfu, cassidoo) are a short bio plus link lists. **Lab/craft-driven design engineers** (rauno, jhey, brianlovin, joshwcomeau) let a gallery of prototypes or tools be the proof of skill. **Immersive creative-developer** sites (bruno-simon, Awwwards SOTD winners) make the site itself the demo. Almost every one has a single memorable hook that is not the project list.

### Cited Findings

**Brittany Chiang — brittanychiang.com (Frontend Engineer, Klaviyo)**
- Hero: name, the title "Frontend Engineer", and the tagline "I build accessible, pixel-perfect experiences for the web." There is a skip-to-content link. — [brittanychiang.com](https://brittanychiang.com)
- Navigation: in-page anchors (About / Experience / Projects) plus 5 social icons (GitHub, LinkedIn, CodePen, Instagram, Goodreads). — [brittanychiang.com](https://brittanychiang.com)
- Experience: a timeline of 6 roles (2015 to 2024–present) with date ranges, a company link, a description and tech-tag pills. Links go to a résumé PDF and a "View Full Project Archive". — [brittanychiang.com](https://brittanychiang.com)
- Projects: cards with a screenshot, description and tech tags. One shows the social-proof stat "Halcyon Theme 100k+ Installs". An archived v4 of the site is listed as a project. — [brittanychiang.com](https://brittanychiang.com)
- Writing section has entries from 2019 to 2026, so the site is current. — [brittanychiang.com](https://brittanychiang.com)
- Stack, per the footer colophon: designed in Figma, coded in VS Code, built with Next.js and Tailwind CSS, deployed on Vercel, set in Inter. — [brittanychiang.com](https://brittanychiang.com)
- Easter egg: a spinning TARDIS GIF labelled "Click to time travel", which links to old versions of the site. — [brittanychiang.com](https://brittanychiang.com)
- (From prior knowledge, not re-verified) The layout is two columns: a sticky left column with name and nav, and a right column that scrolls. The background is dark navy with a cursor-following radial "spotlight" gradient. The fetch could not confirm the spotlight.
- **Memorable thing:** the most-cloned layout in dev portfolios. A sticky split-screen résumé with a cursor spotlight, plus a playful TARDIS link to past versions.

**Lee Robinson — leerob.com**
- The homepage is plain text: name, X handle, then a bio. The bio says he "works on Product at SpaceX (formerly at Cursor), helping build Grok Bot" and was previously at Vercel on Next.js. It also says he has coded for 15 years. — [leerob.com](https://leerob.com). *Caveat: this employer claim is surprising. It is reported verbatim from the live page, and the writer should spot-check it.*
- There is no top menu. Instead there is a "Notes" list of topic pages (Things I believe, Understanding AI, Developer experience, Developer marketing, Personal software, Product engineers, etc.). Below it is a "Blogs" list of dated title links with no excerpts. The newest is "How we teach AI models" (July 2026). — [leerob.com](https://leerob.com)
- There is no projects section. Work is shown only through company affiliations and the writing. — [leerob.com](https://leerob.com)
- **Memorable thing:** extreme reduction. The site reads like a plain-text document of beliefs and essays, so the writing is the portfolio.

**Rauno Freiberg — rauno.me (interaction designer, Vercel / Devouring Details)**
- Homepage: a one-line intro, then a short manifesto that begins "Make it fast." and ends "Make it." Nav: Craft, Projects, Field Notes, plus an external link to History of Software Design. The email link copies to the clipboard and shows a "Copied" state. Past years (2022, 2023) are archived on separate subdomains. — [rauno.me](https://rauno.me)
- The /craft page holds about 70 entries from 2021 to 2026, each with a thumbnail and a date. Labels show what each entry is: "View Prototype" (interactive demo), "View Production" (shipped site) or "Read Essay". Examples include Vanish Input, Flashlight Tabs, Radial Menu, Gooey Shader, SwiftUI Dock, Toolbar Morph, ⌘K Breadcrumbs and "Hold Enter to confirm". The newest entries are 2026 (Vercel Agent, DD System, Novelty, History of Software Design, Posters). — [rauno.me/craft](https://rauno.me/craft)
- **Memorable thing:** the craft archive. A dated grid of micro-interaction prototypes that shows taste and process rather than describing it. Archiving each year on its own subdomain is also distinctive.

**Paco Coursey — paco.me (design engineer, Linear)**
- Single page with stacked sections: an intro ("Crafting interfaces", webmaster at Linear, formerly the Vercel design system and dashboard), then Building (links to /craft), Projects, Writing, Now and Connect. — [paco.me](https://paco.me)
- Projects are three text entries, each with a one-line description and a GitHub link: cmdk, Writer and next-themes. The open-source tools are the proof. — [paco.me](https://paco.me)
- The page includes an inline "Now" section with music playlists. The footer reads "2025", so the site was updated recently but not in 2026. — [paco.me](https://paco.me)
- A third-party roundup describes it as mostly text with no large animations, a deliberately plain approach. — [Hostinger](https://www.hostinger.com/ca/tutorials/web-developer-portfolio/)
- **Memorable thing:** restraint as signature. Very little on the page, but every listed project (cmdk, next-themes) is something other developers use daily.

**Emil Kowalski — emilkowal.ski (Design Engineer, ex-Linear and Vercel)**
- Structure: an announcement banner ("Enrollment for my animation course is open!" with a countdown, "11 hours left"), then name and title, then a "Today" status paragraph (currently on a break), then 4 projects (aiforui.dev, Sonner, animations.dev, Vaul) with one-line descriptions, then 7 articles under /ui/ with summaries. The footer is one sentence of social links. — [emilkowal.ski](https://emilkowal.ski)
- Articles have no visible dates. — [emilkowal.ski](https://emilkowal.ski)
- **Memorable thing:** a portfolio that doubles as a funnel. Popular OSS components (Sonner, Vaul) and animation essays feed directly into his paid course.

**Josh W. Comeau — joshwcomeau.com**
- More a blog and course storefront than a portfolio. Nav: categories, courses, goodies, About. At fetch time the hero was a Black Friday sale banner. Main sections: an article feed (title, subtitle, excerpt), Browse by Category (CSS, React, Animation, ...), Popular Content (interactive flexbox and grid guides, CSS reset), courses (CSS for JS Devs, Joy of React, Whimsical Animations) and a newsletter. — [joshwcomeau.com](https://www.joshwcomeau.com)
- The footer has a "Disable sounds" toggle and a dark-mode toggle, plus an AI Policy page. Copyright reads "2018–present". A featured article covers Interop 2027. — [joshwcomeau.com](https://www.joshwcomeau.com)
- (From prior knowledge, not re-verified) Signature whimsy includes an animated dark-mode toggle, sound effects on interactions, "like" hearts and inline interactive playgrounds inside articles.
- **Memorable thing:** sound and whimsy as brand. A toggle to *disable sounds* tells you the site has them by default, and the articles embed interactive widgets.

**Anthony Fu — antfu.me (OSS developer, Vercel / Nuxt)**
- Nav: Blog, Projects, Talks, Sponsors, Podcasts, Photos, Demos, plus /use (gear). Several nav items are icon-only. — [antfu.me](https://antfu.me)
- Projects are text lists grouped by role ("Creator of", "Recent work", "Core team of", "Maintaining"), not cards. Recent work includes Vite DevTools and pulls.review. — [antfu.me](https://antfu.me)
- The footer carries a sponsorship CTA (GitHub Sponsors, Open Collective, Afdian) and a CC BY-NC-SA 4.0 license. Copyright reads "2021–PRESENT". Generative experiments live at 100.antfu.me. — [antfu.me](https://antfu.me)
- (From prior knowledge, not re-verified) The homepage background has a subtle generative plum-branch or dot art animation, a monospace-leaning minimal type style, and a lot of whitespace.
- **Memorable thing:** a prolific OSS footprint presented as a calm, sorted list, plus a personal side (photos, generative art) that makes it feel human.

**Brian Lovin — brianlovin.com (software designer, Notion AI)**
- Nav: About, Writing, Hacker News (his own HN reader with a daily digest), Stack, Sites (curated well-designed sites), TIL, AMA, How to Computer Better, Listening (Spotify), Activity (public likes and visits), App Dissection. — [brianlovin.com](https://brianlovin.com)
- Projects are 14 items with one-line descriptions, a mix of in-site tools and external projects (Staff Design, Design Details, Tax UI, HN CLI). The footer links the source repo ("briOS"), llms.txt and the sitemap. One writing entry is dated August 2026. — [brianlovin.com](https://brianlovin.com)
- (From prior knowledge, not re-verified) The layout is app-like, with a persistent left sidebar resembling a macOS or iOS app shell.
- **Memorable thing:** the site is an operating system ("briOS"), a personal app suite of tools, readers and lists rather than a brochure. It also ships an llms.txt for AI agents.

**Bruno Simon — bruno-simon.com (creative developer)**
- The entire portfolio is a 3D driving game: "Please drive around to learn more about me and discover the many secrets of this world." It includes achievements, a timed Circuit mode, a "whispers" board of visitor messages (max 30, one per user) and a "Behind the scene" credits page. — [bruno-simon.com](https://bruno-simon.com)
- Tech: Three.js running on WebGL or WebGPU via TSL, Rapier physics and Howler.js audio. There are Low/High quality and renderer options, plus keyboard, mouse, touch and gamepad controls. Source is MIT-licensed on GitHub (folio-2025). At fetch time the server was offline, so scores and whispers were unavailable. — [bruno-simon.com](https://bruno-simon.com)
- In his own write-up, Simon says he kept the original concept but rebuilt it for the WebGPU era to make it "ten times better". — [Codrops, Oct 2025](https://tympanus.net/codrops/2025/10/06/self-doubt-and-the-quest-for-fun-how-i-ended-up-turning-my-portfolio-into-a-game/); [Awwwards case study](https://www.awwwards.com/brunos-portfolio-case-study.html)
- The code and Blender files are MIT and the music is CC0. — [GeekNews summary](https://news.hada.io/topic?id=24963)
- The original 2019 version won Awwwards Site of the Year in 2020. — [Awwwards](https://www.awwwards.com/sites/bruno-simon-portfolio)
- **Memorable thing:** you drive a little car through his portfolio. It is the canonical immersive dev portfolio, now with social and gamified layers (achievements, leaderboards, guest whispers).

**Maggie Appleton — maggieappleton.com (designer / anthropologist / developer, GitHub Next)**
- Nav: The Garden, Essays, Notes, Patterns, Smidgeons, Talks, Podcasts, Library, Antilibrary, Now, About. The footer adds a Colophon. — [maggieappleton.com](https://maggieappleton.com)
- Content types are defined by certainty. Essays are opinionated long-form. Notes are "loose, unopinionated" notes on things she doesn't fully understand yet. Patterns are design patterns. Smidgeons are tiny links and thoughts. The Garden is "a collection of imperfect notes, essays, and ideas growing slowly over time." — [maggieappleton.com](https://maggieappleton.com)
- Essay cards carry hand-drawn header illustrations. Dates are relative ("over 1 year ago"). — [maggieappleton.com](https://maggieappleton.com)
- **Memorable thing:** the digital garden. A taxonomy by maturity and certainty (plus an "Antilibrary" of books she hasn't read), with illustrated visual essays.

**Cassidy Williams — cassidoo.co (Sr. Director of Developer Advocacy, GitHub)**
- Hero: a photo, "Software Engineer in Chicago", and "I like to make memes and dreams and software." Nav: Home, Newsletter, Blog, GitHub, Socials. — [cassidoo.co](https://cassidoo.co)
- There is no projects page. Projects are blog posts tagged #project (e.g. "Building Kakuro Zone"). There is a "read a random one!" link. Posts are dated Nov 4–17, 2026, and the copyright reads 2026. The site is open source. — [cassidoo.co](https://cassidoo.co)
- **Memorable thing:** personality-first voice and a very active blog plus newsletter. The person's humor is the brand, not the visuals.

**Delba de Oliveira — delba.dev (developer educator, ex-Vercel)**
- The page is now a job-seeking portfolio. A "Portfolio" heading states that she seeks roles in developer education or technical video production, with a "Let's talk" link to LinkedIn. Sections: Work (Next.js Docs, Next.js Learn, a Figma diagram system, Vercel Knowledge Base, v0 docs, Flags SDK docs), Personal (a Remotion-based video framework, a Claude Code terminal course) and About me. — [delba.dev](https://delba.dev)
- Visual explainers (diagrams) are described as reusable across docs. Videos are YouTube links, not inline players. No dates are shown. — [delba.dev](https://delba.dev)
- **Memorable thing:** a portfolio built to land a job. The headline CTA is the job she wants, and the evidence is a list of shipped docs and education systems. This has shifted from the earlier blog of visual explainers.

**Jhey Tompkins — jhey.dev (designer/engineer, Shopify Brand Design Studio)**
- The intro calls him a designer, engineer and "Tastemaker" at Shopify, formerly at Google and Vercel. Nav: Index, Email, an AMA repo, Follow on X. — [jhey.dev](https://jhey.dev)
- A "Latest" section lists 5 numbered prototypes at year-based URLs (/prototypes/2026/...), e.g. "Impossible Toggle" and "Flip to tip", with a "View all" index link. The footer shows © 2026 and a revision hash. The page also has live status widgets: weather with a timestamp, Steam and Spotify. — [jhey.dev](https://jhey.dev)
- **Memorable thing:** a stream of playful CSS/JS prototypes, each one a "how did he do that?", plus live "presence" widgets that make the site feel inhabited.

**Shu Ding — shud.in (Vercel: Next.js, AI SDK, v0)**
- Minimal. A heading name, a bio ("Making things at Vercel"; interests: visual, web, math, game, HCI), and a nav of About / Thoughts / Projects / Guestbook. — [shud.in](https://shud.in)
- No dates are visible, so freshness can't be judged from the page. — [shud.in](https://shud.in)
- (From prior knowledge, not re-verified) Known for refined typography and subtle details. Shu Ding created Nextra and Satori.
- **Memorable thing:** quiet typographic minimalism from someone whose OSS work (Satori, Nextra, SWR contributions) speaks for itself. The guestbook adds a social touch.

**Kent C. Dodds — kentcdodds.com**
- Hero: "Helping people make the world a better place through quality software." Nav: Blog, Talks, Courses, Better, Discord, Calls, About, plus semantic search and a dark-mode toggle. — [kentcdodds.com](https://kentcdodds.com)
- Shows live reading stats (214 posts, 967,535 reads by 768,623 people). There is team gamification ("The blue team is winning" via /teams read rankings), personalized recommendations ("Prepared especially for you"), a Call Kent page, a Chats podcast and course sites (Epic Web, Epic React, Epic AI, etc.). Copyright reads 2026. — [kentcdodds.com](https://kentcdodds.com)
- The tech stack is not stated on the page. (From prior knowledge, not re-verified: it is built with Remix/React Router and is open source.)
- **Memorable thing:** a full-stack app as a portfolio. Logins, teams, semantic search and call-ins make it a product demo of his teaching.

**2026 Awwwards SOTD creative-developer portfolios**
- These personal portfolios won Awwwards Site of the Day plus the Developer Award: Artemii Lebedev (Nov 22, 2026), Carter Ogunsola (Nov 19, 2026), Justin Jefferson (Nov 7, 2026, by LayerTwo), G. Colombel "Portfolio 2026" (Oct 28, 2026) and Brandon Yasin (Oct 24, 2026). — [Awwwards developer filter](https://www.awwwards.com/inspiration_search/developer/)
- Earlier 2026 SOTD portfolio winners include Pacôme Pertant (Jun 9), Cathy Dolle (Feb 27), Artem Shcherban (Apr 5), Ravi Klaassens (Apr 15) and Juan Mora (May 15). — [Awwwards search](https://www.awwwards.com/inspiration_search/developer/) (search-snippet level, not individually verified)
- Mathis Biabiany shipped a new portfolio that was discussed on the Three.js forum. — [three.js discourse](https://discourse.threejs.org/t/mathis-biabiany-new-portfolio/93340)

### Inferences
- The most admired "engineer" portfolios carry almost no portfolio chrome. The credibility comes from artifacts other people use (cmdk, Sonner, Vaul, Satori, Vite, next-themes) or from a big writing archive.
- Several sites have become storefronts or funnels (Josh, Emil, Kent) or job-hunt pages (Delba). The portfolio's job tracks the owner's current goal.
- Freshness varies. Paco (footer 2025) and Shu Ding (no dates) look stable or static. Cassidy, Jhey, Rauno, Lee and Brian show 2026 activity.

### Gaps
- Rendered visuals (color palettes, typefaces, motion) could not be verified for most sites, because the fetch tool returns text only. Screenshots or a browser pass are needed.
- Tech stacks are confirmed only for Brittany Chiang (footer) and Bruno Simon (credits page). The others are from prior knowledge or unknown.
- The Awwwards 2026 winners were not individually fetched. Their techniques and structure are unverified.
- Godly and Siteinspire listings were not consulted (tool budget).

## 2. How projects are presented and which pages are included

### Takeaway
Project presentation ranges from no projects at all (leerob) to a plain text list with one-liners (paco, emil, antfu, brianlovin, delba), cards with screenshots and tech tags (brittanychiang), a dated lab or prototype archive (rauno /craft, jhey /prototypes, paco /craft), and an explorable world (bruno-simon). Full case studies are rare among top dev portfolios. Beyond About and Writing, the recurring pages are Now, Uses/Stack, Guestbook, Craft/Lab, TIL/Notes, AMA and Bookmarks/Sites.

### Cited Findings
- **Text list with one-liners and repo links:** paco.me (cmdk, Writer, next-themes) — [paco.me](https://paco.me); emilkowal.ski (4 projects) — [emilkowal.ski](https://emilkowal.ski); antfu.me (grouped by role) — [antfu.me](https://antfu.me); brianlovin.com (14 items) — [brianlovin.com](https://brianlovin.com)
- **Cards with screenshot, tech tags and social-proof metrics:** brittanychiang.com ("100k+ Installs") — [brittanychiang.com](https://brittanychiang.com)
- **Lab/craft archive with dated prototypes labelled Prototype / Production / Essay:** [rauno.me/craft](https://rauno.me/craft); year-pathed prototypes at [jhey.dev](https://jhey.dev); paco.me links a /craft page — [paco.me](https://paco.me)
- **Projects as blog posts:** cassidoo.co (#project tag) — [cassidoo.co](https://cassidoo.co)
- **Embedded interactive content inside writing:** joshwcomeau.com interactive guides (flexbox and grid) — [joshwcomeau.com](https://www.joshwcomeau.com)
- **Immersive world:** bruno-simon.com — [bruno-simon.com](https://bruno-simon.com)
- **Page inventory seen:**
  - Now: [paco.me](https://paco.me), [maggieappleton.com](https://maggieappleton.com)
  - Uses/Stack: [antfu.me /use](https://antfu.me), [brianlovin.com Stack](https://brianlovin.com)
  - Guestbook: [shud.in](https://shud.in); Bruno's "whispers" board — [bruno-simon.com](https://bruno-simon.com)
  - AMA: [brianlovin.com](https://brianlovin.com), [jhey.dev](https://jhey.dev)
  - TIL: [brianlovin.com](https://brianlovin.com)
  - Curated sites/bookmarks: [brianlovin.com Sites](https://brianlovin.com)
  - Library/Antilibrary: [maggieappleton.com](https://maggieappleton.com)
  - Photos: [antfu.me](https://antfu.me)
  - Listening/Spotify: [brianlovin.com](https://brianlovin.com), [jhey.dev](https://jhey.dev)
  - Talks: [antfu.me](https://antfu.me), [kentcdodds.com](https://kentcdodds.com), [maggieappleton.com](https://maggieappleton.com)
  - Colophon: [maggieappleton.com](https://maggieappleton.com); footer colophon at [brittanychiang.com](https://brittanychiang.com)
  - Archived past versions: [brittanychiang.com](https://brittanychiang.com) (TARDIS, v4 archive); [rauno.me](https://rauno.me) (yearly subdomains)
  - llms.txt: [brianlovin.com](https://brianlovin.com)

### Inferences
- For design engineers, the lab/craft page has replaced the case study as the main proof. It is cheap to add to, it is dated (which signals ongoing practice), and visitors can play with it.
- "Presence" signals (Now, Listening, live weather, Activity feeds) are a growing pattern. They make a static site feel alive.

### Gaps
- Bookmarks pages specifically were not found on these sites (Brian Lovin's "Sites" is the closest).
- The inner pages (/projects, /thoughts, /guestbook) of shud.in and rauno.me /projects were not fetched.

## 3. Recurring patterns and "senior minimal" vs "creative immersive"

### Takeaway
Shared DNA across the best sites: a first-person one- to three-sentence bio naming the current employer, few or no images, link lists over cards, dated writing, open source and colophons, and one distinctive hook (spotlight cursor, craft archive, sound, a car, a garden, an OS metaphor). The minimal camp optimizes for reading speed and signal density. The immersive camp optimizes for one unforgettable experience at the cost of scannability and performance, which is why Bruno offers quality and renderer toggles.

### Cited Findings
- Bio-first heroes that name the employer: Linear (paco), Notion (brianlovin), Shopify (jhey), Vercel (shud.in, rauno, antfu), GitHub (cassidoo, maggie), Klaviyo (brittany) — [paco.me](https://paco.me), [brianlovin.com](https://brianlovin.com), [jhey.dev](https://jhey.dev), [shud.in](https://shud.in), [rauno.me](https://rauno.me), [antfu.me](https://antfu.me), [cassidoo.co](https://cassidoo.co), [maggieappleton.com](https://maggieappleton.com), [brittanychiang.com](https://brittanychiang.com)
- Open-source sites and transparency: brianlovin "briOS" repo plus llms.txt — [brianlovin.com](https://brianlovin.com); cassidoo is open source — [cassidoo.co](https://cassidoo.co); Bruno MIT — [bruno-simon.com](https://bruno-simon.com); Brittany's colophon — [brittanychiang.com](https://brittanychiang.com); jhey shows a revision hash — [jhey.dev](https://jhey.dev)
- Monetization and CTA layers: course banners (Emil, Josh, Kent), sponsors (antfu), a job CTA (Delba) — [emilkowal.ski](https://emilkowal.ski), [joshwcomeau.com](https://www.joshwcomeau.com), [kentcdodds.com](https://kentcdodds.com), [antfu.me](https://antfu.me), [delba.dev](https://delba.dev)
- Gamification and social layers appear in both camps: Kent's teams, Bruno's achievements and whispers, guestbooks — [kentcdodds.com](https://kentcdodds.com), [bruno-simon.com](https://bruno-simon.com), [shud.in](https://shud.in)
- Mainstream roundups echo this: "make it clear what you do, proof you do it well, and how to hire you". A plain text approach (Paco) and Bruno's interactive world are cited as the two poles. — [Colorlib](https://colorlib.com/wp/developer-portfolios/), [Hostinger](https://www.hostinger.com/ca/tutorials/web-developer-portfolio/), [Elementor](https://elementor.com/blog/best-web-developer-portfolio-examples/)
- The immersive tier is dominated by Three.js/WebGL/WebGPU work. Bruno rebuilt for WebGPU via TSL, and Awwwards keeps awarding dev portfolios SOTD plus the Developer Award monthly through Nov 2026. — [Codrops](https://tympanus.net/codrops/2025/10/06/self-doubt-and-the-quest-for-fun-how-i-ended-up-turning-my-portfolio-into-a-game/), [Awwwards](https://www.awwwards.com/inspiration_search/developer/)

### Inferences
- **Senior minimal** (leerob, paco, emil, shud.in, antfu):
  - Mostly a single page or a few pages, text over images, system or neutral type.
  - The proof comes from external artifacts (OSS, employers, essays).
  - The memorable thing is usually voice, or one micro-detail.
- **Craft / design-engineer** (rauno, jhey, josh, brianlovin, brittany):
  - Still mostly minimal chrome.
  - Adds interactive proof: prototypes, sound, cursor effects, app-like shells.
  - This is the sweet spot for a developer who wants to show front-end taste without hurting scannability.
- **Creative immersive** (bruno-simon, Awwwards SOTD winners):
  - The site is the project: WebGL/WebGPU, physics and audio.
  - High wow factor, but slower to scan. Needs fallbacks (quality toggles, mobile controls).
  - Best for people targeting creative studios or agencies.
- A safe 2026 synthesis:
  - A minimal, fast, text-forward core: bio, selected work, writing.
  - A dated craft/lab section for interactive proof.
  - One signature interaction or easter egg.
  - "Alive" signals (Now, latest updates).
  - Optionally an archive of past versions and an llms.txt.

### Gaps
- No primary-source redesign blog posts from 2025–2026 were fetched for the minimal-camp owners (e.g. Paco's "Redesign 2021" is old). Their stated rationale is not captured.
- No quantitative data (traffic, hiring outcomes) links these styles to results. Effectiveness claims are qualitative.
