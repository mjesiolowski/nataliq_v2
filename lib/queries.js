import gql from 'graphql-tag';

const GET_COLLECTION_IMAGES = gql`
query ($slug: String) {
  collectionCollection(where: {slug: $slug}, limit: 50) {
    items {
      collectionImagesCollection {
        items {
          image {
            description
            url
          }
          title
          alt
        }
      }
    }
  }
  }
`;

const GET_COLLECTION_TITLE = gql`
query ($slug: String) {
  collectionCollection (where: {slug: $slug}) {
    items {
      title
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

const GET_SUBCOLLECTIONS_SLUGS = gql`
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
query ($slugs: [CollectionFilter!]) {
  collectionCollection (
    where:
    {OR:
      $slugs
    }
  ) {
    items {
      title
      slug
      hideOnHomepage
      isMultipleCollection
      collectionMainImage {
        image {
          url
        }
      alt
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

const GET_BLOG_POST = gql`
query ($title: String) {
  blogPostCollection (where: {title: $title})  {
    items {
      sys {
        publishedAt
      }
      title
      image {
        image {
          url
        }
        alt
      }
      content
    }
  }
}
`;

const GET_BLOG_POST_LIST = gql`
query ($skip: Int, $limit: Int) {
  blogPostCollection (skip: $skip, limit: $limit) {
    items {
      title
      slug
    }
  }
}
`;

export {
  GET_COLLECTION_CARD_DETAILS,
  GET_COLLECTION_IMAGES,
  GET_ABOUT_US,
  GET_ALL_COLLECTIONS_SLUGS,
  GET_SUBCOLLECTIONS_SLUGS,
  GET_BLOG_POST,
  GET_BLOG_POST_LIST,
  GET_COLLECTION_TITLE,
};
