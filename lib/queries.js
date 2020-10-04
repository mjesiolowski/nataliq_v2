import gql from 'graphql-tag';

const GET_COLLECTION_IMAGES = gql`
  query ($slug: String) {
    collectionCollection (where: {slug: $slug}) {
      items {
        collectionImagesCollection {
          items {
            title
            description
            url
          }
        }
      }
    }
  }
`;

const GET_ALL_COLLECTIONS_SLUGS = gql`
query ($isMultipleCollection: Boolean) {
  collectionCollection (where: {isMultipleCollection: $isMultipleCollection}) {
    items {
      slug
      hideOnHomepage
    }
  }
}
`;

const GET_SUBCOLLECTION_SLUGS = gql`
query ($slug: String) {
  collectionCollection (where: {slug: $slug}) {
    items {
      subcollectionsCollection {
        items {
          ... on Collection {
                slug
          }
        }
      }
    }
  }
}
`;

const GET_COLLECTION_CARD_DETAILS = gql`
query ($slug: String) {
  collectionCollection(where: {slug: $slug}) {
    items {
      title
      hideOnHomepage
      isMultipleCollection
      mainImageDesktop {
        url
        description
      }
      mainImageTablet {
        url
        description
      }
      mainImageMobile {
        url
        description
      }
    }
  }
}
`;

const GET_ABOUT_US = gql`
  query {
    aboutCollection {
      items {
        aboutUs
      }
    }
  }
`;

export {
  GET_COLLECTION_CARD_DETAILS,
  GET_COLLECTION_IMAGES,
  GET_ABOUT_US,
  GET_ALL_COLLECTIONS_SLUGS,
  GET_SUBCOLLECTION_SLUGS,
};
