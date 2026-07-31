export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  variant?: 'blue' | 'gold' | 'ghost';
  /** Square edge in px — never below 44 for touch targets. */
  size?: number;
  /** Accessible label; required, the button has no visible text. */
  label: string;
  /** Round cartouche. The charte allows round cartouches only — square for minimal nav buttons. */
  round?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
