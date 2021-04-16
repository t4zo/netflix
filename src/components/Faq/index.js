import { FaqItem, OptInForm } from '../../components';
import styles from './faq.module.scss';

import FaqsData from '../../fixtures/faqs.json';

export default function Faq() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        {FaqsData.map((faq) => (
          <FaqItem key={faq.id} faq={faq} />
        ))}
        <OptInForm />
      </div>
    </div>
  );
}
