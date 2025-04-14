import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl font-bold text-primary">&lt;/&gt;</span>
            <span className="text-white">Harsha H G</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Harsha H G. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              onClick={scrollToTop}
              size="icon"
              variant="outline"
              className="rounded-full bg-slate-800 hover:bg-primary/20 text-white"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
