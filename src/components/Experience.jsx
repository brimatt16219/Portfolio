import { ArrowRight, ExternalLink, Github } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "DAC Bond",
    description: "Maintained and enhanced large-scale Angular web applications with added mobile responsiveness, while designing RESTful APIs using .NET and Entity Framework to facilitate data flow across services. Integrated Adobe PDF Extract API with Python to automate document parsing, and implemented secure file uploads to AWS S3 using credentials stored in Oracle and SQL databases.", 
    dates: "May 2024 - Present",
    image: "/projects/project1.png",
    tags: ["Angular",".NET Core", "Node.js","TypeScript","C#","Figma", "Python","HTML","CSS","SQL","AWS","Visual Studio"],
    location: "Orlando, FL",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "DAC Bond",
    description: "Developed new designs and implemented pages and components in Angular web applications, while maintaining and creating Oracle database tables to support multiple user types. Tracked user data for issuers, investors, and primary accounts on a municipal data server.", 
    dates: "Jan 2024 - May 2024",
    image: "/projects/project1.png",
    tags: ["Angular",".NET Core", "Node.js","TypeScript","C#","HTML","CSS","Figma","Visual Studio"],
    location: "Orlando, FL",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "L3Harris Technologies",
    description: "Developed code for the new ECM Motor in the AUV Simulator using Unity and C#, and created map generation GUIs to support navigation testing across different environments. Implemented noise algorithms to generate diverse height maps for evaluating AUV sensory and motor functions, and designed mission control interfaces using C#, .NET, and WPF in Visual Studio.", 
    dates: "May 2023 - Aug 2023",
    image: "/projects/project1.png",
    tags: ["Unity","C#",".NET","WPF","Visual Studio"],
    location: "Fall River, MA",
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Evercore Technology Partners",
    description: "Developed responsive full-stack web applications for clients using Laravel and Blade, enhancing user experience through UI features built with HTML, CSS, and jQuery. Actively contributed to GitHub workspaces by participating in pull requests and resolving issues.", 
    dates: "Nov 2022 - May 2023",
    image: "/projects/project1.png",
    tags: ["Laravel","PHP","Blade","HTML","CSS","jQuery"],
    location: "Remote",
  },
  
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl text-glow mb-4 text-center">
          {" "}
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {jobs.map((job, key) => (
            <div
              key={key}
              className="group bg-card/60 rounded-lg overflow-hidden shadow-xs"
            >

              <div className="p-6">
                
                <h2 className="text-xl font-semibold mb-1">{job.company}</h2>
                <h3 className="text-xl font-semibold mb-1"> {job.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {job.dates}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                    {job.location}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                    {job.description}
                </p>
                
                
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {job.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.linkedin.com/in/ch4ng/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};