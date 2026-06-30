import Link from 'next/link';

export function ChooseYourPath() {
  return (
    <section id="start" style={{
      backgroundColor: 'var(--color-brand-cream)',
      padding: '5rem 1.5rem',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <p style={{
          fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--color-brand-rust)',
          marginBottom: '0.75rem',
        }}>
          One Ecosystem. Two Starting Points.
        </p>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
          fontWeight: 800, letterSpacing: '-0.02em',
          color: 'var(--color-brand-black)',
          marginBottom: '0.75rem',
        }}>
          Choose your starting point
        </h2>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--color-brand-text-muted)',
          marginBottom: '3rem',
        }}>
          SkillfullyAware® is one ecosystem with two common entry points.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>

          {/* Reader Card */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '2px solid var(--color-brand-rust)',
            borderRadius: '1.25rem',
            padding: '2.5rem',
          }}>
            <p style={{
              fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--color-brand-rust)',
              marginBottom: '0.75rem',
            }}>
              For Readers
            </p>
            <h3 style={{
              fontSize: '1.5rem', fontWeight: 800,
              color: 'var(--color-brand-black)',
              marginBottom: '0.5rem',
            }}>
              Understand why the pattern repeats.
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--color-brand-text-muted)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}>
              If you keep repeating painful patterns, reacting before you can think, or getting in your own way despite your best intentions — start here.
            </p>
            <p style={{
              fontSize: '0.8rem', fontWeight: 700,
              color: 'var(--color-brand-rust)',
              marginBottom: '1.5rem',
              letterSpacing: '0.04em',
            }}>
              Built This Way → Reader Tool → Power Tools
            </p>
            <Link href="/built-this-way" style={{
              display: 'inline-flex',
              backgroundColor: 'var(--color-brand-rust)',
              color: '#ffffff',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
            }}>
              Start as a Reader
            </Link>
          </div>

          {/* Leader Card */}
          <div style={{
            backgroundColor: 'var(--color-brand-navy)',
            border: '2px solid var(--color-brand-teal)',
            borderRadius: '1.25rem',
            padding: '2.5rem',
          }}>
            <p style={{
              fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--color-brand-teal)',
              marginBottom: '0.75rem',
            }}>
              For Leaders
            </p>
            <h3 style={{
              fontSize: '1.5rem', fontWeight: 800,
              color: '#ffffff',
              marginBottom: '0.5rem',
            }}>
              See the patterns shaping how you lead.
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}>
              If you are a leader, founder, EO/YPO member, or forum member looking for deeper self-awareness and meaningful development — start here.
            </p>
            <p style={{
              fontSize: '0.8rem', fontWeight: 700,
              color: 'var(--color-brand-teal)',
              marginBottom: '1.5rem',
              letterSpacing: '0.04em',
            }}>
              SAAQ → Forum Retreats → Executive Coaching
            </p>
            <Link href="#leader-path" style={{
              display: 'inline-flex',
              backgroundColor: 'var(--color-brand-teal)',
              color: '#ffffff',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
            }}>
              Start as a Leader
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}