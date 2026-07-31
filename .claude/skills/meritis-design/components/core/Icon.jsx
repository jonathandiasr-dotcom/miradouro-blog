import React from 'react';

// Line pictograms. The charte specifies The Noun Project (Made x Made) line icons, which are not
// redistributable here — we substitute Lucide (CDN, same single-weight line style). See readme ICONOGRAPHY.
const LUCIDE = 'https://unpkg.com/lucide-static@0.544.0/icons/';

export function Icon({ name, size = 24, stroke = 1.5, color = 'currentColor', style, ...rest }) {
  const url = `url("${LUCIDE}${name}.svg")`;
  return (
    <span
      aria-hidden="true"
      data-icon={name}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        flex: '0 0 auto',
        backgroundColor: color,
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        opacity: stroke < 1.5 ? 0.9 : 1,
        ...style,
      }}
      {...rest}
    />
  );
}
