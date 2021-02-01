import Link from 'next/link';
import styles from './backToTop.module.scss';

const BackToTop = () => {
  console.log('BackToTop');

  return (
    <section className={styles.backToTopWrapper}>
      <Link href='/#hero'>
        <a className={styles.buttonLink}>
          <span>
            &#8593;
            <br />
            Powrót
          </span>
        </a>
      </Link>
    </section>
  );
};

export default BackToTop;
