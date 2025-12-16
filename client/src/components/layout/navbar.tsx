import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity">
          STYLE<span className="text-accent">.RE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Partners
          </a>
          <Button variant="default" className="rounded-full px-6 font-semibold">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          <a href="#features" className="text-lg font-medium text-foreground" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href="#how-it-works" className="text-lg font-medium text-foreground" onClick={() => setIsOpen(false)}>
            How it Works
          </a>
          <a href="#testimonials" className="text-lg font-medium text-foreground" onClick={() => setIsOpen(false)}>
            Partners
          </a>
          <Button className="w-full rounded-full" onClick={() => setIsOpen(false)}>
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
