import React from 'react';
import { Button } from '@/components/ui/button';

export interface FinalCTAProps {
  title?: string;
  ctaText?: string;
  ctaLink?: string;
  subtext?: string;
}

export function FinalCTA({
  title = "Ready to stop wasting money on the wrong Shopify apps?",
  ctaText = "Get My Free ROI Report",
  ctaLink = "#calculator",
  subtext = "No credit card required. Unsubscribe anytime.",
}: FinalCTAProps): React.ReactElement {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
      role="region"
      aria-label="Call to action"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">{title}</h2>
        <a href={ctaLink} aria-label={ctaText}>
          <Button
            size="xl"
            className="shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white text-purple-700 hover:bg-gray-100 font-semibold mb-4"
          >
            {ctaText}
          </Button>
        </a>
        <p className="text-white/90 text-sm">{subtext}</p>
      </div>
    </section>
  );
}

export default FinalCTA;
