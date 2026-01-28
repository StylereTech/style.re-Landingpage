import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImg1 from "@assets/generated_images/bopis_last_mile_pickup.png";
import heroImg2 from "@assets/generated_images/driver_pickup.png";
import heroImg3 from "@assets/generated_images/customer_delivery.png";
import heroImg4 from "@assets/generated_images/customer_ordering.png";

const slides = [
  {
    image: heroImg1,
    title: "DELIVERY REDEFINED",
    subtitle: "Experience the Future of Logistics"
  },
  {
    image: heroImg4,
    title: "ORDER IN SECONDS",
    subtitle: "Your favorite stores, just a tap away"
  },
  {
    image: heroImg2,
    title: "STORE TO DOOR",
    subtitle: "Our drivers pick up directly from the shop"
  },
  {
    image: heroImg3,
    title: "STYLE IN AN HOUR",
    subtitle: "Fastest fashion delivery in the city"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-orange-50/30 pt-20">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary tracking-tight mb-6 leading-[1.1] transition-all duration-500">
              {slides[currentSlide].title.split(' ')[0]} <br />
              <span className="text-primary italic">{slides[currentSlide].title.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-secondary/80 mb-6 transition-all duration-500 h-8">
              {slides[currentSlide].subtitle}
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Style.re brings your favorite stores to you with fast, reliable delivery. 
              We've got you covered – Track every step — from checkout to doorstep. 
              Fast, secure & stress-free delivery – <span className="font-bold text-primary">from store to door.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all" asChild>
                <a href="https://stylere.app/auth?mode=login">Create an Account</a>
              </Button>
            </div>
          </div>

          {/* Slider Image */}
          <div className="lg:w-1/2 relative group">
             <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl" />
             
             <div className="relative rounded-3xl shadow-2xl overflow-hidden aspect-[4/3]">
                {slides.map((slide, index) => (
                  <img 
                    key={index}
                    src={slide.image} 
                    alt={slide.title} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40 cursor-pointer"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40 cursor-pointer"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-4' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-in fade-in slide-in-from-bottom-8 delay-500">
               <div className="flex items-center gap-4">
                 <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                   ✓
                 </div>
                 <div>
                   <p className="font-bold text-secondary">Order Delivered</p>
                   <p className="text-sm text-gray-500">In under 60 mins</p>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
