import {
  getAllSlugs,
  getSubcollectionsSlugs,
  getCollectionCardDetails,
} from '../../lib/collection';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import LinkButton from '../../components/LinkButton/LinkButton';

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
    <section>
      <div className='multipleCollectionWrapper'>
        {renderSubcollectionCard(collectionCardDetailsList)}
      </div>
      <LinkButton
        href='/#collections'
        content='Powrót'
        className='backLink'
      />
    </section>
  );
}
