import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { TrendingUp, MapPin, DollarSign, Key } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const Index = () => {
  const featuredProperties = [
    {
      image: property1,
      price: "$825,000",
      beds: 4,
      baths: 3,
      sqft: "3,250",
      address: "1234 Oak Avenue",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      status: "For Sale" as const,
      featured: true,
    },
    {
      image: property2,
      price: "$3,200/mo",
      beds: 2,
      baths: 2,
      sqft: "1,450",
      address: "567 Maple Street",
      city: "Austin",
      state: "TX",
      zip: "78701",
      status: "For Rent" as const,
    },
    {
      image: property3,
      price: "$1,150,000",
      beds: 5,
      baths: 4,
      sqft: "4,100",
      address: "890 Pine Road",
      city: "Seattle",
      state: "WA",
      zip: "98101",
      status: "For Sale" as const,
      featured: true,
    },
    {
      image: property4,
      price: "$2,800/mo",
      beds: 3,
      baths: 2,
      sqft: "1,850",
      address: "234 Cedar Lane",
      city: "Portland",
      state: "OR",
      zip: "97201",
      status: "For Rent" as const,
    },
    {
      image: property5,
      price: "$950,000",
      beds: 4,
      baths: 3,
      sqft: "3,500",
      address: "456 Birch Court",
      city: "Denver",
      state: "CO",
      zip: "80202",
      status: "For Sale" as const,
    },
    {
      image: property6,
      price: "$675,000",
      beds: 3,
      baths: 2,
      sqft: "2,400",
      address: "789 Elm Drive",
      city: "Nashville",
      state: "TN",
      zip: "37201",
      status: "For Sale" as const,
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Find Your Location",
      description: "Search across millions of properties nationwide",
    },
    {
      icon: DollarSign,
      title: "Get Pre-Approved",
      description: "Connect with top lenders for the best rates",
    },
    {
      icon: Key,
      title: "Move In Ready",
      description: "Find homes ready for immediate occupancy",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Get real-time data on market trends and values",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <Hero />
        
        <Filters />

        {/* Featured Properties */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Featured Properties
                </h2>
                <p className="text-muted-foreground">
                  Hand-picked homes and apartments just for you
                </p>
              </div>
              <Button variant="outline">View All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((property, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose HomeHaven?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We make finding your perfect home simple and stress-free
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-card hover:shadow-card transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join millions of happy homeowners who found their perfect property with HomeHaven
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Contact Agent
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">HomeHaven</h3>
                <p className="text-background/70">
                  Your trusted partner in finding the perfect home.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-background/70">
                  <li><a href="#" className="hover:text-background">About Us</a></li>
                  <li><a href="#" className="hover:text-background">Careers</a></li>
                  <li><a href="#" className="hover:text-background">Press</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-background/70">
                  <li><a href="#" className="hover:text-background">Blog</a></li>
                  <li><a href="#" className="hover:text-background">Help Center</a></li>
                  <li><a href="#" className="hover:text-background">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-background/70">
                  <li><a href="#" className="hover:text-background">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-background">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-background">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-background/20 pt-8 text-center text-background/70">
              <p>&copy; 2024 HomeHaven. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
