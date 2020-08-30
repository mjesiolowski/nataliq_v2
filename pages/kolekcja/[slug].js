import getSlugDetails from '../../lib/collection';

export default function Collection({ data }) {
  console.log({ data });
  return <div>Kolekcja</div>;
}

export async function getStaticPaths() {
  const slugDetails = await getSlugDetails();

  const paths = slugDetails.map(({ slug }) => ({
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
  const data = params.slug;
  return {
    props: {
      data,
    },
  };
}
