import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";

const Sale = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <FeaturedProducts
          category="sale"
          title="Sale"
          description="Amazing deals and discounts"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Sale;