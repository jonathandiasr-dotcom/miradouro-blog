/**
 * Meritis CTA button (charte p.16 "Boutons & CTA").
 */
export interface ButtonProps {
  /** primary = bleu marine solid · gold = doré solid · outline / outline-gold = light grounds · on-dark = beige outline over bleu or doré */
  variant?: 'primary' | 'gold' | 'outline' | 'outline-gold' | 'on-dark';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name; only add one when the pictogram is legible at button size. */
  icon?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  fullWidth?: boolean;
  /** Render as an anchor for navigation CTAs. */
  as?: 'button' | 'a';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
