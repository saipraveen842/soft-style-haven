import ProductCard from "./ProductCard";
import dress1 from "@/assets/dress-1.jpg";
import top1 from "@/assets/top-1.jpg";
import accessory1 from "@/assets/accessory-1.jpg";

interface FeaturedProductsProps {
  category?: string;
  title?: string;
  description?: string;
}

const FeaturedProducts = ({ 
  category, 
  title = "Featured Collections",
  description = "Discover our handpicked selection of the season's most coveted pieces, curated for the modern woman who values quality and style."
}: FeaturedProductsProps) => {
  const allProducts = [
    {
      id: "1",
      name: "Flowing Midi Dress",
      price: 2999,
      originalPrice: 3999,
      image: dress1,
      rating: 4.5,
      reviews: 127,
      isOnSale: true,
      category: "dresses"
    },
    {
      id: "2", 
      name: "Silk Lavender Blouse",
      price: 1899,
      image: top1,
      rating: 4.8,
      reviews: 89,
      category: "tops"
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
      category: "accessories"
    },
    {
      id: "4",
      name: "Elegant Evening Dress",
      price: 4499,
      image: dress1,
      rating: 4.9,
      reviews: 203,
      category: "dresses"
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
      category: "tops"
    },
    {
      id: "6",
      name: "Delicate Gold Necklace",
      price: 1799,
      image: accessory1,
      rating: 4.6,
      reviews: 94,
      category: "accessories"
    },
    {
      id: "7",
      name: "Summer Floral Dress",
      price: 2199,
      image: dress1,
      rating: 4.4,
      reviews: 92,
      category: "dresses",
      isNew: true
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
      isNew: true
    },
    {
      id: "9",
      name: "Statement Earrings",
      price: 899,
      image: accessory1,
      rating: 4.8,
      reviews: 203,
      category: "accessories",
      isNew: true
    }
  ];

  // Filter products based on category
  const products = category 
    ? allProducts.filter(product => 
        category === "sale" 
          ? product.isOnSale 
          : category === "new-arrivals"
          ? product.isNew
          : product.category === category
      )
    : allProducts;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;