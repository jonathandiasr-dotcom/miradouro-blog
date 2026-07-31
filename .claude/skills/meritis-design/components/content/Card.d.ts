/**
 * Flat content block. Meritis cards carry no shadow at rest — geometry and ground colour separate them.
 */
export interface CardProps {
  tone?: 'light' | 'beige' | 'outline' | 'dark' | 'gold';
  /** CSS padding override; defaults to var(--pad-card). */
  padding?: string;
  /** Adds a 1px lift + soft shadow on hover — for clickable cards only. */
  hoverable?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
