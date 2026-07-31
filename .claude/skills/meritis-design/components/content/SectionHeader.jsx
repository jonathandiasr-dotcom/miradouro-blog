import React from 'react';

export function SectionHeader({ eyebrow, title, intro, align = 'left', tone = 'light', style, ...rest }) {
  const onDark = tone === 'dark';
  return (
    <header style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align, ...style }} {...rest}>
      {eyebrow && <span style={{ fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--mrt-gold)' }}>{eyebrow}</span>}
      <h2 style={{ margin: 0, fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-black)', fontSize: 'var(--text-2xl)', lineHeight: 'var(--leading-heading)', color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)', maxWidth: '22ch', textWrap: 'balance' }}>{title}</h2>
      {intro && <p style={{ margin: 0, fontFamily: 'var(--font-core)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-body)', color: onDark ? 'var(--mrt-grey-100)' : 'var(--mrt-graphite)', maxWidth: 'var(--measure-body)', textWrap: 'pretty' }}>{intro}</p>}
    </header>
  );
}
