import React from 'react';
import { Icon } from './Icon.jsx';

const IB_SKINS = {
  gold: { background: 'var(--mrt-gold)', color: 'var(--mrt-beige)' },
  blue: { background: 'var(--mrt-blue)', color: 'var(--mrt-beige)' },
  ghost: { background: 'transparent', color: 'var(--mrt-blue)' },
};

export function IconButton({ icon, variant = 'blue', size = 44, label, round = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, padding: 0, cursor: 'pointer',
        border: variant === 'ghost' ? '1px solid var(--mrt-blue)' : 'none',
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
        transition: 'filter var(--dur-fast) var(--ease-standard),background var(--dur-fast) var(--ease-standard)',
        filter: hover ? 'brightness(.92)' : 'none',
        ...IB_SKINS[variant], ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(size * 0.45)} />
    </button>
  );
}
