import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Stay in Style</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for exclusive offers, style tips, and early access to new collections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="rounded-full"
            />
            <Button className="boutique-button text-quaternary-foreground rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Bella Boutique
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your destination for elegant, contemporary women's fashion. We curate timeless pieces that celebrate your individual style.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="font-semibold">Quick Links</h5>
            <div className="space-y-2 text-sm">
              <div className="hover:text-primary cursor-pointer transition-colors">New Arrivals</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Dresses</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Tops</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Accessories</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Sale</div>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h5 className="font-semibold">Customer Care</h5>
            <div className="space-y-2 text-sm">
              <div className="hover:text-primary cursor-pointer transition-colors">Size Guide</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Shipping Info</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Returns & Exchanges</div>
              <div className="hover:text-primary cursor-pointer transition-colors">FAQ</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Contact Us</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h5 className="font-semibold">Get in Touch</h5>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@bellaboutique.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <div>
            © 2024 Bella Boutique. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;