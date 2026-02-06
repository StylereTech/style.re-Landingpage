export function Brands() {
  const brands = [
    { name: "macy's", style: "font-serif font-light tracking-tight lowercase text-4xl" }, // Star icon missing but text style
    { name: "NORDSTROM", style: "font-sans font-bold tracking-widest uppercase text-2xl" },
    { name: "OLD NAVY", style: "font-sans font-black tracking-tight uppercase text-3xl" },
    { name: "lululemon", style: "font-sans font-medium lowercase text-2xl" },
    { name: "BANANA REPUBLIC", style: "font-serif font-medium tracking-widest uppercase text-xl" },
    { name: "DSW", style: "font-sans font-black tracking-tighter uppercase text-4xl" },
    { name: "ULTA", style: "font-serif font-bold tracking-wider uppercase text-3xl text-orange-500" }, // Ulta has orange
    { name: "ZARA", style: "font-serif font-black tracking-tighter uppercase text-5xl" },
    { name: "ATHLETA", style: "font-sans font-light tracking-widest uppercase text-2xl" },
  ];

  return (
    <section id="brands" className="py-20 bg-white border-b border-gray-100">
      <div className="container px-6 mx-auto text-center">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-12">
          Shop your favorite stores and let Style.re handle the pickup
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center opacity-80">
          {brands.map((brand, index) => (
            <div key={index} className={`text-secondary hover:text-primary transition-colors cursor-default ${brand.style}`}>
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
