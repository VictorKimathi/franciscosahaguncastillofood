import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4">
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-700 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems: FAQItem[] = [
    {
      question: "What types of cuisine do you specialize in?",
      answer: "I specialize in modern fusion cuisine, combining traditional techniques from French, Italian, and Asian culinary traditions. My focus is on creating innovative dishes using fresh, locally-sourced ingredients while respecting the fundamentals of each cuisine style."
    },
    {
      question: "Do you offer catering services for events?",
      answer: "Yes, I provide comprehensive catering services for various events including corporate functions, private parties, weddings, and special occasions. I work closely with clients to create customized menus that fit their preferences, dietary requirements, and budget."
    },
    {
      question: "Can you accommodate dietary restrictions and allergies?",
      answer: "Absolutely! I have extensive experience working with various dietary restrictions including vegetarian, vegan, gluten-free, keto, and allergen-free options. I always conduct thorough consultations to understand specific needs and ensure safe, delicious alternatives."
    },
    {
      question: "What is your approach to menu development?",
      answer: "My menu development process focuses on seasonal ingredients, balanced nutrition, and creative presentation. I consider factors like cost efficiency, preparation time, and customer preferences while ensuring each dish meets high-quality standards and tells a unique culinary story."
    },
    {
      question: "Do you offer cooking classes or culinary consulting?",
      answer: "Yes, I offer both private cooking classes and professional culinary consulting services. Cooking classes can be tailored for individuals or groups, covering various skill levels. Consulting services include menu development, kitchen optimization, staff training, and restaurant concept development."
    },
    {
      question: "How far in advance should I book your services?",
      answer: "For catering and private chef services, I recommend booking at least 2-3 weeks in advance, especially during peak seasons. For larger events or holidays, 4-6 weeks notice is preferred. However, I do my best to accommodate last-minute requests when possible."
    },
    {
      question: "What are your food safety and hygiene standards?",
      answer: "I maintain the highest food safety standards with current ServSafe Manager and HACCP certifications. All food preparation follows strict hygiene protocols, proper temperature controls, and safe handling procedures to ensure the health and safety of all clients."
    },
    {
      question: "Do you provide your own equipment and staff?",
      answer: "Yes, for most catering events, I can provide professional kitchen equipment, serving utensils, and additional trained staff as needed. For larger events, I work with a trusted network of culinary professionals to ensure seamless service delivery."
    },
    {
      question: "How do you price your services?",
      answer: "Pricing varies based on several factors including menu complexity, number of guests, service type, location, and duration. I provide detailed quotes after an initial consultation to understand your specific needs and preferences. All pricing is transparent with no hidden fees."
    },
    {
      question: "Can you work with existing restaurant teams?",
      answer: "Absolutely! I have extensive experience in team leadership and training. Whether it's menu consultation, staff training, kitchen optimization, or temporary chef services, I work collaboratively with existing teams to enhance operations and maintain quality standards."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f0] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-16 h-16 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about my culinary services, 
            catering options, and professional experience.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpenItems(faqItems.map((_, index) => index))}
              className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200"
            >
              Expand All
            </button>
            <button
              onClick={() => setOpenItems([])}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Don't see your question answered here? Feel free to reach out directly 
            and I'll be happy to provide more information about my services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-200"
            >
              Contact Me
            </a>
            <a
              href="mailto:francisco@example.com"
              className="inline-flex items-center px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

