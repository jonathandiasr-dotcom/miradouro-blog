export interface LogoProps {
  /** principal = stacked symbol + wordmark (default brand signature) · secondaire = horizontal lockup, marketing-approved uses only. */
  lockup?: 'principal' | 'secondaire';
  /** color on light grounds · white on bleu marine or doré · black for black-and-white documents. */
  tone?: 'color' | 'white' | 'black';
  /** Rendered height in px. Always leave a clear zone equal to the "M" height around it. */
  height?: number;
  assetBase?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
