import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft, faArrowRight, faCoffee, faTimes, faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import styles from './imageWithModal.module.scss';
import Image from '../Image/Image';

const ImageWithModal = ({
  alt,
  title,
  desktopImage,
  tabletImage,
  mobileImage,
  index,
  images,
}) => {
  const [modalIndex, setModalIndex] = useState(0);
  const [isModalActive, setModalToActive] = useState(false);

  const onImageClick = (i) => {
    setModalIndex(i);
    setModalToActive(true);
  };

  const onCloseModalClick = () => setModalToActive(false);

  const onNextArrowClick = (imagesList, imageIndex) => {
    if (imageIndex === imagesList.length - 1) {
      return setModalIndex(0);
    }
    return setModalIndex(imageIndex + 1);
  };

  const onPreviousArrowClick = (imagesList, imageIndex) => {
    if (imageIndex === 0) {
      return setModalIndex(imagesList.length - 1);
    }
    return setModalIndex(imageIndex - 1);
  };

  const renderModalImage = (imagesList, imageIndex) => (
    <Image
      alt={imagesList[imageIndex].alt}
      image={imagesList[imageIndex].desktopImage}
      title={imagesList[imageIndex].title}
      className='modalImage'
    />
  );

  return (
    <>
      <div>
        <button
          type='button'
          onClick={() => onImageClick(index)}
          className={styles.imageButton}
        >
          <Image
            alt={alt}
            // desktopImage={desktopImage}
            // tabletImage={tabletImage}
            // mobileImage={mobileImage}
            image={desktopImage}
            className='imageWithModal'
          />
          {title && <h2 className={styles.imageTitle}>{title}</h2>}
        </button>
      </div>

      {isModalActive && (
      <div className={styles.modal}>
        {/* <p>MODAL</p> */}
        {renderModalImage(images, modalIndex)}
        <nav className={styles.modalNavigation}>
          <button
            type='button'
            className={`${styles.modalNavButton} ${styles.modalNavCloseButton}`}
            onClick={() => onCloseModalClick()}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div>
            <button
              type='button'
              className={styles.modalNavButton}
              onClick={() => onPreviousArrowClick(images, modalIndex)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <button
              type='button'
              className={styles.modalNavButton}
              onClick={() => onNextArrowClick(images, modalIndex)}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

        </nav>
      </div>
      )}
    </>
  );
};
export default ImageWithModal;
