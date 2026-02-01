import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Step {
  id: number;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    number: "1",
    title: "Answer 5 Questions",
    description: "Tell us about your store revenue, goals, and current app stack. Takes just 2 minutes.",
  },
  {
    id: 2,
    number: "2",
    title: "Get Instant Analysis",
    description: "Our algorithm calculates ROI based on thousands of real Shopify store data points.",
  },
  {
    id: 3,
    number: "3",
    title: "Receive Report via Email",
    description: "Get personalized recommendations with exact ROI projections and a 30-day action plan.",
  },
];

export function HowItWorks(): React.ReactElement {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      role="region"
      aria-label="How it works"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card className="bg-white h-full">
                <CardContent className="p-8 text-center">
                  <Badge
                    variant="default"
                    className="w-12 h-12 rounded-full text-2xl font-bold mb-4 flex items-center justify-center mx-auto"
                  >
                    {step.number}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-purple-300"
                  aria-hidden="true"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
