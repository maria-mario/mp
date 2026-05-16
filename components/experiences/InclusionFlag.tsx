
import { ExperienceType } from '@/lib/data/experiences';

const CONFIG = {
  core: {
    wrapperClass: 'flag-core',
    badgeClass: 'badge-core',
    badgeText: '✓ CORE EXPERIENCE — INCLUDED IN EVERY RETREAT',
  },
  premium: {
    wrapperClass: 'flag-premium',
    badgeClass: 'badge-premium',
    badgeText: '★ PREMIUM ADD-ON',
  },
  'premium-request': {
    wrapperClass: 'flag-premium-request',
    badgeClass: 'badge-premium-request',
    badgeText: '◆ PREMIUM — BY REQUEST ONLY',
  },
};

export function InclusionFlag({
  type,
  heading,
  body,
}: {
  type: ExperienceType;
  heading: string;
  body: string;
}) {
  const c = CONFIG[type];
  return (
    <div className={c.wrapperClass}>
      <span className={c.badgeClass}>{c.badgeText}</span>
      <h3 style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 'var(--text-title)',
        color: 'var(--color-brand-text)',
        marginBottom: '0.75rem',
      }}>
        {heading}
      </h3>
      <p style={{
        color: 'var(--color-brand-text-muted)',
        lineHeight: 1.8,
        maxWidth: '68ch',
      }}>
        {body}
      </p>
    </div>
  );
}
