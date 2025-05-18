
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-earth-50 to-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Discover India's Hidden 
              <span className="text-accent"> Cultural Treasures</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg">
              Immerse yourself in lesser-known art forms, festivals, and experiences 
              that showcase the rich cultural heritage of India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Start Exploring
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn How It Works
              </Button>
            </div>
            
            <div className="mt-10 flex items-center space-x-8 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                <span>1000+ Art Forms</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                <span>28 States</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                <span>AI Powered</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-tr from-terracotta-500/20 to-earth-500/20 rounded-2xl shadow-soft flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Traditional Indian Art" 
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-white rounded-xl shadow-soft p-3 transform rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1558454740-06a0ec313a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Festival celebration" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-lg shadow-soft p-2 transform -rotate-6">
                <img 
                  src="https://images.unsplash.com/photo-1625730299038-f80cf2d53c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                  alt="Handicraft" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-spice-100 rounded-full opacity-50" />
      <div className="absolute top-16 left-8 w-16 h-16 bg-terracotta-100 rounded-full opacity-50" />
    </section>
  );
};

export default Hero;
