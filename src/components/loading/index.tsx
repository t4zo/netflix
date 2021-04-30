import Image from 'next/image';
import styles from './loading.module.scss';

interface Props {
  src: string | null | undefined;
}

export default function Loading({ src }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <Image src={`/images/users/${src}.png`} width={75} height={75} />
      </div>
    </div>
  );
}
