"use client";

import { MessageSquare, ClipboardList, Plane, Check, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '1',
    title: 'Connect',
    desc: 'Share your dreams, ideas, and travel style with our local experts. No idea is too big or too small.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    features: ['Free Consultation', 'Dream Big', 'Share Ideas']
  },
  {
    icon: ClipboardList,
    number: '2',
    title: 'Co-create',
    desc: 'We design a unique, day-by-day itinerary and refine it with you until it\'s absolutely perfect.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    features: ['Custom Itinerary', 'Flexible Planning', 'Your Input Matters']
  },
  {
    icon: Plane,
    number: '3',
    title: 'Journey',
    desc: 'You arrive and immerse yourself in the magic. We handle every detail, 24/7, from start to finish.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    features: ['24/7 Support', 'Seamless Experience', 'Pure Magic']
  }
];

export default function ProHowItWorks() {
  return (
    <section className="relative bg-gradient-to-r from-emerald-50 via-green-50 to-white py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-40 h-40 md:w-96 md:h-96 bg-emerald-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-amber-300 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-1.5 md:px-4 md:py-2 rounded-full border border-emerald-200/50 mb-4 md:mb-6 shadow-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
            <span className="text-[10px] md:text-sm font-bold text-emerald-700 tracking-widest uppercase">
              Your Journey Starts Here
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
            A Simple, Personal Process
          </h2>
          
          <p className="font-sans text-sm md:text-lg text-stone-600 font-medium leading-relaxed px-4">
            Crafting your perfect holiday should be as relaxing as the trip itself.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 -z-10">
            <div className="relative h-full max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 rounded-full animate-progress"></div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative animate-fade-in-scale"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* Card */}
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl p-6 md:p-8 transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden border border-stone-100 h-full flex flex-col">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
                    
                    {/* Decorative Corner */}
                    <div className={`absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 ${step.bgColor} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700`}></div>

                    {/* Content */}
                    <div className="relative flex-grow flex flex-col">
                      {/* Icon Container */}
                      <div className="flex justify-center mb-6 md:mb-8">
                        <div className="relative">
                          {/* Number Badge */}
                          <div className={`absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg z-10 transform group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-extrabold text-xs md:text-sm">{step.number}</span>
                          </div>
                          
                          {/* Icon Circle */}
                          <div className={`w-16 h-16 md:w-24 md:h-24 ${step.bgColor} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl relative`}>
                            {/* Pulse Effect */}
                            <div className={`absolute inset-0 ${step.bgColor} rounded-2xl animate-ping opacity-20`}></div>
                            <IconComponent className={`w-8 h-8 md:w-12 md:h-12 ${step.iconColor} relative z-10`} strokeWidth={2} />
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl md:text-4xl font-extrabold text-stone-800 mb-3 md:mb-4 text-center group-hover:text-emerald-700 transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-sm md:text-base text-stone-600 font-medium leading-relaxed text-center mb-6">
                        {step.desc}
                      </p>

                      {/* Features List */}
                      <div className="mt-auto space-y-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {step.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 justify-center"
                            style={{transitionDelay: `${i * 50}ms`}}
                          >
                            <div className={`w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={4} />
                            </div>
                            <span className="text-xs md:text-sm text-stone-700 font-bold">{feature}</span>
                          </div>
                        ))}
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
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-12 md:mt-20 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-md border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1 md:mb-2">
              500+
            </div>
            <div className="text-xs md:text-sm text-stone-600 font-bold uppercase tracking-wide">Happy Travelers</div>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-md border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1 md:mb-2">
              100%
            </div>
            <div className="text-xs md:text-sm text-stone-600 font-bold uppercase tracking-wide">Personalized</div>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-md border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-1 md:mb-2">
              24/7
            </div>
            <div className="text-xs md:text-sm text-stone-600 font-bold uppercase tracking-wide">Support Available</div>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-md border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1 md:mb-2">
              10+
            </div>
            <div className="text-xs md:text-sm text-stone-600 font-bold uppercase tracking-wide">Years Experience</div>
          </div>
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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(-15px); }
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 0.6s ease-out forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; opacity: 0; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; animation-delay: 2s; }
        .animate-progress { animation: progress 3s ease-out forwards; animation-delay: 0.5s; width: 0; }
      `}</style>
    </section>
  );
}