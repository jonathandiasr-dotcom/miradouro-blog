export interface StatBlockProps {
  /** The figure, written as the brand writes it: "+900", "98 M€", "NPS 63", "75 %". */
  value: React.ReactNode;
  /** Short sentence-case caption, no full stop. */
  label: React.ReactNode;
  tone?: 'blue' | 'gold' | 'on-dark';
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
