import CollectionCardList from '../components/CollectionCardList';
import About from '../components/About';
import { getAllSlugs, getCollectionCardDetails } from '../lib/collection';

export async function getStaticProps() {
  const collectionSlugs = await getAllSlugs();
  const slugList = collectionSlugs.map(({ slug }) => slug);
  const collectionCardDetailsList = await getCollectionCardDetails(slugList);

  return {
    props: {
      collectionSlugs,
      collectionCardDetailsList,
    },
  };
}

const App = ({ collectionCardDetailsList }) => (
  <>
    <CollectionCardList
      collectionCardDetailsList={collectionCardDetailsList}
    />
    {/* Pass down props do About */}
    <About />
  </>
);

export default App;
