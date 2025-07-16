import React from 'react';
import { QuoteIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    id: 1,
    quote: 'Francisco consistently delivers high-quality content under tight deadlines. His ability to translate complex culinary trends into accessible stories is unmatched.',
    name: 'Maria Rodriguez',
    title: 'Editor-in-Chief, SoCal Living Daily',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }, {
    id: 2,
    quote: 'His cultural authenticity shines through in every piece. Francisco has a rare talent for respecting traditions while making them relevant to modern readers.',
    name: 'David Chen',
    title: 'Food Section Editor, Sunset Magazine',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }, {
    id: 3,
    quote: 'Working with Francisco on our editorial calendar transformed our content strategy. His trend awareness helped us stay ahead of the curve.',
    name: 'Sophia Williams',
    title: 'Content Director, Fresh Flavors Quarterly',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }];
  return <section className="py-16 md:py-24 bg-[#2c2c2c] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-[#3c3c3c] p-8 rounded-lg relative">
              <QuoteIcon size={40} className="absolute top-6 right-6 text-[#ff6b35] opacity-30" />
              <p className="mb-8 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="font-bold text-[#ff6b35]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-300">{testimonial.title}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}