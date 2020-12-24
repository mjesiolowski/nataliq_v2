import { v4 as uuidv4 } from 'uuid';
import {
  getAllSlugs,
  getCollectionImages,
} from '../../lib/collection';
import Image from '../../components/Image';

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
    (imageData) => {
      const {
        alt,
        title,
        desktopImage,
        tabletImage,
        mobileImage,
      } = imageData;
      return (
        <Image
          key={uuidv4()}
          alt={alt}
          title={title}
          desktopImage={desktopImage}
          tabletImage={tabletImage}
          mobileImage={mobileImage}
        />
      );
    },
  );

  return (
    <>
      <div>
        Kolekcja
        {' '}
        {slug}
      </div>
      {renderCollectionImages(images)}
    </>
  );
}
