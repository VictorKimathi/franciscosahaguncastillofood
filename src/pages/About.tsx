import React from 'react';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { CallToAction } from '../components/CallToAction';
export function About() {
  return <div className="w-full bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="bg-[#2c2c2c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
              <span className="block text-[#ff6b35]">
                Francisco Sahagun Castillo
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Food writer with 5+ years of experience translating culinary
              trends and cultural traditions into engaging content.
            </p>
          </div>
        </div>
      </section>
      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="md:w-2/5">
              <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Francisco Sahagun Castillo" className="w-full h-auto rounded-lg shadow-lg" />
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-[#2c2c2c]">
                  Quick Facts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-[#ff6b35] mr-3 mt-1 flex-shrink-0" />
                    <span>Based in Hawaiian Gardens, CA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-[#ff6b35] mr-3 mt-1 flex-shrink-0" />
                    <span>5+ years professional food writing experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-[#ff6b35] mr-3 mt-1 flex-shrink-0" />
                    <span>Cerritos College journalism background</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-[#ff6b35] mr-3 mt-1 flex-shrink-0" />
                    <span>SoCal food scene specialist</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-[#ff6b35] mr-3 mt-1 flex-shrink-0" />
                    <span>2,500+ published articles</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-3/5">
              <h2 className="text-3xl font-bold mb-6 text-[#2c2c2c]">
                My Professional Journey
              </h2>
              <p className="text-lg text-[#2c2c2c] mb-4">
                I began my food writing career after studying journalism at
                Cerritos College, where I discovered my passion for telling
                stories through food. What started as restaurant reviews for the
                college paper evolved into a deep exploration of culinary
                traditions and trends.
              </p>
              <p className="text-lg text-[#2c2c2c] mb-4">
                My breakthrough came when I joined{' '}
                <span className="font-semibold">Sunset Magazine</span> as a test
                kitchen assistant, where I quickly transitioned to writing about
                the science behind recipes and the cultural significance of
                traditional cooking methods.
              </p>
              <p className="text-lg text-[#2c2c2c] mb-8">
                Today, I specialize in translating complex culinary concepts
                into engaging content that resonates with diverse audiences. My
                work at{' '}
                <span className="font-semibold">SoCal Living Daily</span> has
                allowed me to dive deep into Southern California's vibrant food
                scene, while my syndicated articles reach national audiences
                through platforms like SmartNews and Apple News.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#2c2c2c]">
                Editorial Philosophy
              </h3>
              <p className="text-lg text-[#2c2c2c] mb-8">
                I believe food writing should be both informative and
                entertaining, respecting cultural traditions while making them
                accessible to everyone. My approach combines thorough research
                with engaging storytelling, whether I'm covering emerging
                culinary trends or exploring the rich history behind a
                traditional dish.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#2c2c2c]">
                Cultural Perspective
              </h3>
              <p className="text-lg text-[#2c2c2c] mb-8">
                Growing up in Southern California exposed me to a rich tapestry
                of food cultures. This background gives me a unique lens through
                which I approach food writing, allowing me to highlight
                authentic cultural traditions with genuine respect and
                understanding.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#2c2c2c]">
                Industry Connections
              </h3>
              <p className="text-lg text-[#2c2c2c] mb-8">
                Over the years, I've built strong relationships with chefs,
                nutritionists, restaurateurs, and food producers across Southern
                California. These connections provide valuable insights and
                perspectives that enrich my writing and keep me ahead of
                emerging trends.
              </p>
              <button className="bg-[#ff6b35] hover:bg-[#e65a2a] text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors">
                View My Portfolio
                <ArrowRightIcon size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#2c2c2c] text-center">
            Career Timeline
          </h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#e8e8e8]"></div>
            {/* Timeline Items */}
            <div className="relative space-y-12">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2 text-[#2c2c2c]">
                    Cerritos College
                  </h3>
                  <p className="text-[#ff6b35] font-medium mb-2">2017 - 2018</p>
                  <p className="text-gray-700">
                    Started food writing career with restaurant reviews and
                    local food scene coverage for the college newspaper.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b35] border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pl-12 order-2">
                  <h3 className="text-xl font-bold mb-2 text-[#2c2c2c]">
                    Sunset Magazine
                  </h3>
                  <p className="text-[#ff6b35] font-medium mb-2">2018 - 2020</p>
                  <p className="text-gray-700">
                    Joined as test kitchen assistant before transitioning to
                    writing about recipe science and cultural food traditions.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-1 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b35] border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2 text-[#2c2c2c]">
                    SoCal Living Daily
                  </h3>
                  <p className="text-[#ff6b35] font-medium mb-2">
                    2020 - Present
                  </p>
                  <p className="text-gray-700">
                    Leading food writer covering regional restaurant scene,
                    grocery trends, and cultural food stories.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b35] border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>
              {/* Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pl-12 order-2">
                  <h3 className="text-xl font-bold mb-2 text-[#2c2c2c]">
                    Syndicated Content
                  </h3>
                  <p className="text-[#ff6b35] font-medium mb-2">
                    2021 - Present
                  </p>
                  <p className="text-gray-700">
                    Articles regularly syndicated through SmartNews and Apple
                    News, reaching national audiences with trend analyses.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-1 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b35] border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>
              {/* Item 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2 text-[#2c2c2c]">
                    Freelance Expansion
                  </h3>
                  <p className="text-[#ff6b35] font-medium mb-2">
                    2022 - Present
                  </p>
                  <p className="text-gray-700">
                    Expanded services to include newsletter content and
                    editorial calendar development for specialty food brands.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b35] border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </div>;
}