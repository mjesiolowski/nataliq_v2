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

const GET_COLLECTION_TITLE_AND_MAIN_IMAGES = gql`
  query Collection {
    collectionCollection {
      items {
        title
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
        ourSalon
      }
    }
  }
`;

export {
  GET_COLLECTION, GET_SLUG, GET_COLLECTION_TITLE_AND_MAIN_IMAGES, GET_ABOUT_US,
};
