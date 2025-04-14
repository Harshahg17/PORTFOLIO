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
            <div className="inline-block px-4 py-1.5 border border-black dark:border-white text-black dark:text-white text-sm font-medium mb-2">
              Full Stack Developer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black dark:text-white">
              Hi, I'm <span className="relative">Harsha H G
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#5FBDB0] via-[#F8C765] to-[#F78A76] rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Aspiring Full Stack Developer with strong fundamentals in web development, data structures, and problem-solving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none px-8 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
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
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5FBDB0] via-[#F8C765] to-[#F78A76] rounded-none opacity-30"></div>
            <div className="relative bg-white dark:bg-black border border-black dark:border-white rounded-none p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#F78A76] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#F8C765] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#5FBDB0]"></div>
              </div>
              <pre className="font-mono text-sm text-black dark:text-white whitespace-pre-wrap overflow-auto">
<span className="text-black dark:text-white font-bold">const</span> <span className="text-[#5FBDB0] dark:text-[#5FBDB0]">developer</span> = {"{"}
  name: <span className="text-[#F78A76] dark:text-[#F78A76]">'Harsha H G'</span>,
  skills: [<span className="text-[#F78A76] dark:text-[#F78A76]">'Frontend'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'Backend'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'Problem Solving'</span>],
  education: <span className="text-[#F78A76] dark:text-[#F78A76]">'B.E. Computer Science'</span>,
  technologies: {"{"}
    languages: [<span className="text-[#F78A76] dark:text-[#F78A76]">'JavaScript'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'Python'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'Java'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'C++'</span>],
    frontend: [<span className="text-[#F78A76] dark:text-[#F78A76]">'React'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'HTML'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'CSS'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'Tailwind'</span>],
    backend: [<span className="text-[#F78A76] dark:text-[#F78A76]">'Node.js'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'Express'</span>],
    databases: [<span className="text-[#F78A76] dark:text-[#F78A76]">'MongoDB'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'MySQL'</span>, <span className="text-[#F78A76] dark:text-[#F78A76]">'PostgreSQL'</span>]
  {"}"},
  <span className="text-[#F8C765] dark:text-[#F8C765]">seeking</span>: <span className="text-[#F78A76] dark:text-[#F78A76]">'Opportunities to create impactful solutions'</span>
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
