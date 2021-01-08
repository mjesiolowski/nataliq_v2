import Link from 'next/link';
import Image from 'next/image';
import styles from './hero.module.scss';

const Hero = () => {
  console.log('Hero');

  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.heroWrapper}>
        <img className={styles.logo} src='/logo.png' alt='logo sklepu' width='300px' />
        {/* <h1 className={styles.heroTitle}>Salon sukien ślubnych i wizytowych NataliQ</h1> */}
        <p>
          <Link href='/#collections'>
            Poznaj nasze kolekcje
          </Link>
        </p>
      </div>
      {/* <img className={styles.couple} src='/couple.png' alt='logo sklepu' width='300px' /> */}
    </section>
  );
};

export default Hero;
