import Link from 'next/link';
import styles from './linkButton.module.scss';

const LinkButton = ({ href, content, className }) => {
  console.log({ className });
  console.log(styles[className]);
  return (
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
};

export default LinkButton;
