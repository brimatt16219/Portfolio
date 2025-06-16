import { About } from "../components/About"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Skills } from "../components/Skills"
import StarsCanvas from "../components/StarsCanvas"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Backgound effects */}
            <StarsCanvas/>

            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main>
                <Hero />
                <About />
                <Skills />
            </main>

            {/* Footer */}
        </div>
    )
}