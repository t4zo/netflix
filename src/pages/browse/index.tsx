import { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import styles from './signin.module.scss';
import { useAuthListener, useContent } from 'hooks';
import genreFilter from 'utils/genre-filter';

export default function BrowsePage() {
  const [session, loading] = useSession();
  const { user } = useAuthListener();
  const { films } = useContent('films');
  const { series } = useContent('series');
  const slides = genreFilter({ series, films });
  console.log(slides)

  useEffect(() => {
    if (!loading && !session) {
      Router.replace('/');
    }
  }, [loading]);

  if (loading || !session) {
    return <p style={{ textAlign: 'center' }}>Carregando...</p>;
  }

  // if (!user) {
  //   return <p>a</p>;
  // }

  return (
    <div className={styles.container}>
      <h1>Who's watching?</h1>
      <div className={styles.users}>
        <div className={styles.user}>
          <Image src={`/images/users/${user?.photoURL}.png`} alt={`User Profile from ${user?.displayName}`} width={320} height={320} />
          <p>{user?.displayName}</p>
        </div>
        <div className={styles.user}>
          <Image src='/images/users/3.png' alt='User Profile' width={320} height={320} />
          <p>Add profile</p>
        </div>
      </div>
      <div className={styles.action}>
        <Link href='#'>
          <a>Manage Profiles</a>
        </Link>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context: any) {
//   const session = await getSession({ req: context.req });

//   if(!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       },
//     };
//   }

//   return {
//     props: {
//       session
//     }
//   }
// }
