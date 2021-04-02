import {
  getAllSlugs,
  getSubcollectionsSlugs,
  getCollectionCardDetails,
  getCollectionTitle,
} from '../../lib/collection';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import LinkButton from '../../components/LinkButton/LinkButton';
import { COLLECTIONS } from '../../constants';
import Footer from '../../components/Footer/Footer';

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
  const collectionTitle = await getCollectionTitle(slug);

  return {
    props: {
      collectionCardDetailsList,
      collectionTitle,
    },
  };
}

export default function Collections({
  collectionCardDetailsList,
  collectionTitle,
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
    <section className='multipleCollectionSection'>
      <div className='collectionTitle'>
        {COLLECTIONS}
        {' '}
        {collectionTitle}
      </div>
      <main className='multipleCollectionContent'>
        <LinkButton
          href='/#collections'
          content='Powrót'
          className='backLink'
        />
        <div className='multipleCollectionCards'>
          {renderSubcollectionCard(collectionCardDetailsList)}
        </div>
      </main>
      <Footer />
    </section>
  );
}
