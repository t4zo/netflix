import Layout from 'components/Layout';
import { Jumbotron, Footer } from 'components';

import jumboData from 'fixtures/jumbo.json';

export default function IndexPage() {
  return (
    <Layout title='Netflix'>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} item={item} />
      ))}
      <Footer />
    </Layout>
  );
}
