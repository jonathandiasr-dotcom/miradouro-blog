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
  'principal/color': 'logo-principal-color.png',
  'principal/white': 'logo-principal-white.png',
  'principal/black': 'logo-principal-black.png',
  'secondaire/color': 'logo-secondaire-color.png',
  'secondaire/white': 'logo-secondaire-white.png',
  'secondaire/black': 'logo-secondaire-black.png',
};

export function Logo({ lockup = 'secondaire', tone = 'color', height = 40, assetBase, style, ...rest }) {
  const src = (assetBase || dsRoot() + 'assets/logos/') + (FILES[`${lockup}/${tone}`] || FILES['secondaire/color']);
  return (
    <img
      src={src}
      alt="Meritis"
      style={{ height, width: 'auto', display: 'block', ...style }}
      {...rest}
    />
  );
}
