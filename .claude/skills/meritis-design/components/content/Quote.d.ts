export interface QuoteProps {
  children?: React.ReactNode;
  /** Name in the brand's convention: first name + SURNAME in caps. */
  author?: string;
  role?: string;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function Quote(props: QuoteProps): JSX.Element;
