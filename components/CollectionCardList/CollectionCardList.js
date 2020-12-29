import CollectionCard from '../CollectionCard/CollectionCard';

const CollectionCardList = ({ collectionCardDetailsList }) => {
  const renderCollectionCard = (collectionCardList) => collectionCardList?.map((({
    isMultipleCollection,
    title,
    slug,
    collectionMainImage,
    hideOnHomepage,
  }) => {
    if (!hideOnHomepage) {
      return (
        <CollectionCard
          key={title}
          slug={slug}
          collectionMainImage={collectionMainImage}
          isMultipleCollection={isMultipleCollection}
          title={title}
        />
      );
    }

    return null;
  }
  ));

  return (
    <div id='collection'>
      <h1>Nasze kolekcje</h1>
      {renderCollectionCard(collectionCardDetailsList)}
    </div>
  );
};

export default CollectionCardList;
