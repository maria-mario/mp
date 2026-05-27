'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

/* ─── Collaborator data ─────────────────────────────────────────── */
const collaborators = [
  {
    names: 'Shinzen Young & John Yates, PhD',
    body: "Shinzen Young's Unified Mindfulness system — developed alongside neuroscientists at Harvard and Carnegie Mellon — gave Mark a framework for systematic, science-integrated meditation practice. John Yates (Culadasa), a former neuroscience professor and author of The Mind Illuminated, united Buddhist wisdom with brain science in a single step-by-step approach. Both teachers shaped Mark's conviction that rigorous inner work and scientific understanding belong together.",
  },
  {
    names: 'Dr. Terri O\'Fallon & Kim Barta, MA',
    body: "Terri O'Fallon's STAGES model — rooted in Ken Wilber's Integral Theory — maps how consciousness evolves across a lifetime. Kim Barta, a psychotherapist with 30+ years of experiential practice, developed groundbreaking approaches to shadow resolution and trauma work. Together they co-founded STAGES International, and their work on \"person perspectives\" directly informs how SkillfullyAware® approaches developmental growth.",
  },
  {
    names: 'Fritjof Capra & Pier Luigi Luisi',
    body: 'Physicist Fritjof Capra and biochemist Pier Luigi Luisi co-authored The Systems View of Life — showing that life is made up of interdependent, self-organizing systems. This Living Systems Theory shaped how SkillfullyAware® understands people: not as problems to be fixed, but as dynamic systems in relationship with their environment. Personal growth means cultivating harmony between inner processes, outer circumstances, and relationships.',
  },
  {
    names: 'Joanna Macy, PhD',
    body: 'Scholar and activist Joanna Macy integrates Buddhist philosophy with systems thinking, emphasizing interdependence and mutual causality. Her insight — that inner transformation and outer change are inseparable — runs through every layer of the SkillfullyAware® approach. When you shift a pattern at its root, everything connected to it shifts too.',
  },
];

