import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import {
  MOBILE_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  COLLECTION_DEFAULT_ALT_TEXT,
  COLLECTION_HREF,
  COLLECTIONS_HREF,
  COLLECTION_CARD_LINK_TEXT,
} from '../constants';
import { GET_COLLECTION_CARD_DETAILS } from '../lib/queries';

const CollectionCard = ({
  slug,
}) => {
  const { loading, data, error } = useQuery(GET_COLLECTION_CARD_DETAILS, { variables: { slug } });

  const collection = data?.collectionCollection?.items[0] || [];

  const desktopImg = collection?.mainImageDesktop?.url;
  const tabletImg = collection?.mainImageTablet?.url;
  const mobileImg = collection?.mainImageMobile?.url;
  const imgAlt = collection?.mainImageDesktop?.description || COLLECTION_DEFAULT_ALT_TEXT;
  const collectionTitle = collection?.title;
  const isMultipleCollection = collection?.isMultipleCollection || false;

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
