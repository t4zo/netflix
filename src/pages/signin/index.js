import Image from 'next/image';
import styles from './signin.module.scss';

export default function SignInPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src='/images/logo.svg' alt='Netflix logo' width={167} height={45} />
      </div>
      <div className={styles.inner}>
        <form>
          <h1>Sign In</h1>
          <div className={styles.inputContainer}>
            <input type='text' name='login' placeholder='Email or phone' className={styles.login} />
            <input type='text' name='password' placeholder='Password' className={styles.password} />
          </div>
          <button className={styles.signIn}>Sign In</button>
          <div className={styles.actions}>
            <div className={styles.rememberMe}>
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe'>Remember me</label>
            </div>
            <a href='#'>Need help?</a>
          </div>
        </form>
        <section className={styles.formFooter}>
          <p className={styles.connectFacebook}>Connect with Facebook</p>
          <p className={styles.signUp}>
            New here? <a href='#'>Sign Up</a>
          </p>
          <p className={styles.learnMore}>
            This page is protected by Google reCAPTCHA to ensure that you is not a robot. <a href='#'>Learn more.</a>
          </p>
        </section>
      </div>
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
            <option value='pt-BR'>Português</option>
            <option value='en-US'>English</option>
          </select>
        </div>
      </footer>
    </div>
  );
}
