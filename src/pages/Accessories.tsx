import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";

const Accessories = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <FeaturedProducts
          category="accessories"
          title="Accessories"
          description="Complete your look with our accessories"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Accessories;