import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  trustBadgeText?: string;
}

export function Hero({
  title = "Find out if your next Shopify app will actually pay for itself",
  subtitle = "Shopify store owners waste $2,400/year on apps they don't need. Answer 5 questions → Get personalized ROI analysis → Make smarter decisions.",
  ctaText = "Start Calculator (2 minutes)",
  ctaLink = "#calculator",
  trustBadgeText = "12,453 store owners have used this calculator",
}: HeroProps): React.ReactElement {
  return (
    <section
      className="hero-gradient py-20 px-4 sm:px-6 lg:px-8 text-white"
      data-testid="hero-section"
      role="region"
      aria-label="Hero section"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={ctaLink} aria-label={ctaText}>
              <Button
                size="xl"
                className="shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white text-purple-700 hover:bg-gray-100 font-semibold"
              >
                {ctaText}
              </Button>
            </a>
          </div>
          <Badge
            variant="secondary"
            className="text-sm py-2 px-4 bg-white/20 text-white border-white/30"
          >
            {trustBadgeText}
          </Badge>
        </div>

        <div className="mt-12">
          <img
            src="https://placehold.co/1200x600/667eea/ffffff?text=ROI+Dashboard"
            alt="[GenAI Prompt: Modern isometric 3D illustration of a Shopify dashboard with colorful app icons, ROI metrics displayed on floating holographic screens, calculator interface in center, professional color palette of purple gradients and blue accents, clean tech aesthetic, soft shadows, bright lighting, 4K quality, digital art style]"
            className="rounded-xl shadow-2xl mx-auto max-w-full h-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
