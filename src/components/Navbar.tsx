import { useState } from "react";
import { Search, Heart, ShoppingBag, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = ["New Arrivals", "Dresses", "Tops", "Accessories", "Sale"];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Bella Boutique
        </div>

        {/* Search bar - Desktop */}
        <div className="hidden md:flex items-center max-w-md flex-1 mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for dresses, tops, accessories..."
              className="pl-10 pr-4 py-2 rounded-full border-border focus:border-primary bg-background/50"
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-primary">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-primary">
              2
            </Badge>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Categories - Desktop */}
      <div className="hidden md:block border-t border-border bg-background/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search..."
                className="pl-10 rounded-full"
              />
            </div>
            
            {/* Mobile categories */}
            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="w-full justify-start text-left"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;