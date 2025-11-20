'use client';

import { useState } from 'react';
import { CheckCircle, Car, Home, Ship, Sun, Coffee, Mountain, Utensils, BookOpen, Compass, ArrowRight, Sparkles, Star } from 'lucide-react';

const mainServices = [
  {
    id: 'hotels',
    title: 'Hotel Booking',
    description:
      'Find your perfect stay with ease. We handle local and international hotel reservations, offering everything from budget-friendly stays to luxury resorts. Enjoy special deals, seasonal offers, and detailed hotel descriptions with amenities and images.',
    icon: Home,
    image: '/images/booking.jpg',
    color: 'from-amber-500 to-orange-500',
    features: [
      'Local and international hotel reservations',
      'Budget to luxury options',
      'Special deals and seasonal offers',
      'Hotel images, descriptions, and amenities',
    ],
  },
  {
    id: 'transport',
    title: 'Transport Services',
    description:
      'Travel comfortably across Sri Lanka and beyond with our private transport options. Choose from cars, vans, or buses with professional chauffeurs. We also arrange airport transfers and luxury vehicle experiences for seamless travel.',
    icon: Car,
    image: 'images/transport.jpg',
    color: 'from-emerald-500 to-teal-500',
    features: [
      'Private car / van / bus rentals',
      'Chauffeur-driven vehicles',
      'Airport pick-up & drop-off',
      'Luxury vehicle options',
    ],
  },
  {
    id: 'resources',
    title: 'Travel Resources',
    description:
      'Stay informed and inspired for your journey. Access our curated travel resources, including destination guides, travel blogs, local weather updates, currency information, and cultural highlights to enrich your travel experience.',
    icon: BookOpen,
    image: 'images/resource.jpg',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Destination guides',
      'Travel tips & blogs',
      'Local weather and currency info',
      'Cultural and event highlights',
    ],
  },
];

