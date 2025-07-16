import React from 'react';
import { Download, Mail, Phone, MapPin, Globe } from 'lucide-react';

export function Resume() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Download Button */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Francisco Sahagun Castillo</h1>
              <p className="text-xl text-gray-600">Professional Chef & Culinary Artist</p>
            </div>
            <a 
              href="/resume.pdf" 
              download="Francisco_Sahagun_Castillo_Resume.pdf"
              className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              francisco@example.com
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              (555) 123-4567
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Los Angeles, CA
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              franciscosahaguncastillo.com
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Passionate and innovative chef with over 10 years of experience in fine dining and culinary arts. 
            Specializing in modern fusion cuisine with a focus on fresh, locally-sourced ingredients. 
            Proven track record of leading kitchen teams, developing creative menus, and delivering exceptional dining experiences.
          </p>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Executive Chef</h3>
              <p className="text-amber-600 font-medium">The Golden Spoon Restaurant</p>
              <p className="text-gray-500 text-sm mb-3">January 2020 - Present</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Lead a team of 15 kitchen staff in a high-volume fine dining establishment</li>
                <li>• Developed seasonal menus featuring innovative fusion dishes</li>
                <li>• Increased restaurant revenue by 25% through menu optimization</li>
                <li>• Maintained 5-star rating on major review platforms</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Sous Chef</h3>
              <p className="text-amber-600 font-medium">Coastal Bistro</p>
              <p className="text-gray-500 text-sm mb-3">March 2017 - December 2019</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Assisted head chef in daily kitchen operations</li>
                <li>• Specialized in seafood preparation and presentation</li>
                <li>• Trained junior chefs in advanced cooking techniques</li>
                <li>• Managed inventory and cost control</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Line Cook</h3>
              <p className="text-amber-600 font-medium">Urban Kitchen</p>
              <p className="text-gray-500 text-sm mb-3">June 2014 - February 2017</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Prepared high-quality dishes in fast-paced environment</li>
                <li>• Mastered various cooking stations and techniques</li>
                <li>• Consistently met quality and timing standards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Culinary Arts Degree</h3>
              <p className="text-amber-600 font-medium">Culinary Institute of America</p>
              <p className="text-gray-500 text-sm mb-2">2014</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Graduated Magna Cum Laude</li>
                <li>• Specialized in Contemporary American Cuisine</li>
                <li>• Dean's List for 4 consecutive semesters</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Culinary Techniques</h4>
                <p className="text-gray-700 text-sm">French, Italian, Asian Fusion, Molecular Gastronomy</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Kitchen Management</h4>
                <p className="text-gray-700 text-sm">Team Leadership, Inventory Control, Cost Management</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Menu Development</h4>
                <p className="text-gray-700 text-sm">Seasonal Planning, Dietary Accommodations, Wine Pairing</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Food Safety</h4>
                <p className="text-gray-700 text-sm">HACCP Certified, ServSafe Manager Certification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• ServSafe Manager Certification (2023)</li>
              <li>• HACCP Food Safety Certification (2022)</li>
              <li>• Wine & Spirit Education Trust Level 2 (2021)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• "Rising Chef of the Year" - Los Angeles Culinary Awards (2021)</li>
              <li>• "Best New Menu" - Food & Wine Magazine (2020)</li>
              <li>• Featured in "Top 30 Under 30 Chefs" - Culinary Quarterly (2019)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

