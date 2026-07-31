export interface FieldProps {
  label?: string;
  hint?: string;
  /** Replaces the hint and turns the border doré foncé. */
  error?: string;
  as?: 'input' | 'textarea';
  tone?: 'light' | 'dark';
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
