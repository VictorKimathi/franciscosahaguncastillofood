import React from 'react';
import { TrendingUpIcon, BookOpenIcon, ChefHatIcon, ClipboardIcon } from 'lucide-react';
export function ExpertiseAreas() {
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2c2c2c]">
            Expertise Areas
          </h2>
          <p className="text-lg text-[#2c2c2c] max-w-2xl mx-auto">
            From recipe science to cultural stories, I translate complex food
            concepts into engaging content
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Content Types */}
          <div className="bg-[#f8f5f0] p-8 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mb-6">
              <TrendingUpIcon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2c2c2c]">
              Content Types
            </h3>
            <ul className="space-y-2 text-[#2c2c2c]">
              <li>• Culinary trends</li>
              <li>• Ingredient guides</li>
              <li>• Cooking techniques</li>
              <li>• Restaurant insights</li>
            </ul>
          </div>
          {/* Publications */}
          <div className="bg-[#f8f5f0] p-8 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center mb-6">
              <BookOpenIcon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2c2c2c]">
              Publications
            </h3>
            <ul className="space-y-2 text-[#2c2c2c]">
              <li>• SoCal Living Daily</li>
              <li>• Sunset Magazine</li>
              <li>• Syndicated content</li>
              <li>• Industry newsletters</li>
            </ul>
          </div>
          {/* Specialties */}
          <div className="bg-[#f8f5f0] p-8 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#8fbc8f] rounded-full flex items-center justify-center mb-6">
              <ChefHatIcon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2c2c2c]">
              Specialties
            </h3>
            <ul className="space-y-2 text-[#2c2c2c]">
              <li>• Long-form features</li>
              <li>• Cultural food traditions</li>
              <li>• Recipe development</li>
              <li>• Chef interviews</li>
            </ul>
          </div>
          {/* Skills */}
          <div className="bg-[#f8f5f0] p-8 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#ffdd44] rounded-full flex items-center justify-center mb-6">
              <ClipboardIcon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2c2c2c]">Skills</h3>
            <ul className="space-y-2 text-[#2c2c2c]">
              <li>• Chef interviews</li>
              <li>• Nutritionist collaborations</li>
              <li>• Seasonal content strategy</li>
              <li>• Food trend analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
}