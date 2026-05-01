// components/sections/AboutMark.tsx
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutMark() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-dark-100 to-dark-50 overflow-hidden shadow-premium">
              {/* Placeholder for Dr. Mark's photo */}
              <div className="w-full h-full flex items-center justify-center text-dark-400">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-premium rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">MP</span>
                  </div>
                  <p className="text-sm">Photo placeholder</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl" />
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
              About Dr. Mark
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Guiding Leaders to<br />
              <span className="text-primary-600 italic">Sustainable Transformation</span>
            </h2>

            <div className="space-y-4 text-lg text-dark-700 leading-relaxed mb-8">
              <p>
                Dr. Mark Pirtle has dedicated over 20 years to helping executives and entrepreneurs 
                unlock their full leadership potential through the SkillfullyAware® methodology.
              </p>

              <p>
                Drawing from neuroscience, contemplative practices, and decades of direct experience, 
                Mark works with EO and YPO forums worldwide to create transformational retreat 
                experiences that create lasting change.
              </p>

              <p>
                His unique approach combines shadow work, mindfulness training, and systemic thinking 
                to help leaders identify energy leaks, break unconscious patterns, and develop the 
                emotional agility needed for conscious leadership.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all hover:scale-105"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white border-2 border-dark-900 hover:bg-dark-900 text-dark-900 hover:text-white rounded-lg font-semibold transition-all"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}