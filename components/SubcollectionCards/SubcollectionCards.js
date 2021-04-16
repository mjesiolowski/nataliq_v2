import CollectionCard from '../CollectionCard/CollectionCard';
import styles from './subcollectionCards.module.scss';

const SubcollectionCards = ({ collectionCardList }) => (
  <section className={styles.multipleCollectionCards}>
    {
      collectionCardList.map((({
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
