import { useState } from "react";
import { SlidersHorizontal, DollarSign, Home, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const Filters = () => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);

  return (
    <div className="bg-muted/50 border-y border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Filters */}
          <Select defaultValue="any">
            <SelectTrigger className="w-[140px]">
              <Home className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Type</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="any">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Beds" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Beds</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="any">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Baths" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Baths</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>

          {/* More Filters Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                More Filters
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filter Properties</SheetTitle>
              </SheetHeader>
              <div className="space-y-6 mt-6">
                {/* Price Range */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Price Range
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
                      }
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value) || 1000000])
                      }
                    />
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={2000000}
                    step={50000}
                    className="mt-2"
                  />
                </div>

                {/* Square Footage */}
                <div className="space-y-3">
                  <Label>Square Footage</Label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="Min sqft" />
                    <Input type="number" placeholder="Max sqft" />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </Label>
                  <Input placeholder="City, ZIP, or Neighborhood" />
                </div>

                {/* Property Features */}
                <div className="space-y-3">
                  <Label>Home Features</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">Pool</Button>
                    <Button variant="outline" size="sm">Garage</Button>
                    <Button variant="outline" size="sm">Backyard</Button>
                    <Button variant="outline" size="sm">Fireplace</Button>
                  </div>
                </div>

                {/* Apply Button */}
                <Button className="w-full" size="lg">
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <div className="ml-auto text-sm text-muted-foreground">
            2,547 homes available
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
