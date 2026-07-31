import React from 'react';

export function Quote({ children, author, role, tone = 'light', style, ...rest }) {
  const onDark = tone === 'dark';
  return (
    <figure style={{ margin: 0, display: 'flex', gap: 'var(--space-5)', ...style }} {...rest}>
      <span aria-hidden="true" style={{ fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-black)', fontSize: 84, lineHeight: .8, color: onDark ? 'var(--mrt-gold)' : 'var(--mrt-gold-12)' }}>&#8220;</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <blockquote style={{ margin: 0, fontFamily: 'var(--font-core)', fontStyle: 'italic', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-loose)', color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)', maxWidth: 'var(--measure-body)' }}>{children}</blockquote>
        {author && (
          <figcaption style={{ fontFamily: 'var(--font-core)', fontSize: 'var(--text-sm)' }}>
            <span style={{ fontWeight: 'var(--weight-bold)', color: 'var(--mrt-gold)' }}>{author}</span>
            {role && <span style={{ color: onDark ? 'var(--mrt-grey-100)' : 'var(--mrt-graphite)' }}>{' · ' + role}</span>}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
