'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sparkles, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Next.js hook to get current URL

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  // Helper to determine if a link is active
  const isActive = (path: string) => pathname === path;

  const headerBaseClass = "fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out";
  const headerScrollStateClass = isScrolled
    ? 'bg-white/95 backdrop-blur-xl shadow-2xl text-stone-800 py-3'
    : 'bg-transparent text-white py-5';

  return (
    <>
      <header className={`${headerBaseClass} ${headerScrollStateClass}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo with Animation */}
          <Link 
            href="/" 
            className="group relative flex items-center gap-3 transition-all duration-300"
          >
            <div className={`relative transition-all duration-500 ${isScrolled ? 'w-12 h-12' : 'w-14 h-14'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="/icons/logo.webp"
                alt="The FlyUp Travel Logo" 
                className="relative w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'} ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
                FlyUp Travel
              </span>
              <span className={`text-xs font-medium tracking-wider transition-all duration-300 ${isScrolled ? 'text-amber-600' : 'text-amber-300'}`}>
                Explore Sri Lanka
              </span>
            </div>
            {!isScrolled && (
              <Sparkles className="absolute -top-2 -right-8 w-5 h-5 text-amber-400 animate-pulse" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans font-medium text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive(link.href)
                      ? isScrolled
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-amber-400 bg-white/10'
                      : 'hover:text-amber-500'
                  }`} 
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full animate-pulse"></span>
                  )}
                </Link>
              ))}
            </nav>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a 
                href="tel:+94772965729"
                className={`hidden xl:flex items-center gap-2 font-sans font-medium text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                  ? 'text-stone-700 hover:text-amber-600 hover:bg-stone-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+94 77 296 5729</span>
              </a>
              
              <Link 
                href="/contact"
                className={`group relative font-sans font-bold text-sm py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                  isScrolled 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl' 
                  : 'bg-white hover:bg-stone-50 text-emerald-800 shadow-xl'
                }`}
              >
                <span className="relative z-10">Plan Your Trip</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(true)} 
              className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled 
                ? 'bg-stone-100 text-stone-800 hover:bg-stone-200' 
                : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-950 text-white z-[60] p-8 shadow-2xl lg:hidden animate-slide-in-right overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-1">Menu</h2>
                <p className="text-sm text-emerald-300">Explore Sri Lanka</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:rotate-90"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-2 mb-12">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative font-serif text-2xl font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300 animate-slide-in-left ${
                    isActive(link.href) ? 'text-amber-400 bg-white/5' : ''
                  }`}
                  style={{animationDelay: `${(index * 0.1).toString()}s`}}
                >
                  <span className="flex items-center justify-between">
                    <span className="group-hover:text-amber-400 transition-colors duration-300">
                      {link.name}
                    </span>
                    <ChevronDown className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 ${isActive(link.href) ? 'rotate-0 opacity-100 text-amber-400' : '-rotate-90'}`} />
                  </span>
                  <span className={`absolute bottom-2 left-4 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 rounded-full ${isActive(link.href) ? 'w-24' : 'w-0 group-hover:w-24'}`}></span>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="group relative block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-900 font-bold py-4 px-6 rounded-2xl text-center text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Plan Your Trip</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              </Link>

              <a 
                href="tel:+94772965729"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-2xl text-center transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <Phone className="w-5 h-5" />
                <span>+94 77 296 5729</span>
              </a>
            </div>

            {/* Mobile Footer Info */}
            <div className="mt-12 pt-8 border-t border-white/10 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <p className="text-sm text-emerald-300 mb-2">Available 24/7</p>
              <p className="text-xs text-stone-400">
                Let us help you create unforgettable memories in Sri Lanka
              </p>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; opacity: 0; }
        .animate-slide-in-right { animation: slide-in-right 0.4s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.5s ease-out forwards; opacity: 0; }
      `}</style>
    </>
  );
}