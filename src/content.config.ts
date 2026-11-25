import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// The schema is the case-study template: a project can't ship without
// an outcome line, a role, a timeline and at least one link.
const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    outcome: z.string().describe("One line: what this project does or achieved."),
    year: z.number(),
    role: z.string(),
    team: z.string().default("Solo"),
    timeline: z.string(),
    stack: z.array(z.string()).max(8),
    links: z
      .object({ live: z.url().optional(), code: z.url().optional(), docs: z.url().optional() })
      .refine((l) => l.live || l.code, "A project needs a live or code link."),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    // Smaller projects get a row on /work but no case-study page.
    caseStudy: z.boolean().default(true),
  }),
});

const lab = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/lab" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(["Prototype", "Production", "Note"]),
    summary: z.string(),
  }),
});

export const collections = { work, lab };
