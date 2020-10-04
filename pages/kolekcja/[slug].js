import { useQuery } from '@apollo/react-hooks';
import { getAllSlugs } from '../../lib/collection';
import { GET_COLLECTION_IMAGES } from '../../lib/queries';

export default function Collection({ slug }) {
  console.log({ slug });
  const { loading, data, error } = useQuery(GET_COLLECTION_IMAGES, { variables: { slug } });
  console.log({ data });
  return <div>Kolekcja</div>;
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs();

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
  return {
    props: {
      slug,
    },
  };
}
