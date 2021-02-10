import Link from 'next/link';
import styles from './linkButton.module.scss';

const LinkButton = ({ href, content, className }) => (
  <section className={styles.backToTopWrapper}>
    <Link href={href}>
      <a className={styles[className]}>
        <span>
          {content}
        </span>
      </a>
    </Link>
  </section>
);

export default LinkButton;
