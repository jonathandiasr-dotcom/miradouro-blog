import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, checked, onChange, tone = 'light', style, ...rest }) {
  const onDark = tone === 'dark';
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--space-3)', cursor: 'pointer', ...style }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} {...rest} />
      <span
        aria-hidden="true"
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 20, height: 20, flex: '0 0 auto', marginTop: 2,
          borderRadius: 'var(--radius-xs)',
          border: `1px solid ${checked ? 'var(--mrt-blue)' : onDark ? 'var(--mrt-white-16)' : 'var(--mrt-grey-200)'}`,
          background: checked ? 'var(--mrt-blue)' : 'transparent',
          transition: 'background var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard)',
        }}
      >
        {checked && <Icon name="check" size={14} color="var(--mrt-beige)" />}
      </span>
      <span style={{ fontFamily: 'var(--font-core)', fontSize: 'var(--text-sm)', lineHeight: 1.45, color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-graphite)' }}>{label}</span>
    </label>
  );
}
