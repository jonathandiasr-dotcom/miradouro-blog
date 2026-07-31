export interface BadgeProps {
  tone?: 'blue' | 'gold' | 'soft' | 'outline';
  /** Uppercase + tracking, for category labels like ACTUALITÉ. */
  uppercase?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
