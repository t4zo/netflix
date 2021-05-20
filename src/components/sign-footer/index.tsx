import styles from './sign-footer.module.scss';

export default function SignFooter() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerTitle}>
            Questions? Call <a href='tel:0800-761-4631'>0800-761-4631</a>
          </p>

          <ul className={styles.footerLinks}>
            <li className={styles.footerLinkItem}>
              <a className={styles.footerLink} href='https://help.netflix.com/support/412'>
                Frequent questions
              </a>
            </li>
            <li className={styles.footerLinkItem}>
              <a className={styles.footerLink} href='https://help.netflix.com'>
                Help center
              </a>
            </li>
            <li className={styles.footerLinkItem}>
              <a className={styles.footerLink} href='https://help.netflix.com/legal/termsofuse'>
                Terms of use
              </a>
            </li>
            <li className={styles.footerLinkItem}>
              <a className={styles.footerLink} href='https://help.netflix.com/legal/privacy'>
                Privacy
              </a>
            </li>
            <li className={styles.footerLinkItem}>
              <a className={styles.footerLink} href='#'>
                Cookie preferences
              </a>
            </li>
            <li className={styles.footerLinkItem}>
              <a className={styles.footerLink} href='https://help.netflix.com/legal/corpinfo'>
                Corporate information
              </a>
            </li>
          </ul>

          <select name='language' className={styles.language}>
            <option value='en-US'>English</option>
            <option value='pt-BR'>Português</option>
          </select>
        </div>
      </footer>
  )
}
