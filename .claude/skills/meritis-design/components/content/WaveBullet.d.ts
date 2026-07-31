export interface WaveBulletProps {
  /** arcs or pleine onde used as the bullet glyph. */
  shape?: 'arcs' | 'pleine';
  color?: 'blue' | 'gold' | 'beige' | 'light' | 'grey';
  size?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function WaveBullet(props: WaveBulletProps): JSX.Element;
