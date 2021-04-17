import CollectionCard from '../CollectionCard/CollectionCard';
import styles from './collectionCardList.module.scss';
import { OUR_COLLECTIONS } from '../../constants';

const CollectionCardList = ({ collectionCardDetailsList }) => (
  <section id='collections' className={styles.collections}>
    <h1 className={styles.collectionCardsTitle}>{OUR_COLLECTIONS}</h1>
    <div className={styles.collectionCardsWrapper}>
      {
        collectionCardDetailsList?.map((({
          isMultipleCollection,
          title,
          slug,
          collectionMainImage,
          hideOnHomepage,
        }) => {
          if (hideOnHomepage) return null;

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
        ))
}
    </div>
  </section>
);

export default CollectionCardList;
