import CollectionCard from '../CollectionCard/CollectionCard';
import styles from './collectionCardList.module.scss';

const CollectionCardList = ({ collectionCardDetailsList }) => {
  const renderCollectionCard = (collectionCardList) => collectionCardList?.map((({
    isMultipleCollection,
    title,
    slug,
    collectionMainImage,
    hideOnHomepage,
  }) => {
    if (!hideOnHomepage) {
      return (
        <CollectionCard
          key={title}
          slug={slug}
          collectionMainImage={collectionMainImage}
          isMultipleCollection={isMultipleCollection}
          title={title}
        />
      );
    }

    return null;
  }
  ));

  return (
    <section id='collections' className={styles.collections}>
      <h1 className={styles.collectionCardsTitle}>Nasze kolekcje</h1>
      <div className={styles.collectionCardsWrapper}>
        {renderCollectionCard(collectionCardDetailsList)}
      </div>
    </section>
  );
};

export default CollectionCardList;
