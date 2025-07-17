import React, { useState } from 'react';
import { SearchIcon, ClockIcon } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'Vintage Desserts That Actually Deserve a Comeback',
      excerpt: 'Many classic desserts have quietly disappeared from American kitchens...',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Dessert Recipes / Food Nostalgia',
      readTime: '9 min',
      date: 'Mar 15, 2025',
      href: 'Vintage_Desserts_That_Actually_Deserve_a_Comeback.pdf'
    },
    {
      id: 2,
      title: "Casual Dinner Party Ideas Based on Your Favorite Shows",
      excerpt: 'Themed dinner parties can be fun, but they often go too far...',
      image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Entertaining / Theme Menus',
      readTime: '8 min',
      date: 'Feb 3, 2025',
      href: 'Casual_Dinner_Party_Ideas_Based_on_Your_Favorite_Shows.pdf'
    },
    {
      id: 3,
      title: 'Why Professional Cooks Obsess Over Ingredient Order',
      excerpt: 'In restaurant kitchens, ingredients are added with intention...',
      image: 'pexels-emris-17086289.jpg',
      category: 'Cooking Techniques / Kitchen Sciences',
      readTime: '7 min',
      date: 'June 22, 2025',
      href: 'Why_Professional_Cooks_Obsess_Over_Ingredient_Order.pdf'
    }
  ];

  const filteredArticles =
    activeFilter === 'all'
      ? articles
      : articles.filter(article =>
          article.category.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <div className="w-full bg-[#f8f5f0]">
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
            <div className="flex flex-wrap gap-2">
              {[
                ['all', 'All Work'],
                ['dessert', 'Desserts'],
                ['entertaining', 'Entertaining'],
                ['techniques', 'Cooking Techniques']
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === key
                      ? 'bg-[#ff6b35] text-white'
                      : 'bg-gray-100 text-[#2c2c2c] hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
              />
              <SearchIcon
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <div
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">
                      {article.category}
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
                    <a
                      href={article.href}
                      download
                      className="text-[#ff6b35] hover:text-[#e65a2a] font-medium transition-colors"
                    >
                      Download PDF
                    </a>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16">
            <div className="flex space-x-2">
              {[1, 2, 3, '...', 8].map((val, i) =>
                val === '...' ? (
                  <span
                    key={i}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={i}
                    className={`w-10 h-10 rounded-full ${
                      val === 1
                        ? 'bg-[#ff6b35] text-white'
                        : 'bg-gray-100 text-[#2c2c2c] hover:bg-gray-200'
                    } flex items-center justify-center`}
                  >
                    {val}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
