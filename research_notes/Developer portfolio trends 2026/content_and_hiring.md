# Developer Portfolio Content & What Hiring Managers Look For (2025–2026)

Research date: 2026-11-24. Source quality note: hard data on *portfolio* review behavior is scarce. Most 2025–2026 material is practitioner blogs, career-coach and vendor content (often promoting a product). Stats repeated across these blogs often cannot be traced to a primary source. Those are flagged below. Older material (pre-2024) is flagged as **[older]**.

## 1. What do recruiters and hiring managers look at, and for how long?

### Takeaway
No eye-tracking or time-on-page study of developer portfolios exists. The best proxy is resume eye-tracking: about 6–7 seconds for the first screen, spent mostly on titles, companies, dates and education. Hiring managers say they will look at a portfolio if one is linked, but it rarely decides the outcome alone. The resume and one or two relevant, verifiable projects matter most. How often reviewers click through depends heavily on role type: often for frontend, rarely for backend/infra.

### Cited Findings
- **[older, 2012/2018]** TheLadders eye-tracking: recruiters spent about 6 seconds on a resume's initial screen (2012, 30 recruiters). The 2018 follow-up found 7.4 seconds. About 80% of time went to name, current/previous titles and companies, dates and education. Job titles got the most attention in 2018. Recruiters self-reported 4–5 minutes, a large gap. The study was commissioned by a job site and the sample was small — [TheLadders Eye-Tracking Study (BU mirror)](https://www.bu.edu/com/files/2018/10/TheLadders-EyeTracking-StudyC2.pdf)
- No eye-tracking study of portfolio review was found (searched explicitly) — gap confirmed via the same search; see the [WEF summary of the resume study](https://weforum.org/stories/2014/11/what-recruiters-look-your-cv-resume) **[older]**
- **[older, 2021]** Profy.dev survey of 60+ recruiters/React team leads (Google Form, self-selected, out of 300+ contacted). Hypothetical: two candidates with no experience, only one with a personal site. The "overwhelming majority" said they would look at the site, but many said lacking one would not lower a candidate's chances ("it depends"). The author's conclusion: a site "wouldn't matter much" and "can even backfire" if poorly designed or with broken links. A portfolio site "is expected to look good," unlike a GitHub repo. Default CRA READMEs are called "a wasted opportunity" — [Profy.dev on DEV](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge)
  - Secondary summaries put numbers on this survey: 65% would "definitely" look at an inexperienced candidate's site, 93% "likely", and 51% said chances would not be lower without one. The original DEV article shows results only as chart images, so these numbers are unverified — [soychristian summary](https://soychristian.pages.dev/contents/developer-portfolio-guide); [myseera blog citing it](https://myseera.com/blog/personal-website-for-job-seekers)
- Hacker News hiring managers are split. Some "always look at personal websites if available". One said a nice site or GitHub with projects is "the difference between a yes or a no". Others "wouldn't spend any time on a portfolio". One visits a linked GitHub or site "about a fifth of the time". Another never used sites to judge skill but has been "more critical" of candidates because of their site — [HN: Did your personal website help you get hired? (Sept 2024)](https://news.ycombinator.com/item?id=41656015)
- A 2026 guide says reviewers should find what they need in about 30 seconds. Recruiters click through to personal sites often for frontend roles and rarely for backend/infra roles — [techinterview.org, Apr 2026](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/)
- A reviewer has "about a minute per candidate". "If the first link is dead, they don't click the second." This is a practitioner claim, not measured — [DEV: portfolio examples that prove you can ship](https://dev.to/thong_nguyen_83f79b7c77db/developer-portfolio-examples-that-prove-you-can-ship-not-just-code-1pnk)
- daily.dev 2025 survey (4,040 developers, 177 countries): 37% said GitHub best represents their real skills, versus 17% for personal portfolios and 14% for LinkedIn. Stack Overflow 2025: 81% use GitHub for code collaboration. Both are as reported by Underdog.io (secondary) — [Underdog.io, Nov 2026](https://underdog.io/blog/software-engineer-portfolio)
- Linux Foundation 2024 Tech Talent report: 58% of tech hiring decision-makers said showcasing past work was extremely or very important (as reported via ITPro, cited by Underdog) — [Underdog.io](https://underdog.io/blog/software-engineer-portfolio)
- Hiring managers pass portfolios to engineers, who read the actual code. Code readability and documentation therefore matter — [MentorCruise](https://mentorcruise.com/blog/how-to-build-a-software-engineer-portfolio-that-survives-code-review/)

### Inferences
- Design for a skim that lasts seconds: the hero and the first project card must answer "who, what role, what level, proof" before any scroll. The first link clicked (likely the top project's demo or repo) must work.
- The likely visit pattern has two stages: a recruiter skim (seconds), then, if the candidate passes, an engineer opening repos and case studies (minutes). The information architecture should serve both: a scannable top layer and depth one click down.
- A portfolio can lose more points than it gains. A broken, stale, slow or overdesigned site is actively negative.

### Gaps
- No primary 2024–2026 survey measuring time spent on developer portfolios or click-through rates from resume to portfolio.
- The widely repeated "73% / 84% / 93% of hiring managers" figures on 2026 blogs (e.g., hakia.com) could not be traced to primary sources.

## 2. How should projects be presented?

### Takeaway
There is strong consensus on featuring 2–4 (at most about 6) finished, original projects, each with a short case study: problem, your role, key decisions and tradeoffs, outcome. Each needs a working live demo or short video and a repo with a real README. Depth beats breadth, and every claim should link to evidence a stranger can open.

### Cited Findings
- "Every claim needs an exhibit a stranger can open." Feature 2–3 finished systems and archive abandoned experiments and tutorial clones. Treat each README as a case study: problem and payoff on the first screen, then your role, setup with seed data and exact run/test commands, and known limitations. Run a "clean-folder test" (fresh clone, follow only the README). Add a "production note" per project covering reliability, security, observability, cost, latency, ownership and scale. Don't feature a project that can't speak honestly to at least three of these. Use a deployed app or short video for behavior that's hard to judge from code — [Underdog.io, Nov 2026](https://underdog.io/blog/software-engineer-portfolio)
- Include 3–6 substantive projects, each with context, key technical decisions and outcome — [techinterview.org, Apr 2026](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/)
- Cut the list to the 3–5 projects you can actually defend. One or two giant commits suggest "copy-paste behavior, panic shipping, or both". A post-build write-up of what you'd change shows continued thinking — [DEV: portfolio examples that prove you can ship](https://dev.to/thong_nguyen_83f79b7c77db/developer-portfolio-examples-that-prove-you-can-ship-not-just-code-1pnk)
- Hiring managers prefer depth over breadth. Three strong projects beat many tutorial-style ones. Recruiters look for quantifiable results (performance metrics, user engagement) — [hakia.com 2026 guide](https://hakia.com/skills/building-portfolio/); [Refactor Talent](https://refactortalent.com/developer-portfolio-projects-that-impress/); [TieTalent 2025](https://tietalent.com/en/blog/220/beyond-the-ats-how-to-build-a-tech-portfolio)
- Too many projects dilutes focus and makes your specialty unclear. Samples should be reachable within two clicks — [Fueler](https://fueler.io/blog/top-portfolio-mistakes-us-job-seekers-must-avoid)
- **[older, 2021]** Simon Willison: put a small project on GitHub with a detailed README and screenshots. "Almost no one does this," and it takes only a few extra hours — [Simon Willison, "Standing out"](https://simonwillison.net/2021/Jul/17/standing-out/)
- Case study structure, borrowed from UX: context, problem, your role, solution, process, results. Use the same format for every case study so reviewers can scan. When work was shared, be explicit about your contributions — [Toptal](https://www.toptal.com/designers/ui/case-study-portfolio); [UX Planet](https://uxplanet.org/4-tips-for-structuring-case-studies-in-your-design-portfolio-f7436fd460ec)
- AI projects that don't discuss privacy, hallucination risk or fallback behavior look incomplete — [Provn, June 2026](https://provn.co/blog/2026/06/ai-builder-jobs-portfolio) (vendor blog; via search summary)

### Inferences
- A good card and case-study template: one-line outcome headline; role, team size and timeline; problem; 2–3 key decisions with the tradeoff each involved; result with a metric or real users if any; what I'd do differently; links (Live · Code · Write-up). Use a screenshot or short looping video at the top.
- Keep the same structure across projects for scannability.
- Put the strongest, most relevant project first. Recruiters may not scroll past it.

### Gaps
- No engineering-specific source found that empirically tests case-study formats. Tradeoffs as a section is practitioner consensus, not data.
- No data on video vs. screenshot effectiveness.

## 3. Hero section best practices

### Takeaway
State a specific role and focus in plain first-person language, ideally with one concrete proof point. Add location or remote status and availability, plus one clear CTA (email or resume, or "see work"). Generic adjectives ("passionate", "dedicated", "love clean code") carry no information and now also read as AI-generated filler.

### Cited Findings
- A working headline names a specific role or track ("backend engineer" beats "software developer"). Write it in first person. A third-person "[Name] is a passionate developer…" reads like someone else's bio. A hero with five competing elements effectively has no headline — [slategit: hero headline that gets interviews](https://slategit.com/blog/portfolio-hero-section-headline-that-gets-interviews)
- Stock "passionate and dedicated" openers read as ChatGPT-written. Plain specifics ("based in Johannesburg, builds web apps") are more memorable — [why most developer portfolios feel boring](https://portfolio-v2-gamma-one.vercel.app/blog/why-most-developer-portfolios-feel-boring)
- The landing page should hold your name, a 1–3 sentence intro and what you work on. Avoid mission statements, "passionate about everything" filler, and heavy hero animations or videos (they slow load) — [techinterview.org, Apr 2026](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/)
- Hiring managers flag "all the candidates are starting to look the same" as a top red flag, tied to AI-written materials — [CNBC via NBC LA](https://www.nbclosangeles.com/news/business/money-report/the-biggest-red-flag-this-hiring-expert-sees-in-job-seekers-all-the-candidates-are-starting-to-look-the-same/3705906/?os=app)
- Resume Genius 2026 (1,500 US hiring managers): heavily AI-generated application materials rank as the #2 red flag (49%), behind job-hopping. This covers application materials generally, not portfolios specifically — [CPA Practice Advisor, Aug 2026](https://www.cpapracticeadvisor.com/2026/08/13/ai-written-applications-are-now-the-2-red-flag-in-hiring/188492/)

### Inferences
- Pattern: **[Role] + [domain or specialty] + [proof]**, e.g., "Frontend engineer building data-heavy dashboards. Currently shipping X at Y." Then a line with location, time zone and availability ("Open to full-time roles, NYC / remote"), then a primary CTA (email) and a secondary CTA (resume PDF or work).
- Since recruiters look at titles and companies first (TheLadders), put the current title and employer, or the most notable credential, in the hero.

### Gaps
- No A/B or survey data on hero copy effectiveness for developer portfolios. All advice is practitioner opinion.

## 4. Value of individual sections and pages

### Takeaway
Must-haves: projects, an easy-to-find contact (email link), a current resume PDF, and short About text. High-value when real: writing (a few strong posts), open-source contributions (especially merged PRs with review threads), and a clean GitHub. Nice-to-have, low hiring impact: /now and /uses pages, an experience timeline (useful for mid/senior), and testimonials (no data found). Use a mailto link and LinkedIn, not a form.

### Cited Findings
- **Pages:** Landing, About (short bio and current focus), Projects, Writing/Talks ("3 strong posts beat 30 weak ones"), Resume (a current PDF link), Contact ("email and LinkedIn at minimum… Skip web forms"). Quarterly upkeep of about 15 minutes. "If you can't maintain it, skip it" — [techinterview.org, Apr 2026](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/)
- **Resume:** The resume is the first thing a recruiter sees and takes priority over portfolio work — [Profy.dev (2021)](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge) **[older]**
- **Blog/writing (anecdotes, Sept 2024 HN thread):** A self-teaching blog "got me past pretty much every first round", leading to 5 offers in 2 weeks (donalbrecht). K8s/Istio struggle posts led to a job offer (phrotoma). Networking articles led to recruitment by Improbable (ggambetta). Interviewers Googled the candidate and discussed the blog (valbaca, Artgor). A blog kept a freelancer "fully booked" (rwieruch). Caveats: blogs take years to pay off (giansegato), a stub site with a "TODO" counts against you (flpm), and projects got people hired, not the site itself (bradlys) — [HN item 41656015](https://news.ycombinator.com/item?id=41656015)
- **Blog risk:** A blog of basic tutorials signals a low technical ceiling. For most developers a strong README is worth more than three blog posts — [slategit: is a blog necessary](https://slategit.com/blog/developer-portfolio-blog-necessary-when-to-write) (via search summary)
- **[older, 2021]** Willison: one or two interesting technical posts a year about something learned or a bug fixed is enough to stand out. Returns from audience-building diminish fast if the goal is only getting hired — [Simon Willison](https://simonwillison.net/2021/Jul/17/standing-out/)
- **Learn in public:** swyx's essay frames public learning (not only blogging, but five categories of it) as a career accelerant. His own career came from writing and speaking, which led to Netlify — [swyx: Learn in Public](https://www.swyx.io/learn-in-public); [swyx about](https://swyx.io/about)
- **Open source:** For early career, a merged PR on a library you use, including the review thread, beats inventing a consumer app. For staff/senior, include one public artifact such as a talk, article or substantive OSS review. Issue discussions show how you take feedback — [Underdog.io](https://underdog.io/blog/software-engineer-portfolio)
- **GitHub:** Reviewers check recency, original work versus forks, README clarity, and live proof of claims — [devbio.me 2026](https://devbio.me/blogs/developer-portfolio-guide-2026) (vendor; via search summary)
- **/now page:** Started by Derek Sivers. It tells visitors what the person is focused on at this point in their life. nownownow.com lists 2,300+ people. It is a personal/indie-web convention, not a hiring signal — [nownownow about](https://nownownow.com/about); [sive.rs/now2](https://sive.rs/now2)
- **Personal "Featured" section:** One HN user links a "Featured" past-work page whenever asked for examples (sabon) — [HN 41656015](https://news.ycombinator.com/item?id=41656015)

### Inferences
- /now and /uses pages are reputation or community content. They are cheap personality signals but should not take nav priority over Projects, Resume and Contact. A stale /now page (old date) is a negative signal.
- An experience timeline duplicates the resume. Keep it compact, focused on impact, and consistent with the PDF.
- Show email as visible text plus a mailto link (a copy button helps). Forms add friction and hide the address.

### Gaps
- No data found on testimonials or recommendations in developer portfolios.
- No 2024–2026 source specific to /uses pages (uses.tech) or their hiring value.
- No data comparing contact form and email-link conversion for developer portfolios. The recommendation is opinion.

## 5. Common mistakes (what to cut)

### Takeaway
Cut self-rated skill bars and percentages, unlinked logo walls of tech, tutorial clones (Netflix/Spotify/Twitter/to-do), broken or dead demo links, stale content, heavy animations that slow load, generic or AI-sounding copy, too many projects, and buried contact info. Poor visual quality and confusing navigation are reportedly the top red flags.

### Cited Findings
- Skill bars are meaningless because there is no reference point for what "80%" means. Use plain grouped lists — [DEV: I audited 50 developer portfolios](https://dev.to/robobobboy/i-audited-50-developer-portfolios-heres-what-they-all-get-wrong-j84); [slategit junior mistakes](https://slategit.com/blog/junior-developer-portfolio-mistakes-to-avoid)
- Long technology lists and self-rated skill bars are things to avoid. So are generic bootcamp templates (they read as junior) and stale content — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/)
- Listing many frameworks without evidence reads as shallow familiarity. Tie each skill to a project and remove bare tool names that point to no evidence — [DEV: 3 portfolio mistakes](https://dev.to/qawalah/3-portfolio-mistakes-hiring-managers-spot-instantly-32ma); [Underdog.io](https://underdog.io/blog/software-engineer-portfolio)
- Tutorial clones suggest the candidate only followed a tutorial. Templated projects from juniors show a lack of skill — [Scrimba: web dev portfolio mistakes](https://scrimba.com/articles/web-developer-portfolio-mistakes/); [soychristian summary of Profy research](https://soychristian.pages.dev/contents/developer-portfolio-guide)
- Broken links show up even in portfolios only weeks or months old. A poor design makes you look incompetent. Overengineered portfolio sites have led to rejections (reader comment) — [Profy.dev (2021)](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge) **[older]**
- Slow loads, poor navigation and bugs cause reviewers to leave. Suggested target: Lighthouse 90+ — [Fueler](https://fueler.io/blog/top-mistakes-to-avoid-in-your-portfolio); [DEV 2026](https://dev.to/__be2942592/how-to-build-a-developer-portfolio-that-actually-gets-you-hired-2026-6kn)
- Reported top portfolio red flags: very low visual quality (55%), hard-to-navigate structure (48%), obvious overuse of AI (43%), overly long or dense content (42%). **Unverified:** these appear only in a LinkedIn post without a named study (probably design-portfolio focused) — [LinkedIn post (via search)](https://bg.linkedin.com/in/kalin-zdravkov)
- 35% of hiring managers have encountered AI-created portfolio projects or creative work (citing Resume Genius) — [Vandelay Design](https://www.vandelaydesign.com/?p=61693)
- A profanity-laden project name was flagged as a risk by a recruiting agency (btasker). A personal site "probably hurt me more than helped" (sam_lowry_) — [HN 41656015](https://news.ycombinator.com/item?id=41656015)

### Inferences
- A checklist for the user's own site: remove decorative WebGL or canvas effects if they hurt load or Lighthouse scores. Replace any tech logo grid with a tech list tied to projects. Verify every link. Remove "Hi, I'm X, a passionate…" copy.
- Overdesign is a specific risk for developer sites: heavy animation reads as style over substance unless the target role is creative frontend.

### Gaps
- No primary 2024–2026 survey ranking developer portfolio mistakes. The rankings are aggregated blog consensus.

## 6. How the 2025–2026 market changes what matters

### Takeaway
Entry-level software hiring has contracted sharply. Stanford data shows about a 16–20% relative employment decline for 22–25-year-olds in AI-exposed jobs, including software developers. AI tooling is ubiquitous, so polished code and apps are no longer scarce. What differentiates now is verifiable evidence of shipping (live, used, maintained), judgment (decisions, tradeoffs, evaluation, cost and latency), honesty about AI use, and writing that shows original thinking. Generic or AI-sounding content is now an active red flag.

### Cited Findings
- Stanford Digital Economy Lab ("Canaries in the Coal Mine?", Brynjolfsson, Chandar, Chen; ADP payroll data): workers aged 22–25 in the most AI-exposed occupations saw a 16% relative employment decline (2025 version). The August 2026 revision says about 19% below the counterfactual. Experienced workers in the same occupations were stable or growing. A Jan 2026 presentation charted about a 20% decline for 22–25-year-old software developers since late 2022. The authors call the findings descriptive, not causal — [Stanford DEL: Canaries](https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine/); [Aug 2026 update](https://digitaleconomy.stanford.edu/news/canariesaug26/); [Feb 2026 note on timing](https://digitaleconomy.stanford.edu/news/canaries-interest-rates-and-timinga-more-on-recent-drivers-of-employment-changes-for-young-workers)
- 85% of developers regularly use AI coding tools (JetBrains 2025, 24,534 devs, via fonzi.ai/Underdog) — [Underdog.io](https://underdog.io/blog/software-engineer-portfolio)
- Recommended "AI evidence block" for AI-assisted projects: how requirements were split, constraints set, generated code rejected, hallucination checks, what stayed human-owned, plus latency and inference cost. Validate AI-generated tests — [Underdog.io](https://underdog.io/blog/software-engineer-portfolio)
- Hiring managers evaluate "AI fluency, design taste, evaluation rigor, and shipping ability" in AI portfolio work — [techinterview.org: The AI Portfolio, 2026](https://www.techinterview.org/post/3233475399/ai-portfolio-built-with-ai-2026-interviews/) (via search summary)
- A portfolio should work as a set of verifiable claims backed by live data (GitHub activity, deployed products) — [devbio.me](https://devbio.me/blogs/developer-portfolio-guide-2026) (vendor; via search summary)
- AI-generated application materials are the #2 hiring red flag (49%) — [CPA Practice Advisor / Resume Genius 2026](https://www.cpapracticeadvisor.com/2026/08/13/ai-written-applications-are-now-the-2-red-flag-in-hiring/188492/)
- In the AI era, show process, not just output — [Vandelay Design](https://www.vandelaydesign.com/?p=61693)

### Inferences
- AI makes generating a clean-looking app trivial, so the signal shifts to things AI can't fake cheaply: real users or metrics, maintenance history (commits over time), documented decisions and failures, and personal voice in writing.
- An AI-related project helps if it shows engineering judgment (evals, cost, failure handling). A thin LLM-API wrapper is the new tutorial clone.
- Juniors face the toughest market, so a junior portfolio must over-index on proof (deployed, used, OSS contributions) instead of breadth.

### Gaps
- No survey directly measuring how hiring managers weigh AI-related projects on portfolios in 2025–2026. The claims come from career blogs.
- The "Stanford AI Index 2026: nearly 20% decline" claim on some blogs likely conflates the AI Index with the Stanford Digital Economy Lab paper. Cite the DEL paper.

## 7. Junior vs. mid/senior differences

### Takeaway
Juniors and career switchers benefit most from a portfolio site, since it compensates for thin work history. They should show 2–3 original, deployed projects and ideally merged OSS PRs, and must avoid template looks. Mid/senior engineers are judged mainly on their resume and track record. For them a site is optional, especially for backend and infra. When they have one, it should be minimal and substance-first: impact-focused experience, deep write-ups or incident-style case studies, talks and posts. Senior differentiation comes from public thinking (writing, talks) and scope and ownership, not visuals.

### Cited Findings
- Build a site if you're frontend, design-leaning or product-focused, have substantial public work, are a career switcher, or write technical content. Skip it for backend/infra/SRE/data/ML-platform work with mostly private repos and no public material, where a contentless site is "performative". The example senior site has six sections, no animations, and a few highlighted projects and posts. A site takes 4–8 hours to build (20–40 hours for frontend roles where the site is itself a sample) — [techinterview.org, Apr 2026](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/)
- Early career: merged PR plus review thread. Mid-level: a small deployed API you own, with README, green CI, architecture sketch, measured p95 latency and hosting cost. Staff/senior: a redacted incident-style write-up with synthetic numbers, plus a talk, article or substantive OSS review. Confidential work can be shown through a sanitized evidence page — [Underdog.io](https://underdog.io/blog/software-engineer-portfolio)
- Juniors: a portfolio site, if present, must be presentable. The Profy survey focused on candidates without professional experience — [Profy.dev (2021)](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge) **[older]**
- A senior HN commenter checks personal sites because "the resume is too formal and optimized for marketing", so the site shows the real person and their interests — [HN 41656015](https://news.ycombinator.com/item?id=41656015) (via search summary)
- Entry-level employment is down while experienced workers' employment holds — [Stanford DEL](https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine/)

### Inferences
- For a junior or early-career portfolio, the IA priority is hero (role and availability), then 2–3 deep case studies, then experience (internships and roles with impact bullets), then writing (optional), then resume and contact.
- For seniors, experience and scope move up, projects become case studies of work and systems, and writing and talks gain weight.

### Gaps
- No r/ExperiencedDevs or r/cscareerquestions threads surfaced in searches (Reddit content is poorly indexed by the search tool). Reddit sentiment is not represented beyond HN.
- Tech Interview Handbook, Josh Comeau and Kent C. Dodds portfolio-specific guidance was not retrieved within the tool budget.
