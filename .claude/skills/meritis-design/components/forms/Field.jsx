import React from 'react';

export function Field({ label, hint, error, as = 'input', tone = 'light', style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = as === 'textarea' ? 'textarea' : 'input';
  const onDark = tone === 'dark';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && <span style={{ fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-sm)', color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)' }}>{label}</span>}
      <Tag
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        rows={as === 'textarea' ? 4 : undefined}
        style={{
          fontFamily: 'var(--font-core)', fontSize: 'var(--text-md)',
          padding: 'var(--pad-field-y) var(--pad-field-x)',
          borderRadius: 'var(--radius-sm)',
          border: `1px solid ${error ? 'var(--mrt-gold-deep)' : focus ? 'var(--mrt-blue)' : onDark ? 'var(--mrt-white-16)' : 'var(--mrt-grey-200)'}`,
          background: onDark ? 'transparent' : 'var(--mrt-white)',
          color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)',
          outline: 'none', resize: as === 'textarea' ? 'vertical' : undefined,
          transition: 'border-color var(--dur-fast) var(--ease-standard)',
        }}
        {...rest}
      />
      {(error || hint) && <span style={{ fontFamily: 'var(--font-core)', fontSize: 'var(--text-xs)', color: error ? 'var(--mrt-gold-deep)' : onDark ? 'var(--mrt-grey-100)' : 'var(--mrt-graphite)' }}>{error || hint}</span>}
    </label>
  );
}
