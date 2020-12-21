import { v4 as uuidv4 } from 'uuid';
import { getBlogPosts, getBlogPostsLength } from '../lib/collection';
import { BLOG_POSTS_LIMIT } from '../constants';

export async function getServerSideProps({ params }) {
  // const { slug } = params;

  const blogPostsData = await getBlogPosts({ skip: 0, limit: BLOG_POSTS_LIMIT });
  const blogPostsLength = await getBlogPostsLength();

  return {
    props: {
      blogPostsData,
      blogPostsLength,
    },
  };
}

const Blog = ({ blogPostsData, blogPostsLength }) => {
  console.log({ blogPostsData, BLOG_POSTS_LIMIT, blogPostsLength });

  const renderTitles = (blogPostsList) => blogPostsList.map(
    ({ title }) => <li key={uuidv4()}>{title}</li>,
  );

  return (
    <div>
      <span>Blog</span>
      <ul>
        {renderTitles(blogPostsData)}
      </ul>
    </div>
  );
};

export default Blog;
