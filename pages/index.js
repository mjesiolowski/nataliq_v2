import CollectionCardList from '../components/CollectionCardList/CollectionCardList';
import About from '../components/About/About';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
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
    <Navbar />
    <CollectionCardList
      collectionCardDetailsList={collectionCardDetailsList}
    />
    <About
      aboutUsData={aboutUsData}
    />
    <Contact />
    <Footer />
  </>
);

export default App;
