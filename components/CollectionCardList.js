import { useQuery } from '@apollo/react-hooks';
import { GET_COLLECTION_DETAILS } from '../lib/queries';
import Collection from './CollectionCard';

const CollectionCardList = () => {
  const { loading, data, error } = useQuery(GET_COLLECTION_DETAILS);

  const collection = data?.collectionCollection?.items || [];

  const filterCollection = (collectionList) => collectionList.filter(
    (collectionItem) => collectionItem.isSubcollection === false,
  );

  const renderCollection = (collectionList) => collectionList.map(({
    title,
    slug,
    isSubcollectionParent,
    mainImageDesktop,
    mainImageTablet,
    mainImageMobile,
  }) => (
    <Collection
      key={title}
      title={title}
      slug={slug}
      isSubcollectionParent={isSubcollectionParent}
      mainImageDesktop={mainImageDesktop}
      mainImageTablet={mainImageTablet}
      mainImageMobile={mainImageMobile}
    />
  ));

  const filteredCollection = filterCollection(collection);

  return (
    <div>
      <h1>Nasze kolekcje</h1>
      {loading && !data
        ? <h1>Ładowanie naszych kolekcji</h1>
        : renderCollection(filteredCollection)}
    </div>
  );
};

export default CollectionCardList;
