import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home",       href: "#hero"       },
  { name: "About",      href: "#about"      },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects"   },
  { name: "Contact",    href: "#contact"    },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [activeSection, setActive]    = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Determine which section is currently in view
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="text-glow text-foreground">Brian Chang</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm transition-colors duration-300 relative py-1",
                  activeSection === id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                {item.name}
                {activeSection === id && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-primary rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
