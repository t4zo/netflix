import Layout from 'components/Layout';
import Jumbotron from 'components/Jumbotron';

import jumboData from 'fixtures/jumbo.json';

export default function IndexPage() {
  return (
    <Layout title='Home | Netflix'>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} item={item} direction={item.direction} />
        ))}
      </Jumbotron.Container>
    </Layout>
  );
}
