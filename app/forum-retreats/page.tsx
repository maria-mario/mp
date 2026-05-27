'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Check, Plus, Minus, Users, Clock, MapPin } from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const coreExperiences = [
  'Yoga & Meditation',
  'Nature Walks',
  'Fire Ceremony',
  'Drumming & Music',
  'The Belief Audit',
  'Shadow Work & Parts Dialogue',
  'The Narrative Flip',
  'Leadership Hot Seats',
];

const premiumAddons = [
  'Equine-Assisted Leadership',
  'Plant Medicine Journeys',
  'Prayer Lodge Ceremonies',
  '1:1 Coaching & Bodywork',
  'Outdoor Excursions',
  'Curated Wine & Spirits Tastings',
  'Live Music Under the Stars',
  'Ecstatic Dancing',
];

const tensions = [
  {
    title: 'The identity problem.',
    body: 'Whether the company started in your head or you\'ve spent decades rising inside one, work has a way of becoming who you are. This retreat creates separation between the role and the person. Carefully. With support.',
  },
  {
    title: 'The isolation problem.',
    body: 'At a certain level, the feedback loops break down. People tell you what you want to hear, or what they think you need to hear, or nothing at all. Real input — the kind that might actually change something — becomes rare. Here, it\'s the whole point.',
  },
  {
    title: 'The pattern problem.',
    body: 'Every leader has a version of the same story: something they keep doing they can\'t fully explain. Shadow Work names what\'s running. Parts Dialogue integrates it. The Belief Audit examines what\'s driving it. Precise tools for the work leaders most need.',
  },
  {
    title: 'The question underneath everything.',
    body: 'Is this still the chapter I want to be writing? And if so — am I showing up in it the way I actually want to? This retreat creates the space to answer honestly.',
  },
];

const steps = [
  { n: '01', title: 'Tell us about your group', body: 'Fill out a short inquiry form. No commitment — just the start of a conversation.' },
  { n: '02', title: 'Planning call with Dr. Mark', body: 'Within 48 hours, Dr. Mark personally reaches out for a 30–60 minute call to explore what the retreat might look like for your group.' },
  { n: '03', title: 'Your custom proposal', body: 'Within 24–48 hours after your call, you receive a fully tailored proposal: itinerary, experiences, logistics, and pricing.' },
  { n: '04', title: 'Lock it in', body: 'Sign the agreement and place your deposit. We handle everything from there — accommodations, meals, facilitation, logistics.' },
  { n: '05', title: 'Show up', body: '2 to 5 days at Tubac Ranch. Private. Immersive. No outside guests, no distractions.' },
  { n: '06', title: 'Leave with more than you came with', body: 'Clarity on what\'s been running the show. Tools to lead from somewhere more whole. A forum that went through something real together.' },
];

const lengths = [
  { label: '2-Day Intensive', desc: 'Maximum impact for forums with limited time.' },
  { label: '3-Day Experience', desc: 'Enough time to go deep, breathe, and integrate.', popular: true },
  { label: '4–5 Day Immersion', desc: 'For forums ready to go all the way.' },
];

