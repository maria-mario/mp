// components/sections/ExperiencesPreviews.tsx
'use client';

import Link from 'next/link';
import { Leaf, PawPrint, Brain, Sunrise, ChefHat, Mountain, ArrowRight } from 'lucide-react';

// Mock experiences data
const experiences = [
  {
    id: 1,
    title: 'Plant Medicine Journeys',
    description: 'Sacred plant medicine ceremonies for deep healing and leadership transformation',
    icon: Leaf,
    slug: 'plant-medicine-journeys',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 2,
    title: 'Equine-Assisted Leadership',
    description: 'Work with horses to develop presence, emotional intelligence, and authentic leadership',
    icon: PawPrint,
    slug: 'equine-assisted-leadership',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 3,
    title: 'Shadow Work Deep Dive',
    description: 'Explore unconscious patterns and blind spots that limit your effectiveness',
    icon: Brain,
    slug: 'shadow-work',
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 4,
    title: 'Praying Shadow Practice',
    description: 'Ancient contemplative practices combined with modern shadow work',
    icon: Sunrise,
    slug: 'praying-shadow',
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 5,
    title: 'Baking & Creative Expression',
    description: 'Use culinary arts as a metaphor for leadership and transformation',
    icon: ChefHat,
    slug: 'baking-retreats',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 6,
    title: 'Outdoor Leadership Excursions',
    description: 'Nature-based experiences that challenge and develop leadership presence',
    icon: Mountain,
    slug: 'outdoor-leadership',
    color: 'from-blue-500 to-cyan-600',
  },
];

export function ExperiencesPreviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            Transformational Experiences
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Curated Retreat Experiences
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Each experience is carefully designed to create breakthrough moments for leaders. 
            Include any combination in your custom forum retreat.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiences.map((experience) => (
            <Link
              key={experience.id}
              href={`/experiences/${experience.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-50 to-white border border-dark-100 hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              {/* Content */}
              <div className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <experience.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {experience.title}
                </h3>

                {/* Description */}
                <p className="text-dark-600 leading-relaxed mb-4">
                  {experience.description}
                </p>

                {/* Learn More */}
                <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-dark-600 mb-6">
            All experiences are available exclusively as part of custom forum retreats
          </p>
          <Link
            href="/experiences"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-dark-900 hover:bg-dark-800 text-white rounded-lg font-semibold transition-all hover:scale-105"
          >
            <span>View All Experiences</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}