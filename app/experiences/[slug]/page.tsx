// app/experiences/[slug]/page.tsx
// REPLACES the existing file that was fetching from Directus.
// Uses static data from lib/data/experiences.ts until Directus is ready.

import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  getAllExperiences,
  getExperienceBySlug,
  getRelatedExperiences,
} from '@/lib/data/experiences';
import { InclusionFlag } from '@/components/experiences/InclusionFlag';
import { LocationBlock } from '@/components/experiences/LocationBlock';
import { ExperienceGallery } from '@/components/experiences/ExperienceGallery';
import { InterestListForm } from '@/components/experiences/InterestListForm';

export function generateStaticParams() {
  return getAllExperiences().map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const exp = getExperienceBySlug(params.slug);
  if (!exp) return {};
  return {
    title: exp.seo_title,
    description: exp.seo_description,
    openGraph: {
      title: exp.seo_title,
      description: exp.seo_description,
      ...(exp.hero_image ? { images: [exp.hero_image] } : {}),
    },
  };
}

export default function ExperiencePage({
  params,
}: {
  params: { slug: string };
}) {
  const exp = getExperienceBySlug(params.slug);
  if (!exp) notFound();

  const related = getRelatedExperiences(exp.footer_experience_links ?? []);

  return (
    <main>
      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'flex-end',
          backgroundColor: 'var(--color-brand-navy)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src={exp.hero_image || '/images/placeholder-experience.jpg'}
            alt=""
            aria-hidden
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}
          />
        </div>
        <div
          className="container"
          style={{ position: 'relative', zIndex: 10, paddingBottom: '4rem', paddingTop: '8rem' }}
        >
          <span
            className={
              exp.type === 'core'
                ? 'badge-core'
                : exp.type === 'premium-request'
                ? 'badge-premium-request'
                : 'badge-premium'
            }
          >
            {exp.label_text}
          </span>
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: '20ch',
              marginBottom: '1.25rem',
            }}
          >
            {exp.hero_headline}
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'var(--text-lead)',
              maxWidth: '52ch',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            {exp.hero_subheadline}
          </p>
          <Link href="/forum-retreats#inquiry" className="btn-primary">
            Include This in Your Forum Retreat →
          </Link>
        </div>
      </section>

      {/* ── HOOK ── */}
      <section className="section" style={{ backgroundColor: 'var(--color-brand-cream)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <p
            style={{
              fontSize: 'var(--text-lead)',
              color: 'var(--color-brand-text-muted)',
              lineHeight: 1.85,
              whiteSpace: 'pre-line',
            }}
          >
            {exp.hook_text}
          </p>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="section-divider" />
          <h2 style={{ marginBottom: '2rem' }}>What Is {exp.title}?</h2>
          <div
            className="experience-body"
            dangerouslySetInnerHTML={{ __html: exp.what_is_it }}
          />
        </div>
      </section>

      {/* ── LOCATION ── */}
      <LocationBlock />

      {/* ── INCLUSION FLAG ── */}
      <section className="section" style={{ backgroundColor: 'var(--color-brand-off-white)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <InclusionFlag
            type={exp.type}
            heading={exp.inclusion_heading}
            body={exp.inclusion_body}
          />
        </div>
      </section>

      {/* ── WHY IT WORKS ── */}
      <section className="section section-dark">
        <div className="container">
          <div
            className="section-divider"
            style={{ backgroundColor: 'var(--color-brand-sienna)' }}
          />
          <h2 style={{ color: '#ffffff', marginBottom: '0.75rem' }}>
            What Forum Leaders Take Away
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: 'var(--text-lead)',
              maxWidth: '56ch',
              lineHeight: 1.7,
              marginBottom: '3rem',
            }}
          >
            {exp.why_it_works_intro}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {exp.benefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <p className="benefit-label">{b.label}</p>
                <p className="benefit-desc">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY — only renders if images exist ── */}
      {exp.photo_gallery.length > 0 && (
        <ExperienceGallery images={exp.photo_gallery} title={exp.title} />
      )}

      {/* ── FORUM BLOCK ── */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="forum-block">
            <h2 style={{ marginBottom: '1.25rem' }}>
              This Experience Doesn&apos;t Exist in a Vacuum
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: exp.forum_block_body }}
            />
            <Link
              href="/forum-retreats"
              style={{
                display: 'inline-block',
                marginTop: '1.25rem',
                color: 'var(--color-brand-sienna)',
                fontWeight: 600,
                fontSize: 'var(--text-small)',
                textDecoration: 'none',
              }}
            >
              → See how forum retreats are structured
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL — only renders if real quote exists ── */}
      {exp.testimonial_quote && (
        <section
          className="section"
          style={{ backgroundColor: 'var(--color-brand-off-white)', textAlign: 'center' }}
        >
          <div className="container" style={{ maxWidth: '640px' }}>
            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-title)',
                color: 'var(--color-brand-text)',
                fontStyle: 'italic',
                lineHeight: 1.55,
                marginBottom: '1.5rem',
              }}
            >
              &ldquo;{exp.testimonial_quote}&rdquo;
            </blockquote>
            <p style={{ color: 'var(--color-brand-text-muted)', fontWeight: 600 }}>
              — {exp.testimonial_name}
              {exp.testimonial_company && `, ${exp.testimonial_company}`}
            </p>
          </div>
        </section>
      )}

      {/* ── DUAL CTA ── */}
      <section className="section" style={{ backgroundColor: 'var(--color-brand-cream)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Primary */}
            <div
              className="section-dark"
              style={{
                borderRadius: 'var(--radius-card)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-premium)',
              }}
            >
              <h3 style={{ color: '#ffffff', marginBottom: '0.75rem' }}>
                {exp.primary_cta_heading}
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  marginBottom: '2rem',
                  fontSize: 'var(--text-small)',
                  lineHeight: 1.75,
                  maxWidth: '100%',
                }}
              >
                {exp.primary_cta_body}
              </p>
              <Link
                href="/forum-retreats#inquiry"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Plan Your Forum Retreat →
              </Link>
            </div>

            {/* Secondary */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>
                {exp.secondary_cta_heading}
              </h3>
              <p
                style={{
                  color: 'var(--color-brand-text-muted)',
                  marginBottom: '1.5rem',
                  fontSize: 'var(--text-small)',
                  lineHeight: 1.75,
                  maxWidth: '100%',
                }}
              >
                {exp.secondary_cta_body}
              </p>
              <InterestListForm experienceSlug={exp.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      {related.length > 0 && (
        <section
          className="section"
          style={{
            backgroundColor: 'var(--color-brand-off-white)',
            borderTop: '1px solid var(--color-brand-border)',
          }}
        >
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>
              Other experiences available as part of your forum retreat:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/experiences/${r.slug}`} className="experience-pill">
                  {r.title}
                </Link>
              ))}
              <Link
                href="/experiences"
                style={{
                  color: 'var(--color-brand-sienna)',
                  fontWeight: 600,
                  fontSize: 'var(--text-small)',
                  textDecoration: 'none',
                  padding: '0.375rem 0.5rem',
                }}
              >
                See All Experiences →
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}