const faqs = [
  { q: 'Is this only for EO or YPO forums?', a: 'Dr. Mark specializes in EO and YPO forums, but the retreat is open to any peer group of business leaders who share trust and are ready for serious work. Contact us to discuss your group.' },
  { q: 'Can we customize the experiences?', a: 'Absolutely — that\'s what the planning call is for. Every retreat is built around what your specific group actually needs.' },
  { q: 'How far in advance should we book?', a: 'At least 60–90 days before your preferred dates. Some forums book 6 months out. Availability is limited.' },
  { q: 'Is plant medicine included automatically?', a: 'No. Plant medicine is a premium add-on that requires a separate conversation about preparation, safety, and suitability. It\'s never assumed or included by default.' },
  { q: 'What does "full private buyout" mean?', a: 'Tubac Ranch is exclusively yours for the duration — no other guests, no shared spaces, no interruptions. Complete privacy and focus.' },
  { q: 'What if someone in the group has specific needs?', a: 'Share any details in the inquiry form or on your planning call. We accommodate dietary needs, physical considerations, and experience preferences.' },
  { q: 'What happens after the retreat?', a: 'Post-retreat integration resources, individual follow-up, and an invitation to continue the work through Dr. Mark\'s membership and coaching offerings.' },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'var(--color-brand-sienna)', marginBottom: '0.75rem',
    }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div className="section-divider mb-4" />;
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((f, i) => (
        <div key={i} className="accordion-item">
          <button className="accordion-trigger" onClick={() => setOpen(open === i ? null : i)}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 600 }}>{f.q}</span>
            <span className="accordion-icon">
              {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </span>
          </button>
          {open === i && (
            <p style={{ marginTop: '0.75rem', color: 'var(--color-brand-text-muted)', lineHeight: 1.75, maxWidth: '72ch' }}>
              {f.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ForumRetreatsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-brand-cream)' }}>

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2020 50%, #1a1a1a 100%)',
        minHeight: '85vh', display: 'flex', alignItems: 'center',
        padding: '8rem 1.5rem 6rem',
      }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <p style={{
            fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--color-brand-sienna)', marginBottom: '1.5rem',
          }}>
            EO / YPO Forum Retreats · Tubac Ranch, Arizona
          </p>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.03em', color: '#ffffff', marginBottom: '1.75rem',
          }}>
            A Retreat Your Forum<br />
            <em style={{ color: 'var(--color-brand-sienna)', fontStyle: 'normal' }}>
              Will Never Stop Talking About.
            </em>
          </h1>
          <p style={{
            fontSize: 'var(--text-lead)', color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.75, maxWidth: '56ch', marginBottom: '2.5rem',
          }}>
            Custom transformational retreats for EO and YPO forums — fully planned,
            deeply impactful, and built around what your group actually needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="#inquiry" className="btn-primary">
              Plan Your Retreat <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/experiences" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.875rem 2rem', border: '2px solid rgba(255,255,255,0.35)',
              borderRadius: '9999px', color: 'rgba(255,255,255,0.8)',
              fontSize: 'var(--text-small)', fontWeight: 600, letterSpacing: '0.06em',
              textTransform: 'uppercase', textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              Browse Experiences
            </Link>
          </div>
          {/* Stats strip */}
          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '4rem', flexWrap: 'wrap' }}>
            {[
              { icon: Users, label: '6–15 Participants' },
              { icon: Clock, label: '2–5 Day Retreats' },
              { icon: MapPin, label: 'Tubac Ranch, Arizona' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-small)' }}>
                <Icon className="w-4 h-4" style={{ color: 'var(--color-brand-sienna)' }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOOK ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', color: 'var(--color-brand-text)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Your forum is made of high-performers who've heard it all.
          </p>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--color-brand-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            They don't need another keynote, another ropes course, another nice dinner with a debrief.
            They need real depth — the kind of experience that cracks something open, shifts the dynamic,
            and leaves them more connected to themselves and each other.
          </p>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--color-brand-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Led by Dr. Mark Pirtle, each retreat is a fully private, curated experience built around
            your forum's specific goals — whether that's deeper trust, leadership clarity, blind-spot
            work, or all of the above.
          </p>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--color-brand-text)', lineHeight: 1.85, fontWeight: 600 }}>
            You pick the dates. We handle everything else.
          </p>
        </div>
      </section>

      {/* ── WHAT THIS IS ── */}
      <section className="section" style={{ backgroundColor: 'var(--color-brand-off-white)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <Divider />
          <Eyebrow>The Retreat</Eyebrow>
          <h2 style={{ marginBottom: '2rem' }}>Designed for the Person Behind the Title</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              'At Tubac Ranch, Dr. Mark Pirtle creates a fully private retreat experience built around one question: what does this forum actually need right now?',
              'Not another framework. Not a peer panel. The work here is personal — drawing from neuroscience, shadow work, mindfulness, and developmental psychology as lived experience, not theory.',
              'You arrive as a group of high-performers. You leave as something rarer: a group of people who actually know each other — and themselves — more deeply than before.',
            ].map((t, i) => (
              <p key={i} style={{ color: 'var(--color-brand-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT LEADERS CARRY ── */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <Divider />
            <Eyebrow>Why It Matters</Eyebrow>
            <h2>What High-Performers Carry That Nobody Talks About</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {tensions.map((t, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', marginBottom: '1.25rem',
                  backgroundColor: 'rgba(192,82,42,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: 'var(--color-brand-sienna)', fontWeight: 800, fontSize: '0.85rem' }}>0{i + 1}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-brand-text)' }}>{t.title}</h3>
                <p style={{ color: 'var(--color-brand-text-muted)', lineHeight: 1.75, fontSize: '0.95rem' }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-brand-sienna)', marginBottom: '0.75rem' }}>
              Every Retreat
            </p>
            <h2 style={{ color: '#ffffff' }}>What's Included</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '52ch', margin: '1rem auto 0' }}>
              Tubac Ranch is exclusively yours — no outside guests, no distractions, no shared spaces.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            {/* Foundation */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', padding: '2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                The Foundation
              </h3>
              {[
                'Private casitas for all participants',
                'All meals, snacks & non-alcoholic beverages',
                'Morning programs & guided workshops',
                'Facilitated group dialogues & coaching circles',
                'Fire ceremony, stargazing & desert immersion',
                'Nordic sauna & nature access',
                'Pre-retreat participant questionnaires',
                'Post-retreat integration guide',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-sienna)' }} />
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Core Experiences */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', padding: '2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Core Experiences
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginBottom: '1.25rem' }}>Included in every retreat</p>
              {coreExperiences.map(item => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-sienna)' }} />
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Premium Add-ons */}
            <div style={{ backgroundColor: 'rgba(192,82,42,0.08)', border: '1px solid rgba(192,82,42,0.25)', borderRadius: '0.75rem', padding: '2rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Premium Add-Ons
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginBottom: '1.25rem' }}>Available at additional cost</p>
              {premiumAddons.map(item => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Plus className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-sienna)' }} />
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
              <Link href="/experiences" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-brand-sienna)', fontSize: 'var(--text-small)', fontWeight: 600, textDecoration: 'none', marginTop: '1rem' }}>
                Browse all experiences <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ backgroundColor: 'var(--color-brand-off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <Divider />
            <Eyebrow>The Process</Eyebrow>
            <h2>Simple for You. Powerful for Your Forum.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {steps.map(s => (
              <div key={s.n} style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', padding: '2rem', border: '1px solid var(--color-brand-warm-gray)' }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-brand-warm-gray)', lineHeight: 1, marginBottom: '1rem', letterSpacing: '-0.04em' }}>{s.n}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-brand-text)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-brand-text-muted)', lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RETREAT LENGTHS ── */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Divider />
            <Eyebrow>Retreat Options</Eyebrow>
            <h2>Two Days or Five — Built Around Your Forum</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 800, margin: '0 auto 2.5rem' }}>
            {lengths.map(l => (
              <div key={l.label} style={{
                padding: '2rem 1.5rem', borderRadius: '0.75rem', textAlign: 'center',
                border: l.popular ? '2px solid var(--color-brand-sienna)' : '1px solid var(--color-brand-warm-gray)',
                backgroundColor: l.popular ? 'rgba(192,82,42,0.04)' : '#ffffff',
                position: 'relative',
              }}>
                {l.popular && (
                  <span style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: 'var(--color-brand-sienna)', color: '#fff',
                    fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: '9999px',
                  }}>Most Popular</span>
                )}
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-brand-text)' }}>{l.label}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-brand-text-muted)', lineHeight: 1.6 }}>{l.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: Users, text: '6–15 participants' },
              { icon: Clock, text: '$3,000–$6,000 per person' },
              { icon: MapPin, text: 'Tubac Ranch, Arizona — full private buyout' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-brand-text-muted)', fontSize: 'var(--text-small)' }}>
                <Icon className="w-4 h-4" style={{ color: 'var(--color-brand-sienna)' }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DR. MARK ── */}
      <section className="section" style={{ backgroundColor: 'var(--color-brand-off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Photo placeholder */}
            <div style={{
              aspectRatio: '4/5', borderRadius: '0.75rem',
              backgroundColor: 'var(--color-brand-warm-gray)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              maxWidth: 420,
            }}>
              <p style={{ color: 'var(--color-brand-text-light)', fontSize: 'var(--text-small)' }}>Photo — Dr. Mark Pirtle</p>
            </div>
            <div>
              <Divider />
              <Eyebrow>Your Guide</Eyebrow>
              <h2 style={{ marginBottom: '1.5rem' }}>Dr. Mark Pirtle</h2>
              <p style={{ color: 'var(--color-brand-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                I've spent over 30 years helping business leaders break through the patterns that shape — and sometimes limit — their leadership, their relationships, and their lives.
              </p>
              <p style={{ color: 'var(--color-brand-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                My framework, SkillfullyAware®, draws from neuroscience, mindfulness, shadow work, and developmental psychology. Not theory — a set of precision tools refined through hundreds of retreats and one-on-one experiences with executives, founders, and EO/YPO forum members.
              </p>
              <p style={{ color: 'var(--color-brand-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                I've been in the room with forums like yours. I know what happens when a group goes deep together. I've watched leaders come in guarded and leave transformed. This is the work I was built for.
              </p>
              <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-brand-sienna)', fontWeight: 700, fontSize: 'var(--text-small)', textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Read Dr. Mark's Story <ArrowRight className="w-4 h-4" />
              </Link>
              {/* Video placeholder */}
              <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '0.75rem', backgroundColor: 'var(--color-brand-navy)', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: 'var(--color-brand-sienna)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '14px solid white', marginLeft: 3 }} />
                </div>
                <div>
                  <p style={{ color: '#ffffff', fontWeight: 600, fontSize: 'var(--text-small)', marginBottom: 0 }}>Watch: Dr. Mark on Forum Retreats</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-xs)', marginBottom: 0 }}>60–90 second overview — [placeholder]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Divider />
          <Eyebrow>From the Field</Eyebrow>
          <h2 style={{ marginBottom: '3rem' }}>What Forum Leaders Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[1, 2, 3].map(n => (
              <div key={n} className="card" style={{ padding: '2rem', textAlign: 'left' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--color-brand-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  "[Testimonial from forum member — 2–3 sentences.]"
                </p>
                <div style={{ borderTop: '1px solid var(--color-brand-border)', paddingTop: '1rem' }}>
                  <p style={{ fontWeight: 700, fontSize: 'var(--text-small)', color: 'var(--color-brand-text)', marginBottom: 0 }}>Forum Leader Name</p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-brand-text-light)', marginBottom: 0 }}>Title, Company</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ backgroundColor: 'var(--color-brand-off-white)' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <Divider />
          <Eyebrow>Questions</Eyebrow>
          <h2 style={{ marginBottom: '2.5rem' }}>Frequently Asked</h2>
          <FAQ />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="inquiry" style={{
        background: 'linear-gradient(135deg, var(--color-brand-sienna-dark) 0%, var(--color-brand-sienna) 100%)',
        padding: '6rem 1.5rem',
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
          <h2 style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
            Your Forum Deserves More Than a Good Trip.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lead)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            This is a transformational investment in your leadership, your relationships, and the kind of clarity that changes how you show up in every room you walk into. Let's build something your forum will carry for years.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact?type=retreat" className="btn-secondary">
              Plan Your Forum Retreat <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/contact?type=call" style={{
              display: 'inline-flex', alignItems: 'center',
              color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-small)', fontWeight: 600,
              textDecoration: 'underline', textUnderlineOffset: 4,
            }}>
              Book a 20-min call first
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}