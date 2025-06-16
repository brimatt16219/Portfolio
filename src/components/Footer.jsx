import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 bg-card/75 relative border-t border-border mt-12 pt-4 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground m-auto">
        {" "}
        &copy; Brian Chang  {new Date().getFullYear()} 
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
      </a>
    </footer>
  );
};