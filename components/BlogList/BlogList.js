import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import styles from './blogList.module.scss';
import { BLOG_POST_HREF } from '../../constants';

const BlogList = ({ list } = {}) => (
  <section className={styles.blogList}>
    {list.map(
      ({ title, slug }) => (
        <li key={uuidv4()} className={styles.listItem}>
          <Link href={`/${BLOG_POST_HREF}${slug}`}>
            <a>{title}</a>
          </Link>
        </li>
      ),
    )}
  </section>
);

export default BlogList;
