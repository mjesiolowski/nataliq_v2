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
    <div>
      <button
        type='button'
        onClick={() => onImageClick(index)}
        className={styles.imageWithModal}
      >
        <ImageComponent
          alt={alt}
          image={image}
          title={title}
          className='imageWithModal'
        />
        {/* {title && <h2 className={styles.imageTitle}>{title}</h2>} */}
      </button>

      {isModalActive && (
      <div>
        {/* <p>MODAL</p> */}
        {<Modal images={images} index={index} closeModal={() => setModalToActive(false)} />}
      </div>
      )}
    </div>

  );
};

export default withModal;
