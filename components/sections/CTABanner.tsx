// components/sections/CTABanner.tsx
'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-dark-900 via-primary-950 to-dark-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
          Your Time is <span className="text-primary-400 italic">Now</span>
        </h2>

        <p className="text-xl md:text-2xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you're ready to transform your forum, elevate your leadership, 
          or explore what's possible—the journey begins with a conversation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-premium flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Discovery Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/forum-retreats"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            Plan Your Retreat
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-12 text-dark-400 text-sm">
          Trusted by EO and YPO forums worldwide • 20+ years of transformation • 500+ leaders empowered
        </p>
      </div>
    </section>
  );
}