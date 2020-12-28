import Link from 'next/link';
import {
  COLLECTION_DEFAULT_ALT_TEXT,
  COLLECTION_HREF,
  COLLECTIONS_HREF,
  COLLECTION_CARD_LINK_TEXT,
} from '../../constants';
import Image from '../Image/Image';

const CollectionCard = ({
  isMultipleCollection: isMultiple,
  collectionMainImage,
  title,
  slug,
}) => {
  const { desktopImage, tabletImage, mobileImage } = collectionMainImage;
  const alt = collectionMainImage?.alt || COLLECTION_DEFAULT_ALT_TEXT;
  const collectionTitle = title;
  const isMultipleCollection = isMultiple || false;

  const collectionLink = `/${isMultipleCollection ? COLLECTIONS_HREF : COLLECTION_HREF}${slug}`;

  return (
    <div>
      <h2>{collectionTitle}</h2>

      <Image
        alt={alt}
        title={title}
        desktopImage={desktopImage}
        tabletImage={tabletImage}
        mobileImage={mobileImage}
      />

      <Link href={collectionLink}>
        <a>{COLLECTION_CARD_LINK_TEXT}</a>
      </Link>

    </div>
  );
};
export default CollectionCard;
