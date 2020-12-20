import CollectionCard from '../components/CollectionCard';

const renderCollectionCard = (collectionCardList) => collectionCardList.map((({
  isMultipleCollection,
  mainImageDesktop,
  mainImageTablet,
  mainImageMobile,
  title,
  slug,
}) => (
  <CollectionCard
    key={title}
    slug={slug}
    isMultipleCollection={isMultipleCollection}
    mainImageDesktop={mainImageDesktop}
    mainImageTablet={mainImageTablet}
    mainImageMobile={mainImageMobile}
    title={title}
  />
)));

export default renderCollectionCard;
