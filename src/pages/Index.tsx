
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import FilterBar from "@/components/FilterBar";
import RegionalExplorer from "@/components/RegionalExplorer";
import AIRecommendation from "@/components/AIRecommendation";
import Footer from "@/components/Footer";
import { ExperienceProps } from "@/components/ExperienceCard";

// Sample data for experiences
const featuredExperiences: ExperienceProps[] = [
  {
    id: "1",
    title: "Pattachitra Painting Workshop",
    type: "Workshop",
    location: "Raghurajpur, Odisha",
    image: "https://images.unsplash.com/photo-1596464148416-e633f081b078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Painting", "Traditional", "Hands-on"],
    isFeatured: true
  },
  {
    id: "2",
    title: "Kathakali Performance",
    type: "Performance",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Dance", "Drama", "Makeup"],
    isFeatured: true
  },
  {
    id: "3",
    title: "Warli Art Immersion",
    type: "Art Form",
    location: "Dahanu, Maharashtra",
    image: "https://images.unsplash.com/photo-1578885136359-6546d08ef5b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    tags: ["Tribal", "Painting", "History"],
    isFeatured: false
  },
  {
    id: "4",
    title: "Pushkar Camel Festival",
    type: "Festival",
    location: "Pushkar, Rajasthan",
    image: "https://images.unsplash.com/photo-1516498188131-998887211f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    tags: ["Cultural", "Music", "Folk"],
    isFeatured: false
  },
];

const trendingExperiences: ExperienceProps[] = [
  {
    id: "5",
    title: "Chikankari Embroidery Tour",
    type: "Workshop",
    location: "Lucknow, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1595535373192-fc8536a9d7c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    tags: ["Textiles", "Handicraft", "Traditional"],
    isFeatured: false
  },
  {
    id: "6",
    title: "Dhokra Metal Casting",
    type: "Art Form",
    location: "Bastar, Chhattisgarh",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1008&q=80",
    tags: ["Sculpture", "Metal work", "Tribal"],
    isFeatured: false
  },
  {
    id: "7",
    title: "Theyyam Ritual Performance",
    type: "Performance",
    location: "Kannur, Kerala",
    image: "https://images.unsplash.com/photo-1629123547320-a4a17c990ee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Ritual", "Traditional", "Spiritual"],
    isFeatured: false
  },
  {
    id: "8",
    title: "Madhubani Painting Class",
    type: "Workshop",
    location: "Madhubani, Bihar",
    image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=80",
    tags: ["Painting", "Folk Art", "Hands-on"],
    isFeatured: false
  },
];

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      <FilterBar className="mt-12" />
      
      <main>
        <FeaturedSection
          title="Featured Experiences"
          subtitle="Discover our handpicked selection of unique cultural experiences from across India"
          experiences={featuredExperiences}
        />
        
        <RegionalExplorer />
        
        <FeaturedSection
          title="Trending Now"
          subtitle="See what other travelers are exploring and experiencing"
          experiences={trendingExperiences}
        />
        
        <AIRecommendation />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
