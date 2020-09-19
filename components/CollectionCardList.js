import { useQuery } from '@apollo/react-hooks';
import { GET_COLLECTION_TITLE_AND_MAIN_IMAGES } from '../lib/queries';
import Collection from './CollectionCard';

const CollectionCardList = () => {
  const { loading, data, error } = useQuery(GET_COLLECTION_TITLE_AND_MAIN_IMAGES);

  const collection = data?.collectionCollection?.items;

  const renderCollection = (collectionList) => collectionList.map(({
    title, mainImageDesktop, mainImageTablet, mainImageMobile,
  }) => (
    <Collection
      key={title}
      title={title}
      mainImageDesktop={mainImageDesktop}
      mainImageTablet={mainImageTablet}
      mainImageMobile={mainImageMobile}
    />
  ));

  return (
    <div>
      <h1>Nasze kolekcje</h1>
      {loading && !data
        ? <h1>Ładowanie naszych kolekcji</h1>
        : renderCollection(collection)}
    </div>
  );
};

export default CollectionCardList;
