import {
  getAllSlugs,
  getSubcollectionsSlugs,
  getCollectionCardDetails,
} from '../../lib/collection';
import CollectionCard from '../../components/CollectionCard';

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
  const collectionCardDetails = await getCollectionCardDetails(subcollectionsSlugs);

  return {
    props: {
      slug,
      subcollectionsSlugs,
      collectionCardDetails,
    },
  };
}

export default function Collections({
  slug,
  subcollectionsSlugs,
  collectionCardDetails,
}) {
  console.log({
    slug,
    subcollectionsSlugs,
    collectionCardDetails,
  });

  const renderSubcollectionCard = () => collectionCardDetails.map((({
    hideOnHomepage,
    isMultipleCollection,
    mainImageDesktop,
    mainImageTablet,
    mainImageMobile,
    title,
  }, index) => (
    <CollectionCard
      key={title}
      slug={subcollectionsSlugs[index]}
      hideOnHomepage={hideOnHomepage}
      isMultipleCollection={isMultipleCollection}
      mainImageDesktop={mainImageDesktop}
      mainImageTablet={mainImageTablet}
      mainImageMobile={mainImageMobile}
      title={title}
    />
  )));
  return (
    <>
      <div>Kolekcje</div>
      {renderSubcollectionCard()}
    </>
  );
}
