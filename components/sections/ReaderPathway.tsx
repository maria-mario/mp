import Link from 'next/link';
import { BookOpen, Zap, BarChart2, Users, Lightbulb } from 'lucide-react';

const cards = [
  {
    icon: BookOpen,
    problem: 'Built This Way',
    solution: 'Understand why painful patterns repeat.',
    cta: 'Start with the Book',
    href: '/built-this-way',
  },
  {
    icon: Lightbulb,
    problem: 'Why Did I React That Way?',
    solution: 'Look at one real reaction from your own life.',
    cta: 'Try the Reader Tool',
    href: '/reader-tool',
  },
  {
    icon: Zap,
    problem: 'Power Tools',
    solution: 'Practice with classes, workbooks, and guided meditations.',
    cta: 'Explore Power Tools',
    href: '/power-tools',
  },
  {
    icon: BarChart2,
    problem: 'SkillfullyAware Awareness Quotient (SAAQ)',
    solution: 'Get a deeper developmental reflection on how you lead, relate, decide, and react under pressure.',
    cta: 'Explore the SAAQ',
    href: '/saaq',
  },
  {
    icon: Users,
    problem: 'Retreats & Leadership',
    solution: 'Bring SkillfullyAware® into coaching, forums, retreats, and leadership development.',
    cta: 'Explore Leadership Work',
    href: '/retreats',
  },
];

export function ReaderPathway() {
  return (
    <section id="reader-path" style={{
      backgroundColor: 'var(--color-brand-cream)',
      padding: '5rem 0',
    }}>
      <div className="container">

        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-brand-sienna)',
            marginBottom: '0.75rem',
          }}>
            Explore the Ecosystem
          </p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--color-brand-text)',
            marginBottom: '0.75rem',
          }}>
            Explore the Ecosystem
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-brand-text-muted)',
          }}>
            Once you know your starting point, these are the main ways to continue the work.
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