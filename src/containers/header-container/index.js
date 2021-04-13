import styles from './header-container.module.scss';

export default function HeaderContainer({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
