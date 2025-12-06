'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Lock, Eye, FileText, Mail, Phone, MapPin, Globe, CheckCircle, Cookie, Server } from 'lucide-react';

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white selection:bg-amber-100 selection:text-amber-900 font-sans">
      
      {/* --- 1. Hero Header --- */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/privacy-hero.webp" 
            alt="Serene Sri Lankan nature"
            className="w-full h-full object-cover animate-slow-zoom"
            onError={(e) => {
              e.currentTarget.src = "/images/privacy.webp";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-emerald-950/50 to-emerald-950/90"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-amber-300 rounded-full animate-float"></div>
        </div>

        <div className="relative z-10 p-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400 tracking-wider uppercase">
              Transparency
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-2xl bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="font-sans text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg text-stone-200">
            At The FlyUp Travel Company, protecting your journey includes protecting your data.
          </p>
          <div className="mt-6 text-sm font-medium text-emerald-200/80">
            Last Updated: {currentDate}
          </div>
        </div>
      </section>

      {/* --- 2. Quick Summary (Highlights) --- */}
      <section className="py-24 bg-gradient-to-r from-emerald-50 via-white to-emerald-50">
        <div className="container mx-auto px-4"> 
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700 tracking-wider uppercase">
                At a Glance
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent mb-4">
              How We Handle Your Data
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Collection */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale" style={{animationDelay: '0.1s'}}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-800 mb-3 text-center">We Collect</h3>
                <p className="text-sm text-stone-600 text-center">
                  Essential details like your name, contact info, and passport data strictly to book your flights and hotels.
                </p>
              </div>
            </div>

            {/* Card 2: Usage */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-800 mb-3 text-center">We Use It For</h3>
                <p className="text-sm text-stone-600 text-center">
                  Confirming your itinerary, sending travel alerts, and complying with Sri Lankan border regulations.
                </p>
              </div>
            </div>

            {/* Card 3: Sharing */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-800 mb-3 text-center">We Share With</h3>
                <p className="text-sm text-stone-600 text-center">
                  Only the airlines, hotels, and transport providers necessary to fulfill your specific trip. We never sell data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Full Legal Text --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-stone prose-lg max-w-none">
            
            {/* 1. Intro */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">
                <span className="text-emerald-600">01.</span> Introduction
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Welcome to <strong>The FlyUp Travel Company</strong> ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you use our services via [Website URL] or communicate with our agents.
              </p>
            </div>

            {/* 2. Info We Collect */}
            <div className="mb-12 bg-stone-50 p-8 rounded-2xl border border-stone-100">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-6">
                <span className="text-amber-500">02.</span> Information We Collect
              </h3>
              <p className="text-stone-600 mb-4">To provide travel services, we must collect specific personal data. This includes:</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-stone-600 text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span><strong>Personal Identification:</strong> Name, date of birth, gender, address, email address, and phone number.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span><strong>Travel Documents:</strong> Passport numbers, issue/expiry dates, redress numbers, and visa information.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span><strong>Payment Information:</strong> Credit/debit card details, billing address, and transaction history.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span><strong>Travel Details:</strong> Itineraries, hotel bookings, car rentals, and frequent flyer numbers.</span>
                </li>
              </ul>
            </div>

            {/* 3. How We Use */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">
                <span className="text-emerald-600">03.</span> How We Use Your Information
              </h3>
              <p className="text-stone-600 mb-4">We use your data strictly to facilitate your travel plans and improve our services:</p>
              <ul className="grid sm:grid-cols-2 gap-4">
                <li className="bg-white border border-stone-200 p-4 rounded-xl">
                    <strong className="block text-stone-800 mb-1">Booking Fulfillment</strong>
                    <span className="text-stone-600 text-sm">To reserve flights, hotels, tours, and transfers.</span>
                </li>
                <li className="bg-white border border-stone-200 p-4 rounded-xl">
                    <strong className="block text-stone-800 mb-1">Communication</strong>
                    <span className="text-stone-600 text-sm">To send booking confirmations, itinerary updates, and travel alerts.</span>
                </li>
                <li className="bg-white border border-stone-200 p-4 rounded-xl">
                    <strong className="block text-stone-800 mb-1">Customer Support</strong>
                    <span className="text-stone-600 text-sm">To resolve issues, handle cancellations, or manage refunds.</span>
                </li>
                <li className="bg-white border border-stone-200 p-4 rounded-xl">
                    <strong className="block text-stone-800 mb-1">Legal Compliance</strong>
                    <span className="text-stone-600 text-sm">To comply with aviation security regulations.</span>
                </li>
              </ul>
            </div>

            {/* 4. Sharing */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">
                <span className="text-emerald-600">04.</span> How We Share Your Information
              </h3>
              <p className="text-stone-600 mb-4">
                As a travel agency, we must share your data with third parties to fulfill your bookings. We do not sell your data. We share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-stone-600 marker:text-amber-500">
                <li><strong>Service Providers:</strong> Airlines, hotels, car rental agencies, and tour operators necessary to complete your trip.</li>
                <li><strong>Payment Processors:</strong> Secure gateways to process payments.</li>
                <li><strong>Government Authorities:</strong> Customs and immigration authorities as required by law.</li>
              </ul>
            </div>

            {/* 5. Security & Cookies */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="flex items-center gap-3 font-serif text-xl font-bold text-stone-800 mb-3">
                        <Server className="w-5 h-5 text-amber-500" /> Data Security
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        We implement appropriate technical and organizational security measures (such as encryption and secure servers) to protect your personal information from unauthorized access, loss, or misuse.
                    </p>
                </div>
                <div>
                    <h3 className="flex items-center gap-3 font-serif text-xl font-bold text-stone-800 mb-3">
                        <Cookie className="w-5 h-5 text-amber-500" /> Cookies
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        We use essential cookies to make our booking engine work and analytics cookies to understand how visitors use our site. You can manage your cookie preferences through your browser settings.
                    </p>
                </div>
            </div>

            {/* 6. Your Rights */}
            <div className="mb-12 bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4">
                <Sparkles className="w-6 h-6 text-emerald-600" /> Your Rights
              </h3>
              <p className="text-stone-600 mb-4">Depending on your location, you may have the right to:</p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-stone-700 font-medium">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    Access your personal data
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    Request correction of data
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    Request deletion of data
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    Withdraw consent for marketing
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. Contact Footer (Redesigned) --- */}
      <section className="relative py-24 bg-amber-50/50 text-stone-800 overflow-hidden border-t border-amber-100">
        
        {/* Decorative Background Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-50 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-amber-200/40 to-emerald-200/40 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-stone-900">
              Still have questions?
            </h2>
            <p className="font-sans text-stone-600 text-lg leading-relaxed">
              Data privacy can be complex. If you are unsure about how your information is handled, 
              our team is ready to provide clarity.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             
             {/* Card 1: Email */}
             <div className="bg-white p-8 rounded-2xl shadow-lg shadow-stone-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-stone-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Email Us</h3>
                <p className="text-stone-500 text-sm mb-4">For general privacy inquiries</p>
                <a href="mailto:theflyuptraveltours@outlook.com" className="text-emerald-600 font-medium hover:text-emerald-700 break-all">
                  theflyuptraveltours@outlook.com
                </a>
             </div>

             {/* Card 2: Phone */}
             <div className="bg-white p-8 rounded-2xl shadow-lg shadow-stone-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-stone-100">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Call Us</h3>
                <p className="text-stone-500 text-sm mb-4">Mon-Fri from 9am to 6pm</p>
                <a href="tel:+94772965729" className="text-amber-600 font-medium hover:text-amber-700">
                  +94 77 296 5729
                </a>
             </div>

             {/* Card 3: Office */}
             <div className="bg-white p-8 rounded-2xl shadow-lg shadow-stone-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-stone-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Visit Us</h3>
                <p className="text-stone-500 text-sm mb-4">Come say hello</p>
                <span className="text-stone-700 font-medium block">
                  Dehiwala - Mount Lavinia,<br/>Colombo, Sri Lanka
                </span>
             </div>

          </div>

          {/* Action Button */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-stone-900 hover:bg-emerald-900 text-white font-bold py-4 px-10 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Privacy Officer
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* --- Animations (Copied from About Page) --- */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.9); }
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
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out forwards;
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
      `}</style>
    </div>
  );
}