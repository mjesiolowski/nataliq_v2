import {
  getAllSlugs,
  getSubcollectionSlugs,
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

  const subcollectionSlugs = await getSubcollectionSlugs(slug);

  return {
    props: {
      slug,
      subcollectionSlugs,
    },
  };
}

export default function Collections({
  slug,
  subcollectionSlugs,
}) {
  console.log({
    slug,
    subcollectionSlugs,
  });

  const renderSubcollectionCard = () => subcollectionSlugs.map(((subcollectionSlug) => (
    <CollectionCard
      key={subcollectionSlug}
      slug={subcollectionSlug}
    />
  )));

  return (
    <>
      <div>Kolekcje</div>
      {renderSubcollectionCard()}
    </>
  );
}
