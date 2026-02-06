import { Button } from "@/components/ui/button";
import logo from "@assets/Style.Re_Logo_1765924594076.png";

export function CTASection() {
  return (
    <section className="py-24 bg-orange-50/50">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100">
          
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <img src={logo} alt="Style.re" className="h-16 mb-8" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              FASHION DELIVERED <br />
              <span className="text-primary">from store to door</span>
            </h2>
            <div className="flex flex-col gap-2 font-bold text-secondary/80 tracking-wide uppercase text-sm mb-8">
              <span>✓ Curbside Pickup</span>
              <span>✓ Same-Day Delivery</span>
            </div>
          </div>

          <div className="md:w-1/2">
             <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-6">
               Style.re is your trusted <br/>
               <span className="underline decoration-primary decoration-4 underline-offset-4">partner in fashion</span>, from <br/>
               store to door.
             </h3>
             <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
               Style.Re's Order Pickup is the ultimate solution for your last-minute fashion emergencies. Whether you're rushing between meetings or need a quick style refresh, we bring together convenience and fashion in one seamless service.
             </p>
             <Button size="lg" className="rounded-full px-12 h-14 text-lg font-bold shadow-lg hover:shadow-primary/25 w-full md:w-auto" asChild>
               <a href="https://stylere.app/auth?mode=login">Sign-up</a>
             </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
