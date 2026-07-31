export interface TextLinkProps {
  /** blue = the important secondary action · gold = the least important · on-dark over bleu marine. */
  tone?: 'blue' | 'gold' | 'on-dark';
  icon?: string;
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function TextLink(props: TextLinkProps): JSX.Element;
