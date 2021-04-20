import {
  COLLECTION_DEFAULT_ALT_TEXT,
  COLLECTION_HREF,
  COLLECTIONS_HREF,
  COLLECTION_CARD_LINK_TEXT,
} from '../../constants';
import Image from '../Image/Image';
import styles from './collectionCard.module.scss';
import LinkButton from '../LinkButton/LinkButton';

const CollectionCard = ({
  isMultipleCollection: isMultiple,
  collectionMainImage,
  title,
  slug,
}) => {
  const { image } = collectionMainImage;
  const alt = collectionMainImage?.alt || COLLECTION_DEFAULT_ALT_TEXT;
  const collectionTitle = title;
  const isMultipleCollection = isMultiple || false;

  const collectionLink = `/${isMultipleCollection ? COLLECTIONS_HREF : COLLECTION_HREF}${slug}`;

  return (
    <section className={styles.collectionCard}>
      <div className={styles.collectionImage}>
        <Image
          alt={alt}
          image={image}
          stylesName='collectionCard'
        />
      </div>
      {/* <h2 className={styles.collectionTitle}>{collectionTitle}</h2> */}
      <LinkButton
        href={collectionLink}
        content={`${COLLECTION_CARD_LINK_TEXT} ${collectionTitle}`}
        stylesName='collectionCardTitle'
      />
    </section>
  );
};
export default CollectionCard;
