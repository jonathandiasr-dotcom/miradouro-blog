import React from 'react';

export function PhotoFrame({ src, alt = '', shape = 'rect', treatment = 'bw', ratio = '4 / 3', height, style, ...rest }) {
  const radius = shape === 'quarter' ? 'var(--radius-quarter)' : shape === 'circle' ? 'var(--radius-pill)' : shape === 'rounded' ? 'var(--radius-lg)' : '0';
  return (
    <div
      style={{
        position: 'relative', overflow: 'hidden', borderRadius: radius,
        aspectRatio: height ? undefined : ratio, height,
        background: 'var(--mrt-grey-100)', ...style,
      }}
      {...rest}
    >
      <img
        src={src} alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: treatment === 'bw' ? 'var(--filter-photo-bw)' : 'saturate(.92)' }}
      />
    </div>
  );
}
