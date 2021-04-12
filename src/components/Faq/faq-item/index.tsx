import { useState } from 'react';
import { IFaqs } from 'interfaces';
import styles from './faq-item.module.scss';
import Image from 'next/image';

interface Props {
  faq: IFaqs;
}

export default function AccordionItem({ faq }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  // let icon;
  // if(isVisible) {
  //   icon = <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  // } else {
  //   icon = <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
  // }

  return (
    <div className={styles.item}>
      <div className={styles.header} onClick={() => setIsVisible((visible) => !visible)}>
        <h4 className={styles.title}>{faq.header}</h4>
        {isVisible ? (
          <Image src='/images/icons/close-slim.png' alt='Close Header' width={20} height={20} />
        ) : (
          <Image src='/images/icons/add.png' alt='Open Header' width={20} height={20} />
        )}
      </div>
      {isVisible && <div className={styles.body}>{faq.body}</div>}
    </div>
  );

  {
    /* <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.inner}>
            <header onClick={() => setIsVisible((isVisible) => !isVisible)}>
              <h1 className={styles.title}>Title</h1>
            </header>
            <div className={styles.item}>
              <div className={styles.body}>Test</div>
            </div>
          </div>
        </div>
      </div> */
  }
}
