import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, SearchIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-[#ff6b35]' : 'text-[#2c2c2c] hover:text-[#ff6b35]';
  };
  return <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl md:text-3xl font-bold text-[#2c2c2c]">
              Francisco <span className="text-[#ff6b35]">Sahagun Castillo</span>
            </Link>
            <div className="hidden md:flex ml-8 items-center text-sm">
              <span className="text-[#8fbc8f] flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#8fbc8f] mr-2"></span>
                Based in Southern California
              </span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`font-medium transition-colors ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/portfolio" className={`font-medium transition-colors ${isActive('/portfolio')}`}>
              Portfolio
            </Link>
            <Link to="/services" className={`font-medium transition-colors ${isActive('/services')}`}>
              Services
            </Link>
            <Link to="/contact" className={`font-medium transition-colors ${isActive('/contact')}`}>
              Contact
            </Link>
            <button className="text-[#2c2c2c] hover:text-[#ff6b35]" aria-label="Search">
              <SearchIcon size={20} />
            </button>
            <div className="flex space-x-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#2c2c2c] hover:text-[#ff6b35]">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[#2c2c2c] hover:text-[#ff6b35]">
                <TwitterIcon size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#2c2c2c] hover:text-[#ff6b35]">
                <InstagramIcon size={18} />
              </a>
            </div>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#2c2c2c]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`font-medium ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className={`font-medium ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/portfolio" className={`font-medium ${isActive('/portfolio')}`} onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link to="/services" className={`font-medium ${isActive('/services')}`} onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/contact" className={`font-medium ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-2 flex items-center justify-between">
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#2c2c2c] hover:text-[#ff6b35]">
                    <LinkedinIcon size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[#2c2c2c] hover:text-[#ff6b35]">
                    <TwitterIcon size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#2c2c2c] hover:text-[#ff6b35]">
                    <InstagramIcon size={20} />
                  </a>
                </div>
                <button className="text-[#2c2c2c] hover:text-[#ff6b35]" aria-label="Search">
                  <SearchIcon size={20} />
                </button>
              </div>
              <div className="text-xs text-[#8fbc8f] flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#8fbc8f] mr-2"></span>
                Based in Southern California
              </div>
            </div>
          </nav>}
      </div>
    </header>;
}