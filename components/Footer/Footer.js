import styles from './footer.module.scss';

const Footer = () => {
  console.log('Footer');

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p className={styles.footerContent}>
          ©
          {' '}
          <span>{new Date().getFullYear()}</span>
          {' '}
          by
          {' '}
          <a
            className='footer__link'
            href='https://github.com/mjesiolowski'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Strona twórcy witryny'
          >
            mjesiolowski
          </a>

        </p>
      </div>

    </footer>
  );
};

export default Footer;
