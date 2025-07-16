import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function AboutSection() {
  return <section className="py-16 md:py-24 bg-[#f8f5f0]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Francisco Sahagun Castillo in a professional setting" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2c2c2c]">
              Culinary Storyteller with{' '}
              <span className="text-[#ff6b35]">Cultural Authenticity</span>
            </h2>
            <p className="text-lg text-[#2c2c2c] mb-4">
              With over 5 years of experience in food writing, I specialize in
              translating complex culinary trends into accessible, engaging
              content that resonates with diverse audiences.
            </p>
            <p className="text-lg text-[#2c2c2c] mb-6">
              From my work at{' '}
              <span className="font-semibold">Sunset Magazine</span> to my
              syndicated pieces in{' '}
              <span className="font-semibold">SoCal Living Daily</span>, I bring
              deep expertise in the Southern California food scene while
              maintaining a finger on the pulse of national culinary movements.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-[#e8e8e8] px-3 py-1 rounded-full text-sm">
                Culinary Trends
              </span>
              <span className="bg-[#e8e8e8] px-3 py-1 rounded-full text-sm">
                Cultural Food Traditions
              </span>
              <span className="bg-[#e8e8e8] px-3 py-1 rounded-full text-sm">
                Recipe Development
              </span>
              <span className="bg-[#e8e8e8] px-3 py-1 rounded-full text-sm">
                Restaurant Coverage
              </span>
            </div>
            <button className="flex items-center text-[#ff6b35] hover:text-[#e65a2a] font-medium transition-colors">
              More About Me
              <ArrowRightIcon size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>;
}