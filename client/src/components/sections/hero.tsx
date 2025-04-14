import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Hero() {
  const { ref: heroRef, isVisible: isHeroVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    freezeOnceVisible: true
  });
  
  const { ref: codeBlockRef, isVisible: isCodeVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    freezeOnceVisible: true
  });
  
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={heroRef} 
            className={`space-y-8 transform transition-all duration-1000 ${isHeroVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'}`}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 text-sm font-medium mb-2 backdrop-blur-sm">
              Full Stack Developer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary via-pink-500 to-amber-500 dark:from-primary dark:via-pink-400 dark:to-yellow-400 text-transparent bg-clip-text">Harsha H G</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Aspiring Full Stack Developer with strong fundamentals in web development, data structures, and problem-solving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:harshahg829656@gmail.com" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="tel:+919980207985" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div 
            ref={codeBlockRef} 
            className={`relative hidden md:block transform transition-all duration-1000 ${isCodeVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-8 opacity-0'}`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-primary to-amber-500 rounded-xl blur-xl opacity-70 animate-pulse"></div>
            <div className="relative bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="font-mono text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap overflow-auto">
<span className="text-primary dark:text-primary">const</span> <span className="text-green-600 dark:text-green-400">developer</span> = {"{"}
  name: <span className="text-amber-600 dark:text-amber-300">'Harsha H G'</span>,
  skills: [<span className="text-amber-600 dark:text-amber-300">'Frontend'</span>, <span className="text-amber-600 dark:text-amber-300">'Backend'</span>, <span className="text-amber-600 dark:text-amber-300">'Problem Solving'</span>],
  education: <span className="text-amber-600 dark:text-amber-300">'B.E. Computer Science'</span>,
  technologies: {"{"}
    languages: [<span className="text-amber-600 dark:text-amber-300">'JavaScript'</span>, <span className="text-amber-600 dark:text-amber-300">'Python'</span>, <span className="text-amber-600 dark:text-amber-300">'Java'</span>, <span className="text-amber-600 dark:text-amber-300">'C++'</span>],
    frontend: [<span className="text-amber-600 dark:text-amber-300">'React'</span>, <span className="text-amber-600 dark:text-amber-300">'HTML'</span>, <span className="text-amber-600 dark:text-amber-300">'CSS'</span>, <span className="text-amber-600 dark:text-amber-300">'Tailwind'</span>],
    backend: [<span className="text-amber-600 dark:text-amber-300">'Node.js'</span>, <span className="text-amber-600 dark:text-amber-300">'Express'</span>],
    databases: [<span className="text-amber-600 dark:text-amber-300">'MongoDB'</span>, <span className="text-amber-600 dark:text-amber-300">'MySQL'</span>, <span className="text-amber-600 dark:text-amber-300">'PostgreSQL'</span>]
  {"}"},
  <span className="text-purple-600 dark:text-purple-400">seeking</span>: <span className="text-amber-600 dark:text-amber-300">'Opportunities to create impactful solutions'</span>
{"}"};</pre>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden md:block" onClick={scrollToNextSection}>
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
}
