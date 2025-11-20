"use client";

import { Quote, Star, MapPin, Heart, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Fly Up didn't just give us a vacation; they gave us a story. From the moment we landed, we felt like family, not tourists. Every detail was seamless, every recommendation was perfect. We left a piece of our hearts in Sri Lanka.",
    name: "David & Sarah",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    trip: "Honeymoon Package"
  },
  {
    quote: "Our honeymoon in Sri Lanka exceeded every expectation. The private experiences, the cultural immersion, and the warm hospitality made it truly magical. Thank you for creating memories we'll treasure forever!",
    name: "Emma & James",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    trip: "Cultural Tour"
  },
  {
    quote: "As a solo traveler, I was nervous at first, but Fly Up made me feel safe and welcomed every step of the way. The connections I made and places I discovered were beyond my wildest dreams. Can't wait to return!",
    name: "Sofia Rodriguez",
    location: "Barcelona, Spain",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    trip: "Adventure Tour"
  }
];

export default function ProTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-green-50 to-emerald-50 py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-amber-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-teal-400 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-emerald-100 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-300/50 shadow-lg mb-4 sm:mb-6">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-amber-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-emerald-800 tracking-wider uppercase">
              Stories From Our Travelers
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-3 sm:mb-4">
            What Our Guests Say
          </h2>
          <p className="font-sans text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            Real experiences from travelers who explored Sri Lanka with us
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-amber-200/40 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-tl from-emerald-200/40 to-transparent rounded-tl-full"></div>

            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Quote Icon */}
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-emerald-400 blur-2xl opacity-30 rounded-full"></div>
                <div className="relative bg-gradient-to-br from-amber-100 to-emerald-100 rounded-2xl p-3 sm:p-4">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-emerald-700 fill-emerald-700" strokeWidth={1.5} />
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-stone-800 mb-6 sm:mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
                {currentTestimonial.quote}
              </blockquote>

              {/* Rating Stars */}
              <div className="flex gap-1 sm:gap-1.5 mb-6 sm:mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <div key={i} className="relative">
                    <div className="absolute inset-0 bg-amber-400 blur-md opacity-50"></div>
                    <Star
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-400 fill-amber-400 relative animate-scale-in"
                      style={{animationDelay: `${0.5 + i * 0.1}s`}}
                    />
                  </div>
                ))}
              </div>

              {/* Author Info - Card Style */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pt-6 border-t-2 border-emerald-100 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-emerald-400 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <img
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-xl object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full p-1.5 shadow-lg">
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-stone-800 mb-1">
                      {currentTestimonial.name}
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-stone-600 flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                      {currentTestimonial.location}
                    </p>
                    <span className="inline-block bg-gradient-to-r from-amber-100 to-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                      {currentTestimonial.trip}
                    </span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="group bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="group bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border-2 border-amber-200 hover:border-amber-300 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-2 sm:gap-3 justify-center mt-6 sm:mt-8 animate-fade-in" style={{animationDelay: '0.7s'}}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === activeIndex
                    ? 'w-12 sm:w-16 h-2.5 sm:h-3 bg-gradient-to-r from-amber-400 to-emerald-400 shadow-lg'
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-emerald-200 hover:bg-emerald-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Trust Indicators - Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 fill-emerald-600" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-stone-600 font-semibold">Happy Travelers</div>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 fill-amber-500" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-amber-500 to-orange-500 bg-clip-text text-transparent mb-1 sm:mb-2">5.0</div>
              <div className="text-xs sm:text-sm text-stone-600 font-semibold">Average Rating</div>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-teal-100 hover:border-teal-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-stone-600 font-semibold">Satisfaction</div>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-600 to-green-600 bg-clip-text text-transparent mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-sm text-stone-600 font-semibold">Destinations</div>
            </div>
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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
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
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}