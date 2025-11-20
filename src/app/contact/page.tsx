'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, Clock, CheckSquare, Sparkles, MessageCircle } from 'lucide-react';

// Declare emailjs type for TypeScript
declare global {
  interface Window {
    emailjs: any;
  }
}

export default function ContactPage() {
  const [status, setStatus] = useState('');
  const [focusedField, setFocusedField] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Bespoke Itinerary',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const SERVICE_ID = 'service_s8nneii';
    const TEMPLATE_ID = 'template_1lnr17p';
    const PUBLIC_KEY = 'X9AE9Hv5-AaAYy9Bg';

    try {
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;
        document.head.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
        
        window.emailjs.init(PUBLIC_KEY);
      }

      const response = await window.emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          interest: formData.interest,
          message: formData.message,
          to_email: 'theflyuptravel@outlook.com'
        },
        PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', interest: 'Bespoke Itinerary', message: '' });
      } else {
        setStatus('Oops! There was a problem sending your message.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('Oops! There was a problem sending your message.');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      {/* Mobile: Converted fixed height to min-height/flexible to accommodate content */}
      <section className="relative h-[60vh] lg:h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="images/contact-us.jpg"
            alt="A beautiful, serene Sri Lankan landscape"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-amber-900/20"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-amber-300 rounded-full animate-float"></div>
        </div>

        <div className="relative z-10 p-6 animate-fade-in-up w-full max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase">
              We're Here To Help
            </span>
          </div>
          {/* Responsive typography: smaller text on mobile, larger on desktop */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent px-2">
            Get In Touch
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-lg text-stone-200 px-4">
            Let's start planning your unforgettable Sri Lankan journey today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      {/* Reduced vertical padding on mobile (py-12) vs desktop (py-24) */}
      <section className="relative py-12 lg:py-24 bg-gradient-to-r from-emerald-100 via-green-100 to-white overflow-hidden">
        {/* Decorative Background - Hidden on very small screens if needed, but safe due to overflow-hidden */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-left">
              {/* Reduced padding on mobile (p-6) to give inputs more room */}
              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative overflow-hidden border border-stone-100">
                {/* Decorative Corner */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-full opacity-50"></div>
                
                <div className="relative">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 mb-8">Fill out the form below and we'll get back to you within 24 business hours.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="name" className="block font-sans font-semibold text-stone-700 mb-2 text-sm sm:text-base">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required 
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField('')}
                          // Added text-base to prevent iOS zoom on focus
                          className="font-sans w-full px-4 py-3 text-base border-2 border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 hover:border-stone-300 placeholder:text-stone-400" 
                          placeholder="Your full name"
                        />
                        {focusedField === 'name' && (
                          <div className="absolute -top-1 right-0">
                            <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                      <div className="relative">
                        <label htmlFor="email" className="block font-sans font-semibold text-stone-700 mb-2 text-sm sm:text-base">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required 
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          className="font-sans w-full px-4 py-3 text-base border-2 border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 hover:border-stone-300 placeholder:text-stone-400" 
                          placeholder="your@example.com"
                        />
                        {focusedField === 'email' && (
                          <div className="absolute -top-1 right-0">
                            <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="relative">
  <label htmlFor="interest" className="block font-sans font-semibold text-stone-700 mb-2 text-sm sm:text-base">
    I'm interested in...
  </label>
  <div className="relative">
    <select 
      id="interest" 
      value={formData.interest}
      onChange={(e) => setFormData({...formData, interest: e.target.value})}
      onFocus={() => setFocusedField('interest')}
      onBlur={() => setFocusedField('')}
      /* CHANGED: text-stone-400 to text-stone-800 below */
      className="font-sans w-full px-4 py-3 text-base text-stone-600 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 bg-white transition-all duration-300 hover:border-stone-300 appearance-none cursor-pointer"
    >
      <option>Bespoke Itinerary</option>
      <option>Short Stays</option>
      <option>Honeymoon & Beach</option>
      <option>Nature & Wildlife</option>
      <option>Grand Round Tours</option>
      <option>Other / Not Sure</option>
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ">
      <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>
                    
                    <div className="relative">
                      <label htmlFor="message" className="block font-sans font-semibold text-stone-700 mb-2 text-sm sm:text-base">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        id="message" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={5} 
                        required 
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        className="font-sans w-full px-4 py-3 text-base text-stone-900 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 hover:border-stone-300 resize-none placeholder:text-stone-400"
                        placeholder="Tell us about your dream trip to Sri Lanka, your interests, dates, and number of travelers..."
                      ></textarea>
                      {focusedField === 'message' && (
                        <div className="absolute -top-1 right-0">
                          <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <button 
                        type="submit"
                        className="group relative w-full inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-stone-900 font-bold py-3 sm:py-4 px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:bg-stone-300 disabled:from-stone-400 disabled:to-stone-500 disabled:text-stone-700 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl overflow-hidden"
                        disabled={status === 'Sending...'}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                        <Send className="w-5 h-5 mr-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="relative z-10">
                          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                        </span>
                      </button>
                    </div>
                    
                    {status && (
                      <div className={`p-4 rounded-xl border-2 animate-fade-in flex items-start sm:items-center gap-3 ${
                        status.includes('Oops') 
                          ? 'bg-red-50 border-red-200 text-red-700' 
                          : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      }`}>
                        {status.includes('Oops') ? (
                          <HelpCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                        ) : (
                          <CheckSquare className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                        )}
                        <p className="font-sans font-semibold text-sm sm:text-base">{status}</p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6 animate-fade-in-right">
              {/* Quick Answers */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-emerald-700" />
                  Quick Answers
                </h3>
                <div className="space-y-6">
                  <div className="group">
                    <h4 className="font-sans font-semibold text-stone-700 flex items-center gap-2 mb-2 group-hover:text-emerald-700 transition-colors duration-300 text-sm sm:text-base">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                      </div>
                      Response times?
                    </h4>
                    <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed pl-10 sm:pl-12">
                      We typically respond within 24 business hours. We're a bespoke agency, so we review every inquiry personally.
                    </p>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-sans font-semibold text-stone-700 flex items-center gap-2 mb-2 group-hover:text-emerald-700 transition-colors duration-300 text-sm sm:text-base">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                        <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                      </div>
                      Book flights?
                    </h4>
                    <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed pl-10 sm:pl-12">
                      We specialize in ground arrangements. We can advise on flights, but don't book them directly.
                    </p>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-sans font-semibold text-stone-700 flex items-center gap-2 mb-2 group-hover:text-emerald-700 transition-colors duration-300 text-sm sm:text-base">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                        <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      What's "bespoke"?
                    </h4>
                    <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed pl-10 sm:pl-12">
                      Your trip is 100% custom-built for you. We don't sell pre-made packages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-gradient-to-br from-emerald-800 to-teal-800 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-6 relative z-10">
                  Direct Contact
                </h3>
                <div className="space-y-5 relative z-10">
                  <a href="tel:+94764301479" className="flex items-start gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-sans font-semibold mb-1 text-sm sm:text-base">Phone / WhatsApp</h4>
                      <p className="font-sans text-emerald-100 text-xs sm:text-sm truncate">+94 76 430 1479</p>
                    </div>
                  </a>
                  
                  <a href="mailto:theflyuptraveltours@outlook.com" className="flex items-start gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-sans font-semibold mb-1 text-sm sm:text-base">Email</h4>
                      <p className="font-sans text-emerald-100 text-xs sm:text-sm break-all">theflyuptraveltours@outlook.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-sans font-semibold mb-1 text-sm sm:text-base">Office</h4>
                      <p className="font-sans text-emerald-100 text-xs sm:text-sm leading-relaxed">
                        Dehiwala - Mount Lavinia, Colombo
                        <span className="block text-xs mt-1 text-emerald-200">(By appointment only)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; animation-delay: 1s; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-slow-zoom { animation: slow-zoom 20s ease-in-out infinite; }
      `}</style>
    </div>
  );
}