import { v4 as uuidv4 } from 'uuid';
import {
  getAllSlugs,
  getCollectionImages,
} from '../../lib/collection';
import ImageWithModal from '../../components/ImageWithModal/ImageWithModal';

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

  return {
    props: {
      slug,
      images,
    },
  };
}

export default function Collection({
  slug,
  images,
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
      {/* <Modal images={images} index={0} /> */}
      <div>
        Kolekcja
        {' '}
        {slug}
      </div>
      {renderCollectionImages(images)}
      {/* {isModalActive && <div>MODAL ACTIVE</div>} */}
    </>
  );
}
