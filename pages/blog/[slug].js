import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { getBlogPosts, getBlogPostsLength } from '../../lib/collection';
import { BLOG_POSTS_LIMIT, BLOG_POST_HREF } from '../../constants';

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const skipValue = (Number(slug) - 1) * BLOG_POSTS_LIMIT;
  const blogPostsData = await getBlogPosts({ skip: skipValue, limit: BLOG_POSTS_LIMIT });
  const blogPostsLength = await getBlogPostsLength();
  const maxSubpagesNumber = Math.ceil(blogPostsLength / BLOG_POSTS_LIMIT);

  console.log({ maxSubpagesNumber });

  return {
    props: {
      blogPostsData,
      maxSubpagesNumber,
    },
  };
}

const Blog = ({ blogPostsData, maxSubpagesNumber }) => {
  const renderSubpages = (subpagesCount) => {
    const subpagesList = [...Array(subpagesCount).keys()];
    const visibleSubpages = 4;
    return (
      subpagesList.map((item, index) => {
        const subpageNumber = index + 1;
        if (subpageNumber < visibleSubpages || subpageNumber === subpagesCount) {
          return (
            <Link href={`${subpageNumber}`}>
              <a>{subpageNumber}</a>
            </Link>
          );
        }
      }));
  };

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
    <div>
      <span>Blog</span>
      <ul>
        {renderTitles(blogPostsData)}
        {renderSubpages(maxSubpagesNumber)}
      </ul>
    </div>
  );
};

export default Blog;
