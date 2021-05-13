import { useEffect, useState } from 'react';
import Router from 'next/router';
import { DefaultSession } from 'next-auth';
import { signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

// import { useContent } from 'hooks';
// import genreFilter from 'utils/genre-filter';
import { SelectProfile, Loading, Header } from 'components';
import { HeaderContainer } from 'containers';

import styles from './signin.module.scss';

export default function BrowsePage() {
  const [selectProfileLoading, setSelectProfileLoading] = useState(false);
  const [dropDownActive, setDropDownActive] = useState(false);
  const [profile, setProfile] = useState<DefaultSession>();
  const [session, loading] = useSession();
  // const { films } = useContent('films');
  // const { series } = useContent('series');
  // const slides = genreFilter({ series, films });
  // console.log(slides);

  useEffect(() => {
    if (!loading && !session) {
      Router.replace('/');
    }
  }, [loading]);

  function handleUserProfile() {
    const user = {
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
    };

    setSelectProfileLoading(true);

    setTimeout(() => {
      setProfile({
        user,
        expires: session?.expires,
      });
      setSelectProfileLoading(false);
    }, 2000);
  }

  if (selectProfileLoading) {
    return <Loading src={session?.user?.image} />;
  }

  if (!profile) {
    return <SelectProfile handleUserProfile={handleUserProfile} />;
  }

  return (
    <HeaderContainer>
      <Header browseHeader={true}>
        <Link href='/infantil'>
          <a className={styles.primaryNavigationItem}>Infantil</a>
        </Link>
        <div className={styles.profile}>
          <img src={`images/users/${profile.user?.image!}.png`} className={styles.profilePicture} onClick={() => setDropDownActive(prevState => !prevState)}></img>
          {dropDownActive && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownItem}>
                <img src={`images/users/${profile.user?.image!}.png`} className={styles.profilePicture}></img>
                <span>Profile</span>
              </div>
              <div className={styles.dropdownItem} onClick={() => signOut()}>
                {/* <img src={`images/users/${profile.user?.image!}.png`} className={styles.profilePicture}></img> */}
                <span>Sign out</span>
              </div>
            </div>
          )}
        </div>
      </Header>
      <div className={styles.logoAndText}>
        <h1 className={styles.title}>Joker</h1>
        <p className={styles.synopsis}>
          In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution
          and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
        </p>
        <Link href='/play'>
          <a className={styles.watch}>Watch</a>
        </Link>
        <Link href='/info'>
          <a className={styles.moreInfo}>More info</a>
        </Link>
      </div>
    </HeaderContainer>
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
