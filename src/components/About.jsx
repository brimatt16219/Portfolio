import { Code } from "lucide-react"

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <h2 className="text-3xl md:text-4xl text-glow mb-12 text-center">
                About me
            </h2>
            <div className="container mx-auto max-w-5xl bg-card/60 rounded-lg py-8"> 
                
                
                <div className="mb-12 flex justify-center items-center text-center align-middle">
                    <p className="lg:w-1/2">
                        My name is Brian Chang and I am 22 years old currently residing in Orlando, Florida. I love to code and work on big projects. This portfolio is one of them, so I hope you enjoy!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                    
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Professional Work</h3>

                        <p className="text-muted-foreground">
                            I currently work as a Software Engineer at DAC Bond, with over two years of experience in software engineering. I've worked with modern front-end frameworks such as React and Angular, as well as backend frameworks like Express and .NET Core. I also have experience with embedded systems and machine code.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Education</h3>

                        <p className="text-muted-foreground">
                            I am also a Senior student currently attending the University of Central Florida pursuing a Bachelor's Degree in Computer Science.
                        </p>
                        <p className="text-muted-foreground">
                            I am expected to graduate in Summer 2025.
                        </p>
                    </div>
                    
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Contact
                    </a>
                    <a
                        href="https://docs.google.com/document/d/1_bAUCFKr0Rrrnf66pCqUE5QVti7TADh0r9Rm9DO2sE8/export?format=pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                    >
                    Download Resume
</a>
                </div>
            </div>
        </section>
    )
}