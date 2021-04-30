import { useEffect, useState } from 'react';
import Router from 'next/router';
import { DefaultSession } from 'next-auth';
import { useSession } from 'next-auth/client';

import { useContent } from 'hooks';
import genreFilter from 'utils/genre-filter';
import { SelectProfile, Loading } from 'components';

export default function BrowsePage() {
  const [selectProfileLoading, setSelectProfileLoading] = useState(false);
  const [profile, setProfile] = useState<DefaultSession>();
  const [session, loading] = useSession();
  const { films } = useContent('films');
  const { series } = useContent('series');
  const slides = genreFilter({ series, films });
  console.log(slides);

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

  return profile ? <p>Done</p> : <SelectProfile handleUserProfile={handleUserProfile} />;
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
