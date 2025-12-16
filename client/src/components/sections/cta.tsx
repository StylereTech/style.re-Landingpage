import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5"></div>
      
      <div className="container px-6 mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
          Ready to Elevate <br />
          Your Logistics?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join the leading fashion houses that trust Style.re for their most critical deliveries.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto">
            Start Shipping Now
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg w-full sm:w-auto">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
