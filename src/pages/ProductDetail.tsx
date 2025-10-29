import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/AppContext";
import { useToast } from "@/hooks/use-toast";
import { Heart, ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import dress1 from "@/assets/dress-1.jpg";
import top1 from "@/assets/top-1.jpg";
import accessory1 from "@/assets/accessory-1.jpg";

// Sample product data (matches FeaturedProducts data)
const products = [
  {
    id: "1",
    name: "Flowing Midi Dress",
    price: 2999,
    originalPrice: 3999,
    image: dress1,
    rating: 4.5,
    reviews: 127,
    isOnSale: true,
    category: "dresses",
    description: "Beautiful flowing summer dress perfect for any occasion. Made with premium breathable fabric."
  },
  {
    id: "2", 
    name: "Silk Lavender Blouse",
    price: 1899,
    image: top1,
    rating: 4.8,
    reviews: 89,
    category: "tops",
    description: "Versatile top that pairs perfectly with jeans or skirts. Comfortable and stylish."
  },
  {
    id: "3",
    name: "Pearl Jewelry Set",
    price: 2499,
    originalPrice: 2999,
    image: accessory1,
    rating: 4.7,
    reviews: 156,
    isOnSale: true,
    category: "accessories",
    description: "Luxury jewelry set crafted from premium materials. Perfect for any special occasion."
  },
  {
    id: "4",
    name: "Elegant Evening Dress",
    price: 4499,
    image: dress1,
    rating: 4.9,
    reviews: 203,
    category: "dresses",
    description: "Stunning evening dress that will make you stand out at any formal event."
  },
  {
    id: "5",
    name: "Casual Summer Top",
    price: 1299,
    originalPrice: 1599,
    image: top1,
    rating: 4.3,
    reviews: 78,
    isOnSale: true,
    category: "tops",
    description: "Light and breezy summer top perfect for casual outings."
  },
  {
    id: "6",
    name: "Delicate Gold Necklace",
    price: 1799,
    image: accessory1,
    rating: 4.6,
    reviews: 94,
    category: "accessories",
    description: "Elegant gold necklace that adds sophistication to any outfit."
  },
  {
    id: "7",
    name: "Summer Floral Dress",
    price: 2199,
    image: dress1,
    rating: 4.4,
    reviews: 92,
    category: "dresses",
    description: "Fresh floral print dress perfect for summer events and garden parties."
  },
  {
    id: "8",
    name: "Chiffon Blouse",
    price: 1699,
    originalPrice: 2199,
    image: top1,
    rating: 4.6,
    reviews: 156,
    isOnSale: true,
    category: "tops",
    description: "Delicate chiffon blouse that pairs beautifully with any bottom."
  },
  {
    id: "9",
    name: "Statement Earrings",
    price: 899,
    image: accessory1,
    rating: 4.8,
    reviews: 203,
    category: "accessories",
    description: "Bold statement earrings that elevate any look instantly."
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { cart, wishlist } = useAppContext();
  const { addToCart } = cart;
  const { toggleWishlist, isInWishlist } = wishlist;
  const { toast } = useToast();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product);
    toast({
      title: isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist",
      description: isInWishlist(product.id) 
        ? `${product.name} has been removed from your wishlist.`
        : `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
            {product.isOnSale && (
              <Badge className="absolute top-4 left-4 bg-destructive text-white">
                Sale
              </Badge>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">
                  ${(product.price / 100).toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-muted-foreground line-through">
                    ${(product.originalPrice / 100).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <div className="border-t border-b py-6">
              <h2 className="font-semibold text-lg mb-2">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={handleWishlistToggle}
              >
                <Heart
                  className={`w-5 h-5 mr-2 ${
                    isInWishlist(product.id) ? "fill-current text-primary" : ""
                  }`}
                />
                {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>

            <div className="bg-muted p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category</span>
                <span className="font-semibold capitalize">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Availability</span>
                <span className="font-semibold text-green-600">In Stock</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-semibold">Free Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
