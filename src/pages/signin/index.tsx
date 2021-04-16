import { useState } from 'react';
import Image from 'next/image';
import { Inputs, SignFooter } from 'components';

import styles from './signin.module.scss';

export default function SignInPage() {
  const [formInputs, setFormInputs] = useState({ email: '', password: '', error: '' });

  const isValid = formInputs.email !== '' && formInputs.password !== '';

  function handleSubmit(e: any) {
    e.preventDefault();

    // firebase
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src='/images/logo.svg' alt='Netflix logo' width={167} height={45} />
      </div>
      <div className={styles.inner}>
        <form>
          <h1>Sign In</h1>
          {!isValid && <p>{formInputs.error}</p>}
          <Inputs />
          <button className={styles.signIn}>Sign In</button>
          <div className={styles.actions}>
            <div className={styles.rememberMe}>
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe'>Remember me</label>
            </div>
            <a href='#'>Need help?</a>
          </div>
        </form>
        <div className={styles.formFooter}>
          <p className={styles.connectFacebook}>Connect with Facebook</p>
          <p className={styles.signUp}>
            New here? <a href='#'>Sign Up</a>
          </p>
          <p className={styles.learnMore}>
            This page is protected by Google reCAPTCHA to ensure that you is not a robot. <a href='#'>Learn more.</a>
          </p>
        </div>
      </div>
      <SignFooter />
    </div>
  );
}
