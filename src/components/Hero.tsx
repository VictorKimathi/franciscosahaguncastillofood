import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative bg-gradient-to-r from-[#2c2c2c] to-[#454545] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'overlay'
    }}></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border-2 border-[#ff6b35] text-[#ff6b35] font-medium text-sm rounded-full">
            Food Writer & Trend Specialist
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Francisco Sahagun Castillo
            <span className="block text-[#ff6b35]">Food Trend Translator</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Turning complex culinary trends into engaging stories for 5+ years
          </p>
          <div className="flex flex-wrap gap-4 md:gap-8 mb-12">
            <button className="bg-[#ff6b35] hover:bg-[#e65a2a] text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors">
              Explore My Work
              <ArrowRightIcon size={18} className="ml-2" />
            </button>
            <div className="flex items-center text-gray-200">
              <div className="text-3xl font-bold text-[#ff6b35] mr-2">
                2,500+
              </div>
              <div className="text-sm">
                Articles
                <br />
                Published
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f8f5f0] to-transparent"></div>
    </section>;
}