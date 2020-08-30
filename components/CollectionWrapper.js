import { useQuery } from '@apollo/react-hooks';
import { GET_SLUG } from '../lib/queries';

const CollectionWrapper = () => {
  const { loading, data, error } = useQuery(GET_SLUG);

  return (
    <div>
      <h1>Recent Posts</h1>
      {loading && !data
        ? <h1>loading . . .</h1>
        : data.collectionCollection.items.map((postObj) => (
          console.log({ postObj })
        ))}
    </div>
  );
};

export default CollectionWrapper;
