
import ExperienceCard, { ExperienceProps } from "@/components/ExperienceCard";

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  experiences: ExperienceProps[];
}

const FeaturedSection = ({ title, subtitle, experiences }: FeaturedSectionProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <h2 className="section-heading">{title}</h2>
          {subtitle && <p className="text-lg text-foreground/70 max-w-2xl">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${0.1 * parseInt(experience.id)}s`,
                animationFillMode: 'both',
              }}
            >
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
