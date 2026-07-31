export interface SelectOption { value: string; label: string }
export interface SelectProps {
  label?: string;
  /** Plain strings or {value,label} pairs. */
  options?: (string | SelectOption)[];
  tone?: 'light' | 'dark';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
