import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useScroll } from "@/hooks/use-scroll";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScroll(50);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on resize if width is greater than md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className={`fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 transition-all duration-300 ${
      scrolled ? "shadow-md" : ""
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-primary dark:text-primary flex items-center gap-2">
          <span className="text-2xl">&lt;/&gt;</span>
          <span>Harsha H G</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
          
          <ThemeToggle />
          
          <Button asChild size="sm">
            <a href="/Harsha_HG_Resume.pdf" download>
              Download CV
            </a>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={closeMobileMenu}
                className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition py-2"
              >
                {link.label}
              </a>
            ))}
            
            <Button asChild size="sm" className="self-start">
              <a href="/Harsha_HG_Resume.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
