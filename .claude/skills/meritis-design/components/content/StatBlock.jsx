import React from 'react';

export function StatBlock({ value, label, tone = 'blue', align = 'left', style, ...rest }) {
  const valueColor = tone === 'gold' ? 'var(--mrt-gold)' : tone === 'on-dark' ? 'var(--mrt-gold)' : 'var(--mrt-blue)';
  const labelColor = tone === 'on-dark' ? 'var(--mrt-beige)' : 'var(--mrt-graphite)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', textAlign: align, ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-black)', fontSize: 'var(--text-3xl)', lineHeight: 1, color: valueColor }}>{value}</span>
      <span style={{ fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-regular)', fontSize: 'var(--text-sm)', lineHeight: 1.35, color: labelColor }}>{label}</span>
    </div>
  );
}
