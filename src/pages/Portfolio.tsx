import React, { useState } from 'react';
import { SearchIcon, FilterIcon, ClockIcon } from 'lucide-react';
export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const articles = [{
    id: 1,
    title: 'The Rise of Fermentation: How Ancient Techniques Are Reshaping Modern Cuisine',
    excerpt: 'Exploring how traditional preservation methods are becoming culinary stars in high-end restaurants and home kitchens alike.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'Sunset Magazine',
    category: 'trends',
    readTime: '8 min',
    date: 'Mar 15, 2023',
    syndicated: true
  }, {
    id: 2,
    title: "Southern California's Hidden Food Markets: A Cultural Journey",
    excerpt: 'Discovering the vibrant cultural tapestry of SoCal through its lesser-known food markets and the communities they serve.',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'SoCal Living Daily',
    category: 'cultural',
    readTime: '12 min',
    date: 'Feb 3, 2023',
    syndicated: false
  }, {
    id: 3,
    title: 'The Science Behind Perfect Tortillas: Tradition Meets Innovation',
    excerpt: 'An in-depth look at how traditional tortilla-making techniques are being enhanced by modern culinary science.',
    image: 'https://images.unsplash.com/photo-1545164767-6ea63cce1a31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'Sunset Magazine',
    category: 'techniques',
    readTime: '10 min',
    date: 'Jan 22, 2023',
    syndicated: true
  }, {
    id: 4,
    title: 'Plant-Based Revolution: How Restaurants Are Embracing the Change',
    excerpt: 'Analyzing how SoCal restaurants are leading the way in innovative plant-based cuisine that appeals to all diners.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'SoCal Living Daily',
    category: 'restaurants',
    readTime: '9 min',
    date: 'Dec 10, 2022',
    syndicated: true
  }, {
    id: 5,
    title: 'The Comeback of Heirloom Grains: Nutrition, Flavor, and Sustainability',
    excerpt: 'How forgotten grain varieties are making their way back to our tables, championed by chefs and health experts alike.',
    image: 'https://images.unsplash.com/photo-1530988607214-d78f3c5eab9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'Sunset Magazine',
    category: 'trends',
    readTime: '7 min',
    date: 'Nov 5, 2022',
    syndicated: false
  }, {
    id: 6,
    title: "Inside the Kitchen: Conversations with SoCal's Rising Chef Stars",
    excerpt: "Intimate interviews with the next generation of culinary talent reshaping Southern California's food landscape.",
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'SoCal Living Daily',
    category: 'restaurants',
    readTime: '15 min',
    date: 'Oct 18, 2022',
    syndicated: true
  }, {
    id: 7,
    title: "Exploring Mexican-Korean Fusion: SoCal's Emerging Food Trend",
    excerpt: 'How innovative chefs are combining traditional Korean and Mexican flavors to create exciting new culinary experiences.',
    image: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'SoCal Living Daily',
    category: 'cultural',
    readTime: '11 min',
    date: 'Sep 27, 2022',
    syndicated: false
  }, {
    id: 8,
    title: 'The Art of Slow Cooking: Rediscovering Patience in the Kitchen',
    excerpt: 'Why traditional slow cooking methods are making a comeback in both professional and home kitchens across California.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990888?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'Sunset Magazine',
    category: 'techniques',
    readTime: '13 min',
    date: 'Aug 14, 2022',
    syndicated: true
  }, {
    id: 9,
    title: 'Sustainable Seafood: The Restaurants Leading the Way in SoCal',
    excerpt: 'How local restaurants are pioneering sustainable seafood practices while delivering exceptional dining experiences.',
    image: 'https://images.unsplash.com/photo-1579631542761-d7c4e913f8d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publication: 'SoCal Living Daily',
    category: 'restaurants',
    readTime: '8 min',
    date: 'Jul 29, 2022',
    syndicated: false
  }];
  const filteredArticles = activeFilter === 'all' ? articles : articles.filter(article => article.category === activeFilter);
  return <div className="w-full bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="bg-[#2c2c2c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Portfolio
              <span className="block text-[#ff6b35]">
                Food Writing & Trend Analysis
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Browse through my published work covering culinary trends,
              cultural food traditions, restaurant insights, and cooking
              techniques.
            </p>
          </div>
        </div>
      </section>
      {/* Filter and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveFilter('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'all' ? 'bg-[#ff6b35] text-white' : 'bg-gray-100 text-[#2c2c2c] hover:bg-gray-200'}`}>
                All Work
              </button>
              <button onClick={() => setActiveFilter('trends')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'trends' ? 'bg-[#ff6b35] text-white' : 'bg-gray-100 text-[#2c2c2c] hover:bg-gray-200'}`}>
                Culinary Trends
              </button>
              <button onClick={() => setActiveFilter('cultural')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'cultural' ? 'bg-[#ff6b35] text-white' : 'bg-gray-100 text-[#2c2c2c] hover:bg-gray-200'}`}>
                Cultural Food
              </button>
              <button onClick={() => setActiveFilter('restaurants')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'restaurants' ? 'bg-[#ff6b35] text-white' : 'bg-gray-100 text-[#2c2c2c] hover:bg-gray-200'}`}>
                Restaurant Coverage
              </button>
              <button onClick={() => setActiveFilter('techniques')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'techniques' ? 'bg-[#ff6b35] text-white' : 'bg-gray-100 text-[#2c2c2c] hover:bg-gray-200'}`}>
                Cooking Techniques
              </button>
            </div>
            {/* Search */}
            <div className="relative w-full md:w-64">
              <input type="text" placeholder="Search articles..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent" />
              <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  {article.syndicated && <div className="absolute top-3 right-3 bg-[#ffdd44] text-[#2c2c2c] text-xs font-medium px-2 py-1 rounded">
                      Syndicated
                    </div>}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">
                      {article.publication}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon size={14} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#2c2c2c] line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-[#ff6b35] hover:text-[#e65a2a] font-medium transition-colors">
                      Read Full Article
                    </a>
                    <span className="text-sm text-gray-500">
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>)}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-16">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-[#ff6b35] text-white flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 text-[#2c2c2c] hover:bg-gray-200 flex items-center justify-center">
                2
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 text-[#2c2c2c] hover:bg-gray-200 flex items-center justify-center">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center">
                ...
              </span>
              <button className="w-10 h-10 rounded-full bg-gray-100 text-[#2c2c2c] hover:bg-gray-200 flex items-center justify-center">
                8
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}