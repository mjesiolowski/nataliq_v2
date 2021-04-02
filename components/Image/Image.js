import NextImage from 'next/image';
import styles from './image.module.scss';
import {
  MOBILE_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  COLLECTION_DEFAULT_ALT_TEXT,
} from '../../constants';

const Image = ({
  alt,
  title,
  desktopImage,
  tabletImage,
  mobileImage,
  image,
  className,
}) => {
  const imageUrl = image?.url;
  // const tabletImg = tabletImage?.url;
  // const mobileImg = mobileImage?.url;
  const imgAlt = alt || COLLECTION_DEFAULT_ALT_TEXT;

  return (
  // <>

  //   {/* <h2>{title}</h2> */}

  //   <picture>
  //     <source
  //       media={`(max-width: ${MOBILE_BREAKPOINT})`}
  //       srcSet={mobileImg}
  //     />
  //     <source
  //       media={`(max-width: ${DESKTOP_BREAKPOINT})`}
  //       srcSet={tabletImg}
  //     />
  //     <img
  //       src={desktopImg}
  //       alt={imgAlt}
  //       className={styles.image}
  //     />
  //   </picture>
  // </>

    <div className={`${styles.image} ${styles[className]}`}>
      <NextImage
        src={imageUrl}
        alt={imgAlt}
        // className={styles.image}
        layout='fill'
        objectFit='cover'
        objectPosition='top'
      />
      {title && <h2 className={styles.imageTitle}>{title}</h2>}
    </div>

  );
};
export default Image;
