
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Share } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExperienceProps {
  id: string;
  title: string;
  type: string;
  location: string;
  image: string;
  tags: string[];
  isFeatured?: boolean;
}

const ExperienceCard = ({ id, title, type, location, image, tags, isFeatured }: ExperienceProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };
  
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Share functionality would go here
    console.log(`Sharing experience: ${title}`);
  };

  return (
    <Link to={`/experience/${id}`}>
      <Card className={cn(
        "overflow-hidden border-0 shadow-soft card-hover h-full",
        isFeatured && "ring-2 ring-accent ring-offset-2"
      )}>
        <div className="relative">
          <div className="aspect-[5/4] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
          </div>
          
          {isFeatured && (
            <Badge className="absolute top-3 left-3 bg-accent hover:bg-accent text-white">
              Featured
            </Badge>
          )}
          
          <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90">
            {type}
          </Badge>
          
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display text-lg font-medium line-clamp-1">{title}</h3>
            <div className="flex space-x-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "h-8 w-8 rounded-full",
                  isBookmarked && "text-accent"
                )}
                onClick={toggleBookmark}
              >
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full"
                onClick={handleShare}
              >
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-foreground/70 mb-3">
            <span className="inline-block mr-1">📍</span> {location}
          </p>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs bg-muted/50">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs bg-muted/50">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ExperienceCard;
