import { v4 as uuidv4 } from 'uuid';
import {
  getAllSlugs,
  getCollectionImages,
  getCollectionTitle,
} from '../../lib/collection';
import Image from '../../components/Image/Image';
import LinkButton from '../../components/LinkButton/LinkButton';
import { COLLECTION, COLLECTION_NO_IMAGES } from '../../constants';
import Footer from '../../components/Footer/Footer';
import withModal from '../../components/Modal/withModal';
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
  slug,
  images,
  collectionTitle,
}) {
  const shouldShowImages = Boolean(images.length);
  const renderCollectionImages = (imagesData) => imagesData.map(
    (imageData, index) => {
      const {
        alt,
        title,
        image,
      } = imageData;

      const ImageWithModal = withModal(Image);

      return (
        <ImageWithModal
          key={uuidv4()}
          index={index}
          alt={alt}
          title={title}
          image={image}
          images={images}
        />
      );
    },
  );

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
        {shouldShowImages ? (
          <div className={styles.collectionPhotosWrapper}>
            {renderCollectionImages(images)}
          </div>
        ) : <p className={styles.collectionNoImages}>{COLLECTION_NO_IMAGES}</p>}
      </main>
      <Footer />
    </section>
  );
}
