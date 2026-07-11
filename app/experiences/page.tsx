
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllExperiences, type Experience } from '@/lib/data/experiences';

export const metadata: Metadata = {
  title: 'Forum Retreat Experiences | Tubac Ranch, Arizona — Dr. Mark Pirtle',
  description:
    'Explore the full menu of transformational experiences available as part of EO/YPO forum retreats at Tubac Ranch, Arizona, facilitated by Dr. Mark Pirtle.',
};

export default function ExperiencesIndexPage() {
  notFound();
  const experiences = getAllExperiences();
  const core = experiences.filter((e) => e.type === 'core');
  const premium = experiences.filter((e) => e.type !== 'core');

  return (
    <main>
      {/* Header */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--color-brand-sienna-light)', marginBottom: '0.75rem' }}>
            Forum Retreat Experiences
          </p>
          <h1 style={{ color: '#ffffff', marginBottom: '1rem' }}>
            Every experience. One retreat.
          </h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '52ch', margin: '0 auto 2.5rem' }}>
            These experiences are not offered individually. They are the building blocks
            of a custom forum retreat at Tubac Ranch — designed around your forum&apos;s
            specific goals.
          </p>
          <Link href="/forum-retreats" className="btn-primary">
            Plan Your Forum Retreat →
          </Link>
        </div>
      </section>

      {/* Core experiences */}
      <section className="section" style={{ backgroundColor: 'var(--color-brand-cream)' }}>
        <div className="container">
          <div className="section-divider" />
          <h2 style={{ marginBottom: '0.5rem' }}>Included in Every Retreat</h2>
          <p className="lead" style={{ marginBottom: '3rem' }}>
            These experiences are part of the core facilitation framework Dr. Mark brings to every forum retreat.
          </p>
          <ExperienceGrid experiences={core} badgeVariant="core" />
        </div>
      </section>

      {/* Premium add-ons */}
      <section className="section" style={{ backgroundColor: 'var(--color-brand-off-white)' }}>
        <div className="container">
          <div className="section-divider" />
          <h2 style={{ marginBottom: '0.5rem' }}>Premium Add-Ons</h2>
          <p className="lead" style={{ marginBottom: '3rem' }}>
            These experiences are added to your custom itinerary during the planning process.
          </p>
          <ExperienceGrid experiences={premium} badgeVariant="premium" />
        </div>
      </section>
    </main>
  );
}

function ExperienceGrid({ experiences, badgeVariant }: { experiences: Experience[]; badgeVariant: 'core' | 'premium' }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
    }}>
      {experiences.map((exp) => (
        <Link key={exp.slug} href={`/experiences/${exp.slug}`} className="experience-card">
          <div style={{ height: '12rem', backgroundColor: 'var(--color-brand-warm-gray)', position: 'relative', overflow: 'hidden' }}>
            <img
              src={exp.hero_image || '/images/placeholder-experience.jpg'}
              alt={exp.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span
              className={badgeVariant === 'core' ? 'badge-core' : 'badge-premium'}
              style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', marginBottom: 0 }}
            >
              {badgeVariant === 'core' ? 'Included' : 'Premium Add-On'}
            </span>
          </div>
          <div style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: 'var(--text-lead)', marginBottom: '0.5rem' }}>{exp.title}</h3>
            <p style={{
              fontSize: 'var(--text-small)',
              color: 'var(--color-brand-text-muted)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              maxWidth: '100%',
            }}>
              {exp.hero_subheadline}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
