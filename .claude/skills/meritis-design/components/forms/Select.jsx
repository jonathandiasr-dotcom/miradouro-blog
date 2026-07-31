import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, options = [], tone = 'light', style, ...rest }) {
  const onDark = tone === 'dark';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && <span style={{ fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-sm)', color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)' }}>{label}</span>}
      <span style={{ position: 'relative', display: 'block' }}>
        <select
          style={{
            appearance: 'none', width: '100%',
            fontFamily: 'var(--font-core)', fontSize: 'var(--text-md)',
            padding: 'var(--pad-field-y) 44px var(--pad-field-y) var(--pad-field-x)',
            borderRadius: 'var(--radius-sm)',
            border: `1px solid ${onDark ? 'var(--mrt-white-16)' : 'var(--mrt-grey-200)'}`,
            background: onDark ? 'transparent' : 'var(--mrt-white)',
            color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)', cursor: 'pointer',
          }}
          {...rest}
        >
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={18} color="var(--mrt-gold)" style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
      </span>
    </label>
  );
}
