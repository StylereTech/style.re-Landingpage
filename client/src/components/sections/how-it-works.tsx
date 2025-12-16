import mapImg from "@assets/generated_images/abstract_digital_delivery_map.png";
import packageImg from "@assets/generated_images/premium_packaging_detail.png";
import lifestyleImg from "@assets/generated_images/stylish_delivery_reception_lifestyle.png";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black text-white overflow-hidden">
      <div className="container px-6 mx-auto">
        
        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
              <img src={mapImg} alt="Smart Routing" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-sm font-mono mr-4">01</span>
              <h3 className="text-3xl font-display font-bold">Smart Scheduling</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Book a pickup instantly through our intuitive platform. Our AI assigns the optimal driver based on real-time traffic data and route density.
            </p>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Instant booking confirmation</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Real-time ETA updates</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Flexible pickup windows</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 order-1">
            <div className="flex items-center mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-sm font-mono mr-4">02</span>
              <h3 className="text-3xl font-display font-bold">Premium Handling</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Your garments are delicate. We treat them that way. From hanger-ready transport to temperature-controlled vehicles, we ensure pristine condition.
            </p>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Garment-on-hanger capability</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Tamper-evident security</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>White-glove service standard</li>
            </ul>
          </div>
          <div className="lg:w-1/2 order-2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
              <img src={packageImg} alt="Premium Packaging" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
           <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
              <img src={lifestyleImg} alt="Customer Satisfaction" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-sm font-mono mr-4">03</span>
              <h3 className="text-3xl font-display font-bold">Delighted Customers</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              The delivery is the only physical touchpoint for e-commerce brands. We make it count with professional drivers and seamless communication.
            </p>
            <Button variant="outline" className="rounded-full">See Success Stories</Button>
          </div>
        </div>

      </div>
    </section>
  );
}
