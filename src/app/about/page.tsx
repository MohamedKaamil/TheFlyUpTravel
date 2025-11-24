'use client';

import { Sparkles, MapPin, ShieldCheck, Mail, Linkedin, Heart, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative h-[85vh] sm:h-[60vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src="/images/merakist-RxOrX1iW15A-unsplash.webp"
            alt="A breathtaking view of a Sri Lankan tea plantation"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-amber-900/20"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-amber-300 rounded-full animate-float"></div>
        </div>

        <div className="relative z-10 p-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
            <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-semibold text-amber-400 tracking-wider uppercase">
              Our Story
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
            Welcome to Fly Up
          </h1>
          <p className="font-sans text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-lg text-stone-200">
            We are not just a travel agency. We are your partners in discovering the true soul of Sri Lanka.
          </p>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-100 via-green-100 to-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image Block */}
            <div className="relative animate-fade-in-left">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="images/Ayubowan.jpg"
                  alt="Sri Lankan landscape"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                
                {/* Stats Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform translate-y-[200px] group-hover:translate-y-0 transition-transform duration-500">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-700">500+</div>
                      <div className="text-xs text-stone-600">Happy Travelers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-700">10+</div>
                      <div className="text-xs text-stone-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-700">5.0</div>
                      <div className="text-xs text-stone-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Block */}
            <div className="relative animate-fade-in-right">
              <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
                {/* Decorative Corner */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-full opacity-50"></div>
                
                <div className="relative">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-6">
                    Our Promise
                  </h2>
                  <p className="font-sans text-lg text-stone-700 mb-4 leading-relaxed">
                    <span className="text-2xl text-emerald-700 font-serif">"Ayubowan!"</span> may you live long. This is our greeting, and it's our promise. We founded this company to share the Sri Lanka we know and love, far beyond the tourist trails.
                  </p>
                  <p className="font-sans text-stone-600 mb-4 leading-relaxed">
                    We are a team of local experts, storytellers, and passionate explorers dedicated to crafting truly bespoke journeys. We believe travel should be transformative, not just a trip.
                  </p>
                  <p className="font-sans text-stone-600 leading-relaxed">
                    Our commitment is to authentic immersion, sustainable practices, and creating memories that last a lifetime.
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                      <Award className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-700">Award Winning</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
                      <Users className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-semibold text-amber-700">Local Experts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-r from-white  via-green-100 to-emerald-100">
        <div className="container mx-auto px-4"> 
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700 tracking-wider uppercase">
                Our Values
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent mb-4">
              Our Core Philosophy
            </h2>
            <p className="font-sans text-lg text-stone-600 max-w-3xl mx-auto">
              Three principles guide every journey we craft.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale" style={{animationDelay: '0.1s'}}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-stone-800 mb-3 text-center">Authenticity</h3>
                <p className="font-sans text-stone-600 text-center leading-relaxed">
                  We provide real, immersive experiences. No tourist traps. Just the genuine heart of Sri Lanka.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-stone-800 mb-3 text-center">Bespoke</h3>
                <p className="font-sans text-stone-600 text-center leading-relaxed">
                  Your journey is yours alone. We listen to your dreams and craft a unique itinerary from scratch.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-stone-800 mb-3 text-center">Sustainability</h3>
                <p className="font-sans text-stone-600 text-center leading-relaxed">
                  We protect our island by supporting local communities and ensuring our tours are eco-conscious.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-r from-white via-green-100 to-emerald-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-6">
              Let's Start Your Story
            </h2>
            <p className="font-sans text-lg md:text-xl text-stone-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your bespoke Sri Lankan journey is just a conversation away. Reach out to our experts and let's begin planning the trip of a lifetime.
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-900 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              <span className="relative z-10">Start Planning Today</span>
            </a>
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