/* ─── Sub-section label ─────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase' as const,
      color: 'var(--color-brand-sienna)',
      marginBottom: '0.75rem',
    }}>
      {children}
    </p>
  );
}

/* ─── Section wrapper ───────────────────────────────────────────── */
function Section({ id, bg, children }: { id: string; bg?: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      style={{
        padding: '6rem var(--section-padding-x)',
        backgroundColor: bg ?? 'var(--color-brand-cream)',
        scrollMarginTop: '80px',
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  );
}

/* ─── Divider ───────────────────────────────────────────────────── */
function Divider() {
  return <hr style={{ border: 'none', borderTop: '1px solid var(--color-brand-border)', margin: '2.5rem 0' }} />;
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-brand-navy) 0%, #2a1a0e 100%)',
        padding: '8rem var(--section-padding-x) 6rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Eyebrow>About Dr. Mark Pirtle</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
          }}>
            Awareness Changes Everything.
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.75,
            maxWidth: '52ch',
            margin: '0 auto',
          }}>
            Clinician. Meditation teacher. Leadership coach. Three decades helping high-performers
            heal, grow, and lead from the inside out.
          </p>
        </div>
      </section>

      {/* ── THE STORY ─────────────────────────────────────────────── */}
      <Section id="story">
        <Eyebrow>The Story</Eyebrow>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
          From Loss to Liberation — A Path Built on Real Experience
        </h2>

        <p style={{ marginBottom: '1.25rem', lineHeight: 1.8, color: 'var(--color-brand-text)' }}>
          Mark Pirtle's journey to founding SkillfullyAware® didn't start with a vision. It started with a crisis.
        </p>
        <p style={{ marginBottom: '1.25rem', lineHeight: 1.8 }}>
          Early in his career, he was a successful physical therapist and clinic owner — until a loophole in an
          operating agreement stripped him of his business, his title, and his professional identity overnight.
          The fallout wasn't just professional. It triggered a cascade of stress-related symptoms that forced him
          to confront something far deeper: the inner patterns and narratives quietly running his life.
        </p>

        <blockquote style={{
          borderLeft: '3px solid var(--color-brand-sienna)',
          paddingLeft: '1.5rem',
          margin: '2rem 0',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          color: 'var(--color-brand-text-muted)',
          lineHeight: 1.7,
        }}>
          Healing didn't come from a hospital. It came from a Tibetan Buddhist monastery.
        </blockquote>

        <p style={{ marginBottom: '1.25rem', lineHeight: 1.8 }}>
          During a two-month retreat, Mark immersed himself in meditation, silence, and unflinching
          self-reflection. What he discovered there became the foundation for everything that followed:
          awareness changes everything.
        </p>
        <p style={{ marginBottom: '1.25rem', lineHeight: 1.8 }}>
          Returning to the U.S., he launched a mindfulness-based pain program for a nationally recognized
          rehabilitation center and began developing the SkillfullyAware® System — a practical, evidence-informed
          framework blending meditation, perspective-taking, and shadow work.
        </p>
        <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
          Today, Mark's work reaches thousands through immersive forum retreats, executive coaching, online
          programs, and his PBS documentary <em>Is Your Story Making You Sick?</em> His book,{' '}
          <em>The Healing Mindset: Mastering the Art of Skillful Awareness</em>, distills decades of clinical
          and contemplative experience into tools readers can use immediately.
        </p>

        <Link
          href="/about#system"
          className="inline-flex items-center gap-2"
          style={{
            color: 'var(--color-brand-sienna)',
            fontWeight: 700,
            fontSize: 'var(--text-small)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase' as const,
            textDecoration: 'none',
          }}
        >
          Explore the SkillfullyAware® System <ArrowRight className="w-4 h-4" />
        </Link>
      </Section>

      {/* ── THE SYSTEM ────────────────────────────────────────────── */}
      <Section id="system" bg="var(--color-brand-off-white)">
        <Eyebrow>The System</Eyebrow>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          A Practical Framework for Healing and Growth
        </h2>
        <p style={{ marginBottom: '1.25rem', lineHeight: 1.8, color: 'var(--color-brand-text-muted)' }}>
          Built for two kinds of people: those navigating stress-related illness, and leaders seeking greater
          clarity and lasting impact. Most of the time, they're the same person.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: 1.8 }}>
          The system works across three interconnected domains — <strong>World, Body, and Mind</strong> — helping
          individuals uncover unconscious patterns, regulate their nervous systems, and reshape the inner
          narratives that shape their experience of everything.
        </p>

        {/* Three practices */}
        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { title: 'Meditation & Mindfulness', label: 'The Foundation', body: 'These practices build attentional stability, emotional regulation, and a reliable sense of present-moment awareness — creating the internal conditions for everything else to work.' },
            { title: 'Perspective-Taking', label: 'The Expander', body: 'By learning to see through multiple perspectives — including your own blind spots — you develop empathy, cognitive flexibility, and a broader understanding of yourself and the people around you.' },
            { title: 'Shadow Work', label: 'The Transformer', body: 'Shadow work brings hidden or disowned patterns into conscious view. What was once driving reactivity from the background becomes insight. What was unconscious becomes choice.' },
          ].map(p => (
            <div key={p.title} style={{
              padding: '1.75rem 2rem',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--color-brand-border)',
              boxShadow: 'var(--shadow-card)',
            }}>
              <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--color-brand-sienna)', marginBottom: '0.35rem' }}>{p.label}</p>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>{p.title}</h3>
              <p style={{ lineHeight: 1.75, color: 'var(--color-brand-text-muted)', margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* World-Body-Mind Venn (SVG) */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--color-brand-text-muted)', marginBottom: '1rem' }}>The World · Body · Mind Model</p>
          <svg viewBox="0 0 320 280" style={{ width: '100%', maxWidth: '340px', display: 'inline-block' }} aria-label="World Body Mind Venn diagram">
            {/* Mind */}
            <circle cx="160" cy="90" r="90" fill="rgba(61,141,174,0.12)" stroke="#3D8DAE" strokeWidth="1.5" />
            {/* World */}
            <circle cx="110" cy="185" r="90" fill="rgba(192,82,42,0.10)" stroke="#c0522a" strokeWidth="1.5" />
            {/* Body */}
            <circle cx="210" cy="185" r="90" fill="rgba(26,26,26,0.07)" stroke="#555" strokeWidth="1.5" />
            {/* Labels */}
            <text x="160" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3D8DAE">— Mind —</text>
            <text x="160" y="56" textAnchor="middle" fontSize="10" fill="#3D8DAE">Cultivate Clarity</text>
            <text x="55" y="230" textAnchor="middle" fontSize="11" fontWeight="700" fill="#c0522a">— World —</text>
            <text x="55" y="244" textAnchor="middle" fontSize="10" fill="#c0522a">Foster Connection</text>
            <text x="265" y="230" textAnchor="middle" fontSize="11" fontWeight="700" fill="#555">— Body —</text>
            <text x="265" y="244" textAnchor="middle" fontSize="10" fill="#555">Strengthen Resilience</text>
            {/* Center */}
            <text x="160" y="152" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1a1a1a">Integration</text>
            <text x="160" y="165" textAnchor="middle" fontSize="9" fill="#555">Enlightened</text>
            <text x="160" y="177" textAnchor="middle" fontSize="9" fill="#555">Leadership</text>
          </svg>
        </div>

        <p style={{ lineHeight: 1.8, color: 'var(--color-brand-text-muted)', marginBottom: '2rem' }}>
          When these three dimensions are aligned, growth stops feeling like effort and starts feeling natural.
          This is what SkillfullyAware® calls <strong>attunement</strong> — a living sense of connection with
          yourself, others, and the systems you're part of.
        </p>

        <Link
          href="/about#science"
          className="inline-flex items-center gap-2"
          style={{
            color: 'var(--color-brand-sienna)',
            fontWeight: 700,
            fontSize: 'var(--text-small)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase' as const,
            textDecoration: 'none',
          }}
        >
          See the Science Behind the System <ArrowRight className="w-4 h-4" />
        </Link>
      </Section>

      {/* ── THE SCIENCE ───────────────────────────────────────────── */}
      <Section id="science">
        <Eyebrow>The Science</Eyebrow>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Evidence-Informed. Depth-Tested. Built to Last.
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: 'var(--color-brand-text-muted)' }}>
          The SkillfullyAware® System draws from a rich body of research across neuroscience, psychology,
          contemplative wisdom, and systems theory — each discipline reinforcing the others in a living,
          integrated framework.
        </p>

        {/* Pill tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
          {['Positive Psychology', 'Affect Labeling', 'CBT', 'Developmental Psychology', 'Neuroscience', 'Contemplative Practice', 'Systems Theory'].map(tag => (
            <span key={tag} style={{
              padding: '0.35rem 0.9rem',
              borderRadius: '9999px',
              border: '1px solid var(--color-brand-border)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              color: 'var(--color-brand-text-muted)',
              backgroundColor: 'var(--color-brand-off-white)',
            }}>{tag}</span>
          ))}
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.01em', marginBottom: '1.75rem', color: 'var(--color-brand-text-muted)', textTransform: 'uppercase' as const, fontSize: 'var(--text-xs)', letterSpacing: '0.12em' }}>
          The Thinkers Who Shaped This Work
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column' as const }}>
          {collaborators.map((c, i) => (
            <div key={c.names}>
              <div style={{ padding: '1.5rem 0' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.6rem' }}>{c.names}</h3>
                <p style={{ lineHeight: 1.8, color: 'var(--color-brand-text-muted)', margin: 0 }}>{c.body}</p>
              </div>
              {i < collaborators.length - 1 && <Divider />}
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div style={{
          marginTop: '4rem',
          padding: '3rem 2.5rem',
          backgroundColor: 'var(--color-brand-navy)',
          borderRadius: 'var(--radius-card)',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--color-brand-sienna-light)', marginBottom: '0.75rem' }}>Ready to Experience the System?</p>
          <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
            The work is real. The results speak for themselves.
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '44ch', margin: '0 auto 2rem' }}>
            Whether you're planning a forum retreat or looking for 1:1 coaching, the next step starts with a conversation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/forum-retreats"
              className="inline-flex items-center gap-2"
              style={{
                backgroundColor: 'var(--color-brand-sienna)',
                color: '#ffffff',
                padding: '0.875rem 1.75rem',
                borderRadius: 'var(--radius-btn)',
                fontWeight: 700,
                fontSize: 'var(--text-small)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                textDecoration: 'none',
                boxShadow: 'var(--shadow-cta)',
              }}
            >
              Plan Your Forum Retreat <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                color: '#ffffff',
                padding: '0.875rem 1.75rem',
                borderRadius: 'var(--radius-btn)',
                fontWeight: 700,
                fontSize: 'var(--text-small)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              <Calendar className="w-4 h-4" /> Book a Discovery Call
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}