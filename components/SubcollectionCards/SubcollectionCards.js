import CollectionCard from '../CollectionCard/CollectionCard';
import styles from './subcollectionCards.module.scss';

const SubcollectionCards = ({ subcolecionCardsData = [] }) => (
  <section className={styles.multipleCollectionCards}>
    {
      subcolecionCardsData.map((({
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
      )))
    }
  </section>
);

export default SubcollectionCards;
