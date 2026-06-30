import Link from 'next/link';
import { BarChart2, Compass, User } from 'lucide-react';

const cards = [
  {
    icon: BarChart2,
    title: 'SAAQ for Leaders',
    body: 'A deeper developmental map of how you lead, relate, decide, protect, and grow.',
    cta: 'Explore SAAQ for Leaders',
    href: '/saaq',
  },
  {
    icon: Compass,
    title: 'Forum Retreats',
    body: 'Guided retreat experiences for EO/YPO forums and leadership groups.',
    cta: 'Explore Forum Retreats',
    href: '/retreats',
  },
  {
    icon: User,
    title: 'Executive Coaching',
    body: 'One-on-one support for leaders working through pressure, transition, conflict, or growth.',
    cta: 'Explore Coaching',
    href: '/coaching',
  },
];

export function LeaderPathway() {
  return (
    <section style={{
      backgroundColor: '#000000',
      padding: '5rem 1.5rem',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-brand-sienna-light)',
            marginBottom: '1rem',
          }}>
            For Leaders
          </p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '1.25rem',
            lineHeight: 1.1,
            maxWidth: '22ch',
          }}>
            For leaders, founders, forums, and teams.
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.75,
            maxWidth: '52ch',
          }}>
            The same painful patterns that shape personal life also show up in business and leadership — in decision-making, conflict, trust, avoidance, and the private pressure many high-performing leaders carry alone.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {cards.map((card) => (
            <div key={card.title} style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '0.625rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.625rem',
                backgroundColor: 'rgba(192,82,42,0.15)',
                border: '1px solid rgba(192,82,42,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <card.icon className="w-5 h-5" style={{ color: 'var(--color-brand-sienna-light)' }} />
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#ffffff',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: 'var(--text-small)',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.65,
                flex: 1,
              }}>
                {card.body}
              </p>
              <Link href={card.href} style={{
                fontSize: 'var(--text-small)',
                fontWeight: 700,
                color: 'var(--color-brand-sienna-light)',
                textDecoration: 'none',
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