import { Code, GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl text-glow mb-16 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — photo + name card */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/5 blur-lg scale-105" />
              <img
                src="/brian.jpg"
                alt="Brian Chang"
                className="relative w-full h-full rounded-2xl object-cover object-top border border-primary/20 shadow-xl"
              />
            </div>

            {/* Info chips */}
            <div className="flex flex-col gap-3 w-full max-w-xs text-left">
              <div className="flex items-center gap-3 bg-card/60 rounded-lg px-4 py-3 border border-border">
                <GraduationCap size={18} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">University of Central Florida</p>
                  <p className="text-xs text-muted-foreground">B.S. Computer Science, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card/60 rounded-lg px-4 py-3 border border-border">
                <Code size={18} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Software Engineer</p>
                  <p className="text-xs text-muted-foreground">DAC Bond · Full-time</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card/60 rounded-lg px-4 py-3 border border-border">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Boca Raton, FL</p>
                  <p className="text-xs text-muted-foreground">Open to remote & hybrid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Hey, I'm Brian</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a software engineer with a passion for building things that are fast,
                clean, and actually useful. I graduated from UCF with a degree in Computer
                Science and have been working full-stack professionally since 2022.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">What I work with</h4>
              <p className="text-muted-foreground leading-relaxed">
                My day-to-day at DAC Bond revolves around Angular, TypeScript, .NET, and AWS.
                Outside of work I lean into React, Node, and whatever else the project calls for.
                I've shipped production code across the full stack — from Oracle databases to
                Three.js canvases.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Outside of code</h4>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not at a keyboard I'm probably working out, exploring Boca Raton,
                or finding a new rabbit hole to fall into. I like building things that solve
                real problems and projects that push me to learn something new.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="https://docs.google.com/document/d/1_bAUCFKr0Rrrnf66pCqUE5QVti7TADh0r9Rm9DO2sE8/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
