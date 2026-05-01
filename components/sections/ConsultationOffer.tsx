// components/sections/ConsultationOffer.tsx
'use client';

import Link from 'next/link';
import { Calendar, Users, TrendingUp, Award } from 'lucide-react';

export function ConsultationOffer() {
  const features = [
    {
      icon: Calendar,
      title: 'SA360 Framework',
      description: 'Comprehensive assessment of your leadership power centers and aptitudes',
    },
    {
      icon: Users,
      title: 'One-on-One Coaching',
      description: 'Personalized sessions tailored to your unique challenges and goals',
    },
    {
      icon: TrendingUp,
      title: 'Systemic Approach',
      description: 'Address root causes, not just symptoms, for lasting transformation',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Leaders gain steadier emotions, clearer vision, and greater influence',
    },
  ];

  return (
    <section className="py-24 bg-dark-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary-600/20 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium mb-6">
              Executive Coaching
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              With the Right Guidance,<br />
              <span className="text-primary-400 italic">Anything is Possible</span>
            </h2>

            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              If you're ready to map your inner operating system and upgrade the habits that run it, 
              SkillfullyAware-Awareness Quotient (SA360) coaching is the next step.
            </p>

            <p className="text-dark-400 leading-relaxed mb-8">
              Through the SA360 framework we'll assess your seven Power Centers and six Leadership 
              Aptitudes, pinpoint where your energy leaks, and build a tailored practice plan to plug 
              them. Leaders who commit to this process gain systemic vision, steadier emotions, and 
              greater influence—benefits that compound into career growth, stronger relationships, 
              and lasting well-being.
            </p>

            <Link
              href="/consultation"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-premium"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Free Discovery Call</span>
            </Link>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl hover:border-primary-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-dark-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}