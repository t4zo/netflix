import { Input } from 'components';

import styles from './inputs.module.scss';

export default function Inputs() {
  return (
    <div className={styles.container}>
      <Input type='text' name='login' placeholder='Email or phone' />
      <Input type='text' name='password' placeholder='Password' />
    </div>
  );
}
