import { useState } from 'react';
import Link from 'next/link';
import { getSession } from 'next-auth/client';
import { Layout, Header, Jumbotron, Footer, Faq, OptInForm } from 'components';
import { HeroContainer } from 'containers';

import jumboData from 'fixtures/jumbo.json';

import styles from './styles.module.scss';

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
      <HeroContainer>
        <Header>
          <select name='language' className={styles.language}>
            <option value='en-US'>English</option>
            <option value='pt-BR'>Português</option>
          </select>
          <Link href='/sign'>
            <a className={styles.signIn}>Sign In</a>
          </Link>
        </Header>
        <section className={styles.inner}>
          <h1>Unlimited films, TV programmes and more.</h1>
          <p>Watch anywhere. Cancel any time.</p>
          <OptInForm />
        </section>
      </HeroContainer>
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
