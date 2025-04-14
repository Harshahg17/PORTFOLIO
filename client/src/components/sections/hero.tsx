import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-[slideUp_0.5s_ease-in-out]">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 text-sm font-medium mb-2">
              Full Stack Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
              Hi, I'm <span className="text-primary dark:text-primary">Harsha H G</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg">
              Aspiring Full Stack Developer with strong fundamentals in web development, data structures, and problem-solving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:harshahg829656@gmail.com" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="tel:+919980207985" 
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-lg p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="font-mono text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
<span className="text-primary dark:text-primary">const</span> <span className="text-green-600 dark:text-green-400">developer</span> = {"{"}
  name: <span className="text-amber-600 dark:text-amber-300">'Harsha H G'</span>,
  skills: [<span className="text-amber-600 dark:text-amber-300">'Frontend'</span>, <span className="text-amber-600 dark:text-amber-300">'Backend'</span>, <span className="text-amber-600 dark:text-amber-300">'Problem Solving'</span>],
  education: <span className="text-amber-600 dark:text-amber-300">'B.E. Computer Science'</span>,
  technologies: {"{"}
    languages: [<span className="text-amber-600 dark:text-amber-300">'JavaScript'</span>, <span className="text-amber-600 dark:text-amber-300">'Python'</span>, <span className="text-amber-600 dark:text-amber-300">'Java'</span>, <span className="text-amber-600 dark:text-amber-300">'C++'</span>],
    frontend: [<span className="text-amber-600 dark:text-amber-300">'React'</span>, <span className="text-amber-600 dark:text-amber-300">'HTML'</span>, <span className="text-amber-600 dark:text-amber-300">'CSS'</span>, <span className="text-amber-600 dark:text-amber-300">'Tailwind'</span>],
    backend: [<span className="text-amber-600 dark:text-amber-300">'Node.js'</span>, <span className="text-amber-600 dark:text-amber-300">'Express'</span>],
    databases: [<span className="text-amber-600 dark:text-amber-300">'MongoDB'</span>, <span className="text-amber-600 dark:text-amber-300">'MySQL'</span>]
  {"}"},
  <span className="text-purple-600 dark:text-purple-400">seeking</span>: <span className="text-amber-600 dark:text-amber-300">'Opportunities to create impactful solutions'</span>
{"}"};</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
