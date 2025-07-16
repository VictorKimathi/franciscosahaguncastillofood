import React from 'react';
export function PublicationHighlights() {
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#2c2c2c] text-center">
          Publication Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Sunset Magazine */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#ff6b35] flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2c2c2c]">
              Sunset Magazine
            </h3>
            <p className="text-gray-700">
              Recipe test kitchen experience and cultural food features focusing
              on West Coast culinary traditions.
            </p>
          </div>
          {/* SoCal Living Daily */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#8fbc8f] flex items-center justify-center">
              <span className="text-white font-bold text-2xl">SL</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2c2c2c]">
              SoCal Living Daily
            </h3>
            <p className="text-gray-700">
              Regional restaurant coverage and grocery trend analysis for
              Southern California's premier lifestyle publication.
            </p>
          </div>
          {/* Syndication */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#ffdd44] flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2c2c2c]">
              Syndication
            </h3>
            <p className="text-gray-700">
              Content distributed through SmartNews and Apple News, reaching
              national audiences with trending food topics.
            </p>
          </div>
          {/* Freelance */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#800020] flex items-center justify-center">
              <span className="text-white font-bold text-2xl">F</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2c2c2c]">
              Freelance Clients
            </h3>
            <p className="text-gray-700">
              Newsletter contributions and editorial calendar development for
              specialty food brands and publications.
            </p>
          </div>
        </div>
      </div>
    </section>;
}