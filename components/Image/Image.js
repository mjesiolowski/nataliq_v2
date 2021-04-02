import NextImage from 'next/image';
import styles from './image.module.scss';
import { COLLECTION_DEFAULT_ALT_TEXT } from '../../constants';

const Image = ({
  alt,
  title,
  image,
  className,
}) => {
  const imageUrl = image?.url;
  const imgAlt = alt || COLLECTION_DEFAULT_ALT_TEXT;

  return (
    <div className={`${styles.image} ${styles[className]}`}>
      <NextImage
        src={imageUrl}
        alt={imgAlt}
        layout='fill'
        objectFit='cover'
        objectPosition='top'
      />
      {title && <h2 className={styles.imageTitle}>{title}</h2>}
    </div>

  );
};
export default Image;
