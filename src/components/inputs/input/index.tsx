import { ReactNode } from 'react';

import styles from './input.module.scss';

interface Props {
  type: string;
  name: string;
  placeholder: string;
  children?: ReactNode;
}

export default function Input({ type, name, placeholder }: Props) {
  return <input type={type} name={name} placeholder={placeholder} className={styles.input} />;
}
