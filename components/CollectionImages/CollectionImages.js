import { v4 as uuidv4 } from 'uuid';
import styles from './collectionImages.module.scss';
import withModal from '../Modal/withModal';
import Image from '../Image/Image';

const CollectionImages = ({ images }) => (
  <section className={styles.collectionImagesSection}>
    { images.map((imageItem, index) => {
      const {
        alt,
        title,
        image,
      } = imageItem;

      const ImageWithModal = withModal(Image);

      return (
        <ImageWithModal
          key={uuidv4()}
          index={index}
          alt={alt}
          title={title}
          image={image}
          images={images}
        />
      );
    })}
  </section>
);

export default CollectionImages;
