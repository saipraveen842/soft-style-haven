import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";

const Tops = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Tops
          </h1>
          <p className="text-muted-foreground text-lg">
            Stylish tops for your wardrobe
          </p>
        </div>
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