import { useState } from "react"
import {cn} from '@/lib/utils'

const skills = [
    //Languages
    {name: "Python", category: "languages"},
    {name: "C", category: "languages"},
    {name: "Java", category: "languages"},
    {name: "C++", category: "languages"},
    {name: "C#", category: "languages"},
    {name: "Go", category: "languages"},
    {name: "CSS", category: "languages"},
    {name: "HTML", category: "languages"},
    {name: "CSS", category: "languages"},

    //Frameworks
    {name: "React", category: "frameworks"},
    {name: "Angular", category: "frameworks"},
    {name: "Next.js", category: "frameworks"},
    {name: "Express", category: "frameworks"},
    {name: ".NET Core", category: "frameworks"},
    {name: "MongoDB", category: "frameworks"},
    {name: "SQL", category: "frameworks"},
    {name: "Unity", category: "frameworks"},

    //Tools
    {name: "Git", category: "tools"},
    {name: "Visual Studio", category: "tools"},
    {name: "Figma", category: "tools"},
    {name: "TortoiseSVN", category: "tools"},
    {name: "Docker", category: "tools"},
]

const categories = ["all", "languages", "frameworks", "tools"]


export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl text-glow mb-12 text-center">
                    Skills
                </h2>

                <p className="mb-12">
                    These are some of the skills I’ve developed through both professional software engineering experience and academic coursework as a computer science student.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary/70 text-foreground hover:bd-secondary" 
                            )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover justify-between flex"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    )
}