import { useState } from 'react';
import { Layout, Header, Jumbotron, Footer, Faq } from 'components';

import jumboData from 'fixtures/jumbo.json';
import { getSession } from 'next-auth/client';

export default function IndexPage() {
  const [isVisible, setIsVisible] = useState(true);
  // const [session, loading] = useSession();

  // useEffect(() => {
  //   if (!loading && session) {
  //     Router.replace('/browse');
  //   }
  // }, [loading]);

  function handleToggleFaq() {
    setIsVisible((isVisible) => !isVisible);
  }

  return (
    <Layout title='Netflix'>
      <Header />
      {jumboData.map((item) => (
        <Jumbotron key={item.id} item={item} />
      ))}
      {isVisible && <Faq />}
      <Footer handleToggleFaq={handleToggleFaq} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/browse',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}