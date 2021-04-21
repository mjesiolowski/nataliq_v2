import Link from 'next/link';
import styles from './hero.module.scss';
import { OUR_COLLECTIONS } from '../../constants';

const Hero = () => (
  <section id='hero' className={styles.hero}>
    <div className={styles.heroWrapper}>
      <div className={styles.heroLogoWrapper}>
        <img className={styles.heroLogo} src='/logo.png' alt='logo sklepu' width='300px' />
      </div>
      <p>
        <Link href='/#collections'>
          <a className={styles.heroLink}>{OUR_COLLECTIONS}</a>
        </Link>
      </p>
    </div>
  </section>
);

export default Hero;
