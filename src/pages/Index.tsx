import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts 
        category="new-arrivals"
        title="New Arrivals"
        description="Discover the latest trends in women's fashion"
      />
      <Footer />
    </div>
  );
};

export default Index;
