// import { getSession } from "next-auth/client";
import { useSession } from 'next-auth/client';
import Router from 'next/router';
import { useEffect } from 'react';

export default function BrowsePage() {
  const [session, loading] = useSession();

  useEffect(() => {
    if (!loading && !session) {
      Router.replace('/');
    }
  }, [loading]);

  if (loading || !session) {
    return <p style={{ textAlign: 'center' }}>Carregando...</p>;
  }

  return <p>a</p>;
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
