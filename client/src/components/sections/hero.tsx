import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_fashion_delivery_hero_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Futuristic Fashion Delivery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto text-center max-w-4xl">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white backdrop-blur-xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
          The New Standard in Logistics
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          Fashion Moved at <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
            The Speed of Style.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Experience the future of fashion logistics. Fast, reliable, and tech-driven delivery designed exclusively for premium brands and discerning customers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Button size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto bg-white text-black hover:bg-gray-200">
            Schedule Pickup
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent backdrop-blur-sm">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
