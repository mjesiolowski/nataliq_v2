import {
  getAllSlugs,
  getCollectionImages,
  getCollectionTitle,
} from '../../lib/collection';
import LinkButton from '../../components/LinkButton/LinkButton';
import { COLLECTION, COLLECTION_NO_IMAGES } from '../../constants';
import Footer from '../../components/Footer/Footer';
import CollectionImages from '../../components/CollectionImages/CollectionImages';
import styles from '../../styles/pages.module.scss';

export async function getStaticPaths() {
  const slugs = await getAllSlugs();

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
  const images = await getCollectionImages(slug);
  const collectionTitle = await getCollectionTitle(slug);

  return {
    props: {
      slug,
      images,
      collectionTitle,
    },
  };
}

export default function Collection({
  images,
  collectionTitle,
}) {
  const shouldShowImages = Boolean(images.length);

  return (
    <section className={styles.collectionSection}>
      <div className={styles.collectionTitle}>
        {COLLECTION}
        {' '}
        {collectionTitle}
      </div>
      <main className={styles.collectionContent}>
        <LinkButton
          href='/#collections'
          content='Powrót'
          className='backLink'
        />
        {shouldShowImages
          ? <CollectionImages images={images} />
          : <p className={styles.collectionNoImages}>{COLLECTION_NO_IMAGES}</p>}
      </main>
      <Footer />
    </section>
  );
}
