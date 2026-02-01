import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  business: string;
  avatarAlt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Found out I was overpaying by $400/month. Switched from Klaviyo to Omnisend and saved money while getting better features for my stage.",
    author: "Mike S.",
    business: "$18K/month store",
    avatarAlt: "[GenAI Prompt: Professional headshot of a confident male entrepreneur in his mid-30s, wearing casual business attire, friendly smile, modern office background with soft bokeh, natural warm lighting, corporate photography style, high resolution, approachable demeanor]",
  },
  {
    id: 2,
    quote: "The calculator showed me I didn't need half the apps I was paying for. Saved $2,400/year by canceling subscriptions that weren't ROI positive.",
    author: "Jennifer L.",
    business: "$45K/month store",
    avatarAlt: "[GenAI Prompt: Professional portrait of a successful female business owner in her early 40s, professional but approachable style, confident expression, bright modern background, natural lighting, corporate headshot aesthetic, high quality]",
  },
  {
    id: 3,
    quote: "Wish I'd found this before spending $1,800 on apps I didn't need. Now I only invest in tools that actually pay for themselves.",
    author: "David R.",
    business: "$8K/month store",
    avatarAlt: "[GenAI Prompt: Casual professional photo of a young male entrepreneur in late 20s, relaxed business casual attire, genuine smile, contemporary workspace background, natural daylight, authentic and trustworthy vibe, high resolution portrait]",
  },
];

export function SocialProof(): React.ReactElement {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      role="region"
      aria-label="Customer testimonials"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Trusted by Shopify Store Owners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://placehold.co/64x64/667eea/ffffff?text=${testimonial.author[0]}`}
                    alt={testimonial.avatarAlt}
                    className="w-16 h-16 rounded-full mr-4"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
