import { Heart, Bed, Bath, Maximize } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  image: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  status: "For Sale" | "For Rent" | "Sold";
  featured?: boolean;
}

const PropertyCard = ({
  image,
  price,
  beds,
  baths,
  sqft,
  address,
  city,
  state,
  zip,
  status,
  featured,
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {featured && (
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          )}
          <Button
            size="icon"
            variant="secondary"
            className="ml-auto bg-white/90 hover:bg-white backdrop-blur"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <Badge className="absolute bottom-3 left-3 bg-white/95 text-foreground backdrop-blur">
          {status}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <div className="text-3xl font-bold text-foreground mb-1">{price}</div>
          <div className="text-sm text-muted-foreground">
            {address}, {city}, {state} {zip}
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{baths} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
