import { useState } from 'react';
import styles from './imageWithModal.module.css';
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
        // title={imagesList[imageIndex].title}
      desktopImage={imagesList[imageIndex].desktopImage}
      tabletImage={imagesList[imageIndex].tabletImage}
      mobileImage={imagesList[imageIndex].mobileImage}
    />
  );

  return (
    <>
      <div>
        <button
          type='button'
          onClick={() => onImageClick(index)}
        >
          <Image
            alt={alt}
            title={title}
            // desktopImage={desktopImage}
            // tabletImage={tabletImage}
            // mobileImage={mobileImage}
            image={desktopImage}
            className='imageWithModal'
          />
        </button>
      </div>

      {isModalActive && (
      <div className={styles.modal}>
        <p>MODAL</p>
        <button
          type='button'
          onClick={() => onCloseModalClick()}
        >
          X
        </button>

        <button
          type='button'
          onClick={() => onPreviousArrowClick(images, modalIndex)}
        >
          C--
        </button>

        <button
          type='button'
          onClick={() => onNextArrowClick(images, modalIndex)}
        >
          --D
        </button>

        {renderModalImage(images, modalIndex)}
      </div>
      )}
    </>
  );
};
export default ImageWithModal;
