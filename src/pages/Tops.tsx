import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";

const Tops = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <FeaturedProducts
          category="tops"
          title="Tops"
          description="Stylish tops for your wardrobe"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Tops;