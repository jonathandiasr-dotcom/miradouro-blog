export interface SectionHeaderProps {
  /** Short uppercase doré label. */
  eyebrow?: string;
  /** Two lines maximum. */
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
