import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@assets/generated_images/bopis_last_mile_pickup.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-orange-50/30 pt-20">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary tracking-tight mb-6 leading-[1.1]">
              DELIVERY <br />
              <span className="text-primary italic">REDEFINED</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-secondary/80 mb-6">
              Experience the Future of Logistics
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
              <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all">
                Create an Account
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl" />
             <img 
               src={heroImg} 
               alt="Store to Door Delivery" 
               className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-700"
             />
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-in fade-in slide-in-from-bottom-8 delay-500">
               <div className="flex items-center gap-4">
                 <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                   ✓
                 </div>
                 <div>
                   <p className="font-bold text-secondary">Order Delivered</p>
                   <p className="text-sm text-gray-500">Just now • 12:42 PM</p>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
