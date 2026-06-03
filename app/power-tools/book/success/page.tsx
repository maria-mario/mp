import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Thank You — Built This Way Launch Team',
};

export default function BookSuccessPage() {
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-brand-cream)',
      padding: '3rem 1.5rem',
      fontFamily: 'var(--font-sans)',
    }}>
      <div style={{ maxWidth: '580px', textAlign: 'center' }}>

        {/* Icon */}
        <div style={{
          width: 72, height: 72,
          borderRadius: '9999px',
          backgroundColor: 'rgba(192,82,42,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 2rem',
        }}>
          <CheckCircle style={{ width: 36, height: 36, color: 'var(--color-brand-sienna)' }} />
        </div>

        <h1 style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--color-brand-text)',
          marginBottom: '1.25rem',
          lineHeight: 1.15,
        }}>
          Welcome to the Launch Team.
        </h1>

        <p style={{
          fontSize: '1.0625rem',
          lineHeight: 1.85,
          color: 'var(--color-brand-text-muted)',
          marginBottom: '1.25rem',
        }}>
          Thank you for joining the <em>Built This Way</em> Launch Team. A confirmation
          email is on its way with everything you need to get started.
        </p>

        <p style={{
          fontSize: '1.0625rem',
          lineHeight: 1.85,
          color: 'var(--color-brand-text-muted)',
          marginBottom: '2.5rem',
        }}>
          In the meantime, think about one pattern, one habit, or one relationship where
          you want to show up differently over the next 90 days.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/members" className="btn-primary" style={{ padding: '0.9rem 2rem' }}>
            Go to Member Area <ArrowRight className="inline w-4 h-4 ml-1" />
          </Link>
          <Link href="/" className="btn-ghost" style={{ padding: '0.9rem 2rem' }}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}