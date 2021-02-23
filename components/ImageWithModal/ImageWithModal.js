import { useState, useEffect, useCallback } from 'react';
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
  // TODO - move to helpers
  const onNextArrow = (imagesList, imageIndex) => {
    if (imageIndex === imagesList.length - 1) {
      return setModalIndex(0);
    }
    return setModalIndex(imageIndex + 1);
  };
  // TODO - move to helpers
  const onPreviousArrow = (imagesList, imageIndex) => {
    if (imageIndex === 0) {
      return setModalIndex(imagesList.length - 1);
    }
    return setModalIndex(imageIndex - 1);
  };

  useEffect(() => {
    // TODO - move to helpers
    // const handleModalKeyDown = (e) => {
    //   if (e.code === 'ArrowRight') {
    //     onNextArrow(images, modalIndex);
    //   }

    //   if (e.code === 'ArrowLeft') {
    //     onPreviousArrow(images, modalIndex);
    //   }
    // };

    if (isModalActive) {
      document.addEventListener('keydown', (e) => handleModalKeyDown(e));
    }

    return document.removeEventListener('keydown', (e) => handleModalKeyDown(e));
  }, [isModalActive, images, modalIndex]);

  const renderModal = (imagesList, imageIndex) => (
    <div className={styles.modalImageWrapper}>
      <Image
        alt={imagesList[imageIndex].alt}
        image={imagesList[imageIndex].desktopImage}
        title={imagesList[imageIndex].title}
        className='modalImage'
      />
      <nav className={styles.modalNavigation}>
        <button
          type='button'
          className={`${styles.modalNavButton} ${styles.modalNavCloseButton}`}
          onClick={() => onCloseModalClick()}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className={styles.modalNavArrowButtonWrapper}>
          <button
            type='button'
            className={`${styles.modalNavButton} ${styles.modalNavPreviousArrow}`}
            onClick={() => onPreviousArrow(images, modalIndex)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <button
            type='button'
            className={`${styles.modalNavButton} ${styles.modalNavNextArrow}`}
            onClick={() => onNextArrow(images, modalIndex)}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </nav>
    </div>
  );

  return (
    <>
      <div>
        <button
          type='button'
          onClick={() => onImageClick(index)}
          className={styles.imageWithModal}
        >
          {/* TODO - HOC? */}
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
      <div
        className={styles.modal}
        // onKeyPress={(e) => handleModalKeyDown(e)}
        // tabIndex='0'
        // onClick={console.log('test')}
      >
        {/* <p>MODAL</p> */}
        {renderModal(images, modalIndex)}
      </div>
      )}
    </>
  );
};
export default ImageWithModal;
