import { Button } from "@/components/ui/button";

const Categories = () => {
  const categories = [
    {
      name: "New Arrivals",
      description: "Latest trends and fresh styles",
      color: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      name: "Dresses",
      description: "Elegant dresses for every occasion",
      color: "bg-secondary",
      textColor: "text-secondary-foreground"
    },
    {
      name: "Tops & Blouses",
      description: "Sophisticated tops and blouses",
      color: "bg-tertiary",
      textColor: "text-tertiary-foreground"
    },
    {
      name: "Accessories",
      description: "Perfect finishing touches",
      color: "bg-quaternary",
      textColor: "text-quaternary-foreground"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground">
            Explore our curated collections designed for every style and occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group ${category.color} rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-soft hover:shadow-elegant`}
            >
              <div className="space-y-4">
                <h3 className={`text-2xl font-bold ${category.textColor}`}>
                  {category.name}
                </h3>
                <p className={`${category.textColor} opacity-90 text-sm`}>
                  {category.description}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-4 bg-background/20 backdrop-blur-sm hover:bg-background/30 border-0 text-inherit"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;