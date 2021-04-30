import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/client';
import styles from './select-profile.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  handleUserProfile: () => void;
}

export default function SelectProfile({ handleUserProfile }: Props) {
  const [session, loading] = useSession();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <div className={styles.container}>
      <h1>Who's watching?</h1>
      <ul className={styles.users}>
        <li className={styles.user} onClick={handleUserProfile}>
          <Image
            src={initialLoading ? '/images/misc/loading.gif' : `/images/users/${session?.user?.image}.png`}
            alt={`User Profile from ${session?.user?.name}`}
            width={320}
            height={320}
          />
          <p>{session?.user?.name}</p>
        </li>
        <li className={styles.user}>
          <Image src='/images/users/3.png' alt='User Profile' width={320} height={320} />
          <p>Add profile</p>
        </li>
      </ul>
      <div className={styles.action}>
        <Link href='#'>
          <a>Manage Profiles</a>
        </Link>
      </div>
    </div>
  );
}
