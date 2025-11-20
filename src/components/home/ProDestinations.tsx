"use client";

import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

const destinations = [
  {
    name: 'Sigiriya',
    desc: 'The Lion Rock Fortress',
    img: '/images/tom-nicholson-PTw2xsseQxM-unsplash.jpg',
    span: 'col-span-1 md:col-span-2',
    color: 'from-orange-500 to-red-500',
    badge: 'UNESCO Heritage',
  },
  {
    name: 'Yala',
    desc: 'Wildlife & Leopard Safaris',
    img: '/images/image_processing20220118-4-1kyg76p.webp',
    span: 'col-span-1',
    color: 'from-green-500 to-emerald-500',
    badge: 'Wildlife Paradise',
  },
  {
    name: 'Ella',
    desc: 'Misty Mountains & Tea',
    img: '/images/ella.jpg',
    span: 'col-span-1',
    color: 'from-teal-500 to-cyan-500',
    badge: 'Mountain Views',
  },
  {
    name: 'Galle',
    desc: 'Colonial Forts & Coast',
    img: '/images/Galle-Fort.jpg',
    span: 'col-span-1 md:col-span-2',
    color: 'from-blue-500 to-indigo-500',
    badge: 'Historic Port',
  },
];

export default function ProDestinations() {
  return (
    <section className="relative bg-gradient-to-r from-white via-green-50 to-emerald-50 py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 md:w-72 md:h-72 bg-emerald-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 md:w-96 md:h-96 bg-amber-200 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 px-4 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 shadow-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
            <span className="text-[10px] md:text-sm font-bold text-emerald-700 tracking-widest uppercase">
              Explore Paradise
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
            The Island of Wonders
          </h2>
          
          <p className="font-sans text-sm md:text-lg text-stone-600 font-medium leading-relaxed px-2">
            Sri Lanka is a world in miniature. Explore ancient kingdoms, vast jungles, misty mountains, and sun-kissed coasts, all within hours of each other.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className={`relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group cursor-pointer ${dest.span} animate-fade-in-scale`}
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Image */}
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              
              {/* Gradient Overlay (Stronger on mobile for readability) */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 md:opacity-70 group-hover:opacity-90 transition-opacity duration-500`}></div>
              
              {/* Colored Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${dest.color} opacity-0 group-hover:opacity-40 transition-all duration-500 mix-blend-multiply`}></div>
              
              {/* Badge */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg transform translate-y-[-50px] group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-600" />
                  <span className="text-[10px] md:text-xs font-bold text-stone-800 uppercase tracking-wide">{dest.badge}</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 transform transition-transform duration-500 md:group-hover:translate-y-[-10px]">
                <div className="flex items-end justify-between gap-2 md:gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-4xl font-extrabold text-white mb-1 md:mb-2 transform transition-all duration-500 group-hover:scale-105 origin-left">
                      {dest.name}
                    </h3>
                    <p className="font-sans text-amber-300 text-xs md:text-lg font-bold uppercase tracking-wider">
                      {dest.desc}
                    </p>
                  </div>
                  
                  {/* Arrow Button */}
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 transform transition-all duration-500 group-hover:bg-white group-hover:scale-110 group-hover:rotate-45">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-emerald-700 transition-colors duration-300" />
                  </div>
                </div>
                
                {/* Expanding Info Bar (Desktop Only Enhancement) */}
                <div className="hidden md:block mt-4 h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <div className="pt-4 border-t border-white/30">
                    <p className="text-sm text-white/90 leading-relaxed font-medium">
                      Discover the magic of {dest.name} with our expert local guides
                    </p>
                  </div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
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

        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 0.6s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
}