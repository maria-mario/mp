import { Compass, FileText, Activity, Target, Zap, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react';
import type { BlockStepsData } from '@/lib/pages';

// Cycle through icons for visual variety
const icons = [Compass, FileText, Activity, Target, Zap, RefreshCw, ArrowRight, CheckCircle];

export default function BlockSteps({ block }: { block: BlockStepsData }) {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        {block.eyebrow && (
          <>
            <div className="section-divider mb-4" />
            <span className="eyebrow">{block.eyebrow}</span>
          </>
        )}
        <h2 className="mt-4 mb-4">{block.heading}</h2>
        {block.intro && (
          <p className="mb-14" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lead)', maxWidth: '54ch', lineHeight: 1.75 }}>
            {block.intro}
          </p>
        )}
        {block.steps && block.steps.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {block.steps.map((step, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-bold tabular-nums"
                      style={{ color: 'var(--color-brand-sienna)', minWidth: '1.5rem' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon size={20} style={{ color: 'var(--color-brand-sienna)' }} />
                  </div>
                  {step.title && (
                    <h3 style={{ fontSize: 'var(--text-h4, 1.125rem)', fontWeight: 600 }}>{step.title}</h3>
                  )}
                  {step.body && (
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{step.body}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
