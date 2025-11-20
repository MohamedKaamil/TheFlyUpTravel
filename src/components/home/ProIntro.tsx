"use client";

import { Leaf, Award, Users, Sparkles } from 'lucide-react';

export default function ProIntro() {
  return (
    <section className="relative bg-gradient-to-r from-emerald-100 via-green-100 to-white py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 md:w-72 md:h-72 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 md:w-96 md:h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Centered Badge - Responsive sizing */}
      <div className="flex justify-center items-center relative z-20 mb-8 md:mb-12">
        <div className="inline-block px-4 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 rounded-full animate-slide-down shadow-sm">
            <span className="text-[10px] md:text-sm font-bold text-emerald-700 tracking-widest uppercase">
             Welcome to Sri Lanka
            </span>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Image Column */}
        <div className="relative h-64 md:h-96 lg:h-[500px] rounded-lg group animate-fade-in-left order-first">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative h-full">
            <img
              src="/images/hendrik-cornelissen-jpTT_SAU034-unsplash.jpg"
              alt="nine arch bridge in Ella"
              className="w-full h-full object-cover rounded-xl shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/95 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-amber-500 animate-pulse" />
                <span className="font-bold text-xs md:text-base text-stone-800">Authentic Experiences</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Text Column */}
        <div className="lg:pl-8 animate-fade-in-right">
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight animate-slide-up">
            Ayubowan.
          </h2>
          
          <p className="font-sans text-sm md:text-base lg:text-lg text-stone-700 leading-relaxed mb-6 md:mb-8 tracking-wide animate-fade-in" style={{animationDelay: '0.2s'}}>
            We are <span className="font-bold text-emerald-800">Fly Up</span>, a team of passionate locals who believe travel is more than just sightseeing. It's about <span className="font-semibold text-amber-600">connection</span> to the land, to the culture, and to the people. We create authentic, tailor-made experiences that you won't find in a guidebook.
          </p>
          
          <div className="space-y-4 md:space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start group hover:translate-x-3 transition-all duration-300 animate-slide-in-left" style={{animationDelay: '0.3s'}}>
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 text-amber-700 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Leaf className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
              <div className="ml-4 md:ml-5 flex-1">
                <h3 className="font-sans text-base md:text-xl font-bold text-stone-800 mb-1 md:mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  Local Expertise
                </h3>
                <p className="font-sans text-xs md:text-base text-stone-600 leading-relaxed">
                  Born and raised here, we know the hidden paths, the best local food, and the perfect time to visit.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start group hover:translate-x-3 transition-all duration-300 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-emerald-100 via-emerald-200 to-emerald-300 text-emerald-700 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Award className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
              <div className="ml-4 md:ml-5 flex-1">
                <h3 className="font-sans text-base md:text-xl font-bold text-stone-800 mb-1 md:mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  Tailor-Made Trips
                </h3>
                <p className="font-sans text-xs md:text-base text-stone-600 leading-relaxed">
                  No two journeys are the same. We listen to your dreams and build a unique itinerary just for you.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-start group hover:translate-x-3 transition-all duration-300 animate-slide-in-left" style={{animationDelay: '0.5s'}}>
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-teal-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300 text-teal-700 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Users className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
              <div className="ml-4 md:ml-5 flex-1">
                <h3 className="font-sans text-base md:text-xl font-bold text-stone-800 mb-1 md:mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  Personal Connection
                </h3>
                <p className="font-sans text-xs md:text-base text-stone-600 leading-relaxed">
                  Experience Sri Lanka through the eyes of locals who care deeply about sharing our island's magic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; opacity: 0; }
        .animate-slide-down { animation: slide-down 0.6s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.7s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
}