import { useState } from 'react';
import Link from 'next/link';
import { DefaultSession } from 'next-auth';
import { getSession, signOut, useSession } from 'next-auth/client';

import { SelectProfile, Loading, Header, Search } from 'components';
import { HeaderContainer } from 'containers';

import { SERIES, FILMS } from '../../constants';
import { SeriesContent, FilmsContent } from 'contents';
import styles from './browse.module.scss';

export default function BrowsePage() {
  const [selectProfileLoading, setSelectProfileLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [contentType, setContentType] = useState(SERIES)
  const [dropDownActive, setDropDownActive] = useState(false);
  const [profile, setProfile] = useState<DefaultSession>();
  const [session, _] = useSession();

  // useEffect(() => {
  //   if (!loading && !session) {
  //     Router.replace('/');
  //   }
  // }, [loading]);

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
    <>
      <HeaderContainer>
        <Header browseHeader={true} setContentType={setContentType}>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Link href='/infantil'>
            <a className={styles.primaryNavigationItem}>Infantil</a>
          </Link>
          <div className={styles.profile}>
            <img
              src={`images/users/${profile.user?.image!}.png`}
              className={styles.profilePicture}
              onClick={() => setDropDownActive((prevState) => !prevState)}></img>
            {dropDownActive && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownItem}>
                  <img src={`images/users/${profile.user?.image!}.png`} className={styles.profilePicture}></img>
                  <span>Profile</span>
                </div>
                <div className={styles.dropdownItem} onClick={async () => await signOut()}>
                  <span>Sign out</span>
                </div>
                {/* <Link href='/'> */}
                {/* <img src={`images/users/${profile.user?.image!}.png`} className={styles.profilePicture}></img> */}
                {/* <a className={styles.dropdownItem} onClick={handleSignOut}>Sign out</a> */}
                {/* </Link> */}
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
          <div className={styles.actionsWrapper}>
            <Link href='/play'>
              <div className={styles.play}>
                <svg viewBox='0 0 24 24' height='30px' width='30px'>
                  <path d='M6 4l15 8-15 8z' fill='currentColor'></path>
                </svg>
                <a>Play</a>
              </div>
            </Link>
            <Link href='/info'>
              <a className={styles.moreInfo}>More info</a>
            </Link>
          </div>
        </div>
      </HeaderContainer>
      {contentType === SERIES && <SeriesContent />}
      {contentType === FILMS && <FilmsContent />}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
