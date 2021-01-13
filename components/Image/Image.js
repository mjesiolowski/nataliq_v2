import NextImage from 'next/image';
import styles from './image.module.css';
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
}) => {
  const desktopImg = desktopImage?.url;
  const tabletImg = tabletImage?.url;
  const mobileImg = mobileImage?.url;
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

    <div style={{
      position: 'relative',
      width: '100%',
      height: '400px',
      // maxHeight: 'auto',
      // display: 'block',
    }}
    >
      <NextImage
        src={desktopImg}
        alt={imgAlt}
        // className={styles.image}
        layout='fill'
        objectFit='cover'
        objectPosition='top'
      />
    </div>

  );
};
export default Image;
