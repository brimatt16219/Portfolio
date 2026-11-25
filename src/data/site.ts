// One place for facts that appear on more than one page.
// Edit here; every page, the resume, JSON-LD and llms.txt read from it.

export const site = {
  name: "Brian Chang",
  role: "Software engineer",
  // The one sentence a recruiter should be able to repeat.
  headline:
    "At Fiserv I work on the payment APIs that merchants plug into. On my own time I build full-stack web apps, like Voyager, a route optimizer.",
  location: "Boca Raton, FL",
  timezone: "ET (UTC−5)",
  availability: "Open to full-time software engineering roles — remote or hybrid.",
  email: "brimatt062495@gmail.com",
  resumePdf:
    "https://docs.google.com/document/d/1_bAUCFKr0Rrrnf66pCqUE5QVti7TADh0r9Rm9DO2sE8/export?format=pdf",
  links: {
    github: "https://github.com/brimatt16219",
    linkedin: "https://www.linkedin.com/in/ch4ng/",
  },
  repo: "https://github.com/brimatt16219/Portfolio",
  description:
    "Brian Chang is a software engineer in Boca Raton, FL. Full-stack web apps, payment API integrations at Fiserv, and the case studies behind them.",
};

export type Job = {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "Fiserv",
    title: "API Integrations Analyst",
    start: "May 2026",
    end: "Present",
    location: "Coral Springs, FL",
    summary:
      "Enterprise merchant onboarding and payment-gateway integrations on the CommerceHub platform: card-network processing across Visa, Mastercard, Amex and Discover, Level II/III data for interchange qualification, AVS/CVV fraud controls, REST API troubleshooting and PCI DSS compliance in a high-volume acquiring environment.",
    stack: ["CommerceHub", "REST APIs", "PCI DSS", "Level II/III", "Postman"],
  },
  {
    company: "DAC Bond",
    title: "Software Engineer",
    start: "May 2024",
    end: "May 2026",
    location: "Orlando, FL",
    summary:
      "Maintained and extended large Angular applications and made them work on mobile. Designed REST APIs in .NET with Entity Framework, automated document parsing by wiring Adobe's PDF Extract API into Python, and built secure uploads to AWS S3 with credentials held in Oracle and SQL Server.",
    stack: ["Angular", "TypeScript", ".NET", "C#", "Python", "AWS S3", "Oracle", "SQL"],
  },
  {
    company: "DAC Bond",
    title: "Software Engineer Intern",
    start: "Jan 2024",
    end: "May 2024",
    location: "Orlando, FL",
    summary:
      "Designed and built pages and components in Angular, and created and maintained Oracle tables for multiple user types, tracking issuer, investor and primary-account data on a municipal data server.",
    stack: ["Angular", "TypeScript", ".NET", "Oracle"],
  },
  {
    company: "L3Harris Technologies",
    title: "Software Engineer Intern",
    start: "May 2023",
    end: "Aug 2023",
    location: "Fall River, MA",
    summary:
      "Wrote the new ECM motor model for an autonomous underwater vehicle simulator in Unity and C#, built map-generation GUIs for navigation testing, used noise algorithms to generate height maps for exercising the AUV's sensors, and designed mission-control interfaces in WPF.",
    stack: ["Unity", "C#", ".NET", "WPF"],
  },
];

export const education = [
  { school: "Florida Atlantic University", degree: "M.S. Computer Science", when: "In progress" },
  { school: "University of Central Florida", degree: "B.S. Computer Science", when: "2025" },
];

// Grouped, and kept to what the work on this site can back up.
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "C#", "Python", "SQL", "Java", "C/C++", "Go"] },
  { group: "Frontend", items: ["React", "Angular", "Zustand", "TanStack Query", "Tailwind CSS"] },
  { group: "Backend", items: [".NET / Entity Framework", "Node.js / Express", "REST API design", "Laravel"] },
  { group: "Data & cloud", items: ["Oracle", "SQL Server", "MongoDB", "AWS S3", "Azure"] },
  { group: "Payments", items: ["CommerceHub", "Card networks", "Level II/III data", "AVS/CVV", "PCI DSS"] },
];
