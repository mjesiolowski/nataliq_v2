import { useState } from 'react';
import styles from './modal.module.scss';
import Modal from './Modal';

const withModal = (ImageComponent) => (props) => {
  const {
    image, images, alt, title, index,
  } = props;
  const [isModalActive, setModalToActive] = useState(false);

  const onImageClick = () => {
    setModalToActive(true);
  };

  return (
    <section>
      <button
        aria-label='open modal'
        type='button'
        onClick={() => onImageClick(index)}
        className={styles.imageWithModal}
      >
        <ImageComponent
          alt={alt}
          image={image}
          title={title}
          stylesName='imageWithModal'
        />
      </button>

      {isModalActive
        ? <Modal images={images} index={index} closeModal={() => setModalToActive(false)} />
        : null}
    </section>

  );
};

export default withModal;
