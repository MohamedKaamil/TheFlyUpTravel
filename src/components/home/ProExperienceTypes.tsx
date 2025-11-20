"use client";

import { Sun, Leaf, Camera, Coffee, Scroll, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const experiences = [
  { 
    icon: Camera, 
    title: 'Wildlife Safaris',
    desc: 'Spot leopards & elephants',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  { 
    icon: Scroll, 
    title: 'Cultural Heritage',
    desc: 'Ancient temples & ruins',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  { 
    icon: Sun, 
    title: 'Beach Relaxation',
    desc: 'Golden shores & waves',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  { 
    icon: Leaf, 
    title: 'Nature & Hiking',
    desc: 'Mountains & tea trails',
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  { 
    icon: Coffee, 
    title: 'Culinary Tours',
    desc: 'Authentic local flavors',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
];

export default function ProExperienceTypes() {
  return (
    <section className="relative bg-gradient-to-r from-white via-green-50 to-emerald-50 py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 left-10 w-40 h-40 md:w-64 md:h-64 bg-emerald-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 md:w-80 md:h-80 bg-amber-300 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-1.5 md:px-4 md:py-2 rounded-full border border-emerald-200/50 mb-4 md:mb-6 shadow-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
            <span className="text-[10px] md:text-sm font-bold text-emerald-700 tracking-widest uppercase">
              Personalized Adventures
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
            Find Your Calling
          </h2>
          
          <p className="font-sans text-sm md:text-lg text-stone-600 font-medium leading-relaxed px-4">
            What does your perfect journey look like? We curate experiences for every kind of traveler.
          </p>
        </div>

        {/* Experience Cards Grid */}
        {/* Mobile: grid-cols-2 for a tighter tile look. Desktop: grid-cols-5 */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6 mb-10 md:mb-16">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.title}
                className="group cursor-pointer animate-fade-in-scale"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-3 overflow-hidden h-full border border-stone-100">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
                  
                  {/* Decorative Circle */}
                  <div className={`absolute -top-10 -right-10 w-20 h-20 md:w-32 md:h-32 ${exp.bgColor} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative flex justify-center mb-3 md:mb-6">
                    <div className={`w-14 h-14 md:w-20 md:h-20 ${exp.bgColor} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-sm group-hover:shadow-lg`}>
                      <IconComponent className={`w-7 h-7 md:w-10 md:h-10 ${exp.iconColor} transition-transform duration-500 group-hover:scale-110`} strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="font-sans text-sm md:text-lg font-extrabold text-stone-800 mb-1 md:mb-2 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-[10px] md:text-sm text-stone-500 font-medium mb-2 md:mb-4 opacity-80 md:opacity-0 md:group-hover:opacity-100 md:transform md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500 leading-tight">
                      {exp.desc}
                    </p>
                    
                    {/* Arrow Button (Hidden on mobile to save space, visible on hover desktop) */}
                    <div className="hidden md:flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <div className={`inline-flex items-center gap-1 text-xs font-bold ${exp.iconColor} group-hover:gap-2 transition-all duration-300 uppercase tracking-wide`}>
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto animate-fade-in mb-10 md:mb-16" style={{animationDelay: '0.6s'}}>
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center md:block gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h4 className="font-extrabold text-stone-800 mb-1 text-sm md:text-base">Fully Customizable</h4>
              <p className="text-xs md:text-sm text-stone-600 font-medium">Mix and match experiences to create your perfect journey</p>
            </div>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center md:block gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4">
              <Coffee className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h4 className="font-extrabold text-stone-800 mb-1 text-sm md:text-base">Local Guides</h4>
              <p className="text-xs md:text-sm text-stone-600 font-medium">Expert locals who know the hidden gems and stories</p>
            </div>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center md:block gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4">
              <Sun className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h4 className="font-extrabold text-stone-800 mb-1 text-sm md:text-base">All Seasons</h4>
              <p className="text-xs md:text-sm text-stone-600 font-medium">Year-round destinations with perfect timing advice</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <Link href="/packages">
            <button className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wide">
              Start Planning
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
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
          from { opacity: 0; transform: scale(0.8); }
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
      `}</style>
    </section>
  );
}