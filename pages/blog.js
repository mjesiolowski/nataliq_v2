import { getBlogPosts } from '../lib/collection';

export async function getServerSideProps({ params }) {
  // const { slug } = params;

  const blogPostsData = await getBlogPosts();

  return {
    props: {
      blogPostsData,
    },
  };
}

const Blog = ({ blogPostsData }) => {
  console.log({ blogPostsData });

  return <div>BLOG</div>;
};

export default Blog;
