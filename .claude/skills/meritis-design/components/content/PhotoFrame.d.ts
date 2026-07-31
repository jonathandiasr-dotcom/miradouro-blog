/**
 * Brand-treated photography: contrasted black & white with a warm filter (charte p.12).
 */
export interface PhotoFrameProps {
  src: string;
  alt?: string;
  /** rect (default) · rounded · quarter (onde-shaped mask) · circle (portraits in org charts). */
  shape?: 'rect' | 'rounded' | 'quarter' | 'circle';
  /** bw = brand default · color = sparingly, never saturated or flashy. */
  treatment?: 'bw' | 'color';
  ratio?: string;
  height?: number | string;
  style?: React.CSSProperties;
}
export declare function PhotoFrame(props: PhotoFrameProps): JSX.Element;
