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
        <div className="mb-12">
          <div 
            className="inline-block px-4 py-1.5 border border-gray-700 text-gray-800 text-sm font-medium rounded mb-6"
          >
            Full Stack Developer
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={heroRef} 
            className={`space-y-8 transform transition-all duration-1000 ${isHeroVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'}`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-800">
              Hi, I'm <br />Harsha <br />H G
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-xl leading-relaxed">
              Aspiring Full Stack Developer with strong fundamentals in web development, data structures, and problem-solving.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800 rounded">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-700 text-gray-800 hover:bg-gray-100 rounded">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:harshahg829656@gmail.com" 
                className="text-gray-600 hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+919980207985" 
                className="text-gray-600 hover:text-primary transition-all duration-300"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div 
            ref={codeBlockRef} 
            className={`transform transition-all duration-1000 ${isCodeVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-8 opacity-0'}`}
          >
            <div className="code-block">
              <div className="code-header">
                <div className="code-dot bg-red-400"></div>
                <div className="code-dot bg-yellow-400"></div>
                <div className="code-dot bg-green-400"></div>
              </div>
              <pre className="text-gray-800 whitespace-pre-wrap overflow-auto">
<span className="text-black font-medium">const</span> <span className="text-green-600">developer</span> = {"{"}
  <span className="text-gray-800">name:</span> <span className="text-rose-500">'Harsha H G'</span>,
  <span className="text-gray-800">skills:</span> [<span className="text-rose-500">'Frontend'</span>, <span className="text-rose-500">'Backend'</span>, <span className="text-rose-500">'Problem Solving'</span>],
  <span className="text-gray-800">education:</span> <span className="text-rose-500">'B.E. Computer Science'</span>,
  <span className="text-gray-800">technologies:</span> {"{"}
    <span className="text-gray-800">languages:</span> [<span className="text-rose-500">'JavaScript'</span>, <span className="text-rose-500">'Python'</span>, <span className="text-rose-500">'Java'</span>, <span className="text-rose-500">'C++'</span>],
    <span className="text-gray-800">frontend:</span> [<span className="text-rose-500">'React'</span>, <span className="text-rose-500">'HTML'</span>, <span className="text-rose-500">'CSS'</span>, <span className="text-rose-500">'Tailwind'</span>],
    <span className="text-gray-800">backend:</span> [<span className="text-rose-500">'Node.js'</span>, <span className="text-rose-500">'Express'</span>],
    <span className="text-gray-800">databases:</span> [<span className="text-rose-500">'MongoDB'</span>, <span className="text-rose-500">'MySQL'</span>, <span className="text-rose-500">'PostgreSQL'</span>]
  {"}"},
  <span className="text-amber-500">seeking:</span> <span className="text-rose-500">'Opportunities to create impactful solutions'</span>
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
