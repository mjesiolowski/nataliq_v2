import Link from 'next/link';
import Image from 'next/image';
import styles from './hero.module.scss';

const Hero = () => {
  console.log('Hero');

  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroLogoWrapper}>
          <img className={styles.heroLogo} src='/logo.png' alt='logo sklepu' width='300px' />
        </div>
        {/* <h1 className={styles.heroTitle}>Salon sukien ślubnych i wizytowych NataliQ</h1> */}
        <p>
          <Link href='/#collections'>
            <a className={styles.heroLink}>nasze kolekcje</a>
          </Link>
        </p>
      </div>
      {/* <img className={styles.couple} src='/couple.png' alt='logo sklepu' width='300px' /> */}
    </section>
  );
};

export default Hero;
