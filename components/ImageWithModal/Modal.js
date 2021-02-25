import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import {
  faArrowLeft, faArrowRight, faCoffee, faTimes, faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import styles from './imageWithModal.module.scss';
import Image from '../Image/Image';

const Modal = ({ images, index, closeModal }) => {
  const [modalIndex, setModalIndex] = useState(index);

  const onCloseModalClick = () => closeModal();

  const onNextArrow = (imagesList, imageIndex) => {
    if (imageIndex === imagesList.length - 1) {
      return setModalIndex(0);
    }
    return setModalIndex(imageIndex + 1);
  };

  const onPreviousArrow = (imagesList, imageIndex) => {
    if (imageIndex === 0) {
      return setModalIndex(imagesList.length - 1);
    }
    return setModalIndex(imageIndex - 1);
  };

  const handleKeyPress = (e) => {
    console.log(e.code);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      console.log('removeEvent');
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const renderModal = (imagesList, imageIndex) => {
    console.log({ imagesList, index });
    return (
      <div className={styles.modalWrapper}>
        <div
          className={styles.modalImageWrapper}
        >
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
      </div>
    );
  };

  return renderModal(images, modalIndex);
};

export default Modal;
