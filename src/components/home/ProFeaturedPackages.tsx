"use client";

import { Clock, ArrowRight, Star, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

// 1. FIX: Use correct relative path and import the 'Package' type
import { allPackages, Package } from '../../app/packages/data';

// 2. Get the first 3 packages from the central list
const packages = allPackages.slice(0, 3).map(
  // 3. FIX: Add types for 'pkg' and 'index' to remove 'any' errors
  (pkg: Package, index: number) => ({
    ...pkg,
    // Add the UI-specific color for this component
    color: [
      'from-orange-500 to-red-500', // Color for first package
      'from-blue-500 to-cyan-500',  // Color for second package
      'from-green-500 to-emerald-500', // Color for third package
    ][index],
    
    // 4. FIX: Add ratings. Temporary fix as requested.
    rating: ['4.9', '5.0', '4.8'][index], 
  })
);

export default function ProFeaturedPackages() {
  return (
    <section className="relative bg-gradient-to-r from-emerald-100 via-green-100 to-white py-12 md:py-24 lg:py-32 px-4 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 right-20 w-40 h-40 md:w-96 md:h-96 bg-emerald-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 md:w-80 md:h-80 bg-amber-300 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 px-4 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 shadow-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
            <span className="text-[10px] md:text-sm font-bold text-emerald-700 tracking-widest uppercase">
              Handcrafted Experiences
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
            Our Signature Journeys
          </h2>
          
          <p className="font-sans text-sm md:text-lg text-stone-600 font-medium leading-relaxed px-2">
            These curated itineraries are beloved by our travelers. Each can be customized just for you.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-2 animate-fade-in-scale border border-stone-100"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Image Section */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-40 transition-all duration-500 mix-blend-multiply`}></div>
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-x-[200px] group-hover:translate-x-0 transition-transform duration-500">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-500 fill-amber-500" />
                  <span className="text-xs md:text-sm font-bold text-stone-800">{pkg.rating}</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-emerald-900/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 transform translate-y-[100px] group-hover:translate-y-0 transition-transform duration-500 delay-100 border border-white/20">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  <span className="text-xs md:text-sm font-bold text-white tracking-wide">{pkg.duration}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="font-serif text-xl md:text-3xl font-extrabold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
                  {pkg.title}
                </h3>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.highlights?.map((highlight, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[10px] md:text-xs font-bold uppercase tracking-wide text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100"
                    >
                      <MapPin className="w-3 h-3" />
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="font-sans text-sm md:text-base text-stone-600 font-medium leading-relaxed mb-6 flex-grow line-clamp-3">
                  {pkg.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-end pt-4 border-t border-stone-100">
                  <div>
                    <p className="text-[10px] md:text-xs text-stone-400 uppercase font-bold tracking-wider mb-0.5">From</p>
                    <span className="font-sans text-xl md:text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                  </div>
                  
                  <Link 
                  href="/packages" 
                  className="group/btn inline-flex items-center gap-2 bg-stone-900 hover:bg-emerald-600 text-white font-bold px-5 py-2.5 md:px-6 md:py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
                </div>

                {/* Hidden Info on Hover (Desktop Only) */}
                <div className="hidden md:block h-0 overflow-hidden group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:mt-4">
                  <div className="pt-3 border-t border-stone-100">
                    <p className="text-xs text-stone-500 italic font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      Fully customizable to match your preferences
                    </p>
                  </div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-10 md:mt-16 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <Link href="/packages">
            <button className="inline-flex items-center gap-3 bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-extrabold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wide">
              View All Packages
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(-10px); }
        }

        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 0.6s ease-out forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; opacity: 0; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; animation-delay: 2s; }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}