import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
export function FeaturedWork() {
  const articles = [{
    id: 1,
    title: 'The Rise of Fermentation: How Ancient Techniques Are Reshaping Modern Cuisine',
    excerpt: 'Exploring how traditional preservation methods are becoming culinary stars in high-end restaurants and home kitchens alike.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'Sunset Magazine',
    syndicated: true
  }, {
    id: 2,
    title: "Southern California's Hidden Food Markets: A Cultural Journey",
    excerpt: 'Discovering the vibrant cultural tapestry of SoCal through its lesser-known food markets and the communities they serve.',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'SoCal Living Daily',
    syndicated: false
  }, {
    id: 3,
    title: 'The Science Behind Perfect Tortillas: Tradition Meets Innovation',
    excerpt: 'An in-depth look at how traditional tortilla-making techniques are being enhanced by modern culinary science.',
    image: 'https://images.unsplash.com/photo-1545164767-6ea63cce1a31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'Sunset Magazine',
    syndicated: true
  }, {
    id: 4,
    title: 'Plant-Based Revolution: How Restaurants Are Embracing the Change',
    excerpt: 'Analyzing how SoCal restaurants are leading the way in innovative plant-based cuisine that appeals to all diners.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'SoCal Living Daily',
    syndicated: true
  }, {
    id: 5,
    title: 'The Comeback of Heirloom Grains: Nutrition, Flavor, and Sustainability',
    excerpt: 'How forgotten grain varieties are making their way back to our tables, championed by chefs and health experts alike.',
    image: 'https://images.unsplash.com/photo-1530988607214-d78f3c5eab9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'Sunset Magazine',
    syndicated: false
  }, {
    id: 6,
    title: "Inside the Kitchen: Conversations with SoCal's Rising Chef Stars",
    excerpt: "Intimate interviews with the next generation of culinary talent reshaping Southern California's food landscape.",
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'SoCal Living Daily',
    syndicated: true
  }];
  return <section className="py-16 md:py-24 bg-[#f8f5f0]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2c2c2c]">
              Featured Work
            </h2>
            <p className="text-lg text-[#2c2c2c] max-w-2xl">
              A selection of my most impactful articles on culinary trends and
              cultural food traditions
            </p>
          </div>
          <button className="hidden md:flex items-center text-[#ff6b35] hover:text-[#e65a2a] font-medium transition-colors">
            View All Work
            <ExternalLinkIcon size={18} className="ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                {article.syndicated && <div className="absolute top-3 right-3 bg-[#ffdd44] text-[#2c2c2c] text-xs font-medium px-2 py-1 rounded">
                    Syndicated
                  </div>}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-600">
                    {article.publication}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2c2c2c] line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-[#ff6b35] hover:text-[#e65a2a] font-medium transition-colors">
                  Read Full Article
                  <ExternalLinkIcon size={16} className="ml-2" />
                </a>
              </div>
            </div>)}
        </div>
        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center text-[#ff6b35] hover:text-[#e65a2a] font-medium transition-colors">
            View All Work
            <ExternalLinkIcon size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>;
}