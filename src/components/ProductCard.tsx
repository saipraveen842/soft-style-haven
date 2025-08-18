import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAppContext } from "@/context/AppContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isOnSale?: boolean;
  isWishlisted?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isOnSale = false,
  isWishlisted = false
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { cart, wishlist } = useAppContext();
  const { toast } = useToast();
  
  const isInWishlist = wishlist.isInWishlist(id);

  const handleWishlistToggle = () => {
    wishlist.toggleWishlist({ id, name, price, image });
    toast({
      title: isInWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${name} ${isInWishlist ? "removed from" : "added to"} your wishlist`,
    });
  };

  const handleAddToCart = () => {
    cart.addToCart({ id, name, price, image });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
    });
  };

  return (
    <div 
      className="group boutique-card bg-card rounded-2xl overflow-hidden border border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Sale Badge */}
        {isOnSale && (
          <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
            Sale
          </Badge>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          onClick={handleWishlistToggle}
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              isInWishlist ? 'fill-destructive text-destructive' : 'text-muted-foreground'
            }`} 
          />
        </Button>

        {/* Add to Cart Button */}
        <Button
          className={`absolute bottom-4 left-4 right-4 boutique-button text-quaternary-foreground rounded-full transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          onClick={handleAddToCart}
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        <h3 className="font-semibold text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) 
                    ? 'fill-quaternary text-quaternary' 
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-foreground">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
          {isOnSale && originalPrice && (
            <Badge variant="secondary" className="text-xs">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;