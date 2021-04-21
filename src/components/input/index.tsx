import { ChangeEvent, ReactNode } from 'react';

import styles from './input.module.scss';

interface Props {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

export default function Input({ type, name, placeholder, ...restProps }: Props) {
  return <input {...restProps} type={type} name={name} placeholder={placeholder} className={styles.input} />;
}
