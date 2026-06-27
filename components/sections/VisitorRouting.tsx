import Link from 'next/link';
import { BookOpen, Zap, BarChart2, Users, Lightbulb } from 'lucide-react';

const cards = [
  {
    icon: BookOpen,
    problem: 'I keep repeating painful patterns.',
    solution: 'Start with Built This Way and learn why the pattern repeats.',
    cta: 'Start with the Book',
    href: '/built-this-way',
  },
  {
    icon: Lightbulb,
    problem: 'I want to understand one real reaction from my life.',
    solution: 'Use Why Did I React That Way? to examine one recent reaction and discover what may have been happening beneath the surface.',
    cta: 'Try the Reader Tool',
    href: '/reader-tool',
  },
  {
    icon: Zap,
    problem: 'I want practical exercises and meditations.',
    solution: 'Explore Power Tools for online classes, workbooks, and guided meditation programs.',
    cta: 'Explore Power Tools',
    href: '/power-tools',
  },
  {
    icon: BarChart2,
    problem: 'I want a deeper map of how I lead, relate, decide, and react.',
    solution: 'Take the SAAQ and receive a personalized developmental reflection on your patterns.',
    cta: 'Explore the SAAQ',
    href: '/saaq',
  },
  {
    icon: Users,
    problem: "I'm planning a forum, retreat, or leadership experience.",
    solution: 'Explore guided experiences for EO/YPO forums, founders, and leadership groups.',
    cta: 'Explore Retreats & Leadership',
    href: '/retreats',
  },
];

export function VisitorRouting() {
  return (
    <section id="start" style={{
      backgroundColor: 'var(--color-brand-cream)',
      padding: '5rem 1.5rem',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-brand-sienna)',
            marginBottom: '0.75rem',
          }}>
            Where to Begin
          </p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--color-brand-text)',
            marginBottom: '0.75rem',
          }}>
            Where should you begin?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-brand-text-muted)',
          }}>
            Start with the doorway that fits where you are right now.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {cards.map((card) => (
            <div key={card.cta} style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-brand-border)',
              borderRadius: '0.625rem',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.625rem',
                backgroundColor: 'rgba(192,82,42,0.08)',
                border: '1px solid rgba(192,82,42,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <card.icon className="w-5 h-5" style={{ color: 'var(--color-brand-sienna)' }} />
              </div>

              <p style={{
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--color-brand-text)',
                lineHeight: 1.4,
              }}>
                {card.problem}
              </p>

              <p style={{
                fontSize: 'var(--text-small)',
                color: 'var(--color-brand-text-muted)',
                lineHeight: 1.65,
                flex: 1,
              }}>
                {card.solution}
              </p>

              <Link href={card.href} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: 'var(--text-small)',
                fontWeight: 700,
                color: 'var(--color-brand-sienna)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}>
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}