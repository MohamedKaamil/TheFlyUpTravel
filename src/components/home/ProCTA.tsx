"use client";

import { ArrowRight, Sparkles, Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';   

export default function ProCTA() {
  return (
    <section className="relative bg-stone-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="/images/photo-1519046904884-53103b34b206.webp"
          alt="Gentle waves on a Sri Lankan beach at sunset"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-amber-900/30"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-amber-300 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-amber-400/30 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold text-amber-400 tracking-wider uppercase">
            Ready for Adventure?
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="font-serif text-4xl md:text-7xl font-bold mb-6 animate-fade-in-up leading-tight" style={{animationDelay: '0.1s'}}>
          <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
            Your Story Awaits
          </span>
        </h2>

        {/* Subheading */}
        <p className="font-sans text-lg md:text-2xl text-stone-200 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Let's craft your unforgettable journey through the heart of Sri Lanka. 
          <span className="block mt-2 text-amber-400 font-semibold">Your adventure begins with a single message.</span>
        </p>

        {/* CTA Buttons */}
        <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
            >
            {/* Start Planning Today Button */}
            <a
                href="/packages"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-900 font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative z-10">Start Planning Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </a>

            {/* Call Us Now Button */}
            <a
                href="https://wa.me/94772965729?text=Hello!%20I'm%20interested%20in%20your%20travel%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
                >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call Us Now</span>
                </a>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-white mb-2">Email Us</h3>
            <p className="text-sm text-stone-300 mb-3">Get a response within 24 hours</p>
            <a href="mailto:theflyuptraveltours@outlook.com" className="text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors">
              theflyuptraveltours@outlook.com →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-white mb-2">Call Us</h3>
            <p className="text-sm text-stone-300 mb-3">Speak with our travel experts</p>
            <a href="tel:+94772965729" className="text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors">
              +94772965729 →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-sm text-stone-300 mb-3">Chat with us instantly</p>
            <a 
                href="https://wa.me/94772965729?text=Hi%21" 
                className="text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                >
                Start Chat →
            </a>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-stone-400 text-sm animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Available 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <span>No Commitment Required</span>
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
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(-10px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-40px);
          }
        }

        @keyframes slow-zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
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

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}