const allInclusiveServices = [
  { title: 'Cultural Immersions', icon: Compass, color: 'from-orange-500 to-red-500' },
  { title: 'Wildlife Safaris', icon: Mountain, color: 'from-green-500 to-emerald-500' },
  { title: 'Culinary Tours', icon: Utensils, color: 'from-amber-500 to-yellow-500' },
  { title: 'Beach Retreats', icon: Sun, color: 'from-blue-500 to-cyan-500' },
  { title: 'Tea Plantation', icon: Coffee, color: 'from-teal-500 to-emerald-500' },
  { title: 'Whale Watching', icon: Ship, color: 'from-indigo-500 to-blue-500' },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(mainServices[0].id);
  const activeService = mainServices.find((s) => s.id === activeTab);

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src="/images/service.jpg"
            alt="An aerial view of the diverse Sri Lankan coastline"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-amber-900/30"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-float-delayed"></div>
        </div>

        <div className="relative z-10 p-4 animate-fade-in-up max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-amber-400/30 shadow-lg">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs md:text-sm font-semibold text-amber-400 tracking-widest uppercase">
              Premium Services
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
            What We Do
          </h1>
          <p className="font-sans text-base md:text-xl max-w-2xl mx-auto drop-shadow-lg text-stone-200 leading-relaxed">
            We handle every detail of your journey with precision, passion, and unparalleled local expertise.
          </p>
        </div>
      </section>

      {/* Main Services - Interactive Tabs */}
      <section className="relative py-12 md:py-24 bg-gradient-to-r from-emerald-50 via-green-50 to-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-1.5 rounded-full mb-4 border border-emerald-200/50">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
              <span className="text-[10px] md:text-xs font-semibold text-emerald-700 tracking-widest uppercase">
                Our Expertise
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent mb-4 px-2">
              Our Core Services
            </h2>
            <p className="font-sans text-sm md:text-lg text-stone-600 max-w-2xl mx-auto px-4">
              We build your perfect trip around three pillars of premium service.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Tab Buttons - Horizontal scroll on mobile, Vertical stack on desktop */}
            <div className="lg:col-span-1 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide px-1">
              {mainServices.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`group flex items-center gap-3 lg:gap-4 p-3 lg:p-5 rounded-xl lg:rounded-2xl text-left transition-all duration-500 transform animate-fade-in-scale flex-shrink-0 min-w-[240px] lg:min-w-0 snap-center border ${
                    activeTab === service.id
                      ? 'bg-white border-emerald-200 shadow-xl scale-100 lg:scale-105'
                      : 'bg-white/50 border-transparent hover:bg-white hover:shadow-lg'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    activeTab === service.id
                      ? `bg-gradient-to-br ${service.color} shadow-lg scale-110`
                      : 'bg-stone-100 group-hover:bg-stone-200'
                  }`}>
                    <service.icon
                      className={`w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-300 ${
                        activeTab === service.id ? 'text-white' : 'text-stone-500'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-sans text-sm lg:text-base font-semibold transition-colors duration-300 ${
                      activeTab === service.id ? 'text-stone-900' : 'text-stone-600'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  {activeTab === service.id && (
                    <div className="hidden lg:block w-2 h-2 bg-emerald-500 rounded-full animate-pulse flex-shrink-0"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-3">
              {activeService && (
                <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden animate-fade-in border border-stone-100">
                  <div className="relative w-full h-48 md:h-80 overflow-hidden group">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-xl">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-xs font-semibold text-stone-800 uppercase tracking-wide">Premium</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-10">
                    <h3 className="font-serif text-2xl md:text-4xl font-bold text-stone-800 mb-3 md:mb-4">
                      {activeService.title}
                    </h3>
                    <p className="font-sans text-sm md:text-lg text-stone-600 leading-relaxed mb-6 md:mb-8">
                      {activeService.description}
                    </p>
                    
                    {/* Key Features */}
                    <h4 className="font-sans text-sm md:text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2 uppercase tracking-wide">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                      {activeService.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 group animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors duration-300 mt-0.5">
                            <CheckCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-600" strokeWidth={2} />
                          </div>
                          <span className="font-sans text-sm md:text-base text-stone-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Book Button */}
                    <a
                      href={`https://wa.me/94772965729?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20${encodeURIComponent(activeService.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r ${activeService.color} hover:shadow-xl text-white font-semibold py-3.5 px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden`}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                      <span className="relative z-10">Book This Service</span>
                      <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300 stroke-2" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* All-Inclusive Services Grid */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-1.5 rounded-full mb-4 border border-amber-200/50">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[10px] md:text-xs font-semibold text-amber-700 tracking-widest uppercase">
                Complete Experience
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent mb-4">
              Your Journey, All-Inclusive
            </h2>
            <p className="font-sans text-sm md:text-lg text-stone-600 max-w-2xl mx-auto">
              We go beyond the basics. Our expertise covers every facet of your trip, ensuring no detail is overlooked.
            </p>
          </div>

          {/* Mobile: Grid-cols-2, Desktop: Grid-cols-3 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {allInclusiveServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white p-5 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-scale overflow-hidden border border-stone-100"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Decorative Corner */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>

                <div className="relative flex flex-col items-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md`}>
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-sm md:text-xl font-bold text-stone-800 text-center group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-emerald-100 via-green-100 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 md:w-96 md:h-96 bg-amber-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 md:w-80 md:h-80 bg-emerald-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent mb-4 md:mb-6">
              Experience the Difference
            </h2>
            <p className="font-sans text-sm md:text-xl text-stone-700 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
              Let our experts handle the logistics while you focus on making memories.
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/50 overflow-hidden uppercase tracking-wide"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              <span className="relative z-10">Start Planning</span>
              <ArrowRight className="w-5 h-5 ml-2 relative z-10 stroke-2" />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 0.6s ease-out forwards; opacity: 0; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; animation-delay: 1s; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-slow-zoom { animation: slow-zoom 20s ease-in-out infinite; }
        
        /* Hide Scrollbar for Tabs */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}