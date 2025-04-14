import { useState, useEffect } from "react";
import { Menu, X, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <header className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 transition-all duration-300 ${
      scrolled ? "shadow-sm" : ""
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-medium text-primary flex items-center gap-2">
          <span className="text-xl">&lt;/&gt;</span>
          <span>Harsha H G</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <Sun className="w-5 h-5 text-gray-600" />
          
          <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600 text-white rounded ml-2">
            <a href="/Harsha_HG_Resume.pdf" download>
              Download CV
            </a>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Sun className="w-5 h-5 text-gray-600" />
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
        <div className="md:hidden bg-white shadow-sm">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            
            <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600 text-white rounded self-start">
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
