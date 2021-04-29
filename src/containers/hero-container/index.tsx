import { ReactNode } from 'react';
import styles from './hero-container.module.scss';

interface Props {
  children?: ReactNode
}

export default function HeroContainer({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
