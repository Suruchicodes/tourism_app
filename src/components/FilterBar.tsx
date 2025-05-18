
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  className?: string;
}

const FilterBar = ({ className }: FilterBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [stateFilters, setStateFilters] = useState<string[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  
  const experienceTypes = ["All", "Art Forms", "Festivals", "Performances", "Workshops"];
  
  const handleStateToggle = (state: string) => {
    setStateFilters(prevStates =>
      prevStates.includes(state)
        ? prevStates.filter(s => s !== state)
        : [...prevStates, state]
    );
  };
  
  const handleCategoryToggle = (category: string) => {
    setCategoryFilters(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category)
        : [...prevCategories, category]
    );
  };
  
  const clearFilters = () => {
    setStateFilters([]);
    setCategoryFilters([]);
  };

  const states = ["Rajasthan", "Kerala", "West Bengal", "Gujarat", "Tamil Nadu", "Maharashtra"];
  const categories = ["Painting", "Dance", "Music", "Sculpture", "Textiles", "Pottery"];

  return (
    <div className={cn("bg-background sticky top-16 z-20 border-b py-4", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="search" 
                placeholder="Search experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full md:w-64 lg:w-80 border-muted bg-muted/50 rounded-full focus-visible:ring-primary"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-2 gap-y-3 items-center justify-between w-full md:w-auto">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList className="bg-muted/50">
                {experienceTypes.map((type) => (
                  <TabsTrigger 
                    key={type} 
                    value={type.toLowerCase().replace(' ', '-')}
                    className="data-[state=active]:bg-accent data-[state=active]:text-white"
                  >
                    {type}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2 ml-auto">
              {/* States Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-background border-muted flex gap-2 h-9">
                    <span>States</span>
                    <span className="bg-muted rounded-full h-5 w-5 flex items-center justify-center text-xs">
                      {stateFilters.length || "0"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  {states.map((state) => (
                    <DropdownMenuCheckboxItem
                      key={state}
                      checked={stateFilters.includes(state)}
                      onCheckedChange={() => handleStateToggle(state)}
                    >
                      {state}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Categories Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-background border-muted flex gap-2 h-9">
                    <span>Categories</span>
                    <span className="bg-muted rounded-full h-5 w-5 flex items-center justify-center text-xs">
                      {categoryFilters.length || "0"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  {categories.map((category) => (
                    <DropdownMenuCheckboxItem
                      key={category}
                      checked={categoryFilters.includes(category)}
                      onCheckedChange={() => handleCategoryToggle(category)}
                    >
                      {category}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* All Filters Button */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="bg-background border-muted h-9 w-9">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <div className="p-2">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center text-sm h-8"
                      onClick={clearFilters}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        
        {/* Active filters display */}
        {(stateFilters.length > 0 || categoryFilters.length > 0) && (
          <div className="flex flex-wrap items-center gap-2 mt-3 text-sm text-foreground/70">
            <span>Active filters:</span>
            {stateFilters.concat(categoryFilters).map(filter => (
              <Badge 
                key={filter}
                variant="outline" 
                className="px-2 py-0 h-6 bg-muted/70 hover:bg-muted cursor-pointer"
                onClick={() => 
                  stateFilters.includes(filter) 
                    ? handleStateToggle(filter) 
                    : handleCategoryToggle(filter)
                }
              >
                {filter} ✕
              </Badge>
            ))}
            <Button 
              variant="link" 
              className="text-xs text-primary h-6 p-0"
              onClick={clearFilters}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
