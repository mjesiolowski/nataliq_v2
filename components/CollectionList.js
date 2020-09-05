import { useQuery } from '@apollo/react-hooks';
import { GET_COLLECTION_TITLE_AND_MAIN_IMAGES } from '../lib/queries';

const CollectionList = () => {
  const { loading, data, error } = useQuery(GET_COLLECTION_TITLE_AND_MAIN_IMAGES);

  return (
    <div>
      <h1>Recent Posts</h1>
      {loading && !data
        ? <h1>loading . . .</h1>
        : data.collectionCollection.items.map(({
          title, mainImageDesktop, mainImageTablet, mainImageMobile,
        }) => (
          console.log(
            title,
            mainImageDesktop?.description,
            mainImageDesktop?.url,
            mainImageTablet?.url,
            mainImageMobile?.url,
          )
        ))}
    </div>
  );
};

export default CollectionList;
