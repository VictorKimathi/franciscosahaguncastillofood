import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from 'lucide-react';
export function Contact() {
  return <div className="w-full bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="bg-[#2c2c2c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Me
              <span className="block text-[#ff6b35]">Let's Work Together</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Interested in working together? Get in touch to discuss your
              editorial calendar, food trend coverage, or cultural food
              features.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2c2c2c]">
                  Send Me a Message
                </h2>
                <p className="text-gray-700 mb-8">
                  Fill out the form below with details about your project, and
                  I'll get back to you within 48 hours.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent" placeholder="Project subject" />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type
                    </label>
                    <select id="projectType" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent">
                      <option value="">Select project type</option>
                      <option value="trend">Trend Analysis</option>
                      <option value="cultural">Cultural Food Feature</option>
                      <option value="restaurant">Restaurant Coverage</option>
                      <option value="recipe">Recipe Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Details
                    </label>
                    <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent" placeholder="Tell me about your project, timeline, and goals..."></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-[#ff6b35] hover:bg-[#e65a2a] text-white px-6 py-3 rounded-md font-medium transition-colors">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-6 text-[#2c2c2c]">
                  Contact Information
                </h2>
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 flex items-center justify-center mr-4">
                      <MailIcon size={20} className="text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:francisco@example.com" className="text-[#2c2c2c] hover:text-[#ff6b35]">
                        francisco@example.com
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 flex items-center justify-center mr-4">
                      <PhoneIcon size={20} className="text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href="tel:+15551234567" className="text-[#2c2c2c] hover:text-[#ff6b35]">
                        (555) 123-4567
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 flex items-center justify-center mr-4">
                      <MapPinIcon size={20} className="text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-[#2c2c2c]">Hawaiian Gardens, CA</p>
                      <p className="text-sm text-gray-500">
                        Southern California service area
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 flex items-center justify-center mr-4">
                      <ClockIcon size={20} className="text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Response Time</p>
                      <p className="text-[#2c2c2c]">Within 48 hours</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-[#2c2c2c]">
                  Rate Information
                </h2>
                <p className="text-gray-700 mb-4">
                  I offer flexible pricing options tailored to your specific
                  needs:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#ff6b35] mr-2">•</span>
                    <span>Project-based pricing for individual articles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6b35] mr-2">•</span>
                    <span>Monthly retainer options for ongoing content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6b35] mr-2">•</span>
                    <span>Editorial calendar development packages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6b35] mr-2">•</span>
                    <span>Custom pricing for specialized projects</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Contact me for a personalized quote based on your specific
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}