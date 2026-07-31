/**
 * The "onde" — the brand's only decorative motif (charte p.12-13).
 */
export interface WaveProps {
  /** arcs = concentric quarter-arcs · pleine = solid quarter disc. */
  shape?: 'arcs' | 'pleine';
  /** Principal palette only — a non-principal colour is forbidden. */
  color?: 'blue' | 'gold' | 'beige' | 'light' | 'grey';
  /** Square edge in px. */
  size?: number;
  /** 90° increments only. Any other angle is forbidden. */
  rotate?: 0 | 90 | 180 | 270;
  /** Use 0.1 for the permitted white-over-blue overlay effect. */
  opacity?: number;
  /** Override the asset folder URL when the bundle is served from another path. */
  assetBase?: string;
  style?: React.CSSProperties;
}
export declare function Wave(props: WaveProps): JSX.Element;
