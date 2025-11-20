'use client';

import React, { useEffect, useState } from 'react';
import {
  Clock,
  X,
  ArrowRight,
  Star,
  Check,
  Hotel,
  Info,
  MapPin,
  Shirt,
  ChevronDown,
  Calendar,
  DollarSign,
  Sparkles, // Kept as a fallback icon
} from 'lucide-react';
// Import Package, categories, and Category from your data file
import { Package, categories, Category } from './data';

interface PackageModalProps {
  pkg: Package;
  onClose: () => void;
}

export default function PackageModal({ pkg, onClose }: PackageModalProps) {
  const [openDay, setOpenDay] = useState<number | string | null>(
    pkg.itinerary.length > 0 ? pkg.itinerary[0].day : null,
  );
  const [scrolled, setScrolled] = useState(false);

  // --- NEW LOGIC: Find matching category ---
  // Find the category object from the categories array
  const category = categories.find((c) => c.name === pkg.category);
  // Set the icon, falling back to Sparkles if no match (e.g., for "Cultural & Nature Tour")
  const Icon = category ? category.icon : Sparkles;
  // Set the color, falling back to a default orange if no match
  const color = category ? category.color : '#ea580c';
  // --- END NEW LOGIC ---

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const modalContent = document.getElementById('modal-content');
    modalContent?.addEventListener('scroll', handleScroll);
    return () => modalContent?.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDayClick = (day: number | string) => {
    setOpenDay((prev) => (prev === day ? null : day));
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Close Button - Fixed */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className={`fixed top-4 right-4 z-[60] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-2xl scale-100'
            : 'bg-white/90 backdrop-blur-sm shadow-lg scale-100'
        } hover:scale-110 hover:rotate-90 active:scale-95`}
      >
        <X size={20} className="text-stone-800" strokeWidth={2.5} />
      </button>

      {/* Modal Container */}
      <div
        id="modal-content"
        className="relative bg-white w-full max-w-4xl h-[100dvh] sm:h-[90vh] sm:max-h-[900px] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-y-auto overflow-x-hidden animate-slide-up sm:animate-scale-in scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-transparent"
      >
        {/* Hero Section */}
        <div className="relative h-[45vh] sm:h-[40vh] min-h-[280px] max-h-[450px] overflow-hidden">
          {/* Parallax Image */}
          <div className="absolute inset-0">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            {/* --- MODIFIED CATEGORY BADGE --- */}
            <div
              className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full mb-4 w-fit shadow-lg"
              // Use the dynamic color from the category object
              style={{ backgroundColor: color }}
            >
              {/* Use the dynamic Icon from the category object */}
              <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
              <span className="text-sm font-bold text-white tracking-wide">
                {pkg.category}
              </span>
            </div>
            {/* --- END MODIFIED BADGE --- */}

            {/* Title */}
            <h2
              id="modal-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl leading-tight mb-2"
            >
              {pkg.title}
            </h2>

            {/* Quick Info Pills */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  {pkg.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/90 backdrop-blur-md px-4 py-2 rounded-full">
                <DollarSign className="w-4 h-4 text-white" strokeWidth={2.5} />
                <span className="text-sm font-bold text-white">{pkg.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-gradient-to-b from-white to-stone-50">
          {/* Highlights - Floating Cards */}
          {pkg.highlights && pkg.highlights.length > 0 && (
            <div className="px-6 sm:px-8 mt-6 relative z-10">
              <div className="bg-white rounded-2xl shadow-xl p-5 border border-stone-100">
                <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  Highlights
                </h3>
                <div className="flex flex-wrap gap-2">
                  {pkg.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 bg-gradient-to-br from-emerald-50 to-teal-50 px-3 py-1.5 rounded-lg border border-emerald-200/50 transition-transform hover:scale-105"
                    >
                      <Check
                        className="w-3.5 h-3.5 text-emerald-600"
                        strokeWidth={3}
                      />
                      <span className="text-xs font-semibold text-emerald-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="px-6 sm:px-8 py-8 space-y-8">
            {/* Description */}
            <section>
              <h3 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                About This Trip
              </h3>
              <p className="text-base text-stone-600 leading-relaxed">
                {pkg.description}
              </p>
            </section>

            {/* Inclusions & Exclusions */}
            {(pkg.inclusions || pkg.exclusions) && (
              <section>
                <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                  What to Expect
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.inclusions && pkg.inclusions.length > 0 && (
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 p-5 rounded-2xl">
                      <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                        <Check className="w-5 h-5" strokeWidth={2.5} />
                        Included
                      </h4>
                      <ul className="space-y-2">
                        {pkg.inclusions.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Check
                              className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"
                              strokeWidth={2.5}
                            />
                            <span className="text-emerald-900">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {pkg.exclusions && pkg.exclusions.length > 0 && (
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 p-5 rounded-2xl">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                        <X className="w-5 h-5" strokeWidth={2.5} />
                        Not Included
                      </h4>
                      <ul className="space-y-2">
                        {pkg.exclusions.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <X
                              className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5"
                              strokeWidth={2.5}
                            />
                            <span className="text-red-900">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Itinerary */}
            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                Day by Day
              </h2>
              <div className="space-y-3">
                {pkg.itinerary.map((item, index) => {
                  const isOpen = openDay === item.day;
                  return (
                    <div
                      key={index}
                      className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? 'border-emerald-300 shadow-lg shadow-emerald-100'
                          : 'border-stone-200 shadow-sm hover:border-stone-300'
                      }`}
                    >
                      {/* Header */}
                      <button
                        onClick={() => handleDayClick(item.day)}
                        className={`w-full flex items-center justify-between p-4 text-left transition-all duration-300 ${
                          isOpen
                            ? 'bg-gradient-to-r from-emerald-50 to-teal-50'
                            : 'bg-white hover:bg-stone-50'
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span className="inline-flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex-shrink-0">
                            Day {item.day}
                          </span>
                          <span className="font-semibold text-stone-800 text-sm sm:text-base">
                            {item.title}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                            isOpen
                              ? 'rotate-180 text-emerald-600'
                              : 'text-stone-400'
                          }`}
                          strokeWidth={2.5}
                        />
                      </button>

                      {/* Content */}
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen
                            ? 'max-h-[3000px] opacity-100' // Increased max-h
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-5 bg-white space-y-4">
                          {/* Activities */}
                          <div>
                            <ul className="space-y-2">
                              {item.plan.map((activity, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-stone-700"
                                >
                                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Accommodation */}
                          {item.accommodation && (
                            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 p-3 rounded-xl">
                              <Hotel className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                              <p className="text-sm font-medium text-amber-900">
                                {item.accommodation}
                              </p>
                            </div>
                          )}

                          {/* Main Sight */}
                          {item.main_sight_description && (
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-4 rounded-xl">
                              <div className="flex items-center gap-2 mb-2">
                                <Info className="w-5 h-5 text-blue-700" />
                                <h5 className="font-bold text-blue-800 text-sm">
                                  {item.main_sight_description.title}
                                </h5>
                              </div>
                              <div className="text-sm text-blue-900 leading-relaxed space-y-2">
                                {item.main_sight_description.text
                                  .split('\n')
                                  .map(
                                    (paragraph, pIdx) =>
                                      paragraph.trim() && (
                                        <p key={pIdx}>{paragraph.trim()}</p>
                                      ),
                                  )}
                              </div>
                            </div>
                          )}

                          {/* Details */}
                          {item.details &&
                            (item.details.driving_times?.length ||
                              item.details.excursion_durations?.length ||
                              item.details.dress_code) && (
                              <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-3">
                                {item.details.driving_times &&
                                  item.details.driving_times.length > 0 && (
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-stone-500 flex-shrink-0" />
                                        <strong className="text-stone-700 text-sm">
                                          Driving Times:
                                        </strong>
                                      </div>
                                      <ul className="space-y-1 ml-6">
                                        {item.details.driving_times.map(
                                          (time, tIdx) => (
                                            <li
                                              key={tIdx}
                                              className="text-xs text-stone-600 flex items-start gap-2"
                                            >
                                              <span className="w-1 h-1 bg-stone-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                              <span>{time}</span>
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    </div>
                                  )}
                                {item.details.excursion_durations &&
                                  item.details.excursion_durations.length >
                                    0 && (
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-stone-500 flex-shrink-0" />
                                        <strong className="text-stone-700 text-sm">
                                          Durations:
                                        </strong>
                                      </div>
                                      <ul className="space-y-1 ml-6">
                                        {item.details.excursion_durations.map(
                                          (dur, dIdx) => (
                                            <li
                                              key={dIdx}
                                              className="text-xs text-stone-600 flex items-start gap-2"
                                            >
                                              <span className="w-1 h-1 bg-stone-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                              <span>{dur}</span>
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    </div>
                                  )}
                                {item.details.dress_code && (
                                  <div className="flex items-start gap-2">
                                    <Shirt className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                                    <div className="text-xs">
                                      <strong className="text-stone-700">
                                        Dress Code:
                                      </strong>
                                      <span className="text-stone-600">
                                        {' '}
                                        {item.details.dress_code}
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* CTA Footer */}
          <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent px-6 sm:px-8 py-6 border-t border-stone-200">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/94772965729?text=Hello%2C%20I%27d%20like%20to%20book%20this%20package.%20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative inline-flex items-center justify-center bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <span className="relative z-10 text-base">Book on WhatsApp</span>
                <ArrowRight
                  className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2.5}
                />
              </a>
              <button
                onClick={onClose}
                className="px-6 py-4 bg-stone-100 text-stone-700 font-semibold rounded-xl hover:bg-stone-200 transition-all duration-300 active:scale-95 text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #d6d3d1;
          border-radius: 3px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #a8a29e;
        }
      `}</style>
    </div>
  );
}