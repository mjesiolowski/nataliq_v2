import CollectionCardList from '../components/CollectionCardList/CollectionCardList';
import About from '../components/About/About';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import LinkButton from '../components/LinkButton/LinkButton';
import Hero from '../components/Hero/Hero';
import { getAllSlugs, getCollectionCardDetails, getAboutUs } from '../lib/collection';
import styles from '../styles/pages.module.scss';
import { BACK_TO_TOP } from '../constants';

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
  <div className={styles.container}>
    <Navbar />
    <Hero />
    <CollectionCardList
      collectionCardDetailsList={collectionCardDetailsList}
    />
    <About
      aboutUsData={aboutUsData}
    />
    <Contact />
    <LinkButton
      href='/#hero'
      content={BACK_TO_TOP}
      stylesName='backLink'
    />
    <Footer />
  </div>
);

export default App;
