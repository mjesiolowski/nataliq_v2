import CollectionCardList from '../components/CollectionCardList';
import About from '../components/About';
import {
  getAllSlugs,
} from '../lib/collection';
// import withApollo, { apolloClient } from '../lib/apollo';

export async function getStaticProps() {
  const collectionSlugs = await getAllSlugs();

  return {
    props: {
      collectionSlugs,
    },
  };
}

const App = ({ collectionSlugs }) => (
  <>
    <CollectionCardList
      collectionSlugs={collectionSlugs}
    />
    {/* Pass down props do About */}
    <About />
  </>
);

export default App;
