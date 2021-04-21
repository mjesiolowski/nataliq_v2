import Link from 'next/link';
import styles from './linkButton.module.scss';

const LinkButton = ({ href, content, stylesName }) => (
  <section className={styles.linkButtonSection}>
    <Link href={href}>
      <a className={styles[stylesName]}>
        <span>
          {content}
        </span>
      </a>
    </Link>
  </section>
);

export default LinkButton;
