export const Hero = () => {
    return (
        <section
            id="hero"
            className="reative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-6xl ">
                        <span className="text-glow opacity-0 animate-fade-in-delay-2">Welcome</span>
                    </h3>

                    <p className="text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        This is my portfolio 
                    </p>
                    
                    {/* <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            my work
                        </a>
                    </div> */}
                    <p className="text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        Scroll down to begin
                    </p>
                </div>
            </div>
        </section>
    )
}