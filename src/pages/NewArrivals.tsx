import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";

const NewArrivals = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <FeaturedProducts
          category="new-arrivals"
          title="New Arrivals"
          description="Discover the latest trends in women's fashion"
        />
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;