import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";

const Accessories = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Accessories
          </h1>
          <p className="text-muted-foreground text-lg">
            Complete your look with our accessories
          </p>
        </div>
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