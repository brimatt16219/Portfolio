import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "brimatt062495@gmail.com",
    href: "mailto:brimatt062495@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (561) 400-1305",
    href: "tel:+15614001305",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Boca Raton, FL",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/ch4ng",
    href: "https://www.linkedin.com/in/ch4ng/",
    color: "hover:text-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "brimatt16219",
    href: "https://github.com/brimatt16219/",
    color: "hover:text-foreground",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "brian.changg",
    href: "https://www.instagram.com/brian.changg/",
    color: "hover:text-pink-400",
  },
];

export const Contacts = () => {
  return (
    <section id="contact" className="py-32 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-secondary/10 rounded-3xl mx-4 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-glow mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a good conversation.
            Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left — contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>

            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-card/60 border border-border rounded-xl px-5 py-4 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Resume CTA */}
            <div className="pt-4">
              <a
                href="https://docs.google.com/document/d/1_bAUCFKr0Rrrnf66pCqUE5QVti7TADh0r9Rm9DO2sE8/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right — social links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Find Me Online</h3>

            {socialLinks.map(({ icon: Icon, label, handle, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 bg-card/60 border border-border rounded-xl px-5 py-4 hover:border-primary/40 transition-all duration-300 group ${color}`}
              >
                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {handle}
                  </p>
                </div>
                <span className="text-muted-foreground text-xs group-hover:text-primary transition-colors">
                  ↗
                </span>
              </a>
            ))}

            {/* Availability blurb */}
            <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="text-sm font-medium text-foreground">Currently Open to Opportunities</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Actively exploring new roles in software engineering. Open to full-time, contract, and remote positions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
