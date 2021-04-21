import { ChangeEvent, useState, useContext, FormEvent } from 'react';
import Image from 'next/image';
import { Input, SignFooter } from 'components';

import styles from './sign.module.scss';
import { FirebaseContext } from 'contexts/firebaseContext';
import Router from 'next/router';
import { signIn } from 'next-auth/client';

interface PageState {
  firstName?: string;
  email: string;
  password: string;
  error?: string;
}

export default function SignPage() {
  const [isSignInPageMode, setIsSignInPageMode] = useState(true);
  const [formInputs, setFormInputs] = useState<PageState>({ firstName: '', email: '', password: '', error: '' });
  const { firebase } = useContext(FirebaseContext);

  let isValid = false;
  if (isSignInPageMode) {
    isValid = formInputs.email !== '' && formInputs.password !== '';
  } else {
    isValid = formInputs.firstName !== '' && formInputs.email !== '' && formInputs.password !== '';
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      firstName?: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const firstName = target.firstName?.value;
    const email = target.email.value;
    const password = target.password.value;

    // setFormInputs({
    //   ...formInputs,
    //   email,
    //   password,
    // });

    if (isSignInPageMode) {
      handleSignIn({ email, password });
      return;
    }

    handleSignUp({ firstName, email, password });
  }

  async function handleSignIn({ email, password }: PageState) {
    try {
      const response = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      // await firebase.auth().signInWithEmailAndPassword(email, password);
      if(response) {
        Router.push('/browse');
      }
    } catch (error) {
      setFormInputs({ ...formInputs, password: '', error: error.message });
    }

    return;
  }

  async function handleSignUp({ firstName, email, password }: PageState) {
    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await result.user?.updateProfile({
        displayName: firstName,
        photoURL: `${Math.floor(Math.random() * 5) + 1}`,
      });

      Router.push('/browse');
    } catch (error) {
      setFormInputs({ ...formInputs, password: '', error: error.message });
    }
  }

  let signInAndUp;
  if (isSignInPageMode) {
    signInAndUp = (
      <p className={styles.signUp}>
        New here? <a onClick={() => setIsSignInPageMode(false)}>Sign Up</a>
      </p>
    );
  } else {
    signInAndUp = (
      <p className={styles.signUp}>
        Already have an account? <a onClick={() => setIsSignInPageMode(true)}>Sign In</a>
      </p>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src='/images/logo.svg' alt='Netflix logo' width={167} height={45} />
      </div>
      <div className={styles.inner}>
        <form onSubmit={handleSubmit}>
          <h1>Sign {isSignInPageMode ? 'In' : 'Up'}</h1>
          {!isValid && formInputs.error && <p className={styles.errorMessage}>{formInputs.error}</p>}
          <div className={styles.inputContainer}>
          {!isSignInPageMode && (
              <Input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={formInputs.firstName!}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFormInputs({ ...formInputs, firstName: e.target.value })}
              />
            )}
            <Input
              type='email'
              name='email'
              placeholder='Email or phone'
              value={formInputs.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFormInputs({ ...formInputs, email: e.target.value })}
            />
            <Input
              type='password'
              name='password'
              placeholder='Password'
              value={formInputs.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFormInputs({ ...formInputs, password: e.target.value })}
            />
          </div>
          <button className={styles.signIn} disabled={!isValid}>
            Sign {isSignInPageMode ? 'In' : 'Up'}
          </button>
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
          {signInAndUp}
          <p className={styles.learnMore}>
            This page is protected by Google reCAPTCHA to ensure that you is not a robot. <a href='#'>Learn more.</a>
          </p>
        </div>
      </div>
      <SignFooter />
    </div>
  );
}
