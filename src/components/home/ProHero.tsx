"use client"; // <-- Add this line

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. List of 5 placeholder images ---
const backgroundImages = [
  {
    src: '/images/thumb-1920-545829.jpg',
    alt: 'Lush green tea plantations in the hills of Sri Lanka under fog',
  },
  {
    src: '/images/Sigiriya-Rock-Sri-Lanka.jpg',
    alt: 'Ancient Sigiriya rock fortress rising above the jungle',
  },
  {
    src: '/images/bence-biczo-odpWSKMwql4-unsplash.jpg',
    alt: 'Golden beach with palm trees at sunset in Sri Lanka',
  },
  {
    src: '/images/dalada maligawa.jpg',
    alt: 'The illuminated Temple of the Tooth in Kandy at night',
  },
  {
    src: '/images/zoshua-colah-O0YmMPG56KI-unsplash.jpg',
    alt: 'The white lighthouse at Galle Fort against a blue sky',
  },
];

// --- 2. Animation variants for the slide - SMOOTHER TRANSITION ---
const variants = {
  enter: {
    x: '100%', // Enters from the right
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: '-100%', // Exits to the left
    opacity: 0,
  },
};

export default function ProHero() {
  // --- 3. State to track the current image index ---
  const [imageIndex, setImageIndex] = useState(0);

  // --- 4. useEffect for automatic swiping ---
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={imageIndex} // Key tells AnimatePresence to animate when this changes
            className="absolute inset-0"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { 
                type: 'tween', 
                ease: 'easeInOut', 
                duration: 0.8 
              },
              opacity: { 
                duration: 0.8 
              },
            }}
          >
            <Image
              src={backgroundImages[imageIndex].src}
              alt={backgroundImages[imageIndex].alt}
              fill
              className="object-cover"
              priority={imageIndex === 0} // Prioritize only the first image for LCP
            />
            {/* Dark overlay for each individual image */}
            <div className="absolute inset-0 bg-black/60"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content (unchanged from your original code) */}
      <div className="relative z-10 p-4">
        <h1 className="font-serif text-5xl md:text-8xl font-bold mb-6 leading-tight drop-shadow-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent">
          A Journey of Wonder
        </h1>
        <p className="font-sans text-xl md:text-2xl mb-12 max-w-3xl mx-auto drop-shadow-2xl text-stone-100 leading-relaxed tracking-wide">
          Discover the soul of Sri Lanka. We craft bespoke journeys into the heart
          of the island's ancient history, vibrant culture, and wild, untamed
          nature.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/packages"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Explore Our Journeys
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-emerald-800 transition duration-300"
          >
            Plan Your Trip
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}