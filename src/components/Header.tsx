
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { name: "Discover", path: "/discover" },
    { name: "Art Forms", path: "/art-forms" },
    { name: "Festivals", path: "/festivals" },
    { name: "Experiences", path: "/experiences" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-semibold text-primary">
              Kala<span className="text-accent">Yatra</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-foreground/80 hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Search Bar & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search art forms, places..."
                className="w-64 pl-10 rounded-full border-muted bg-muted/50 focus-visible:ring-accent"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <Button variant="ghost" className="text-foreground/80">Sign In</Button>
            <Button className="bg-accent hover:bg-accent/90">Sign Up</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 z-50 bg-background md:hidden pt-16 px-4",
          isMenuOpen ? "block animate-fade-in" : "hidden"
        )}>
          <div className="flex flex-col space-y-6 p-4">
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search art forms, places..."
                className="w-full pl-10 rounded-full border-muted bg-muted/50"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-xl font-medium py-2 border-b border-border text-foreground/80"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full bg-accent hover:bg-accent/90">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
