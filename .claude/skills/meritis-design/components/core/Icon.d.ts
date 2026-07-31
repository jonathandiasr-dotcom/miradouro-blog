export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "arrow-right", "download", "send"). */
  name: string;
  /** Square size in px. 20 inside buttons, 24 inline, 40-56 for expertise pictos. */
  size?: number;
  /** Visual weight hint; Meritis pictograms are thin line drawings. */
  stroke?: number;
  /** Any CSS colour. Defaults to currentColor so it inherits the text colour. */
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
