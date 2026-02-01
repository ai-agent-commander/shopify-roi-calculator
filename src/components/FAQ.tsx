import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "item-1",
    question: "Is this really free?",
    answer: "Yes, completely free. We earn a small commission if you purchase an app through our recommendations, but you pay the same price you'd pay directly. This keeps the calculator free for everyone.",
  },
  {
    id: "item-2",
    question: "How long does it take?",
    answer: "The questionnaire takes about 2 minutes to complete. You'll receive your personalized ROI report instantly via email.",
  },
  {
    id: "item-3",
    question: "What if I don't want to buy anything?",
    answer: "That's perfectly fine! Many users discover they can save money by canceling apps they don't need. The calculator helps you decide what NOT to buy just as much as what to invest in.",
  },
  {
    id: "item-4",
    question: "Are your recommendations biased?",
    answer: "No. Our recommendations are based purely on your business metrics and ROI calculations. We show you apps that will actually pay for themselves, regardless of commission rates.",
  },
  {
    id: "item-5",
    question: "Do you sell my email address?",
    answer: "Never. We use your email only to send you the ROI report and occasional helpful tips. You can unsubscribe anytime with one click.",
  },
  {
    id: "item-6",
    question: "What data do you use for calculations?",
    answer: "Our algorithm is based on anonymized data from thousands of Shopify stores, industry benchmarks, and actual app performance metrics. We continuously update our models to ensure accuracy.",
  },
];

export function FAQ(): React.ReactElement {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      role="region"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
