'use client';

import React, { useState } from 'react';
import { Clock, ArrowRight, Sparkles, Check, ChevronDown } from 'lucide-react';

// Import data and types
import { Package, allPackages, categories } from './data';

// Import the modal component
import PackageModal from './PackageModal';

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Packages");
  
  // State specifically for the Mobile Dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Helpers for the Mobile Dropdown display
  const currentCategory = categories.find(c => c.name === activeCategory) || categories[0];
  const CurrentIcon = currentCategory.icon;

  const filteredPackages = activeCategory === "All Packages"
    ? allPackages
    : allPackages.filter(pkg => pkg.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&h=800&fit=crop"
            alt="Sri Lankan landscape"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-transparent to-amber-900/40"></div>
        </div>
        
        <div className="relative z-10 p-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400 tracking-wider uppercase">
              Curated Experiences
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
            Our Journeys
          </h1>
          <p className="font-sans text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-lg text-stone-200">
            Handcrafted itineraries designed to immerse you in the magic of Sri Lanka.
          </p>
        </div>
      </section>
      
      {/* Category Filter Section */}
      <section className="relative py-12 bg-gradient-to-r from-emerald-100 via-green-100 to-white overflow-visible z-30">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* ========================================== */}
          {/* MOBILE VIEW: Dropdown Menu (< 768px)       */}
          {/* ========================================== */}
          <div className="md:hidden flex justify-center">
            <div className="relative w-full max-w-xs">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white border-2 border-stone-100 text-stone-800 shadow-xl rounded-2xl px-5 py-4 flex items-center justify-between transition-all duration-300 hover:border-emerald-200 group"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
                    style={{ backgroundColor: currentCategory.color }}
                  >
                    <CurrentIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-sans font-bold text-lg">{currentCategory.name}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden animate-fade-in-up z-50">
                  <div className="p-2 flex flex-col gap-1 max-h-[300px] overflow-y-auto">
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      const isActive = activeCategory === cat.name;
                      return (
                        <button
                          key={cat.name}
                          onClick={() => {
                            setActiveCategory(cat.name);
                            setIsDropdownOpen(false);
                          }}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left w-full ${
                            isActive 
                              ? 'bg-stone-50 text-stone-900' 
                              : 'hover:bg-stone-50 text-stone-600 hover:text-stone-900'
                          }`}
                        >
                          <div 
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                              isActive ? 'opacity-100' : 'opacity-70'
                            }`}
                            style={{ backgroundColor: isActive ? cat.color : '#f5f5f4' }}
                          >
                            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-stone-500'}`} />
                          </div>
                          <span className={`font-semibold text-sm ${isActive ? 'font-bold' : ''}`}>
                            {cat.name}
                          </span>
                          {isActive && (
                            <div className="ml-auto w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }}></div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ========================================== */}
          {/* DESKTOP VIEW: Horizontal Buttons (>= 768px) */}
          {/* ========================================== */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 transform hover:scale-105 animate-fade-in-scale ${
                    isActive
                      ? 'bg-white text-stone-800 shadow-xl scale-105'
                      : 'bg-white/50 text-stone-700 hover:bg-white shadow-lg'
                  }`}
                  style={{
                    animationDelay: `${(index * 0.1).toString()}s`,
                    borderColor: isActive ? cat.color : 'transparent',
                    borderWidth: '2px'
                  }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'scale-110' : 'scale-100 group-hover:scale-110'
                  }`}
                  style={{backgroundColor: isActive ? cat.color : '#f5f5f4'}}>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-stone-500'}`} />
                  </div>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-white bg-gradient-to-r from-white via-green-100 to-emerald-100 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent mb-4">
              {activeCategory === "All Packages" ? "Explore Our Signature Trips" : activeCategory}
            </h2>
            <p className="font-sans text-lg text-stone-700 max-w-2xl mx-auto">
              Each journey is a starting point, fully customizable to your personal travel style.
            </p>
          </div>
          
          {filteredPackages.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-sans text-lg text-stone-600">
                No packages available in this category yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <div
                  key={pkg.title}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale"
                  style={{animationDelay: `${(index * 0.1).toString()}s`}}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-xs font-bold text-stone-800">{pkg.category}</span>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold">{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    <p className="font-sans text-stone-600 mb-4 line-clamp-3">
                      {pkg.description}
                    </p>

                    {/* Highlights */}
                    {pkg.highlights && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.highlights.slice(0, 2).map((highlight, i) => (
                          <div key={i} className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
                            <Check className="w-3 h-3" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-4 border-t border-stone-200">
                      <div>
                        <span className="text-xs text-stone-500">Price</span>
                        <div className="font-serif text-2xl font-bold text-emerald-800">{pkg.price}</div>
                      </div>
                      <button
                        onClick={() => setSelectedPackage(pkg)}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-100 via-green-100 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-6">
              See Something Else?
            </h2>
            <p className="font-sans text-lg md:text-xl text-stone-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              Don't see the perfect trip? That's our specialty. Contact us to design a completely custom journey from scratch.
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-900 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              <span className="relative z-10">Design My Custom Trip</span>
            </a>
          </div>
        </div>
      </section>

      {/* Package Modal */}
      {selectedPackage && (
        <PackageModal 
          pkg={selectedPackage} 
          onClose={() => setSelectedPackage(null)} 
        />
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
        }
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}