import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, TwitterIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#2c2c2c] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Francisco <span className="text-[#ff6b35]">Sahagun Castillo</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Food writer and trend specialist with 5+ years experience
              translating complex culinary concepts into engaging stories.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-[#ff6b35]">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-[#ff6b35]">
                <TwitterIcon size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-[#ff6b35]">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6">Site Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#ff6b35]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#ff6b35]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-[#ff6b35]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#ff6b35]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#ff6b35]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MailIcon size={18} className="text-[#ff6b35] mr-3" />
                <a href="mailto:francisco@example.com" className="text-gray-300 hover:text-[#ff6b35]">
                  francisco@example.com
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="text-[#ff6b35] mr-3" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-[#ff6b35]">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <MapPinIcon size={18} className="text-[#ff6b35] mr-3" />
                <span className="text-gray-300">Hawaiian Gardens, CA</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Francisco Sahagun Castillo. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}