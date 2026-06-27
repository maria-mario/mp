'use client';
import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to your email platform here
    setSubmitted(true);
  };

  return (
    <section style={{
      backgroundColor: 'var(--color-brand-sienna)',
      padding: '5rem 1.5rem',
    }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>

        <p style={{
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.6)',
          marginBottom: '1rem',
        }}>
          Newsletter
        </p>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: 600,
          color: '#ffffff',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          Get the Breaking Bad (habits) Newsletter
        </h2>

        <p style={{
          fontSize: '1.05rem',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          maxWidth: '44ch',
          margin: '0 auto 2.5rem',
        }}>
          Weekly reflections and practical tools to help you understand your patterns, work with yourself more skillfully, and change what keeps getting in your way.
        </p>

        {submitted ? (
          <p style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#ffffff',
          }}>
            You're in. Watch your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '0.75rem',
            maxWidth: '36rem',
            margin: '0 auto',
            flexWrap: 'wrap',
          }}>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '0.875rem 1.25rem',
                borderRadius: '9999px',
                border: 'none',
                fontSize: 'var(--text-small)',
                outline: 'none',
                color: 'var(--color-brand-text)',
              }}
            />
            <button type="submit" style={{
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '0.875rem 1.75rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: 'var(--text-small)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              Send Me the Newsletter
            </button>
          </form>
        )}

        <p style={{
          fontSize: 'var(--text-xs)',
          color: 'rgba(255,255,255,0.45)',
          marginTop: '1.25rem',
        }}>
          No spam. Just practical reflections and tools for becoming more SkillfullyAware.
        </p>

      </div>
    </section>
  );
}