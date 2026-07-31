import React from 'react';
import { Wave } from '../core/Wave.jsx';

export function WaveBullet({ shape = 'arcs', color = 'blue', size = 22, children, style, ...rest }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', listStyle: 'none', ...style }} {...rest}>
      <Wave shape={shape} color={color} size={size} rotate={90} style={{ flex: '0 0 auto' }} />
      <span style={{ fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)', color: 'var(--mrt-blue)' }}>{children}</span>
    </li>
  );
}
