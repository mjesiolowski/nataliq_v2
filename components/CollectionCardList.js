import CollectionCard from './CollectionCard';

const CollectionCardList = ({ collectionCardDetailsList }) => {
  const renderCollectionCard = (collectionCardList) => collectionCardList?.map((({
    isMultipleCollection,
    mainImageDesktop,
    mainImageTablet,
    mainImageMobile,
    title,
    slug,
    hideOnHomepage,
  }) => {
    if (!hideOnHomepage) {
      return (
        <CollectionCard
          key={title}
          slug={slug}
          isMultipleCollection={isMultipleCollection}
          mainImageDesktop={mainImageDesktop}
          mainImageTablet={mainImageTablet}
          mainImageMobile={mainImageMobile}
          title={title}
        />
      );
    }

    return null;
  }
  ));

  return (
    <div>
      <h1>Nasze kolekcje</h1>
      {renderCollectionCard(collectionCardDetailsList)}
    </div>
  );
};

export default CollectionCardList;
