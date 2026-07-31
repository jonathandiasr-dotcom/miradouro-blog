import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ExpertiseCard({ icon, title, items = [], tone = 'light', href, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const onDark = tone === 'dark';
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start',
        textDecoration: 'none', color: 'inherit',
        transition: 'transform var(--dur-base) var(--ease-standard)',
        transform: href && hover ? 'translateY(var(--lift-hover))' : 'none', ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={48} color={onDark ? 'var(--mrt-grey-100)' : 'var(--mrt-gold)'} style={{ marginTop: 2 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <span style={{ fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)', color: 'var(--mrt-gold)' }}>{title}</span>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          {items.map((it, i) => (
            <li key={i} style={{ fontFamily: 'var(--font-core)', fontSize: 'var(--text-sm)', lineHeight: 1.45, color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)' }}>{it}</li>
          ))}
        </ul>
      </div>
    </Tag>
  );
}
