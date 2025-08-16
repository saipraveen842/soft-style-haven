import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Perfect Style
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Curated collection of elegant women's fashion. From timeless classics to contemporary trends, 
            find pieces that celebrate your unique style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="boutique-button text-quaternary-foreground px-8 py-6 text-lg rounded-full">
              Shop New Arrivals
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full border-primary hover:bg-primary/10">
              Explore Collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;