import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { getBlogPostsTitles } from '../../lib/collection';
import { BLOG_POSTS_LIMIT, BLOG_POST_HREF } from '../../constants';
import renderPagination from '../../helpers/pagination.helper';

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
      {renderPagination(maxSubpagesNumber, slug)}
    </>
  );
};

export default Blog;
