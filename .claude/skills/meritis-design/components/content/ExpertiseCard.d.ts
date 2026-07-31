/**
 * A pictogram + doré title + short capability list — the "offres d'accompagnement" block (charte p.9).
 */
export interface ExpertiseCardProps {
  /** Lucide icon name standing in for the brand's line pictogram. */
  icon: string;
  /** Offer name, e.g. "Cloud & DevOps". */
  title: string;
  /** 2-4 capability lines, no bullets, no full stops. */
  items?: string[];
  tone?: 'light' | 'dark';
  href?: string;
  style?: React.CSSProperties;
}
export declare function ExpertiseCard(props: ExpertiseCardProps): JSX.Element;
