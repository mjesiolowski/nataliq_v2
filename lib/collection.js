import { apolloClient as client } from './apollo';
import {
  GET_ALL_COLLECTIONS_SLUGS,
  GET_SUBCOLLECTIONS_SLUGS,
  GET_COLLECTION_IMAGES,
  GET_COLLECTION_CARD_DETAILS,
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
  });

  const allImages = response?.data?.imageCollection?.items;
  const filteredImages = allImages.filter(({ linkedFrom }) => {
    const belongsToSlug = linkedFrom.collectionCollection.items.some(
      ({ slug: imageSlug }) => slug === imageSlug,
    );
    if (belongsToSlug) return true;
    return false;
  });

  return filteredImages;
};

export const getCollectionCardDetails = async (slugs) => {
  const subcollectionsSlugs = slugs.map((slug) => ({ slug }));

  const response = await client.query({
    query: GET_COLLECTION_CARD_DETAILS,
    variables: { slugs: subcollectionsSlugs },
  });

  return response?.data?.collectionCollection?.items || [];
};
