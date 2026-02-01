import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Calculator, Target, TrendingUp, CheckCircle } from 'lucide-react';

interface Benefit {
  id: number;
  icon: React.ReactElement;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: <Calculator className="w-12 h-12 text-purple-600" />,
    title: "Personalized ROI Breakdown",
    description: "Get exact numbers on how much you'll save or earn with each app recommendation, based on your specific business metrics.",
  },
  {
    id: 2,
    icon: <Target className="w-12 h-12 text-purple-600" />,
    title: "Tool Recommendations",
    description: "Discover the perfect apps for your store size and goals. Stop paying for enterprise features when you need startup solutions.",
  },
  {
    id: 3,
    icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
    title: "Payback Period Calculation",
    description: "Know exactly when each app will break even. Make informed decisions about which investments make sense right now.",
  },
  {
    id: 4,
    icon: <CheckCircle className="w-12 h-12 text-purple-600" />,
    title: "30-Day Action Plan",
    description: "Receive a step-by-step plan for implementing or switching apps with minimal disruption to your business.",
  },
];

export function Benefits(): React.ReactElement {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      role="region"
      aria-label="Benefits"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          What&apos;s included in your personalized report
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to make confident decisions about your Shopify app investments
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-testid="benefits-grid"
        >
          {benefits.map((benefit) => (
            <Card key={benefit.id} className="bg-white border-gray-200">
              <CardContent className="p-8">
                <div className="mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
