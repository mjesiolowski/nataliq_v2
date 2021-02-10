import { v4 as uuidv4 } from 'uuid';
import {
  getAllSlugs,
  getCollectionImages,
  getCollectionTitle,
} from '../../lib/collection';
import ImageWithModal from '../../components/ImageWithModal/ImageWithModal';
import LinkButton from '../../components/LinkButton/LinkButton';
import { COLLECTION } from '../../constants';
import Footer from '../../components/Footer/Footer';

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
  const renderCollectionImages = (imagesData) => imagesData.map(
    (imageData, index) => {
      const {
        alt,
        title,
        desktopImage,
        tabletImage,
        mobileImage,
      } = imageData;
      return (
        <ImageWithModal
          key={uuidv4()}
          index={index}
          alt={alt}
          title={title}
          desktopImage={desktopImage}
          tabletImage={tabletImage}
          mobileImage={mobileImage}
          images={images}
        />
      );
    },
  );

  return (
    <>
      <div className='collectionTitle'>
        {COLLECTION}
        {' '}
        {collectionTitle}
      </div>
      <section className='collectionSection'>
        <LinkButton
          href='/#collections'
          content='Powrót'
          className='backLink'
        />
        <div className='collectionPhotosWrapper'>
          {renderCollectionImages(images)}
        </div>
        {/* <Modal images={images} index={0} /> */}

        {/* {isModalActive && <div>MODAL ACTIVE</div>} */}
      </section>
      <Footer />
    </>
  );
}
