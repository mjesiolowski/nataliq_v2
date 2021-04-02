import { useState, useEffect, useRef } from 'react';
import ModalUI from './ModalUI';

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

const Modal = ({ images, index: defaultIndex, closeModal }) => {
  const [modalIndex, setModalIndex] = useState(defaultIndex);

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
    const keyCode = e.code;
    switch (keyCode) {
      case 'ArrowRight':
        onNextArrow(images, modalIndex);
        break;
      case 'ArrowLeft':
        onPreviousArrow(images, modalIndex);
        break;
      case 'Escape':
        onCloseModalClick();
        break;
      default:
    }
  };

  useEventListener('keydown', handleKeyPress, document);

  return (
    <ModalUI
      imagesList={images}
      imageIndex={modalIndex}
      callbacks={
      {
        onNextArrow,
        onPreviousArrow,
        onCloseModalClick,
      }
    }
    />
  );
};

export default Modal;
