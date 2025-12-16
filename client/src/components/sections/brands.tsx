import brandsImg from "@assets/Capture75757_1765924822127.PNG";

export function Brands() {
  return (
    <section id="brands" className="py-20 bg-white border-b border-gray-100">
      <div className="container px-6 mx-auto text-center">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">
          Shop your favorite stores and let Style.re handle the pickup
        </p>
        
        <div className="flex justify-center items-center">
          {/* Using the provided composite image as requested */}
          <img 
            src={brandsImg} 
            alt="Trusted Brands: Macy's, Nordstrom, Old Navy, Lululemon, Banana Republic, DSW, Ulta, Zara, Athleta" 
            className="max-w-full md:max-w-3xl opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
