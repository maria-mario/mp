
'use client';

import { useState } from 'react';

export function ExperienceGallery({ images, title }: { images: string[]; title: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>
          From the retreat at Tubac Ranch
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '0.75rem',
        }}>
          {images.slice(0, 6).map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img)}
              style={{
                aspectRatio: '1',
                overflow: 'hidden',
                borderRadius: 'var(--radius-card)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                background: 'var(--color-brand-warm-gray)',
              }}
            >
              <img
                src={img}
                alt={`${title} at Tubac Ranch`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  display: 'block',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            cursor: 'pointer',
          }}
        >
          <img
            src={lightbox}
            alt={title}
            style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: 'var(--radius-card)' }}
          />
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '2rem',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
