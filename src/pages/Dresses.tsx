import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";

const Dresses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <FeaturedProducts
          category="dresses"
          title="Dresses"
          description="Elegant dresses for every occasion"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Dresses;