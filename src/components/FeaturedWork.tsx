import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';

export function FeaturedWork() {
  const articles = [
    {
      id: 1,
      title: 'Vintage Desserts That Actually Deserve a Comeback',
      excerpt: 'Many classic desserts have quietly disappeared from American kitchens...',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Dessert Recipes / Food Nostalgia',
      readTime: '9 min',
      date: 'Mar 15, 2025',
      href: 'Vintage_Desserts_That_Actually_Deserve_a_Comeback.pdf',
    },
    {
      id: 2,
      title: "Casual Dinner Party Ideas Based on Your Favorite Shows",
      excerpt: 'Themed dinner parties can be fun, but they often go too far...',
      image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Entertaining / Theme Menus',
      readTime: '8 min',
      date: 'Feb 3, 2025',
      href: 'Casual_Dinner_Party_Ideas_Based_on_Your_Favorite_Shows.pdf',
    },
    {
      id: 3,
      title: 'Why Professional Cooks Obsess Over Ingredient Order',
      excerpt: 'In restaurant kitchens, ingredients are added with intention...',
      image: 'https://images.unsplash.com/photo-1545164767-6ea63cce1a31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Cooking Techniques / Kitchen Sciences',
      readTime: '7 min',
      date: 'June 22, 2025',
      href: 'Why_Professional_Cooks_Obsess_Over_Ingredient_Order.pdf',
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8f5f0]">
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

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
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
                {article.syndicated && (
                  <div className="absolute top-3 right-3 bg-[#ffdd44] text-[#2c2c2c] text-xs font-medium px-2 py-1 rounded">
                    Syndicated
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#2c2c2c] line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={article.href}
                    className="inline-flex items-center text-[#ff6b35] hover:text-[#e65a2a] font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Full Article
                    <ExternalLinkIcon size={16} className="ml-2" />
                  </a>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center text-[#ff6b35] hover:text-[#e65a2a] font-medium transition-colors">
            View All Work
            <ExternalLinkIcon size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
