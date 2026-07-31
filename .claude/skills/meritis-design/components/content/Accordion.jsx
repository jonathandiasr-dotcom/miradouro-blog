import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Accordion({ items = [], defaultOpen = -1, tone = 'light', style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const onDark = tone === 'dark';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: `1px solid ${onDark ? 'var(--mrt-white-16)' : 'var(--mrt-grey-200)'}` }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                display: 'flex', alignItems: 'center', gap: 'var(--space-4)', width: '100%',
                padding: 'var(--space-5) 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)',
                color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)',
              }}
            >
              {it.icon && <Icon name={it.icon} size={32} color="var(--mrt-gold)" />}
              <span style={{ flex: 1 }}>{it.title}</span>
              <Icon name={isOpen ? 'minus' : 'plus'} size={20} color="var(--mrt-gold)" />
            </button>
            <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-base) var(--ease-standard)' }}>
              <div style={{ overflow: 'hidden' }}>
                <p style={{ margin: 0, paddingBottom: 'var(--space-5)', maxWidth: 'var(--measure-body)', fontFamily: 'var(--font-core)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-body)', color: onDark ? 'var(--mrt-grey-100)' : 'var(--mrt-graphite)' }}>{it.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
