import {
  getAllSlugs,
  getSubcollectionsSlugs,
  getCollectionCardDetails,
  getCollectionTitle,
} from '../../lib/collection';
import SubcollectionCards from '../../components/SubcollectionCards/SubcollectionCards';
import LinkButton from '../../components/LinkButton/LinkButton';
import { COLLECTIONS, BACK_TO_COLLECTIONS } from '../../constants';
import Footer from '../../components/Footer/Footer';
import styles from '../../styles/pages.module.scss';

export async function getStaticPaths() {
  const slugs = await getAllSlugs({ isMultipleCollection: true });

  const paths = slugs.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const subcollectionsSlugs = await getSubcollectionsSlugs(slug);
  const subcolecionCardsData = await getCollectionCardDetails(subcollectionsSlugs);
  const collectionTitle = await getCollectionTitle(slug);

  return {
    props: {
      subcolecionCardsData,
      collectionTitle,
    },
  };
}

export default function Collections({
  subcolecionCardsData,
  collectionTitle,
}) {
  return (
    <section className={styles.multipleCollectionSection}>
      <div className={styles.collectionTitle}>
        {COLLECTIONS}
        {' '}
        {collectionTitle}
      </div>
      <main className={styles.multipleCollectionContent}>
        <LinkButton
          href='/#collections'
          content={BACK_TO_COLLECTIONS}
          stylesName='backLink'
        />
        <SubcollectionCards
          subcolecionCardsData={subcolecionCardsData}
        />
      </main>
      <Footer />
    </section>
  );
}
