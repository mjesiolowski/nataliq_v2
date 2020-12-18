import Link from 'next/link';
import {
  MOBILE_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  COLLECTION_DEFAULT_ALT_TEXT,
  COLLECTION_HREF,
  COLLECTIONS_HREF,
  COLLECTION_CARD_LINK_TEXT,
} from '../constants';

const CollectionCard = ({
  isMultipleCollection: isMultiple,
  mainImageDesktop,
  mainImageTablet,
  mainImageMobile,
  title,
  slug,
}) => {
  const desktopImg = mainImageDesktop?.url;
  const tabletImg = mainImageTablet?.url;
  const mobileImg = mainImageMobile?.url;
  const imgAlt = mainImageDesktop?.description || COLLECTION_DEFAULT_ALT_TEXT;
  const collectionTitle = title;
  const isMultipleCollection = isMultiple || false;

  const collectionLink = `/${isMultipleCollection ? COLLECTIONS_HREF : COLLECTION_HREF}${slug}`;

  return (
    <div>
      <h2>{collectionTitle}</h2>

      <picture>
        <source
          media={`(max-width: ${MOBILE_BREAKPOINT})`}
          srcSet={mobileImg}
        />
        <source
          media={`(max-width: ${DESKTOP_BREAKPOINT})`}
          srcSet={tabletImg}
        />
        <img
          src={desktopImg}
          alt={imgAlt}
        />
      </picture>

      <Link href={collectionLink}>
        <a>{COLLECTION_CARD_LINK_TEXT}</a>
      </Link>

    </div>
  );
};
export default CollectionCard;
