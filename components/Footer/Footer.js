const Footer = () => {
  console.log('Footer');

  return (
    <footer>
      <p>
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
    </footer>
  );
};

export default Footer;
