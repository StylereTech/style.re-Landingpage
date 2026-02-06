import img1 from "@assets/generated_images/elegant_woman_in_white_blouse.png";
import img2 from "@assets/generated_images/happy_kids_fashion.png";
import img3 from "@assets/generated_images/man_tracking_delivery.png";

const features = [
  {
    image: img1,
    title: "Shop in-store inventory",
    description: "Browse local availability and secure your items instantly."
  },
  {
    image: img2,
    title: "Get your items the same-day",
    description: "Why wait? From the rack to your back in hours."
  },
  {
    image: img3,
    title: "Track your delivery in real-time",
    description: "Watch your style arrive with precision GPS tracking."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-4">
            Order Pickup & Same Day Delivery <br />
            <span className="text-primary">you can count on</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 shadow-md hover:shadow-xl transition-all duration-500 relative aspect-[4/3]">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
