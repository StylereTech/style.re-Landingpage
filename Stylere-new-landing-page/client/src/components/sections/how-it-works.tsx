import { Smartphone, CreditCard, PackageCheck } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
            How Style.re Gets Your Order From Store to Door
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-0 border-t-2 border-dashed border-gray-300"></div>

          {/* Step 1 */}
          <div className="relative z-10 text-center group">
            <div className="w-24 h-24 bg-white rounded-full shadow-lg mx-auto mb-6 flex items-center justify-center border-4 border-white group-hover:border-primary transition-colors duration-300">
              <Smartphone className="w-10 h-10 text-secondary group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Schedule your Order Pickup</h3>
            <p className="text-muted-foreground leading-relaxed px-4">
              Request a Delivery & Select a convenient time for your order to be picked up from the store.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 text-center group">
             <div className="w-24 h-24 bg-white rounded-full shadow-lg mx-auto mb-6 flex items-center justify-center border-4 border-white group-hover:border-primary transition-colors duration-300">
              <CreditCard className="w-10 h-10 text-secondary group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Pay for your Delivery</h3>
            <p className="text-muted-foreground leading-relaxed px-4">
              Securely pay for the delivery service to get your fashion items swiftly to your doorstep.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 text-center group">
             <div className="w-24 h-24 bg-white rounded-full shadow-lg mx-auto mb-6 flex items-center justify-center border-4 border-white group-hover:border-primary transition-colors duration-300">
              <PackageCheck className="w-10 h-10 text-secondary group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Receive your Package</h3>
            <p className="text-muted-foreground leading-relaxed px-4">
              Sit back and relax as your package is delivered right to you, hassle-free.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
