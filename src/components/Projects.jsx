import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Voyager",
    description: "A platform to help users plan trips with maximum store coverage and minimal travel distance.",
    image: "/projects/project1.png",
    tags: ["React", "TypeScript", "Vite", "Axios", "TailwindCSS", "Googlemaps API", "Node.js", "Express.js"],
    demoUrl: "",
    githubUrl: "https://github.com/brimatt16219/Voyager",
  },
  {
    id: 2,
    title: "Hemo Web App",
    description: "An admin portal built in Angular to display data and information relating to the VR experience, Dr. Hemo's Great Escape.",
    image: "/projects/project1.png",
    tags: ["Angular", "TypeScript", ".NET Core", "Node.js", "Azure", "SQL"],
    demoUrl: "",
    githubUrl: "https://github.com/brimatt16219/Hemo_Web_App",
  },
  {
    id: 3,
    title: "Chrysanthemum",
    description: "Interactive browser-based gardening game where you can grow and sell flowers.",
    image: "/projects/project1.png",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS", "Node.js"],
    demoUrl: "",
    githubUrl: "https://github.com/brimatt16219/Chrysanthemum",
  },
  {
    id: 4,
    title: "Laragigs",
    description: "Job listing application built using Laravel.",
    image: "/projects/project1.png",
    tags: ["Laravel", "PHP", "Blade", "HTML", "CSS", "SQL"],
    demoUrl: "",
    githubUrl: "https://github.com/brimatt16219/laragigs",
  },
  {
    id: 5,
    title: "Porfolio",
    description: "My personal portfolio with all the information on my background, experience, projects, and socials.",
    image: "/projects/project1.png",
    tags: ["React", "JavaScript", "Vite", "Three.js", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/brimatt16219/Portfolio",
  },
  
  
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl text-glow mb-12 text-center">
          {" "}
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card/50 rounded-lg overflow-hidden shadow-xs"
            >
              <div className="overflow-hidden">
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}
              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center justify-center">
                  <div className="flex space-x-3">
                    {project.demoUrl?.trim() !== "" && 
                      (<a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/brimatt16219/"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};