import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site, experience } from "../data/site";

// A plain summary for AI agents and crawlers: who, what, where to look.
export const GET: APIRoute = async ({ site: base }) => {
  const url = (p: string) => new URL(p, base).toString();
  const work = (await getCollection("work")).sort((a, b) => a.data.order - b.data.order);
  const lab = await getCollection("lab");
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.role} in ${site.location}. ${site.headline}`,
    "",
    `${site.availability} Contact: ${site.email}`,
    "",
    "## Experience",
    ...experience.map((j) => `- ${j.title}, ${j.company} (${j.start} – ${j.end})`),
    "",
    "## Work",
    ...work.map((w) => {
      const href = w.data.caseStudy ? url(`/work/${w.id}`) : (w.data.links.code ?? w.data.links.live);
      return `- [${w.data.title}](${href}): ${w.data.outcome}`;
    }),
    "",
    "## Lab",
    ...lab.map((l) => `- [${l.data.title}](${url(`/lab/${l.id}`)}): ${l.data.summary}`),
    "",
    "## More",
    `- [About](${url("/about")})`,
    `- [Resume](${url("/resume")})`,
    `- [GitHub](${site.links.github})`,
    `- [LinkedIn](${site.links.linkedin})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
