import Image from 'next/image';
import { useRef } from 'react';
import styles from './opt-in-form.module.scss';

export default function OptInForm() {
  const emailRef = useRef<HTMLAnchorElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    // const email = e.target.email.value;
    const email = emailRef.current?.text;
    console.log(email);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type='email' id='email' name='email' placeholder='Email address' />
        <div className={styles.buttonContainer}>
          <a ref={emailRef} onClick={handleSubmit}>
            Try it now
          </a>
          <Image src='/images/icons/chevron-right.png' alt='Right Arrow' width={20} height={20} />
        </div>
      </form>
      <div className={styles.message}>Ready to watch? Enter your email to create or restart your membership</div>
    </div>
  );
}
