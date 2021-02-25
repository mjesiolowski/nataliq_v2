import { v4 as uuidv4 } from 'uuid';
import {
  getAllSlugs,
  getCollectionImages,
  getCollectionTitle,
} from '../../lib/collection';
import ImageWithModal from '../../components/ImageWithModal/ImageWithModal';
import Image from '../../components/Image/Image';
import LinkButton from '../../components/LinkButton/LinkButton';
import { COLLECTION, COLLECTION_NO_IMAGES } from '../../constants';
import Footer from '../../components/Footer/Footer';
import withModal from '../../components/ImageWithModal/withModal';

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
        desktopImage,
        tabletImage,
        mobileImage,
      } = imageData;

      const ImageWithModal2 = withModal(Image);

      return (
        <ImageWithModal2
          key={uuidv4()}
          index={index}
          alt={alt}
          title={title}
          image={desktopImage}
          images={images}
        />
      );
    },
  );

  return (
    <section className='collectionSection'>
      <div className='collectionTitle'>
        {COLLECTION}
        {' '}
        {collectionTitle}
      </div>
      <main className='collectionContent'>
        <LinkButton
          href='/#collections'
          content='Powrót'
          className='backLink'
        />
        {shouldShowImages ? (
          <div className='collectionPhotosWrapper'>
            {renderCollectionImages(images)}
          </div>
        ) : <p className='collectionNoImages'>{COLLECTION_NO_IMAGES}</p>}

        {/* <Modal images={images} index={0} /> */}

        {/* {isModalActive && <div>MODAL ACTIVE</div>} */}
      </main>
      <Footer />
    </section>
  );
}
