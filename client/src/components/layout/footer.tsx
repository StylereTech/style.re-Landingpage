import { Link } from "wouter";
import logo from "@assets/Style.Re_Logo_1765924594076.png";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container px-6 mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="block mb-6 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Style.re" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Fast, secure & stress-free delivery – from store to door.
            </p>
            <div className="flex space-x-4">
               {/* Social Icons would go here */}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-secondary">Company</h4>
            <ul className="space-y-4">
              <li><a href="https://stylere.app/about-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-secondary">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Order Pickup</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Same-Day Delivery</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Real-Time Tracking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-secondary">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Style.re Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
