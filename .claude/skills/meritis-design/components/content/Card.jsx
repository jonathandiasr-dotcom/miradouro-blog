import React from 'react';

export function Card({ tone = 'light', padding, hoverable = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const TONES = {
    light: { background: 'var(--mrt-white)', color: 'var(--mrt-blue)', border: '1px solid transparent' },
    beige: { background: 'var(--mrt-beige)', color: 'var(--mrt-blue)', border: '1px solid transparent' },
    outline: { background: 'transparent', color: 'var(--mrt-blue)', border: '1px solid var(--mrt-grey-200)' },
    dark: { background: 'var(--mrt-blue)', color: 'var(--mrt-beige)', border: '1px solid transparent' },
    gold: { background: 'var(--mrt-gold)', color: 'var(--mrt-beige)', border: '1px solid transparent' },
  };
  return (
    <div
      className={tone === 'dark' ? 'mrt-on-dark' : tone === 'gold' ? 'mrt-on-gold' : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        padding: padding || 'var(--pad-card)',
        transition: 'transform var(--dur-base) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard)',
        transform: hoverable && hover ? 'translateY(var(--lift-hover))' : 'none',
        boxShadow: hoverable && hover ? 'var(--shadow-md)' : 'none',
        ...TONES[tone], ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
