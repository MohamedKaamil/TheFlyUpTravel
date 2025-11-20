'use client';

import { Star, Quote, Sparkles, Camera, Heart, MapPin } from 'lucide-react';
import { useState } from 'react';

const allTestimonials = [
  {
    quote: "Fly Up didn't just give us a vacation; they gave us a story. From the moment we landed, we felt like family, not tourists. Every detail was seamless, every recommendation was perfect. We left a piece of our hearts in Sri Lanka.",
    name: 'Aisha Al-Farsi',
    location: 'Riyadh, Saudi Arabia',
    rating: 5,
  },
  {
    quote: "Our honeymoon in Sri Lanka exceeded every expectation. The private experiences, the cultural immersion, and the warm hospitality made it truly magical. Thank you for creating memories we'll treasure forever!",
    name: 'Emma & James',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
  {
    quote: "As a solo traveler, I was nervous at first, but Fly Up made me feel safe and welcomed every step of the way. The connections I made and places I discovered were beyond my wildest dreams. Can't wait to return!",
    name: 'Sofia Rodriguez',
    location: 'Barcelona, Spain',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
  {
    quote: "The cultural triangle tour was absolutely breathtaking. Our guide's knowledge brought every ancient site to life. Climbing Sigiriya at sunrise is a memory I'll cherish forever!",
    name: 'Michael Chen',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
  {
    quote: "From whale watching in Mirissa to tea plantation walks in Ella, every moment was perfectly orchestrated. The attention to detail and personal touches made this trip extraordinary.",
    name: 'The Anderson Family',
    location: 'Melbourne, Australia',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
  {
    quote: "I've traveled with many agencies, but none compare to Fly Up. Their local knowledge and genuine care for creating authentic experiences sets them apart. Already planning my return trip!",
    name: 'Priya Patel',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
];

const travelerPhotos = [
  {
    src: '/images/Scenic-train-to-Ella.jpg',
    alt: 'Train journey through tea plantations',
    caption: 'Scenic train to Ella'
  },
  {
    src: '/images/Whale-watching.jpg',
    alt: 'Whale watching in Mirissa',
    caption: 'Whale watching'
  },
  {
    src: '/images/Mirissa-beach.jpg',
    alt: 'Beautiful Sri Lankan beach',
    caption: 'Mirissa beach bliss'
  },
  {
    src: '/images/Wildlife-safari-elephant.jpg',
    alt: 'Wildlife safari elephant',
    caption: 'Yala safari magic'
  },
  {
    src: '/images/pigeon-island.jpg',
    alt: 'pigeon island',
    caption: 'Magic of pigeon island'
  },
];

const renderStars = (rating: number) => {
  return Array(rating)
    .fill(0)
    .map((_, i) => (
      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500 animate-scale-in" style={{animationDelay: `${i * 0.1}s`}} />
    ));
};

export default function TestimonialsPage() {
  const [spotlight] = allTestimonials;
  const otherTestimonials = allTestimonials.slice(1);
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative h-[85vh] sm:h-[60vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src="/images/testimonial.jpg"
            alt="A beautiful, serene Sri Lankan landscape"
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
              Stories That Inspire
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
            Traveler Stories
          </h1>
          <p className="font-sans text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-lg text-stone-200">
            Real feedback from our community of passionate explorers.
          </p>
        </div>
      </section>

      {/* Spotlight Testimonial */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-100 via-green-100 to-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <div className="bg-white p-12 md:p-16 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden animate-fade-in-up">
            {/* Decorative Corner */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-full opacity-50"></div>
            
            {/* Quote Icon */}
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full"></div>
              <Quote className="w-16 h-16 text-amber-500 fill-amber-500 relative" strokeWidth={1} />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {renderStars(spotlight.rating)}
            </div>

            {/* Quote */}
            <p className="font-serif text-2xl md:text-4xl font-medium text-stone-800 leading-relaxed mb-8 relative">
              {spotlight.quote}
            </p>

            {/* Author */}
            <div className="flex flex-col items-center">
              <h4 className="font-serif text-2xl font-semibold text-emerald-900 mb-2">{spotlight.name}</h4>
              <p className="font-sans text-stone-600 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                {spotlight.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Testimonials */}
      <section className="py-24 bg-gradient-to-r from-white via-green-100 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700 tracking-wider uppercase">
                More Adventures
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent mb-4">
              More From Our Travelers
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {otherTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className="bg-stone-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col animate-fade-in-scale group relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Decorative Corner */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200 to-emerald-200 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl"></div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <p className="font-sans text-base text-stone-700 leading-relaxed mb-6 flex-grow italic relative">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center mt-auto pt-6 border-t border-stone-200">
                  <div className="relative group/avatar">
                    <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 flex-shrink-0 relative z-10 border-2 border-white shadow-md group-hover/avatar:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="font-sans text-sm text-stone-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler Photos Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-100 via-green-100 to-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 right-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-6">
              <Camera className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700 tracking-wider uppercase">
                Captured Moments
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent mb-4">
              From Our Travelers' Cameras
            </h2>
            <p className="font-sans text-lg text-stone-700 max-w-2xl mx-auto">
              Moments of discovery and joy captured by those who've journeyed with us.
            </p>
          </div>
          
          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {travelerPhotos.map((photo, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-scale"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  gridColumn: index === 0 ? 'span 2' : 'span 1',
                  gridRow: index === 0 ? 'span 2' : 'span 1',
                  height: index === 0 ? '400px' : '200px'
                }}
                onMouseEnter={() => setHoveredPhoto(index)}
                onMouseLeave={() => setHoveredPhoto(null)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-white">
                    <Camera className="w-5 h-5" />
                    <p className="font-sans font-semibold">{photo.caption}</p>
                  </div>
                </div>

                {/* Love Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white fill-white animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
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
              Ready to Write Your Own Story?
            </h2>
            <p className="font-sans text-lg md:text-xl text-stone-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              Let us help you craft an adventure that's worth sharing. Get in touch to start planning today.
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-900 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              <span className="relative z-10">Start My Journey</span>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0); }
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
        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
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