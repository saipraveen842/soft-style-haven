import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";

const Dresses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Dresses
          </h1>
          <p className="text-muted-foreground text-lg">
            Elegant dresses for every occasion
          </p>
        </div>
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Dresses;