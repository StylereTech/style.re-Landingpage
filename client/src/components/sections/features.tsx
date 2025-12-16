import { Truck, Clock, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Tech-Driven Speed",
    description: "AI-optimized routing ensures your packages arrive faster than ever before."
  },
  {
    icon: ShieldCheck,
    title: "White-Glove Care",
    description: "Premium handling for high-value garments. We treat every item like a masterpiece."
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description: "Precision updates at every step. Know exactly where your style is, always."
  },
  {
    icon: Truck,
    title: "Sustainable Fleet",
    description: "100% electric delivery vehicles reducing carbon footprint without compromising speed."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Engineered for <br/>
            <span className="text-muted-foreground">Modern Retail.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just move boxes. We extend your brand experience directly to your customer's doorstep with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
