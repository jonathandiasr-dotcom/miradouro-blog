import React from 'react';

const BADGE_TONES = {
  blue: { background: 'var(--mrt-blue)', color: 'var(--mrt-beige)' },
  gold: { background: 'var(--mrt-gold)', color: 'var(--mrt-beige)' },
  soft: { background: 'var(--mrt-grey-100)', color: 'var(--mrt-blue)' },
  outline: { background: 'transparent', color: 'var(--mrt-blue)', boxShadow: 'inset 0 0 0 1px var(--mrt-grey-200)' },
};

export function Badge({ tone = 'soft', uppercase = false, children, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center',
        padding: '5px 12px', borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-2xs)',
        letterSpacing: uppercase ? 'var(--tracking-eyebrow)' : 0,
        textTransform: uppercase ? 'uppercase' : 'none',
        ...BADGE_TONES[tone], ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
