import CollectionCardList from '../components/CollectionCardList';
import About from '../components/About';
import { getAllSlugs, getCollectionCardDetails, getAboutUs } from '../lib/collection';

export async function getStaticProps() {
  const collectionSlugs = await getAllSlugs();
  const slugList = collectionSlugs.map(({ slug }) => slug);
  const collectionCardDetailsList = await getCollectionCardDetails(slugList);
  const aboutUsData = await getAboutUs();

  return {
    props: {
      collectionCardDetailsList,
      aboutUsData,
    },
  };
}

const App = ({ collectionCardDetailsList, aboutUsData }) => (
  <>
    <CollectionCardList
      collectionCardDetailsList={collectionCardDetailsList}
    />
    <About
      aboutUsData={aboutUsData}
    />
  </>
);

export default App;
