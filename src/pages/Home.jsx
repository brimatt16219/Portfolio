
import { About } from "../components/About"
import { Contacts } from "../components/Contacts"
import { Experience } from "../components/Experience"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import StarsCanvas from "../components/StarsCanvas"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            {/* <ThemeToggle /> */}

            {/* Backgound effects */}
            <StarsCanvas/>

            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                {/* <Skills /> */}
                <Contacts />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}