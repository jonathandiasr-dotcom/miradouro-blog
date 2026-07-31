import React from 'react';
import { Icon } from './Icon.jsx';

const PADS = {
  sm: { padding: '9px 18px', fontSize: 'var(--text-sm)' },
  md: { padding: 'var(--pad-button-y) var(--pad-button-x)', fontSize: 'var(--text-md)' },
  lg: { padding: '18px 36px', fontSize: 'var(--text-lg)' },
};

const SKINS = {
  primary: { background: 'var(--mrt-blue)', color: 'var(--mrt-beige)', border: '1px solid var(--mrt-blue)' },
  gold: { background: 'var(--mrt-gold)', color: 'var(--mrt-beige)', border: '1px solid var(--mrt-gold)' },
  outline: { background: 'transparent', color: 'var(--mrt-blue)', border: '1px solid var(--mrt-blue)' },
  'outline-gold': { background: 'transparent', color: 'var(--mrt-gold)', border: '1px solid var(--mrt-gold)' },
  'on-dark': { background: 'transparent', color: 'var(--mrt-beige)', border: '1px solid var(--mrt-beige)' },
};

const HOVERS = {
  primary: { background: 'var(--mrt-blue-deep)', borderColor: 'var(--mrt-blue-deep)' },
  gold: { background: 'var(--mrt-gold-deep)', borderColor: 'var(--mrt-gold-deep)' },
  outline: { background: 'var(--mrt-blue)', color: 'var(--mrt-beige)' },
  'outline-gold': { background: 'var(--mrt-gold)', color: 'var(--mrt-beige)' },
  'on-dark': { background: 'var(--mrt-beige)', color: 'var(--mrt-blue)' },
};

export function Button({
  variant = 'primary', size = 'md', icon, iconPosition = 'left',
  disabled, fullWidth, as = 'button', children, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  const skin = SKINS[variant] || SKINS.primary;
  const hoverSkin = hover && !disabled ? HOVERS[variant] : null;
  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)',
        fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-bold)',
        lineHeight: 1.2, textDecoration: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        borderRadius: 'var(--radius-sm)',
        transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),transform var(--dur-instant) var(--ease-standard)',
        transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
        opacity: disabled ? 0.42 : 1,
        ...PADS[size], ...skin, ...hoverSkin, ...style,
      }}
      {...rest}
    >
      {icon && iconPosition === 'left' && <Icon name={icon} size={size === 'sm' ? 16 : 20} />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <Icon name={icon} size={size === 'sm' ? 16 : 20} />}
    </Tag>
  );
}
