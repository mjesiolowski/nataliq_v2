import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import styles from './blogList.module.scss';
import { BLOG_POST_HREF } from '../../constants';

const BlogList = ({ list }) => {
  console.log({ list });

  return (
    <section className={styles.blogList}>
      {/* {titles.map(
        ({ title }) => {
          const titleHref = title.toLowerCase().split(' ').join('-');
          return (
            <li key={uuidv4()} className={styles.listItem}>
              <Link href={`/${BLOG_POST_HREF}${titleHref}`}>
                <a>{title}</a>
              </Link>
            </li>
          );
        },
      ) */}
      }
    </section>
  );
};

export default BlogList;
