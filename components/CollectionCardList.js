import CollectionCard from './CollectionCard';

const CollectionCardList = ({ collectionSlugs }) => {
  const filterCollection = (collectionList) => collectionList.filter(
    (collectionItem) => collectionItem.hideOnHomepage === false,
  );

  const renderCollectionCard = (collectionList) => collectionList.map(({
    slug,
  }) => (
    <CollectionCard
      key={slug}
      slug={slug}
    />
  ));

  const filteredCollection = filterCollection(collectionSlugs);

  return (
    <div>
      <h1>Nasze kolekcje</h1>
      {renderCollectionCard(filteredCollection)}
    </div>
  );
};

export default CollectionCardList;
