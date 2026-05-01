'use client';

import { useEffect, useState } from 'react';
import { Users, Award, Calendar, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users,      value: '500+', label: 'Leaders Transformed',       iconColor: 'var(--color-brand-blue)' },
  { icon: Award,      value: '20+',  label: 'Years of Experience',        iconColor: 'var(--color-brand-sienna)' },
  { icon: Calendar,   value: '100+', label: 'Forum Retreats Facilitated', iconColor: 'var(--color-brand-blue)' },
  { icon: TrendingUp, value: '95%',  label: 'Client Satisfaction Rate',   iconColor: 'var(--color-brand-sienna)' },
];

export function StatsAchievements() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById('stats-section');
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="stats-section"
      className="section"
      style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-brand-warm-gray)' }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center rounded-2xl transition-all duration-700"
              style={{
                padding: '2rem 1.5rem',
                backgroundColor: 'var(--color-brand-off-white)',
                border: '1px solid var(--color-brand-warm-gray)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(1.5rem)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{
                  backgroundColor: i % 2 === 0 ? 'rgba(61,141,174,0.1)' : 'rgba(192,82,42,0.1)',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(61,141,174,0.2)' : 'rgba(192,82,42,0.2)'}`,
                }}
              >
                <stat.icon className="w-7 h-7" style={{ color: stat.iconColor }} />
              </div>

              {/* Value */}
              <div style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: 'var(--color-brand-text)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
              }}>
                {stat.value}
              </div>

              {/* Label */}
              <div style={{
                fontSize: 'var(--text-small)',
                color: 'var(--color-brand-text-muted)',
                fontWeight: 500,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}