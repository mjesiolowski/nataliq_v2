import { apolloClient as client } from './apollo';
import {
  GET_ALL_COLLECTIONS_SLUGS,
  GET_SUBCOLLECTION_SLUGS,
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
    varaibles: { slug },
  });

  const subcollectionItems = (
    response?.data?.collectionCollection?.items[0].subcollectionsCollection?.items || []);

  return subcollectionItems.map((subcollectionItem) => subcollectionItem.slug);
};
