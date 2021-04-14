import { getBlogPostList } from '../../lib/collection';
import { BLOG_POSTS_LIMIT, BLOG_LIST } from '../../constants';
import Pagination from '../../components/Pagination/Pagination';
import Navbar from '../../components/Navbar/Navbar';
import BlogList from '../../components/BlogList/BlogList';
import LinkButton from '../../components/LinkButton/LinkButton';
import styles from '../../styles/pages.module.scss';

const getMaxSubpagesNumber = (length, limit) => Math.ceil(length / limit);

export async function getStaticPaths() {
  const allBlogPostList = await getBlogPostList();
  const blogPostsLength = allBlogPostList.length;
  const maxSubpagesNumber = getMaxSubpagesNumber(blogPostsLength, BLOG_POSTS_LIMIT);

  const slugs = Array.from(Array(maxSubpagesNumber).keys()).map((item) => (item + 1));
  const paths = slugs.map((slug) => ({
    params: {
      slug: slug.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const skipValue = (Number(slug) - 1) * BLOG_POSTS_LIMIT;
  const currentBlogPostList = await getBlogPostList({ skip: skipValue, limit: BLOG_POSTS_LIMIT });
  const allBlogPostList = await getBlogPostList();
  const blogPostsLength = allBlogPostList.length;
  const maxSubpagesNumber = getMaxSubpagesNumber(blogPostsLength, BLOG_POSTS_LIMIT);

  return {
    props: {
      blogPostList: currentBlogPostList,
      maxSubpagesNumber,
      slug,
    },
  };
}

const Blog = ({ blogPostList, maxSubpagesNumber, slug }) => (
  <section className={styles.blogListSection}>
    <Navbar />
    <div className={styles.blogListSectionContent}>
      <span className={styles.blogListTitle}>{BLOG_LIST}</span>
      <BlogList list={blogPostList} />
      <LinkButton
        href='/'
        content='Powrót'
        className='backLink'
      />
      <Pagination subpagesCount={maxSubpagesNumber} slug={slug} />
    </div>
  </section>
);

export default Blog;
