export interface AccordionItem {
  title: string;
  body: React.ReactNode;
  /** Optional Lucide picto shown left of the title. */
  icon?: string;
}
export interface AccordionProps {
  items?: AccordionItem[];
  /** Index open on mount; -1 for all closed. */
  defaultOpen?: number;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
