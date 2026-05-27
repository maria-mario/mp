import Link from 'next/link';
import { ArrowRight, CheckCircle, Calendar, Target, Compass, Layers, Zap, RefreshCw } from 'lucide-react';

/* ── Copy ─────────────────────────────────────────── */
const steps = [
  {
    icon: Compass,
    title: 'Articulate Your Core Focus',
    body: 'We identify the primary areas you want to address — your World (career, relationships, time), Body (health, fitness, nutrition), or Mind (meditation, mindfulness, shadow work).',
  },
  {
    icon: Target,
    title: 'Define Your Core Values',
    body: 'We uncover the values that matter most to you. These become the foundation for every decision, keeping you aligned and motivated throughout the process.',
  },
  {
    icon: Layers,
    title: 'Create Your Long-Term Vision',
    body: 'Together we craft a clear 10-year vision with 5–7 SMART goals — Specific, Measurable, Achievable, Relevant, and Time-Bound.',
  },
  {
    icon: ArrowRight,
    title: 'Map the Intermediate Steps',
    body: 'We break your vision into actionable 3-year and 1-year plans. Each stage builds on the last, ensuring steady, measurable progress.',
  },
  {
    icon: Zap,
    title: 'Launch Your 90-Day Sprint',
    body: 'We identify your most critical priorities for the next 90 days — your "Big Rocks" — so your efforts stay focused on what truly moves the needle.',
  },
  {
    icon: RefreshCw,
    title: 'Ongoing Sprint Support',
    body: "Once you're off and running, you decide what comes next. If you want to work through another sprint, we keep going. The process scales to where you are.",
  },
];

const sessionItems = [
  { title: 'Hot Topics', body: 'Address any pressing or time-sensitive issues that need immediate attention.' },
  { title: 'Big Rock Work', body: 'Check in on your priorities, hold yourself accountable, and keep momentum on what matters most.' },
  { title: 'Weekly Planning', body: 'Plan for the week ahead, set commitments, and leave every session prepared for what\'s next.' },
  { title: 'Daily Practices', body: 'Build mindful habits — from meditation and perspective-taking to shadow work and actionable steps that support your growth.' },
  { title: 'Mindfulness & Shadow Work', body: 'Essential tools woven seamlessly into every conversation, building greater clarity, resilience, and self-awareness over time.' },
];

const audiences = [
  {
    label: 'Founders & CEOs',
    headline: 'Build the business. Keep yourself.',
    body: 'You\'ve scaled the company. Now scale yourself. SAAQ coaching helps founders align inner operating system with outer ambition — before the gap costs you.',
  },
  {
    label: 'Senior Leaders',
    headline: 'Finish what you started.',
    body: 'You\'ve done the work. Some things are still unresolved. SAAQ coaching creates the space to address the patterns, beliefs, and blind spots that slow seasoned leaders down.',
  },
];

/* ── Page ─────────────────────────────────────────── */
export default function ConsultationPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>

      {/* ── HERO ────────────────────────────────────────── */}
      <section
        className="section relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-brand-navy)', paddingTop: '8rem', paddingBottom: '6rem' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 55% 70% at 75% 50%, rgba(192,82,42,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="container relative z-10 max-w-3xl">
          <div className="section-divider mb-4" />
          <span className="eyebrow">SAAQ Coaching</span>
          <h1 className="mt-4 mb-6" style={{ color: '#ffffff' }}>
            Know Yourself.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-brand-sienna-light)' }}>
              Lead Better.
            </em>
          </h1>
          <p style={{ fontSize: 'var(--text-lead)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: '52ch' }}>
            The SAAQ diagnostic maps your inner operating system — your values, habits, blind spots,
            and strengths. Coaching builds on that map to create lasting change in how you lead,
            decide, and live.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://saaq-pi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Take the SAAQ Assessment
            </a>
            <Link href="#book" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-divider mb-4" />
          <span className="eyebrow">Who It's For</span>
          <h2 className="mt-4 mb-12" style={{ maxWidth: '28ch' }}>
            One process. Two entry points.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="rounded-2xl p-8"
                style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <span className="eyebrow mb-3 block">{a.label}</span>
                <h3 className="mb-4" style={{ fontSize: 'var(--text-h3)' }}>{a.headline}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAAQ DIAGNOSTIC CTA ─────────────────────────── */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, var(--color-brand-sienna) 0%, var(--color-brand-sienna-dark, #8B3A1A) 100%)',
        }}
      >
        <div className="container max-w-2xl text-center">
          <h2 className="mb-4" style={{ color: '#ffffff' }}>Start with the Assessment</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'var(--text-lead)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            The SAAQ diagnostic is the entry point to every coaching engagement. It takes about
            15 minutes and gives you — and Mark — a clear picture of where you are and what to
            work on first.
          </p>
          <a
            href="https://saaq-pi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: '#ffffff', color: 'var(--color-brand-sienna)', fontWeight: 700 }}
          >
            Take the SAAQ Assessment →
          </a>
        </div>
      </section>

      {/* ── CORE STRUCTURE ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-divider mb-4" />
          <span className="eyebrow">The Coaching Structure</span>
          <h2 className="mt-4 mb-4">Clarity, Action, Results</h2>
          <p
            className="mb-14"
            style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lead)', maxWidth: '54ch', lineHeight: 1.75 }}
          >
            Every coaching relationship begins with a focused exploration of your goals and values
            to create a personalized roadmap. Here's how it unfolds.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-bold tabular-nums"
                      style={{ color: 'var(--color-brand-sienna)', minWidth: '1.5rem' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon size={20} style={{ color: 'var(--color-brand-sienna)' }} />
                  </div>
                  <h3 style={{ fontSize: 'var(--text-h4, 1.125rem)', fontWeight: 600 }}>{s.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SESSION FORMAT ──────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container max-w-3xl">
          <div className="section-divider mb-4" />
          <span className="eyebrow">Session Format</span>
          <h2 className="mt-4 mb-4">What Happens in Every Session</h2>
          <p
            className="mb-12"
            style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lead)', lineHeight: 1.75 }}
          >
            Each session is a blend of focused strategy and personal growth, ensuring you're
            consistently moving toward your goals.
          </p>
          <div className="flex flex-col gap-6">
            {sessionItems.map((item, i) => (
              <div key={item.title} className="flex gap-5 items-start">
                <CheckCircle size={20} style={{ color: 'var(--color-brand-sienna)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</p>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK CTA ────────────────────────────────────── */}
      <section
        id="book"
        className="section"
        style={{ backgroundColor: 'var(--color-brand-navy)', textAlign: 'center' }}
      >
        <div className="container max-w-2xl">
          <div className="section-divider mb-4 mx-auto" style={{ margin: '0 auto 1rem' }} />
          <span className="eyebrow">Get Started</span>
          <h2 className="mt-4 mb-4" style={{ color: '#ffffff' }}>
            Ready to Take Control?
          </h2>
          <p
            className="mb-10"
            style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-lead)', lineHeight: 1.75 }}
          >
            Start with the SAAQ assessment, then book a free discovery call. We'll review your
            results together, talk through your goals, and determine if coaching is the right
            next step.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://saaq-pi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Take the Assessment First
            </a>
            <Link href="/contact" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}