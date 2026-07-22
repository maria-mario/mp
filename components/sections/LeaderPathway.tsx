import Link from 'next/link';
import { BarChart2, Compass, User } from 'lucide-react';

const cards = [
  {
    icon: BarChart2,
    title: 'SAAQ for Leaders',
    body: 'A private developmental reflection on how you lead, relate, decide, protect, and grow under pressure.',
    cta: 'Explore the SAAQ',
    href: '/saaq',
  },
  {
    icon: Compass,
    title: 'Forum Retreats',
    body: 'Guided experiences for EO/YPO forums and leadership groups ready for honest, skillful, well-held development.',
    cta: 'Explore Forum Retreats',
    href: '/retreats',
  },
  {
    icon: User,
    title: 'Executive Coaching',
    body: 'One-on-one support for leaders navigating pressure, transition, conflict, decision-making, identity, or growth.',
    cta: 'Explore Coaching',
    href: '/coaching',
  },
];

export function LeaderPathway() {
  return (
    <section id="leader-path" style={{
      backgroundColor: '#ffffff',
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
            marginBottom: '1rem',
          }}>
            For Leaders
          </p>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--color-brand-text)',
            marginBottom: '1.25rem',
            lineHeight: 1.15,
            maxWidth: '22ch',
          }}>
            For leaders, founders, forums, and teams
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-brand-text-muted)',
            lineHeight: 1.75,
            maxWidth: '52ch',
            marginBottom: '1rem',
          }}>
            The same patterns that shape personal life also show up in leadership — in decision-making, conflict, trust, avoidance, over-control, burnout, and the private pressure many high-performing people carry alone.
          </p>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-brand-text-muted)',
            lineHeight: 1.75,
            maxWidth: '52ch',
          }}>
            SkillfullyAware® experiences help leaders and groups build clearer self-awareness, stronger trust, more honest conversations, and practical growth.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {cards.map((card) => (
            <div key={card.title} style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-brand-border)',
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
                backgroundColor: 'rgba(192,82,42,0.08)',
                border: '1px solid rgba(192,82,42,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <card.icon className="w-5 h-5" style={{ color: 'var(--color-brand-sienna)' }} />
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--color-brand-text)',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: 'var(--text-small)',
                color: 'var(--color-brand-text-muted)',
                lineHeight: 1.65,
                flex: 1,
              }}>
                {card.body}
              </p>
              <Link href={card.href} style={{
                fontSize: 'var(--text-small)',
                fontWeight: 700,
                color: 'var(--color-brand-sienna)',
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