import { apolloClient as client } from './apollo';
import {
  GET_ALL_COLLECTIONS_SLUGS,
  GET_SUBCOLLECTIONS_SLUGS,
  GET_COLLECTION_IMAGES,
  GET_COLLECTION_CARD_DETAILS,
  GET_ABOUT_US,
  GET_BLOG_POST,
  GET_BLOG_POST_LIST,
  GET_COLLECTION_TITLE,
} from './queries';

export const getAllSlugs = async ({ isMultipleCollection } = {}) => {
  const response = await client.query({
    query: GET_ALL_COLLECTIONS_SLUGS,
    variables: { isMultipleCollection },
  });

  return response?.data?.collectionCollection?.items || [];
};

export const getSubcollectionsSlugs = async (slug) => {
  const response = await client.query({
    query: GET_SUBCOLLECTIONS_SLUGS,
    variables: { slug },
  });

  const subcollectionItems = (
    response?.data?.collectionCollection?.items[0]?.subcollectionsCollection?.items || []);

  return subcollectionItems.map((subcollectionItem) => subcollectionItem.slug);
};

export const getCollectionImages = async (slug) => {
  const response = await client.query({
    query: GET_COLLECTION_IMAGES,
    variables: { slug },
  });

  return response?.data?.collectionCollection?.items[0]?.collectionImagesCollection?.items;
};

export const getCollectionTitle = async (slug) => {
  const response = await client.query({
    query: GET_COLLECTION_TITLE,
    variables: { slug },
  });

  return response?.data?.collectionCollection?.items[0]?.title;
};

export const getCollectionCardDetails = async (slugs) => {
  const subcollectionsSlugs = slugs.map((slug) => ({ slug }));

  const response = await client.query({
    query: GET_COLLECTION_CARD_DETAILS,
    variables: { slugs: subcollectionsSlugs },
  });

  return response?.data?.collectionCollection?.items || [];
};

export const getAboutUs = async () => {
  const response = await client.query({
    query: GET_ABOUT_US,
  });

  return response?.data?.aboutCollection?.items[0]?.aboutUs || {};
};

export const getBlogPost = async (title) => {
  const response = await client.query({
    query: GET_BLOG_POST,
    variables: { title },
  });

  return response?.data?.blogPostCollection?.items[0] || {};
};

export const getBlogPostList = async ({ skip, limit } = {}) => {
  const response = await client.query({
    query: GET_BLOG_POST_LIST,
    variables: { skip, limit },
  });
  console.log({ response });
  return response?.data?.blogPostCollection?.items || [];
};
