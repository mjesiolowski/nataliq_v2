import gql from 'graphql-tag';

const GET_COLLECTION_IMAGES = gql`
query {
  imageCollection  {
    items  {
      desktopImage {
        url
      }
      tabletImage {
        url
      }
      mobileImage {
        url
      }
      alt
      title
      linkedFrom {
        collectionCollection  {
          items  {
            slug
          }
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
        desktopImage {
          url
        }
        tabletImage {
          url
        }
        mobileImage {
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

const GET_BLOG_POSTS = gql`
query ($skip: Int, $limit: Int) {
  blogPostCollection (skip: $skip, limit: $limit) {
    items {
      sys {
        publishedAt
      }
      title
      image {
        desktopImage {
          url
        }
        tabletImage {
          url
        }
        mobileImage {
          url
        }
        alt
      }
      content {
        json
      }
    }
  }
}
`;

const GET_BLOG_POSTS_LENGTH = gql`
query {
  blogPostCollection {
    items {
      sys {
        publishedAt
      }
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
  GET_BLOG_POSTS,
  GET_BLOG_POSTS_LENGTH,
};
