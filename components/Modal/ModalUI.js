import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import {
  faArrowLeft, faArrowRight, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import styles from './modal.module.scss';
import Image from '../Image/Image';

function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(
    () => {
      savedHandler.current = handler;
    }, [handler],
  );

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element], // Re-run if eventName or element changes
  );
}

const ModalUI = ({ imagesList, imageIndex, callbacks }) => {
  const { onCloseModalClick, onPreviousArrow, onNextArrow } = callbacks;

  return (
    <div className={styles.modalWrapper}>
      <div
        className={styles.modalImageWrapper}
      >
        <Image
          alt={imagesList[imageIndex].alt}
          image={imagesList[imageIndex].image}
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
              onClick={() => onPreviousArrow(imagesList, imageIndex)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <button
              type='button'
              className={`${styles.modalNavButton} ${styles.modalNavNextArrow}`}
              onClick={() => onNextArrow(imagesList, imageIndex)}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ModalUI;
