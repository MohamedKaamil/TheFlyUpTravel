"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-950 text-stone-300 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-500 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-20 pb-8 relative z-10">
        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400 tracking-wider uppercase">
              Stay Connected
            </span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Get Travel Inspiration
          </h3>
          <p className="text-stone-400 mb-6">
            Subscribe to receive exclusive deals, travel tips, and stories from Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition-all duration-300"
            />
            <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-900 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105">
              <span>Subscribe</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <a 
              href="/" 
              className="group inline-block font-serif text-3xl font-bold text-white mb-4 hover:text-amber-400 transition-colors duration-300"
            >
              <span className="relative">
                Fly Up
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
              </span>
            </a>
            <p className="font-sans text-stone-400 leading-relaxed text-sm mb-6">
              Crafting bespoke journeys into the heart of Sri Lanka's wonder. Your authentic story begins here.
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-sm">
              <Heart className="w-4 h-4 fill-amber-400 animate-pulse" />
              <span>Made with love in Sri Lanka</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="font-serif text-lg font-semibold text-white uppercase tracking-wider mb-6 relative inline-block">
              Explore
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></span>
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li className="group">
                <a href="/about" className="flex items-center gap-2 hover:text-amber-500 transition-all duration-300 hover:translate-x-2">
                  <span className="w-0 h-0.5 bg-amber-500 group-hover:w-4 transition-all duration-300"></span>
                  Our Story
                </a>
              </li>
              <li className="group">
                <a href="/packages" className="flex items-center gap-2 hover:text-amber-500 transition-all duration-300 hover:translate-x-2">
                  <span className="w-0 h-0.5 bg-amber-500 group-hover:w-4 transition-all duration-300"></span>
                  Signature Journeys
                </a>
              </li>
              <li className="group">
                <a href="/services" className="flex items-center gap-2 hover:text-amber-500 transition-all duration-300 hover:translate-x-2">
                  <span className="w-0 h-0.5 bg-amber-500 group-hover:w-4 transition-all duration-300"></span>
                  Our Services
                </a>
              </li>
              <li className="group">
                <a href="/testimonials" className="flex items-center gap-2 hover:text-amber-500 transition-all duration-300 hover:translate-x-2">
                  <span className="w-0 h-0.5 bg-amber-500 group-hover:w-4 transition-all duration-300"></span>
                  Traveler Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h4 className="font-serif text-lg font-semibold text-white uppercase tracking-wider mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></span>
            </h4>
            <ul className="space-y-4 font-sans text-stone-400 text-sm">
              <li className="group flex items-start gap-3 hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <span className="pt-2">Dehiwala - Mount Lavinia, Colombo, Sri Lanka</span>
              </li>
              <li className="group flex items-start gap-3 hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-emerald-500" />
                </div>
                <a href="tel:+94772965729" className="pt-2 hover:text-amber-400">+94 77 296 5729</a>
              </li>
              <li className="group flex items-start gap-3 hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <a href="mailto:theflyuptraveltours@outlook.com" className="pt-2 hover:text-amber-400">theflyuptraveltours@outlook.com</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Follow Us */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h4 className="font-serif text-lg font-semibold text-white uppercase tracking-wider mb-6 relative inline-block">
              Follow Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></span>
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a 
                href="https://www.instagram.com/the.flyup.travel?igsh=MTd3NWFsY3RtazlzcA%3D%3D&utm_source=qr " 
                aria-label="Facebook" 
                className="group w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-600 border border-white/10 hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5 text-stone-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/the.flyup.travel?igsh=MTd3NWFsY3RtazlzcA%3D%3D&utm_source=qr " 
                aria-label="Instagram" 
                className="group w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 border border-white/10 hover:border-pink-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5 text-stone-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/the.flyup.travel?igsh=MTd3NWFsY3RtazlzcA%3D%3D&utm_source=qr " 
                aria-label="Twitter" 
                className="group w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sky-500 border border-white/10 hover:border-sky-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5 text-stone-300 group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Join our community and share your Sri Lankan adventures with #FlyUpSriLanka
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800/50 pt-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-stone-500 text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} Fly Up Travel Agency. All rights reserved.
              <span className="hidden md:inline"> • </span>
              <span className="block md:inline mt-1 md:mt-0">Crafted with care in Sri Lanka 🇱🇰</span>
            </p>
            <div className="flex gap-6 text-xs">
              <a href="/privacy" className="text-stone-500 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-stone-500 hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-stone-900 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

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
            transform: translateY(-30px) translateX(15px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-40px) translateX(-15px);
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
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}