import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft, faArrowRight, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import styles from './modal.module.scss';
import Image from '../Image/Image';

const ModalUI = ({ imagesList, imageIndex, callbacks }) => {
  const { onCloseModalClick, onPreviousArrow, onNextArrow } = callbacks;

  return (
    <section className={styles.modalWrapper}>
      <div
        className={styles.modalImageWrapper}
      >
        <Image
          alt={imagesList[imageIndex].alt}
          image={imagesList[imageIndex].image}
          title={imagesList[imageIndex].title}
          stylesName='modalImage'
        />
        <nav className={styles.modalNavigation}>
          <button
            type='button'
            aria-label='close modal'
            className={`${styles.modalNavButton} ${styles.modalNavCloseButton}`}
            onClick={() => onCloseModalClick()}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className={styles.modalNavArrowButtonWrapper}>
            <button
              type='button'
              aria-label='show previous photo'
              className={`${styles.modalNavButton} ${styles.modalNavPreviousArrow}`}
              onClick={() => onPreviousArrow(imagesList, imageIndex)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <button
              type='button'
              aria-label='show next photo'
              className={`${styles.modalNavButton} ${styles.modalNavNextArrow}`}
              onClick={() => onNextArrow(imagesList, imageIndex)}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default ModalUI;
