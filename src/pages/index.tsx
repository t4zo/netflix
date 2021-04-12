import { useState } from 'react';
import Layout from 'components/Layout';
import { Jumbotron, Footer, Faq } from 'components';

import jumboData from 'fixtures/jumbo.json';

export default function IndexPage() {
  const [isVisible, setIsVisible] = useState(true);

  function handleToggleFaq() {
    setIsVisible((isVisible) => !isVisible);
  }

  return (
    <Layout title='Netflix'>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} item={item} />
      ))}
      {isVisible && <Faq />}
      <Footer handleToggleFaq={handleToggleFaq} />
    </Layout>
  );
}
