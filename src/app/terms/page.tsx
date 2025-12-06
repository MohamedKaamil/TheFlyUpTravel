'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Scale, 
  FileCheck, 
  CreditCard, 
  Plane, 
  AlertTriangle, 
  CalendarX, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  HeartPulse,
  Map,
  Users,
  Gavel,
  MessageSquare
} from 'lucide-react';

export default function TermsOfService() {
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
            src="/images/Terms-of-Service.webp" 
            alt="Sri Lankan mountain landscape"
            className="w-full h-full object-cover animate-slow-zoom"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1546708773-e57c17aa0683?q=80&w=2670&auto=format&fit=crop";
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
            <Scale className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400 tracking-wider uppercase">
              Legal Agreement
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-2xl bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="font-sans text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg text-stone-200">
            The rules of the road for your journey with The FlyUp Travel Company.
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
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700 tracking-wider uppercase">
                Key Points
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent mb-4">
              Things You Should Know
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Bookings */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale" style={{animationDelay: '0.1s'}}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CreditCard className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-800 mb-3 text-center">Payments</h3>
                <p className="text-sm text-stone-600 text-center">
                  A deposit is required to secure your booking. Final payment deadlines vary by package and season.
                </p>
              </div>
            </div>

            {/* Card 2: Cancellations */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CalendarX className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-800 mb-3 text-center">Cancellations</h3>
                <p className="text-sm text-stone-600 text-center">
                  We understand plans change. Refund eligibility depends on how far in advance you cancel your trip.
                </p>
              </div>
            </div>

            {/* Card 3: Documents */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Plane className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-800 mb-3 text-center">Documents</h3>
                <p className="text-sm text-stone-600 text-center">
                  Passports must be valid for 6 months. Visas are the responsibility of the traveler.
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
            
            {/* 1. Agreement */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">
                <span className="text-emerald-600">01.</span> Agreement to Terms
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Welcome to <strong>The FlyUp Travel Company</strong>. By accessing our website, speaking with our agents, or booking a trip with us, you agree to be bound by these Terms of Service. Please read them carefully before confirming your adventure.
              </p>
            </div>

            {/* 2. Bookings & Payments */}
            <div className="mb-12 bg-stone-50 p-8 rounded-2xl border border-stone-100">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-6">
                <span className="text-amber-500">02.</span> Booking & Payments
              </h3>
              <p className="text-stone-600 mb-4">To secure your dream vacation, the following payment structures apply:</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-stone-600 text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span><strong>Deposit:</strong> A non-refundable deposit is required at the time of booking to secure flights and accommodation.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span><strong>Final Payment:</strong> Full payment is due 30 days prior to departure. For holiday seasons, this may be 60 days.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span><strong>Late Payments:</strong> Failure to pay by the deadline may result in the cancellation of your booking and forfeiture of your deposit.</span>
                </li>
              </ul>
            </div>

            {/* 3. Cancellations */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">
                <span className="text-emerald-600">03.</span> Cancellations & Refunds
              </h3>
              <p className="text-stone-600 mb-4">If you need to cancel your trip, you must notify us in writing. Refund amounts are calculated based on the date we receive your notice:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-stone-200 p-4 rounded-xl">
                    <strong className="block text-stone-800 mb-1">60+ Days Before</strong>
                    <span className="text-stone-600 text-sm">Full refund minus the non-refundable deposit and administrative fees.</span>
                </div>
                <div className="bg-white border border-stone-200 p-4 rounded-xl">
                    <strong className="block text-stone-800 mb-1">30-59 Days Before</strong>
                    <span className="text-stone-600 text-sm">50% refund of the total trip cost.</span>
                </div>
                <div className="bg-white border border-stone-200 p-4 rounded-xl">
                    <strong className="block text-stone-800 mb-1">0-29 Days Before</strong>
                    <span className="text-stone-600 text-sm">No refund is available (100% cancellation fee).</span>
                </div>
                <div className="bg-white border border-stone-200 p-4 rounded-xl border-l-4 border-l-amber-500">
                    <strong className="block text-stone-800 mb-1">Travel Insurance</strong>
                    <span className="text-stone-600 text-sm">We strongly recommend purchasing travel insurance to cover unexpected cancellations.</span>
                </div>
              </div>
            </div>

            {/* 4. Documents */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">
                <span className="text-emerald-600">04.</span> Passports & Visas
              </h3>
              <p className="text-stone-600 mb-4">
                It is the traveler's responsibility to ensure they have the correct documents for entry into Sri Lanka or other destinations.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-stone-600 marker:text-amber-500">
                <li><strong>Validity:</strong> Passports must be valid for at least 6 months beyond your return date.</li>
                <li><strong>Visas:</strong> You must obtain all necessary visas before travel. We can assist with advice, but the final responsibility lies with you.</li>
                <li><strong>Names:</strong> Booking names must match your passport exactly. Name change fees from airlines are the traveler's responsibility.</li>
              </ul>
            </div>

            {/* 5. Health & Fitness (NEW) */}
            <div className="mb-12 bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-6">
                <HeartPulse className="w-6 h-6 text-amber-500" /> 05. Health & Fitness
              </h3>
              <p className="text-stone-600 mb-4">
                Some of our tours in Sri Lanka involve physical activities such as hiking (e.g., Sigiriya Rock, Ella Rock) or walking in tropical heat.
              </p>
              <ul className="space-y-3">
                 <li className="flex gap-3 text-stone-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                  <span><strong>Disclosure:</strong> You must disclose any medical conditions or dietary restrictions at the time of booking so we can make necessary arrangements.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                  <span><strong>Vaccinations:</strong> It is your responsibility to check with your doctor regarding recommended vaccinations for travel to Sri Lanka.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                  <span><strong>Pregnancy:</strong> Pregnant travelers should consult a doctor before booking. Some excursions may not be suitable.</span>
                </li>
              </ul>
            </div>

            {/* 6. Itinerary Changes (NEW) */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">
                <span className="text-emerald-600">06.</span> Itinerary Changes
              </h3>
              <p className="text-stone-600 mb-4">
                While we strive to adhere to the booked itinerary, travel in Sri Lanka can be unpredictable due to weather, road conditions, or local events.
              </p>
              <div className="bg-stone-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-stone-700 italic text-sm">
                  "The FlyUp Travel Company reserves the right to modify the itinerary for the safety and comfort of our guests. In the event of such changes, we will provide a comparable alternative where possible."
                </p>
              </div>
            </div>

            {/* 7. Conduct (NEW) */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">
                <span className="text-emerald-600">07.</span> Traveler Conduct
              </h3>
              <p className="text-stone-600 mb-4">
                We are guests in the communities we visit. We expect all travelers to:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                 <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-amber-500 mt-1" />
                    <span className="text-sm text-stone-600">Respect local laws, customs, and culture, especially when visiting religious sites (modest dress required).</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-amber-500 mt-1" />
                    <span className="text-sm text-stone-600">Treat fellow travelers, guides, and drivers with courtesy and respect.</span>
                 </li>
              </ul>
              <p className="text-stone-600 text-sm mt-4">
                *We reserve the right to remove any traveler from a trip if their behavior endangers the group or disrupts the experience, with no refund given.*
              </p>
            </div>

             {/* 8. Complaints (NEW) */}
             <div className="mb-12">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">
                <span className="text-emerald-600">08.</span> Complaints
              </h3>
              <p className="text-stone-600 mb-4">
                If you have an issue during your trip, please inform your guide or driver <strong>immediately</strong> so we can attempt to rectify the situation on the spot.
              </p>
              <div className="flex items-center gap-3 bg-blue-50 text-blue-800 p-4 rounded-xl text-sm">
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Complaints submitted after the trip has ended may not be eligible for compensation if we were not given the opportunity to fix the issue during the tour.</span>
              </div>
            </div>

            {/* 9. Liability (Existing) */}
            <div className="mb-12 bg-red-50/50 p-8 rounded-2xl border border-red-100">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" /> 09. Liability & Disclaimer
              </h3>
              <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                The FlyUp Travel Company acts as an agent for airlines, hotels, and tour operators. We are not responsible for:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-stone-700 font-medium text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                    Flight delays or cancellations
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                    Lost or damaged luggage
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                    Force Majeure (Weather, Strikes)
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                    Personal injury or accident
                </div>
              </div>
            </div>

             {/* 10. Governing Law (NEW) */}
             <div className="mb-12">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">
                <span className="text-emerald-600">10.</span> Governing Law
              </h3>
              <div className="flex items-start gap-4">
                 <Gavel className="w-6 h-6 text-stone-400 mt-1" />
                 <p className="text-stone-600 text-sm leading-relaxed">
                   These Terms and Conditions are governed by the laws of <strong>Sri Lanka</strong>. Any disputes arising from your booking will be subject to the exclusive jurisdiction of the courts of Sri Lanka.
                 </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. Contact Footer (Dark Emerald Theme - Mobile Responsive) --- */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-900 to-stone-900 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-float"></div>
           <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-500 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Main Grid: Stack on Mobile (cols-1), Two Cols on Desktop (md:cols-2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
             
             {/* Text Content */}
             <div className="text-center md:text-left animate-fade-in-left">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
                  Need Clarification?
                </h2>
                <p className="font-sans text-stone-300 text-lg mb-8 leading-relaxed">
                  If you have questions about our booking conditions, payment methods, or cancellation policies, our agents are here to help.
                </p>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-900 font-bold py-3 px-8 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/50 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                  </span>
                </Link>
             </div>

             {/* Contact Details Card */}
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 animate-fade-in-right">
                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-white mb-1">Email Us</h4>
                      <p className="text-stone-300 text-sm break-all">theflyuptraveltours@outlook.com</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Call Us</h4>
                      <p className="text-stone-300 text-sm">+94 77 296 5729</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Visit Us</h4>
                      <p className="text-stone-300 text-sm">Dehiwala - Mount Lavinia, Colombo</p>
                    </div>
                  </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* --- Animations --- */}
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
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}