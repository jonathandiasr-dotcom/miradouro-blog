import React from 'react';


// Resolve the design-system root from the <script src=".../_ds_bundle.js"> tag so assets load
// correctly whatever depth the consuming page sits at.
function dsRoot() {
  if (typeof window !== 'undefined' && window.MERITIS_DS_ROOT) return window.MERITIS_DS_ROOT;
  if (typeof document !== 'undefined') {
    const tag = document.querySelector('script[src*="_ds_bundle.js"]');
    if (tag) return tag.getAttribute('src').replace(/_ds_bundle\.js.*$/, '');
    const link = document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
    if (link) return link.getAttribute('href').replace(/styles\.css.*$/, '');
  }
  return '';
}

const FILES = {
  'arcs/blue': 'onde-arcs-bleue.png',
  'arcs/gold': 'onde-arcs-doree.png',
  'arcs/beige': 'onde-arcs-beige.png',
  'arcs/light': 'onde-arcs-claire.png',
  'arcs/grey': 'onde-arcs-grise.png',
  'pleine/blue': 'onde-pleine-bleue.png',
  'pleine/gold': 'onde-pleine-doree.png',
  'pleine/beige': 'onde-pleine-beige.png',
  'pleine/light': 'onde-pleine-claire.png',
  'pleine/grey': 'onde-pleine-grise.png',
};

export function Wave({ shape = 'arcs', color = 'blue', size = 200, rotate = 0, opacity = 1, assetBase, style, ...rest }) {
  const file = FILES[`${shape}/${color}`] || FILES['arcs/blue'];
  const src = (assetBase || dsRoot() + 'assets/waves/') + file;
  const turn = [0, 90, 180, 270].includes(rotate) ? rotate : 0;
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'block', width: size, height: size, opacity,
        backgroundImage: `url("${src}")`, backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        transform: turn ? `rotate(${turn}deg)` : undefined,
        pointerEvents: 'none', ...style,
      }}
      {...rest}
    />
  );
}
