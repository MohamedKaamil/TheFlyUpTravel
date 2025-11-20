"use client";

import { Heart, MapPin, Sparkles } from 'lucide-react';

export default function Welcome() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-16 md:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* Decorative Lines */}
      <div className="absolute top-10 left-10 w-20 h-1 bg-gradient-to-r from-emerald-400 to-transparent animate-slide-right"></div>
      <div className="absolute bottom-10 right-10 w-20 h-1 bg-gradient-to-l from-amber-400 to-transparent animate-slide-left"></div>
      
      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        {/* Icon Badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-xl mb-6 animate-bounce-slow">
          <Heart className="w-10 h-10 text-white" fill="white" />
        </div>
        
        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 animate-fade-in-up font-serif">
          Ayubowan!
        </h2>
        
        {/* Subtitle with decorative styling */}
        <div className="inline-block mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <p className="text-xl md:text-2xl text-emerald-700 italic font-medium bg-emerald-50 px-6 py-3 rounded-full border-2 border-emerald-200 shadow-sm">
            (May you live long)
          </p>
        </div>
        
        {/* Main Content */}
        <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-light">
            Welcome to <span className="font-bold text-emerald-800 relative inline-block">
              Fly Up
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></span>
            </span>, your personal guides to the heart of Sri Lanka.
          </p>
          
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            As locals, we don't just plan trips; we craft <span className="font-semibold text-amber-600">authentic experiences</span> that connect you with the soul of our beautiful island. Let us show you the hidden gems and timeless wonders we call home.
          </p>
        </div>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-emerald-100">
            <MapPin className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-semibold text-stone-700">Local Insights</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-100">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-semibold text-stone-700">Authentic Culture</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-teal-100">
            <Heart className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-stone-700">Made with Love</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes slide-right {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 5rem;
            opacity: 1;
          }
        }
        
        @keyframes slide-left {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 5rem;
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 1s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slide-left 1s ease-out forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}