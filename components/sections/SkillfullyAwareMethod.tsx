// components/sections/SkillfullyAwareMethod.tsx
'use client';

import Link from 'next/link';
import { Eye, Lightbulb, Shield, TrendingUp, Target } from 'lucide-react';

export function SkillfullyAwareMethod() {
  const pillars = [
    {
      icon: Eye,
      title: 'Presence',
      description: 'Waking up to the moment. The foundation of awareness, enabling you to fully engage with your life, relationships, and decisions.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Clarity',
      description: 'Seeing through the noise. Cut through mental clutter and limiting beliefs to gain insight into yourself, others, and your world.',
      color: 'from-primary-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Resilience',
      description: 'Building emotional strength. Navigate life\'s challenges with balance and equanimity, facing discomfort with grace.',
      color: 'from-violet-500 to-primary-500',
    },
    {
      icon: TrendingUp,
      title: 'Development',
      description: 'Evolving consciously. Continuously acquire healthier perspectives and integrate awareness into all areas of your life.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Target,
      title: 'Alignment',
      description: 'Bringing it all together. Where inner work creates a life lived in harmony with your purpose, values, and intentions.',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <section className="py-24 bg-dark-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-600/20 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium mb-6">
            The System
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            <span className="italic text-primary-400">SkillfullyAware®</span>
            <br />
            <span className="text-white">A Practical System for Meaningful Change</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Grounded in neuroscience, the SkillfullyAware® methodology maps how your World, Body, 
            and Mind shape one another—and trains three core capacities to change the system, 
            not just the surface signals.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-8 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <pillar.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-dark-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="group p-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin?</h3>
            <p className="text-primary-100 mb-6">
              Discover how the SkillfullyAware® framework can transform your leadership.
            </p>
            <Link
              href="/consultation"
              className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-dark-50 transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}