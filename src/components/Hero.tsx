import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
          Find Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
          Search from millions of homes, apartments, and properties
        </p>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <Tabs defaultValue="buy" className="mb-4">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-white/95 backdrop-blur">
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="rent">Rent</TabsTrigger>
              <TabsTrigger value="sell">Sell</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex gap-2 bg-white rounded-lg shadow-elegant p-2">
            <div className="flex-1 flex items-center gap-2 px-3 bg-background rounded-md border border-border">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Enter address, neighborhood, city, or ZIP code"
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button size="lg" className="px-8">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
