import {
  getAllSlugs,
  getSubcollectionsSlugs,
  getCollectionCardDetails,
} from '../../lib/collection';

import CollectionCard from '../../components/CollectionCard/CollectionCard';

export async function getStaticPaths() {
  const slugs = await getAllSlugs({ isMultipleCollection: true });

  const paths = slugs.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const subcollectionsSlugs = await getSubcollectionsSlugs(slug);
  const collectionCardDetailsList = await getCollectionCardDetails(subcollectionsSlugs);

  return {
    props: {
      slug,
      subcollectionsSlugs,
      collectionCardDetailsList,
    },
  };
}

export default function Collections({
  collectionCardDetailsList,
}) {
  const renderSubcollectionCard = (collectionCardList) => collectionCardList.map((({
    isMultipleCollection,
    collectionMainImage,
    title,
    slug,
  }) => (
    <CollectionCard
      key={title}
      slug={slug}
      isMultipleCollection={isMultipleCollection}
      collectionMainImage={collectionMainImage}
      title={title}
    />
  )));
  return (
    <>
      <div>Kolekcje</div>
      {renderSubcollectionCard(collectionCardDetailsList)}
    </>
  );
}
