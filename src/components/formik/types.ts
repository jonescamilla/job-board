import { InputHTMLAttributes } from 'react';

/** Props used in custom formik components */
export type fieldProps = InputHTMLAttributes<HTMLInputElement> & {
  /** name of component/item in form to allow formik to handle props for inputs */
  name: string;
  /** passed into input's placeholder */
  placeholder?: string;
  /** attribute that enables browser autocompletion */
  autoComplete?: 'on' | 'off';
};
