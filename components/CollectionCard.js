import Link from 'next/link';
import {
  MOBILE_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  COLLECTION_DEFAULT_ALT_TEXT,
  COLLECTION_HREF,
  SUBCOLLECTION_PREFIX,
  COLLECTION_CARD_LINK_TEXT,
} from '../constants';

const CollectionCard = ({
  title,
  slug,
  isSubcollectionParent,
  mainImageDesktop,
  mainImageTablet,
  mainImageMobile,
}) => {
  const desktopImg = mainImageDesktop?.url;
  const tabletImg = mainImageTablet?.url;
  const mobileImg = mainImageMobile?.url;

  const imgAlt = mainImageDesktop?.description;

  const collectionLink = `/${isSubcollectionParent ? SUBCOLLECTION_PREFIX : ''}${COLLECTION_HREF}${slug}`;
  console.log({ collectionLink });
  return (
    <div>
      <h2>{title}</h2>

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
          alt={imgAlt || COLLECTION_DEFAULT_ALT_TEXT}
        />
      </picture>

      <Link href={collectionLink}>
        {/* TODO SHOULD FETCH FROM CMS? */}
        <a>{COLLECTION_CARD_LINK_TEXT}</a>
      </Link>

    </div>
  );
};
export default CollectionCard;
