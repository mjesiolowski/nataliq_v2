import { apolloClient as client } from './apollo';
import {
  GET_ALL_COLLECTIONS_SLUGS,
  GET_SUBCOLLECTION_SLUGS,
  GET_COLLECTION_IMAGES,
} from './queries';

export const getAllSlugs = async ({ isMultipleCollection } = {}) => {
  const response = await client.query({
    query: GET_ALL_COLLECTIONS_SLUGS,
    variables: { isMultipleCollection },
  });

  return response?.data?.collectionCollection?.items || [];
};

export const getSubcollectionSlugs = async (slug) => {
  const response = await client.query({
    query: GET_SUBCOLLECTION_SLUGS,
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
