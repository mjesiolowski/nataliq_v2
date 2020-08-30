import gql from 'graphql-tag';
import { apolloClient as client } from './apollo';

const getSlugDetails = async () => {
  const response = await client.query({
    query: gql`
  query Collection {
    collectionCollection {
      items {
        slug
        isSubcollection
      }
    }
  }
`,
  });

  return response.data.collectionCollection.items;
};

export default getSlugDetails;
