
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Region {
  id: string;
  name: string;
  artForms: number;
  experiences: number;
  image: string;
}

const RegionalExplorer = () => {
  const [activeRegion, setActiveRegion] = useState("north");
  
  const regions: Record<string, Region> = {
    north: {
      id: "north",
      name: "North India",
      artForms: 120,
      experiences: 85,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    south: {
      id: "south",
      name: "South India",
      artForms: 145,
      experiences: 92,
      image: "https://images.unsplash.com/photo-1516550135131-fe3dcb0bedc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    },
    east: {
      id: "east",
      name: "East India",
      artForms: 98,
      experiences: 64,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    west: {
      id: "west",
      name: "West India",
      artForms: 112,
      experiences: 78,
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    northeast: {
      id: "northeast",
      name: "North East",
      artForms: 86,
      experiences: 52,
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  };

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Explore By Region</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 xl:col-span-3 space-y-2">
            {Object.values(regions).map((region) => (
              <Button
                key={region.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-lg font-medium py-6 px-4",
                  activeRegion === region.id 
                    ? "bg-accent text-white hover:bg-accent/90 hover:text-white" 
                    : "hover:bg-muted"
                )}
                onClick={() => setActiveRegion(region.id)}
              >
                {region.name}
              </Button>
            ))}
          </div>
          
          <div className="lg:col-span-8 xl:col-span-9">
            <Card className="border-0 shadow-soft overflow-hidden h-full">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={regions[activeRegion].image}
                  alt={regions[activeRegion].name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-white text-3xl md:text-4xl font-display font-semibold mb-2">
                    {regions[activeRegion].name}
                  </h3>
                  <p className="text-white/90 text-lg mb-4">
                    Discover the unique cultural heritage of {regions[activeRegion].name}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                      <span className="block text-2xl font-semibold">{regions[activeRegion].artForms}</span>
                      <span className="text-sm">Art Forms</span>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                      <span className="block text-2xl font-semibold">{regions[activeRegion].experiences}</span>
                      <span className="text-sm">Experiences</span>
                    </div>
                  </div>
                  <Button className="bg-white text-accent hover:bg-white/90 w-fit">
                    Explore Region
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalExplorer;
