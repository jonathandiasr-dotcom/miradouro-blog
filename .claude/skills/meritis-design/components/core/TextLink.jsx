import React from 'react';
import { Icon } from './Icon.jsx';

export function TextLink({ tone = 'blue', icon, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const base = tone === 'gold' ? 'var(--mrt-gold-deep)' : 'var(--mrt-blue)';
  const alt = tone === 'gold' ? 'var(--mrt-blue)' : 'var(--mrt-gold-deep)';
  const onDark = tone === 'on-dark';
  return (
    <a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-md)',
        color: onDark ? (hover ? 'var(--mrt-beige)' : 'var(--mrt-gold)') : (hover ? alt : base),
        textDecoration: 'underline', textUnderlineOffset: 3, textDecorationThickness: 1,
        transition: 'color var(--dur-fast) var(--ease-standard)', ...style,
      }}
      {...rest}
    >
      <span>{children}</span>
      {icon && <Icon name={icon} size={16} />}
    </a>
  );
}
