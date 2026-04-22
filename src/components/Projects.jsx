import { ExternalLink, Github, Star } from "lucide-react";

// ── ADD NEW PROJECTS HERE ──────────────────────────────────────────────────
// Just append a new object to this array. featured: true shows a star badge.
const projects = [
  {
    id: 1,
    title: "Voyager",
    description:
      "Route optimization app that finds nearby store locations and calculates the shortest path to visit all of them. Built with a 2-opt TSP algorithm on the backend and a full-screen dark map UI on the frontend.",
    tags: ["React", "TypeScript", "Vite", "Zustand", "TanStack Query", "Google Maps API", "Node.js", "Express.js"],
    demoUrl: "https://voyager-rose-seven.vercel.app",
    githubUrl: "https://github.com/brimatt16219/Voyager",
    featured: true,
  },
  {
    id: 2,
    title: "DevTrack",
    description:
      "Full-stack job application tracker with authentication, status pipelines, and note-taking. Built to manage the job search process end-to-end.",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS", "Node.js", "Express.js"],
    demoUrl: "https://devtrack-omega-three.vercel.app",
    githubUrl: "https://github.com/brimatt16219/devtrack",
    featured: true,
  },
  {
    id: 3,
    title: "Hemo Web App",
    description:
      "Admin portal built in Angular to display data and information relating to the VR experience, Dr. Hemo's Great Escape. Built for UCF's College of Medicine.",
    tags: ["Angular", "TypeScript", ".NET Core", "Azure", "SQL"],
    demoUrl: "",
    githubUrl: "https://github.com/brimatt16219/Hemo_Web_App",
    featured: false,
  },
  {
    id: 4,
    title: "Chrysanthemum",
    description:
      "Interactive browser-based gardening game where you can grow and sell flowers. Built as a fun side project to explore game loop mechanics in React.",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS"],
    demoUrl: "https://chrysanthemum-pink.vercel.app/",
    githubUrl: "https://github.com/brimatt16219/Chrysanthemum",
    featured: true,
  },
  {
    id: 5,
    title: "Laragigs",
    description:
      "Job listing application built using Laravel and PHP with full CRUD operations, user authentication, and a clean Blade templating UI.",
    tags: ["Laravel", "PHP", "Blade", "HTML", "CSS", "SQL"],
    demoUrl: "",
    githubUrl: "https://github.com/brimatt16219/laragigs",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio",
    description:
      "This portfolio — built with React, Three.js, and Tailwind. Features a custom shooting star background using @react-three/fiber and postprocessing bloom effects.",
    tags: ["React", "JavaScript", "Vite", "Three.js", "TailwindCSS"],
    demoUrl: "https://portfolio-brian-chang.vercel.app",
    githubUrl: "https://github.com/brimatt16219/Portfolio",
    featured: false,
  },
];
// ──────────────────────────────────────────────────────────────────────────

export const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl text-glow mb-4 text-center">
          Projects
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          A selection of things I've built. Featured projects are live and deployed.
        </p>

        {/* Featured projects — larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} large />
          ))}
        </div>

        {/* Other projects — smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brimatt16219/"
          >
            <Github size={16} />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ project, large = false }) {
  return (
    <div
      className={`group bg-card/50 border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] flex flex-col ${
        large ? "p-6" : "p-5"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3 gap-2">
        <h3
          className={`font-semibold text-foreground group-hover:text-primary transition-colors ${
            large ? "text-xl" : "text-base"
          }`}
        >
          {project.title}
        </h3>
        {project.featured && (
          <span className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary border border-primary/30 whitespace-nowrap">
            <Star size={10} fill="currentColor" />
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p
        className={`text-muted-foreground leading-relaxed flex-1 mb-4 ${
          large ? "text-sm" : "text-xs"
        }`}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto">
        {project.demoUrl?.trim() !== "" && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/70 transition-colors"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
        {project.githubUrl?.trim() !== "" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={15} />
            Source
          </a>
        )}
      </div>
    </div>
  );
}
