import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function CallToAction() {
  return <section className="py-16 md:py-24 bg-[#f8f5f0]">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#ff6b35] to-[#e65a2a] rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your editorial calendar and how I can bring food
            trends and cultural stories to your audience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#ff6b35] hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center transition-colors">
              Hire Me For Your Next Story
              <ArrowRightIcon size={18} className="ml-2" />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium transition-colors">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>;
}