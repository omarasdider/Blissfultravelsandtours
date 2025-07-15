'use client'

import  { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-50">
      {/* Top Contact Bar
      <div className="bg-red-500 text-white text-xs sm:text-sm py-2 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <span className="flex items-center gap-1">📧blissfultravels11@gmail.com</span>
            <span className="flex items-center gap-1 text-xs sm:text-sm">📍 291, Inner Circular Road, Fokirapool Dhaka</span>
          </div>
          <button className="text-white hover:text-gray-200 text-xs sm:text-sm">
            🔓 Sign In
          </button>
        </div>
      </div> */}
      
      {/* Main Navigation */}
      <div className="bg-blue-900/90 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-lg p-1.5 sm:p-2">
              <span className="text-blue-600 font-bold text-lg sm:text-xl">BLISSFUL TRAVELS</span>
              <div className="text-xs text-gray-600">AND TOURS</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-8 text-white">
            <Link href="/" className="hover:text-yellow-400 transition-colors">HOME</Link>
            <Link href="/accounts" className="hover:text-yellow-400 transition-colors">ACCOUNTS</Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">PORTFOLIO</Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors">ABOUT</Link>
            <Link href="/contract" className="hover:text-yellow-400 transition-colors">CONTACT</Link>
          </nav>
          
          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Contact Info - Hidden on mobile */}
            <div className="hidden md:block text-white text-right">
              <div className="text-sm sm:text-lg font-bold">+8801715179825</div>
              <div className="text-xs sm:text-sm">24/7 Available</div>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-yellow-400 hover:bg-white/10 p-2"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col gap-4 pt-4 text-white">
              <Link href="/" className="hover:text-yellow-400 transition-colors py-2">HOME</Link>
             
              <Link href="/about" className="hover:text-yellow-400 transition-colors py-2">ABOUT</Link>
              <Link href="/contract" className="hover:text-yellow-400 transition-colors py-2">CONTACT</Link>
              
              {/* Mobile Contact Info */}
              <div className="mt-4 pt-4 border-t border-white/20 text-center">
                <div className="text-lg font-bold">+880 1715-179825</div>
                <div className="text-sm">24/7 Available</div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
