import gql from 'graphql-tag';

const GET_COLLECTION = gql`
  query Collection {
    collectionCollection {
      items {
        sys {
          id
        }
        mainImage {
          url
        }
        collectionImageCollection {
          items {
            title
            url
          }
        }
        title
        slug
        isSubcollection  
      }
    }
  }
`;

export { GET_COLLECTION };
