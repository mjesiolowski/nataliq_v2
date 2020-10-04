import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_COLLECTIONS_SLUGS } from '../lib/queries';
import CollectionCard from './CollectionCard';

const CollectionCardList = () => {
  const { loading, data, error } = useQuery(GET_ALL_COLLECTIONS_SLUGS);

  const collection = data?.collectionCollection?.items || [];

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

  const filteredCollection = filterCollection(collection);

  return (
    <div>
      <h1>Nasze kolekcje</h1>
      {loading && !data
        ? <h1>Ładowanie naszych kolekcji</h1>
        : renderCollectionCard(filteredCollection)}
    </div>
  );
};

export default CollectionCardList;
