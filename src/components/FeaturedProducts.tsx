import ProductCard from "./ProductCard";
import dress1 from "@/assets/dress-1.jpg";
import top1 from "@/assets/top-1.jpg";
import accessory1 from "@/assets/accessory-1.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Flowing Midi Dress",
      price: 2999,
      originalPrice: 3999,
      image: dress1,
      rating: 4.5,
      reviews: 127,
      isOnSale: true
    },
    {
      id: "2", 
      name: "Silk Lavender Blouse",
      price: 1899,
      image: top1,
      rating: 4.8,
      reviews: 89
    },
    {
      id: "3",
      name: "Pearl Jewelry Set",
      price: 2499,
      originalPrice: 2999,
      image: accessory1,
      rating: 4.7,
      reviews: 156,
      isOnSale: true
    },
    {
      id: "4",
      name: "Elegant Evening Dress",
      price: 4499,
      image: dress1,
      rating: 4.9,
      reviews: 203
    },
    {
      id: "5",
      name: "Casual Summer Top",
      price: 1299,
      originalPrice: 1599,
      image: top1,
      rating: 4.3,
      reviews: 78,
      isOnSale: true
    },
    {
      id: "6",
      name: "Delicate Gold Necklace",
      price: 1799,
      image: accessory1,
      rating: 4.6,
      reviews: 94
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the season's most coveted pieces, 
            curated for the modern woman who values quality and style.
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