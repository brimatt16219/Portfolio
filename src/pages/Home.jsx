import { About } from "../components/About"
import { Contacts } from "../components/Contacts"
import { Experience } from "../components/Experience"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Projects } from "../components/Projects"
import StarsCanvas from "../components/StarsCanvas"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Fixed star background — sits behind everything */}
            <StarsCanvas />

            {/* Navbar */}
            <Navbar />

            {/* Main content — z-10 so it sits above the canvas */}
            <main className="relative z-10">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contacts />
            </main>

            {/* Footer — also needs z-10 to appear above the canvas */}
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
