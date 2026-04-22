import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left — text */}
          <div className="flex-1 text-left space-y-6 opacity-0 animate-fade-in-delay-2">
            <div>
              <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
                Software Engineer
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-glow">Brian</span>
                <br />
                <span className="text-foreground/80">Chang</span>
              </h1>
            </div>

            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Software engineer based in Boca Raton, FL.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="cosmic-button">
                View Projects
              </a>
              <a
                href="https://docs.google.com/document/d/1_bAUCFKr0Rrrnf66pCqUE5QVti7TADh0r9Rm9DO2sE8/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/brimatt16219"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ch4ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:brimatt062495@gmail.com"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-delay-3">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/60 to-primary/10 blur-xl scale-110 animate-pulse-subtle" />
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/40" />
              {/* Photo */}
              <img
                src="/brian0.jpg"
                alt=""
                className="relative w-full h-full rounded-full object-cover object-top border-4 border-background shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-delay-4">
        <span className="text-muted-foreground text-xs tracking-widest uppercase font-mono">Scroll</span>
        <ArrowDown className="text-primary animate-bounce" size={16} />
      </div>
    </section>
  );
};
