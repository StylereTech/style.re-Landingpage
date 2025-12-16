import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logo from "@assets/Style.Re_Logo_1765924594076.png";

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
        scrolled ? "bg-white/90 backdrop-blur-md border-border/50 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="block hover:opacity-80 transition-opacity">
          <img src={logo} alt="Style.re" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#brands" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
            Brands
          </a>
          <a href="#features" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
            Features
          </a>
          <div className="flex items-center gap-3">
             <Button variant="ghost" className="rounded-full font-semibold text-secondary hover:text-primary">
              Login
            </Button>
            <Button variant="default" className="rounded-full px-6 font-bold text-white shadow-lg hover:shadow-xl transition-all">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-secondary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border p-6 flex flex-col space-y-4 shadow-xl animate-in slide-in-from-top-5">
          <a href="#how-it-works" className="text-lg font-medium text-secondary" onClick={() => setIsOpen(false)}>
            How it Works
          </a>
          <a href="#brands" className="text-lg font-medium text-secondary" onClick={() => setIsOpen(false)}>
            Brands
          </a>
          <a href="#features" className="text-lg font-medium text-secondary" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <div className="flex flex-col gap-3 pt-4 border-t">
            <Button variant="outline" className="w-full rounded-full" onClick={() => setIsOpen(false)}>
              Login
            </Button>
            <Button className="w-full rounded-full font-bold" onClick={() => setIsOpen(false)}>
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
