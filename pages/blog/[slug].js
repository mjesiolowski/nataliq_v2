import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { getBlogPosts, getBlogPostsLength } from '../../lib/collection';
import { BLOG_POSTS_LIMIT, BLOG_POST_HREF } from '../../constants';
import renderPagination from '../../helpers/pagination.helper';

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const skipValue = (Number(slug) - 1) * BLOG_POSTS_LIMIT;
  const blogPostsData = await getBlogPosts({ skip: skipValue, limit: BLOG_POSTS_LIMIT });
  const blogPostsLength = await getBlogPostsLength();
  const maxSubpagesNumber = Math.ceil(blogPostsLength / BLOG_POSTS_LIMIT);

  return {
    props: {
      blogPostsData,
      maxSubpagesNumber,
      slug,
    },
  };
}

const Blog = ({ blogPostsData, maxSubpagesNumber, slug }) => {
  const renderTitles = (blogPostsList) => blogPostsList.map(
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
        {renderTitles(blogPostsData)}
        {renderPagination(maxSubpagesNumber, slug)}
      </ul>
    </>
  );
};

export default Blog;
