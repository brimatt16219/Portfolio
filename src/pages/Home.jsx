import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            <ThemeToggle />
            {/* Backgound effects */}

            {/* Navbar */}
            <Navbar />
            {/* Main content */}

            {/* Footer */}
        </div>
    )
}