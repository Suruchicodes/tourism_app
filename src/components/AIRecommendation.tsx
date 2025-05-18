
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AIRecommendation = () => {
  const [activeTab, setActiveTab] = useState("interests");
  const [inputValue, setInputValue] = useState("");
  const [region, setRegion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
      // We would integrate with Streamlit or other AI backend here
    }, 2000);
  };
  
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-heading">Personalized Recommendations</h2>
            <p className="text-lg mb-6">
              Our AI-powered recommendation system helps you discover cultural experiences 
              based on your interests, location preferences, or specific art forms you 
              want to explore.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-earth-100 rounded-full p-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-earth-500 rounded-full text-white font-bold">1</div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Tell us what you like</h4>
                  <p className="text-foreground/70">Share your interests or specific cultural elements</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-spice-100 rounded-full p-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-spice-500 rounded-full text-white font-bold">2</div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Get AI-powered suggestions</h4>
                  <p className="text-foreground/70">Our system analyzes thousands of cultural experiences</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-terracotta-100 rounded-full p-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-terracotta-500 rounded-full text-white font-bold">3</div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Explore and plan your visit</h4>
                  <p className="text-foreground/70">Discover hidden gems and create your cultural itinerary</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="shadow-soft overflow-hidden border-0 bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-medium mb-4">Get Recommendations</h3>
                
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                  <TabsList className="grid grid-cols-2 bg-muted/50">
                    <TabsTrigger 
                      value="interests" 
                      className="data-[state=active]:bg-accent data-[state=active]:text-white"
                    >
                      By Interests
                    </TabsTrigger>
                    <TabsTrigger 
                      value="region" 
                      className="data-[state=active]:bg-accent data-[state=active]:text-white"
                    >
                      By Region
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <form onSubmit={handleSubmit}>
                  {activeTab === "interests" ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="interests" className="block text-sm font-medium">
                          What interests you?
                        </label>
                        <Input
                          id="interests"
                          placeholder="e.g. traditional dance, textile arts, folk music"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="region" className="block text-sm font-medium">
                          Preferred region (optional)
                        </label>
                        <Select value={region} onValueChange={setRegion}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="north">North India</SelectItem>
                            <SelectItem value="south">South India</SelectItem>
                            <SelectItem value="east">East India</SelectItem>
                            <SelectItem value="west">West India</SelectItem>
                            <SelectItem value="northeast">North East India</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="region" className="block text-sm font-medium">
                          Select a region
                        </label>
                        <Select value={region} onValueChange={setRegion} required>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="north">North India</SelectItem>
                            <SelectItem value="south">South India</SelectItem>
                            <SelectItem value="east">East India</SelectItem>
                            <SelectItem value="west">West India</SelectItem>
                            <SelectItem value="northeast">North East India</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="specific" className="block text-sm font-medium">
                          Any specific interests? (optional)
                        </label>
                        <Input
                          id="specific"
                          placeholder="e.g. festivals, handicrafts, performances"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    className="w-full mt-6 bg-accent hover:bg-accent/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Generating Recommendations..." : "Get Recommendations"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendation;
