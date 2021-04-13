import { ReactNode } from 'react';
import styles from './header-container.module.scss';

interface Props {
  children: ReactNode
}

export default function HeaderContainer({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
