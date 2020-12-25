import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { getBlogPostsTitles } from '../../lib/collection';
import { BLOG_POSTS_LIMIT, BLOG_POST_HREF, BLOG_HREF } from '../../constants';
import Pagination from '../../components/Pagination';

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const skipValue = (Number(slug) - 1) * BLOG_POSTS_LIMIT;
  const blogPostsTitles = await getBlogPostsTitles({ skip: skipValue, limit: BLOG_POSTS_LIMIT });
  const allBlogPostsTitles = await getBlogPostsTitles();
  const blogPostsLength = allBlogPostsTitles.length;
  const maxSubpagesNumber = Math.ceil(blogPostsLength / BLOG_POSTS_LIMIT);

  return {
    props: {
      blogPostsTitles,
      maxSubpagesNumber,
      slug,
    },
  };
}

const Blog = ({ blogPostsTitles, maxSubpagesNumber, slug }) => {
  if (slug > maxSubpagesNumber) {
    return (
      <>
        <p>Ta strona nie istnieje.</p>
        <Link href={`/${BLOG_HREF}1`}>
          <a>Powrót do bloga</a>
        </Link>
      </>
    );
  }

  const renderTitles = (blogPostsTitlesList) => blogPostsTitlesList.map(
    ({ title }) => {
      const titleHref = title.toLowerCase().split(' ').join('-');
      return (
        <li key={uuidv4()}>
          <Link href={`/${BLOG_POST_HREF}${titleHref}`}>
            <a>{title}</a>
          </Link>
        </li>
      );
    },
  );
  return (
    <>
      <span>Blog</span>
      <ul>
        {renderTitles(blogPostsTitles)}
      </ul>
      <Pagination subpagesCount={maxSubpagesNumber} slug={slug} />
    </>
  );
};

export default Blog;
