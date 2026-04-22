import { MapPin } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "DAC Bond",
    description:
      "Maintained and enhanced large-scale Angular web applications with added mobile responsiveness, while designing RESTful APIs using .NET and Entity Framework. Integrated Adobe PDF Extract API with Python to automate document parsing, and implemented secure file uploads to AWS S3 using credentials stored in Oracle and SQL databases.",
    dates: "May 2024 – Present",
    tags: ["Angular", ".NET Core", "TypeScript", "C#", "Python", "AWS", "SQL", "Oracle"],
    location: "Orlando, FL",
    current: true,
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "DAC Bond",
    description:
      "Developed new designs and implemented pages and components in Angular web applications, while maintaining and creating Oracle database tables to support multiple user types. Tracked user data for issuers, investors, and primary accounts on a municipal data server.",
    dates: "Jan 2024 – May 2024",
    tags: ["Angular", ".NET Core", "TypeScript", "C#", "HTML", "CSS", "Oracle"],
    location: "Orlando, FL",
    current: false,
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "L3Harris Technologies",
    description:
      "Developed code for the new ECM Motor in the AUV Simulator using Unity and C#, and created map generation GUIs to support navigation testing. Implemented noise algorithms to generate diverse height maps for evaluating AUV sensory functions, and designed mission control interfaces using C#, .NET, and WPF.",
    dates: "May 2023 – Aug 2023",
    tags: ["Unity", "C#", ".NET", "WPF", "Visual Studio"],
    location: "Fall River, MA",
    current: false,
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Evercore Technology Partners",
    description:
      "Developed responsive full-stack web applications for clients using Laravel and Blade, enhancing user experience through UI features built with HTML, CSS, and jQuery. Actively contributed to GitHub workspaces by participating in pull requests and resolving issues.",
    dates: "Nov 2022 – May 2023",
    tags: ["Laravel", "PHP", "Blade", "HTML", "CSS", "jQuery"],
    location: "Remote",
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-glow mb-16 text-center">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {jobs.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={job.id}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start gap-6 md:gap-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-primary ${
                        job.current
                          ? "bg-primary shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                          : "bg-background"
                      }`}
                    />
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div className="bg-card/60 border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300 text-left group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-1 gap-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {job.company}
                          </h3>
                          <p className="text-primary/80 text-sm font-medium">
                            {job.title}
                          </p>
                        </div>
                        {job.current && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary border border-primary/30 whitespace-nowrap">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground font-mono">
                        <span>{job.dates}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {job.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {job.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ch4ng/"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
