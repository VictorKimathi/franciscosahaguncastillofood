import React, { useState } from 'react';
import { SearchIcon, FilterIcon, ClockIcon } from 'lucide-react';
export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const articles = [{
    id: 1,
    title: 'Vintage Desserts That Actually Deserve a Comeback',
    excerpt: 'Many classic desserts have quietly disappeared from American kitchens, overshadowed by low-effort trends and the rise of mass-produced treats. But these retro recipes weren’t created by accident. They often relied on well-developed techniques, local ingredients, and a cultural appreciation for time-consuming but deeply satisfying sweets. Instead of treating them as food relics, there’s value in understanding why they mattered and how they can be brought back to life today.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Dessert Recipes / Food Nostalgia',
    readTime: '9 min',
    date: 'Mar 15, 2025',
    href: 'Vintage_Desserts_That_Actually_Deserve_a_Comeback.pdf'
  }, {
    id: 2,
    title: "Casual Dinner Party Ideas Based on Your Favorite Shows",
    excerpt: 'Themed dinner parties can be fun, but they often go too far. Between novelty decorations, forced references, and costume suggestions, the food can end up feeling like an afterthought. Instead of recreating a scene from a show, it’s more satisfying to build a menu that reflects the energy and setting behind it. A successful themed dinner doesn’t need to be literal. It needs to taste great, feel relaxed, and give people something to talk about.',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Entertaining / Theme Menus',
    readTime: '8 min',
    date: 'Feb 3, 2025',
    href: 'Casual_Dinner_Party_Ideas_Based_on_Your_Favorite_Shows.pdf'
  }, {
    id: 3,
    title: 'Why Professional Cooks Obsess Over Ingredient Order',
    excerpt: 'In restaurant kitchens, ingredients are added with intention. The sequence of ingredients influences the way food browns, blends, and binds. For chefs, ingredient order is part of the craft. The recipe becomes a starting point, but the real control comes from mastering what happens in the pan.',
    image: 'https://images.unsplash.com/photo-1545164767-6ea63cce1a31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Cooking Techniques / Kitchen Sciences',
    readTime: '7 min',
    date: 'June 22, 2025',
    href: 'Why_Professional_Cooks_Obsess_Over_Ingredient_Order.pdf'
  }, ];
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
