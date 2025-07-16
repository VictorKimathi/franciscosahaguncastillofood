import React from 'react';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { CallToAction } from '../components/CallToAction';
export function Services() {
  return <div className="w-full bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="bg-[#2c2c2c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Services
              <span className="block text-[#ff6b35]">
                Food Writing Expertise
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional food writing services tailored to your publication
              needs, from trend analysis to cultural food stories.
            </p>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Editorial Services */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">01</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#2c2c2c]">
                Editorial Services
              </h2>
              <p className="text-gray-700 mb-6">
                Comprehensive food writing services covering trend analysis,
                cultural food stories, and restaurant coverage for print and
                digital publications.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#ff6b35] mr-3 mt-1 flex-shrink-0" />
                  <span>Trend analysis and prediction reports</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#ff6b35] mr-3 mt-1 flex-shrink-0" />
                  <span>Cultural food tradition features</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#ff6b35] mr-3 mt-1 flex-shrink-0" />
                  <span>Restaurant reviews and profiles</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#ff6b35] mr-3 mt-1 flex-shrink-0" />
                  <span>Chef interviews and profiles</span>
                </li>
              </ul>
              <button className="flex items-center text-[#ff6b35] hover:text-[#e65a2a] font-medium transition-colors">
                Learn More
                <ArrowRightIcon size={18} className="ml-2" />
              </button>
            </div>
            {/* Content Types */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#800020] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">02</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#2c2c2c]">
                Content Types
              </h2>
              <p className="text-gray-700 mb-6">
                Versatile content formats designed to engage readers and deliver
                valuable insights on food trends and cultural stories.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#800020] mr-3 mt-1 flex-shrink-0" />
                  <span>Long-form features (2,500-3,000 words)</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#800020] mr-3 mt-1 flex-shrink-0" />
                  <span>Engaging listicles and guides</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#800020] mr-3 mt-1 flex-shrink-0" />
                  <span>Step-by-step how-to articles</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#800020] mr-3 mt-1 flex-shrink-0" />
                  <span>Seasonal content packages</span>
                </li>
              </ul>
              <button className="flex items-center text-[#800020] hover:text-[#6a001b] font-medium transition-colors">
                Learn More
                <ArrowRightIcon size={18} className="ml-2" />
              </button>
            </div>
            {/* Specializations */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#8fbc8f] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">03</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#2c2c2c]">
                Specializations
              </h2>
              <p className="text-gray-700 mb-6">
                Expert coverage of specific food industry niches with deep
                knowledge and authentic cultural understanding.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#8fbc8f] mr-3 mt-1 flex-shrink-0" />
                  <span>U.S. grocery trends and innovations</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#8fbc8f] mr-3 mt-1 flex-shrink-0" />
                  <span>National restaurant chain analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#8fbc8f] mr-3 mt-1 flex-shrink-0" />
                  <span>Cultural food traditions and history</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#8fbc8f] mr-3 mt-1 flex-shrink-0" />
                  <span>Sustainable food practices</span>
                </li>
              </ul>
              <button className="flex items-center text-[#8fbc8f] hover:text-[#7aa17a] font-medium transition-colors">
                Learn More
                <ArrowRightIcon size={18} className="ml-2" />
              </button>
            </div>
            {/* Work Process */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#ffdd44] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">04</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#2c2c2c]">
                Work Process
              </h2>
              <p className="text-gray-700 mb-6">
                Professional workflow designed to deliver high-quality content
                on time, every time, with thorough research and fact-checking.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#ffdd44] mr-3 mt-1 flex-shrink-0" />
                  <span>In-depth research and interviews</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#ffdd44] mr-3 mt-1 flex-shrink-0" />
                  <span>Rigorous fact-checking process</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#ffdd44] mr-3 mt-1 flex-shrink-0" />
                  <span>Brand tone adaptation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={18} className="text-[#ffdd44] mr-3 mt-1 flex-shrink-0" />
                  <span>Timely delivery and revisions</span>
                </li>
              </ul>
              <button className="flex items-center text-[#ffdd44] hover:text-[#e6c73d] font-medium transition-colors">
                Learn More
                <ArrowRightIcon size={18} className="ml-2" />
              </button>
            </div>
          </div>
          {/* Capabilities */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-[#2c2c2c] text-center">
              Professional Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#f8f5f0] rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#ff6b35] font-bold text-2xl">CMS</span>
                </div>
                <h3 className="font-bold mb-2">CMS Proficiency</h3>
                <p className="text-gray-700 text-sm">
                  Experienced with WordPress, Contentful, and custom editorial
                  systems for seamless content delivery.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#f8f5f0] rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#ff6b35] font-bold text-2xl">AP</span>
                </div>
                <h3 className="font-bold mb-2">AP Style Mastery</h3>
                <p className="text-gray-700 text-sm">
                  Thorough understanding of AP Style guidelines with additional
                  experience in Chicago and house styles.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#f8f5f0] rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#ff6b35] font-bold text-2xl">24h</span>
                </div>
                <h3 className="font-bold mb-2">Tight Deadlines</h3>
                <p className="text-gray-700 text-sm">
                  Proven track record of delivering quality content under
                  pressure for daily publications and breaking food news.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </div>;
}