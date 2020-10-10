import {
  getAllSlugs,
  getCollectionImages,
} from '../../lib/collection';

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
  const images = await getCollectionImages(slug);

  return {
    props: {
      slug,
      images,
    },
  };
}

export default function Collection({
  slug,
  images,
}) {
  console.log(images);
  return <div>Kolekcja</div>;
}
