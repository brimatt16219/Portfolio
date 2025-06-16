
import {
    Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useState } from "react";
import { GithubOriginal } from "devicons-react";

export const Contacts = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 rounded-lg">
    <h2 className="text-3xl md:text-4xl text-glow  mb-12 text-center">
        Contact Me
    </h2>
      <div className="container mx-auto max-w-5xl bg-card/60 rounded-lg py-8">
        

        <div className="grid  gap-12">
          <div className="space-y-8">
           

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:brimatt062495@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    brimatt062495@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+15614001305"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (561) 400-1305
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/ch4ng/" target="_blank" className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />{" "}
                </a>
                <div>
                  <h4 className="font-medium"> LinkedIn</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    in/ch4ng
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 justify-center">
                <a href="https://github.com/brimatt16219/" target="_blank" className="p-3 rounded-full bg-primary/10">
                  <Github className="h-6 w-6 text-primary" />{" "}
                </a>
                <div>
                  <h4 className="font-medium"> GitHub</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    brimatt16219
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 justify-center">
                <a href="https://www.instagram.com/brian.changg/" target="_blank" className="p-3 rounded-full bg-primary/10">
                  <Instagram className="h-6 w-6 text-primary" />{" "}
                </a>
                <div>
                  <h4 className="font-medium"> Instagram</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    brian_changg
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
