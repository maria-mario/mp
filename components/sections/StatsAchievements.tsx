// components/sections/StatsAchievements.tsx
'use client';

import { useEffect, useState } from 'react';
import { Users, Award, Calendar, TrendingUp } from 'lucide-react';

export function StatsAchievements() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Leaders Transformed',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      value: '20+',
      label: 'Years of Experience',
      color: 'from-primary-500 to-blue-500',
    },
    {
      icon: Calendar,
      value: '100+',
      label: 'Forum Retreats Facilitated',
      color: 'from-violet-500 to-primary-500',
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Client Satisfaction Rate',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="stats-section" className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-white rounded-2xl shadow-lg border border-dark-100 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <div className={`w-full h-full bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Value */}
              <div className="font-serif text-5xl font-bold text-dark-900 mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-dark-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}