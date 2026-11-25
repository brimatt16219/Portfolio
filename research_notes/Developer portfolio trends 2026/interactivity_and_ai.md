# Interactive Features, Gimmicks, and AI-Era Trends on Developer Portfolios (late 2026)

Research date: 2026-11-24. About 15 tool calls. Most sources are practitioner blogs, HN threads, Codrops/Awwwards write-ups and product pages. I found almost no survey or measured recruiter data, so read any "recruiter" claim as anecdote or opinion unless it says otherwise.

## Q1: Which interactive features are seen on dev portfolios, and which are praised or criticized (and why)?

### Takeaway
Novelty features get praise when they are well executed, load fast, work on mobile, and leave the content easy to reach. The sharpest criticism goes to game-first or simulation-first homepages that put content behind interaction or cost a lot of CPU/GPU. The safer, widely admired patterns are smaller, interaction-tied craft details: sound on hover and click, Cmd+K command menus, keyboard navigation, and easter eggs that add to a normal site instead of replacing it.

### Cited Findings
**3D/game portfolios (Bruno Simon)**
- Bruno Simon's 2019 Three.js "drive a red car" portfolio went viral and, in his words, jump-started his career. His 2025 rebuild keeps the same concept "ten times better", uses TSL so it runs on WebGPU when available, and is open source (MIT, github.com/brunosimon/folio-2025) — [Awwwards case study / search summary](https://www.awwwards.com/brunos-portfolio-case-study.html); [Awwwards Site of the Month](https://www.awwwards.com/bruno-simon-portfolio-wins-site-of-the-month-november.html)
- The HN thread "Bruno Simon – 3D Portfolio" (about late 2025/early 2026) got 777 points and 188 comments. Commenters praised the craft and polish. Performance was the most common complaint: long loads with no progress indicator, phone stutter, and "CPU usage is almost 100% all the time" (ertucetin). On usability: "very impressive as an art project, but terrible as an actual home page" (gldrk) and "functions poorly as a website" (didibus). Others pointed out that the author sells Three.js courses, so the site doubles as marketing (onion2k). Another commenter called it "extremely-well-executed portfolio site; no more, no less" (nbadg). Reports on iOS long-press interfering with driving, and on Firefox support, conflicted — [Hacker News](https://news.ycombinator.com/item?id=46206531)
- The genre keeps spawning imitators: a 2026 Codrops 3D portfolio write-up, Three.js forum "playable portfolio" posts, and a dev.to challenge entry titled "I built Bruno Simon's portfolio in 20 days" — [Codrops 2026-06-11](https://tympanus.net/codrops/2026/06/11/sketching-the-impossible-a-3d-portfolio-built-without-a-single-3d-model/); [dev.to](https://dev.to/asynchronope/i-built-bruno-simons-portfolio-in-20-days-heres-my-jakarta-street-3d-experience-2ghp); [three.js forum](https://discourse.threejs.org/t/i-turned-my-portfolio-into-a-tiny-three-js-game-bikes-cars-police-and-a-jetpack/93130)

**Terminal/CLI portfolios**
- "Show HN: Terminal-Style Portfolio on the Internet" (kuber.studio, 2026) got 22 points and 9 comments. Commenters praised the easter eggs and the mobile support ("making it work pretty much flawlessly on mobile"). Criticisms: a mobile bug (black screen after the fifth project), requests for real Unix commands (`ls`, `whoami`), typing animations that "ruin the illusion", and "It's annoying to have to download files" (asking for an HTML CV). The author said an earlier version with real shell commands was "un-navigatable for non-technical folks", which is the core usability tradeoff of terminal sites — [HN via hn.nuxt.dev](https://hn.nuxt.dev/item/47205127)

**Sound design, Cmd+K, craft details (design-engineer community)**
- In 2026 Codrops showcases, sound is part of the interaction design. R—K '26 adds audio to hover, click and menu states "because it adds a bit more weight to transitions". Maria Vasilyeva's portfolio treats interaction and sound as "not decoration added afterwards" — [Codrops R—K '26, 2026-04-07](https://tympanus.net/codrops/2026/04/07/r-k-26-the-thinking-and-code-behind-a-portfolio-led-by-presence/); [Codrops Maria Vasilyeva, 2026-10-20](https://tympanus.net/codrops/2026/10/20/maria-vasilyeva-portfolio/)
- Cmd+K command menus are well established in this community. Rauno Freiberg (Vercel design engineer) is a key contributor to the cmdk React component — [yespress profile of Rauno Freiberg](https://yespress.io/rauno-freiberg.md)
- The 2026 craft trend leans toward subtraction and "quiet" detail: Alex Tkachev dropped traditional case studies and kept only what "has a reason to be there", and bleibtgleich'26 moved from brutalism to minimalism. Edoardo Lunardi argues the codebase itself is part of the craft — [Codrops bleibtgleich'26, 2026-09-23](https://tympanus.net/codrops/2026/09/23/bleibtgleich26-a-180-turn-from-brutalism-to-minimalism/); [Codrops Lunardi, 2026-04-02](https://tympanus.net/codrops/2026/04/02/where-engineering-meets-craft-edoardo-lunardis-obsession-with-the-details/); [Codrops Tkachev](https://tympanus.net/codrops/?p=123166)

**Multiplayer cursors, guestbooks, custom cursors (indie/handmade web)**
- Live multiplayer cursors are now a one-line add (PartyKit "cursor-party"). Spencer Chang's playhtml makes elements multiplayer with an HTML attribute — [PartyKit blog](https://blog.partykit.io/posts/cursor-party); [playhtml](https://playhtml.pages.dev); conceptual framing: [Maggie Appleton, "Ambient copresence"](https://maggieappleton.com/ambient-copresence)
- One blogger found many commenters dislike custom cursors and added a footer toggle to turn them off — [dev.to, Brennan](https://dev.to/brennan/building-my-blog-from-scratch-indieweb-new-features-and-three-months-of-iterations-4b1d)
- Guestbooks, chatboxes, cursor trails and /now pages are standard ideas on indie-web lists, part of a broader "handmade web" revival — [32-Bit Cafe](https://32bit.cafe/websiteideas/); [Figma blog, "Making space for a handmade web"](https://www.figma.com/blog/making-space-for-a-handmade-web/); [New Public](https://newpublic.substack.com/p/the-handmade-internet-is-making-a)

**Spotify "now playing" and GitHub contribution graphs**
- Both are common enough to ship bundled in templates, e.g. "cooked-folio" with Spotify, GitHub and Discord presence, and react-github-calendar contribution graphs. A Spotify community user says the motivation is "a bit more personality" — [dev.to cooked-folio](https://dev.to/jqueryscript/cooked-folio-a-portfolio-template-with-spotifygithubdiscord-integrated-1gd0); [dev.to now-playing widget](https://dev.to/jefino9488/how-i-built-a-now-playing-spotify-widget-for-my-react-portfolio-kbd); [Spotify community](https://community.spotify.com/t5/Spotify-for-Developers/Adding-Spotify-Now-Playing-Feature-to-GitHub-Profile-Any-Tips-or/td-p/6471083)

**Recruiter attention budget (general)**
- Guides commonly put the portfolio scan at under 30 seconds, and some say about 15. One developer says a plain site got interviews: one page, four project cards, contact form, "No animations, no parallax, no glassmorphism". Guides also stress live demos over repos. All of these are blog estimates, not measured data — [Medium, coders.stop](https://medium.com/@coders.stop/building-a-developer-portfolio-that-gets-interviews-6b523901e89a); [devbio.me guide 2026](https://devbio.me/blogs/developer-portfolio-guide-2026); [slategit 2026](https://slategit.com/blog/developer-portfolio-examples-that-got-hired)
- One 2026 review flags "easy to over-engineer" as a risk for code-heavy showcase sites, and says a "studio aesthetic" can confuse recruiters scanning for "engineer" — [slategit](https://slategit.com/blog/developer-portfolio-examples-that-got-hired)

### Inferences
- The pattern across HN feedback: novelty is forgiven when it is additive and cheap (easter eggs, sound, Cmd+K, a terminal that still works on mobile and links to an HTML CV), and punished when it is a gate (a game or 3D world you must navigate, heavy GPU, no loading indicator).
- Bruno Simon's success is a poor template for a typical SWE job seeker: his site is his product (he sells Three.js courses), and even HN splits on whether it works as a homepage.
- For a general SWE audience, the low-risk path is a fast, content-first site plus one or two signature interactions with an off switch (mute sound, disable custom cursor, `prefers-reduced-motion`).
- Spotify widgets and contribution graphs are now template defaults, so they likely signal "template" more than personality. That is an inference: no source calls them overused.

### Gaps
- I found no Reddit threads (r/webdev, r/cscareerquestions) with direct recruiter opinions on specific gimmicks. Search returned none.
- I found no specific data on desktop/OS-simulation portfolios (e.g., macOS/Windows clones) or theme switchers in 2025–2026. They were not covered.
- I found no source explicitly calling Spotify widgets or contribution graphs cliché.
- No hard performance or bounce data for gimmick-heavy versus simple portfolios.

## Q2: AI-era trends — chat-with-resume assistants, RAG, llms.txt, MCP servers, agent-readable portfolios

### Takeaway
"Chat with my resume" assistants are common and commercialized (PortfolioOS, Prezumi, GPTFolio, Ask My Work, open-source Portfolioly, plus many DIY RAG tutorials). Evidence that recruiters value them is anecdotal, and hiring-manager-facing writing treats generic chatbot projects as cliché. llms.txt is a cheap (~30 minutes) but unproven bet. A personal MCP server is a niche experiment, and some prominent authors deliberately skip it.

### Cited Findings
**Chat-with-resume assistants**
- Products: PortfolioOS turns a resume, LinkedIn or GitHub profile into a site with "a built-in AI assistant trained on your background". Prezumi embeds a chatbot that "answers recruiters' questions". GPTFolio pitches NDA-safe chat about projects. Ask My Work launched 2025-07-08. Portfolioly is free and open source — [Product Hunt PortfolioOS](https://www.producthunt.com/products/portfolioos-2); [Prezumi](https://www.producthunt.com/posts/prezumi-4); [GPTFolio](https://www.producthunt.com/products/gptfolio/makers); [Ask My Work](https://www.producthunt.com/products/ask-my-work); [Portfolioly](https://www.producthunt.com/products/portfolioly/reviews?page=2)
- DIY implementations: a Next.js plus vector-search RAG build, whose author notes you can't paste the whole resume into every prompt because it "wastes tokens and money". Another dev.to "interactive resume AI assistant" and a GitHub resume-chatbot repo — [dev.to okasputra](https://dev.to/okasputra/stop-sending-static-resumes-how-i-built-a-chat-with-my-resume-bot-nextjs-rag-4kdm); [dev.to mohamedrimsan](https://dev.to/mohamedrimsan/building-an-interactive-resume-ai-assistant-showcasing-your-portfolio-with-a-twist-13da); [GitHub seanbearden/resume-chatbot](https://github.com/seanbearden/resume-chatbot)
- Positive anecdote: a Trustpilot reviewer of Resumechat says a recruiter mentioned the bot caught their attention. This is a single vendor-review anecdote — [Trustpilot](https://uk.trustpilot.com/review/resumechat.ai)
- Skeptical view (low-authority blog): hiring managers spend about 90 seconds on a project and have seen "the same chatbot clone five hundred times this month". Projects that ignore cost, latency and scale "read as thin" — [Learnist](https://www.learnist.org/signs-ai-portfolio-project-wont-impress-hiring-managers/)
- Security: a CIO piece argues candidate-submitted content should be treated as attacker-controllable, and cites an AI browser agent that met an injected instruction on a candidate's page telling it to recommend an interview. OWASP ranks prompt injection #1 in its LLM Top 10. Recruiters interviewed by Built In say hidden prompts in resumes don't work and likely lead to rejection — [CIO](https://www.cio.com/article/4206304/your-ai-hiring-tool-isnt-an-hr-problem-its-a-security-one.html); [Built In](https://builtin.com/articles/hidden-ai-prompts-in-resume); [Fast Company](https://www.fastcompany.com/91581812/job-candidates-sneaking-prompt-injections-into-their-applications-resume-ai-screening)

**llms.txt / agent-readable sites**
- The llms.txt spec proposes a root /llms.txt (also usable at subpaths) to help agents use a site. The site now advertises "v2" — [llmstxt.org](https://llmstxt.org/); [GitHub AnswerDotAI/llms-txt](https://github.com/AnswerDotAI/llms-txt)
- Suganthan Mohanadasan (2026-05-25, updated 2026-07-02): llms.txt takes about 30 minutes and is "trivially cheap to maintain", but its value is "option value", not proven. Perplexity has said it reads llms.txt. Anthropic and OpenAI have not confirmed runtime use. The clearest real use is coding agents fetching documentation llms.txt. Google's guidance says "you don't need to create new machine readable files" for AI search. Lighthouse added an opt-in llms.txt audit ("Agentic Browsing") with no ranking weight. Personal sites under ~5,000 monthly visitors fall in his "Optional" bucket, and he recommends MCP only for sites with a real tool or API surface. Shipping these files "does not guarantee AI citations" — [suganthan.com](https://suganthan.com/blog/how-to-make-website-agent-ready/)
- Vercel published an "agent readability spec" guide — [Vercel KB](https://vercel.com/kb/guide/agent-readability-spec)

**MCP servers for personal sites**
- Examples exist: Ruben Marcus's "Agent-Ready Portfolio" MCP lets agents read the resume and book a call without rendering the page. Another developer deployed a portfolio MCP server to Cloudflare. A 2026-03 blog describes making a personal site "AI friendly" — [mcpservers.org](https://mcpservers.org/servers/rubenmarcus/portfolio); [dev.to jonothora](https://dev.to/jonothora/i-made-my-portfolio-site-ai-agent-ready-heres-every-file-i-added-51ga); [czhou578 blog 2026-03-21](https://czhou578.github.io/blog/2026/03/21/i-made-my-personal-website-ai-friendly.html); [benmilne.com guide](https://benmilne.com/guides/agent-readable-personal-sites)
- A cautionary admission from one builder: "My MCP tools currently redirect to static files. They're declarations, not functional endpoints" — found via [search of agent-ready posts](https://dev.to/loghan_lewis_0ee3335a77cc/make-your-site-agent-ready-in-30-minutes-llmstxt-openapi-mcp-2h03) (attribution between the dev.to posts in that result set is uncertain)
- David Hoang deliberately skipped MCP for his editorial site, saying it is not "an app with an API surface worth operating and securing", and chose a lightweight machine-readable layer instead — [davidhoang.com](https://www.davidhoang.com/writing/optimizing-for-agents)

### Inferences
- A chat assistant is no longer novel in itself. It likely differentiates only if it is visibly well built (citations to source content, cost and rate limiting, injection-resistant, fast, graceful fallback) and optional, with the static content still scannable in seconds.
- llms.txt is cheap and harmless, a reasonable "craft detail" for an engineer's site, mainly as a signal of awareness rather than a traffic driver. A real MCP server is a showcase project, not a recruiting feature. A fake or stub one is worse than none.
- Implementation cost for a chatbot is ongoing (LLM API spend, abuse protection), unlike static features. The sources give no concrete $/month numbers for personal-site chatbots.

### Gaps
- No quantitative data on how many dev portfolios include chatbots, llms.txt or MCP.
- No survey of recruiter reactions to portfolio chatbots. Reddit and HN searches turned up no direct threads.
- No concrete hosting or API cost figures for personal-site chatbots.

## Q3: Have AI coding tools caused portfolio sameness, and how are devs differentiating?

### Takeaway
Yes. Through 2026 there is a widely voiced backlash against the "AI look" (Tailwind/shadcn defaults, purple-blue gradient hero, three equal feature cards, generic copy). Practitioners blame defaults more than AI. The main antidotes are specific content, a customized design system, deliberate typography and asymmetry, and handmade/personal craft.

### Cited Findings
- A 2026 dev.to portfolio-strategy piece: "When a hiring manager opens 80 portfolios on a Tuesday morning, most look the same". The same shadcn template and "AI-powered todo app" projects make candidates "indistinguishable" rather than bad. Its advice is to document decisions and tradeoffs (the URL now returns 404; content comes from the search snippet) — [dev.to pickuma](https://dev.to/pickuma/portfolio-strategy-for-2026-surviving-the-ai-generated-noise-filter-4oj3)
- "The 'AI look' isn't really about AI. It's about defaults. LLMs amplify defaults because their training data is mostly default-using code." The named tells are Tailwind defaults, shadcn/ui components, a blue or purple primary and a standard hero — [dev.to alanwest](https://dev.to/alanwest/how-to-fix-the-ai-generated-look-in-your-frontend-1ahh); [dev.to olehvolos](https://dev.to/olehvolos/users-can-tell-when-your-ui-was-ai-generated-and-they-dont-like-it-33kn)
- The "shadcn Trap": most devs accept shadcn defaults and override individual components, which the author calls backwards. Customize the system first (color, radius, font) — [bswen 2026-03-27](https://docs.bswen.com/blog/2026-03-27-ai-generated-ui-unique-design)
- 21st.dev (2026-08-21) lists five tells: gradient hero, generic copy (called the strongest tell), perfect-but-empty feature cards, stock imagery, and no specificity. Fixes: show the real product, make specific checkable claims, use uneven honest hierarchy, use real photos, choose non-default palettes and type. The rule: "borrow composition from components but write the content yourself" — [21st.dev](https://21st.dev/blog/website-not-look-ai-generated)
- Mainstream coverage: "AI design tools are making every website look the same" (2026-07-31), Creative Bloq's "Everything looks the same. Now what?", and UX Collective's "AI design isn't ugly, it's fluent, and that's the problem", which cites 2026 research that AI site tools reproduce dominant conventions (I did not verify the research) — [Northeast Times](https://northeasttimes.com/2026/07/31/ai-design-tools-are-making-every-website-look-the-same/); [Creative Bloq](https://www.creativebloq.com/ai/everything-looks-the-same-now-what); [UX Collective](https://uxdesign.cc/ai-design-isnt-ugly-it-s-fluent-and-thats-the-problem-131b2f4eb78c); [GeekyAnts](https://geekyants.com/blog/why-everything-your-ai-builds-looks-the-same); [Brafton](https://www.brafton.com/blog/graphics/weve-seen-this-website-before-ai-design-and-development/)
- One developer let AI design their portfolio: it looked flashy but broke mobile responsiveness. Takeaway: "make your portfolio a story, not a slideshow" — [dev.to tamajit_modak](https://dev.to/tamajit_modak/i-let-ai-design-my-portfolio-website-heres-what-went-wrong-and-so-right-i49)
- Counter-movement: the "handmade web" revival (homespun code, funky cursors, guestbooks) and design-engineer craft (sound, typography, code-as-craft) — [Figma blog](https://www.figma.com/blog/making-space-for-a-handmade-web/); [New Public](https://newpublic.substack.com/p/the-handmade-internet-is-making-a); [Codrops Lunardi](https://tympanus.net/codrops/2026/04/02/where-engineering-meets-craft-edoardo-lunardis-obsession-with-the-details/)

### Inferences
- In 2026 the strongest differentiator is specificity of content (real numbers, decisions, tradeoffs, screenshots, dates, first-person voice) more than visual novelty. A distinctive but restrained visual system (custom type, palette, one signature interaction) supports it.
- Using AI tools is not the problem. Shipping their defaults unedited is.

### Gaps
- No quantitative measure of how many portfolios are built with v0/Lovable/Bolt or share the shadcn look.
- No direct recruiter statement (versus blog authors) that an AI-generic look hurt a candidate.

## Q4: What do HN/Reddit/X say about over-engineered versus simple portfolios (2025–2026)?

### Takeaway
On HN the consensus is to admire the craft and doubt it as a homepage. Over-engineered sites are celebrated as art or demos, but commenters repeatedly say they work poorly as websites for conveying information quickly. Blog advice aimed at job seekers strongly favors simple, fast, content-first sites with live demos. I could not retrieve direct Reddit or X threads.

### Cited Findings
- Bruno Simon HN thread: split between "extremely-well-executed portfolio site" and "terrible as an actual home page", with performance as the most common complaint and a commenter who closed the tab before it loaded — [Hacker News](https://news.ycombinator.com/item?id=46206531)
- Terminal portfolio HN thread: friendly reception and craft nitpicks, plus the author's admission that realistic terminal commands confused non-technical visitors — [hn.nuxt.dev](https://hn.nuxt.dev/item/47205127)
- Job-seeker guides (2026): sub-30-second scans, 3–5 polished projects, live demos, and "No animations, no parallax, no glassmorphism" as a site that worked — [devbio.me](https://devbio.me/blogs/developer-portfolio-guide-2026); [Medium](https://medium.com/@coders.stop/building-a-developer-portfolio-that-gets-interviews-6b523901e89a); [brightcoding 2026-09-04](https://www.blog.brightcoding.dev/2026/09/04/how-to-build-a-portfolio-that-gets-you-hired)
- Design-engineer side (Codrops 2026): ambitious, sound- and motion-rich portfolios still get featured and praised in the design community, and minimalism-with-detail is also trending — [Codrops R—K '26](https://tympanus.net/codrops/2026/04/07/r-k-26-the-thinking-and-code-behind-a-portfolio-led-by-presence/); [Codrops bleibtgleich'26](https://tympanus.net/codrops/2026/09/23/bleibtgleich26-a-180-turn-from-brutalism-to-minimalism/)

### Inferences
- The audiences diverge. Design or creative-dev roles reward expressive, crafted sites (Awwwards/Codrops culture). General SWE hiring rewards speed and clarity. The right level of gimmick depends on the target role.
- A workable compromise is a scannable, fast default path with optional depth layers: Cmd+K, easter eggs, a toggleable sound or playground, and an optional AI assistant.

### Gaps
- Searches returned no direct r/webdev, r/cscareerquestions or X threads. Community sentiment here rests on HN and blogs only.
- No A/B or analytics evidence comparing interview outcomes for elaborate versus simple portfolios.
