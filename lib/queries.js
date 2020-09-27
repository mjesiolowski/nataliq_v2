import gql from 'graphql-tag';

const GET_COLLECTION_IMAGES = gql`
  query Collection {
    collectionCollection {
      items {
        sys {
          id
        }
        collectionImageCollection {
          items {
            title
            description
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

const GET_COLLECTION_DETAILS = gql`
  query Collection {
    collectionCollection {
      items {
        title
        slug
        isSubcollection
        isSubcollectionParent
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

const GET_SLUG = gql`
  query Collection {
    collectionCollection {
      items {
        slug
        isSubcollection
      }
    }
  }
`;

const GET_ABOUT_US = gql`
  query AboutUs {
    aboutCollection {
      items {
        aboutUs
      }
    }
  }
`;

export {
  GET_COLLECTION_DETAILS, GET_SLUG, GET_COLLECTION_IMAGES, GET_ABOUT_US,
};
