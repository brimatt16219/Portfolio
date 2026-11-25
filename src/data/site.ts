// One place for facts that appear on more than one page.
// Edit here; every page, the resume, JSON-LD and llms.txt read from it.

export const site = {
  name: "Brian Chang",
  role: "Software engineer",
  // The one sentence a recruiter should be able to repeat.
  headline:
    "At Fiserv I build tools around CommerceHub, the payments platform enterprise merchants integrate with. On my own time I built l3lint, a linter for card payment data, and helped win a NASA Space Apps award mapping Earth's surface change.",
  location: "Boca Raton, FL",
  timezone: "ET (UTC−5)",
  availability: "Open to full-time software engineering roles — remote or hybrid.",
  email: "brimatt062495@gmail.com",
  resumePdf: "/resume.pdf",
  links: {
    github: "https://github.com/brimatt16219",
    linkedin: "https://www.linkedin.com/in/ch4ng/",
  },
  repo: "https://github.com/brimatt16219/Portfolio",
  description:
    "Brian Chang is a software engineer in Boca Raton, FL. Payments tooling at Fiserv, developer tools like l3lint, and the projects behind them.",
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
    title: "API Integrations Analyst (Software Engineering)",
    start: "May 2026",
    end: "Present",
    location: "Coral Springs, FL",
    summary:
      "Building tools for CommerceHub, Fiserv's enterprise payments platform. React QA tools for payment flows and Hosted Solutions that cut client integration time by 50%. An MCP server with 9 tools that lets AI agents draft merchant integrations from a client's solution design. A C#/.NET pipeline that turns CommerceHub docs into Markdown for RAG, taking internal AI tools from wrong answers to correct, sourced ones across 100+ test prompts. A no-code C#/.NET workflow builder used by 50+ integration staff. I also onboard enterprise merchants (20+ so far) and run SonarQube SAST in GitLab CI/CD to keep PCI data and secrets out of code and logs.",
    stack: ["C#", ".NET", "React", "MCP", "RAG", "GitLab CI/CD", "SonarQube"],
  },
  {
    company: "DAC Bond",
    title: "Software Engineer (Part-time)",
    start: "May 2025",
    end: "May 2026",
    location: "Orlando, FL",
    summary:
      "Built Angular/TypeScript features and ASP.NET/Entity Framework REST APIs for a municipal bond disclosure and compliance platform serving thousands of users and 1M+ filings from 8,000+ issuers and obligors. Built Python pipelines on the Adobe PDF Extract API that turn large unstructured bond filings into queryable data, and set up and monitored AWS S3 storage and file transfer for an Oracle-backed .NET stack.",
    stack: ["Angular", "TypeScript", "ASP.NET", "Entity Framework", "Python", "AWS S3", "Oracle"],
  },
  {
    company: "DAC Bond",
    title: "Software Engineer Intern",
    start: "Jan 2024",
    end: "May 2025",
    location: "Orlando, FL",
    summary:
      "Started on the same compliance platform as an intern, building Angular features and .NET APIs before moving into the part-time engineering role.",
    stack: ["Angular", "TypeScript", ".NET", "Oracle"],
  },
  {
    company: "L3Harris Technologies",
    title: "Software Engineer Intern",
    start: "May 2023",
    end: "Aug 2023",
    location: "Fall River, MA",
    summary:
      "Built real-time Unity/C# simulation modules for autonomous underwater vehicles: motor control, navigation and sensors (sonar, depth, acoustic, optical, compass, GPS, forward-looking), plus procedural terrain for mission testing. Tested on Iver 3 and Iver 4 vehicles.",
    stack: ["Unity", "C#", ".NET"],
  },
];

export const education = [
  { school: "Florida Atlantic University", degree: "M.S. Computer Science", when: "Expected Summer 2027" },
  { school: "University of Central Florida", degree: "B.S. Computer Science", when: "Aug 2025" },
];

// Grouped, and kept to what the work on this site can back up.
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C#", "Python", "TypeScript", "JavaScript", "SQL", "Java", "C++", "C", "Go", "Ruby", "Scala"] },
  { group: "Frameworks", items: ["ASP.NET", ".NET", "Entity Framework", "Flask", "FastAPI", "REST APIs", "React", "Angular", "WinForms", "WPF"] },
  { group: "Cloud & DevOps", items: ["AWS S3", "Azure", "Docker", "GitLab CI/CD", "GitHub Actions", "SonarQube", "SARIF", "Vercel", "Fly.io"] },
  { group: "AI", items: ["MCP servers", "RAG", "Claude Code", "GitHub Copilot", "Codex"] },
];
