import { getBlogPost } from '../../../lib/collection';

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const blogTitle = (slug.charAt(0).toUpperCase() + slug.slice(1)).split('-').join(' ');
  const blogPostData = await getBlogPost(blogTitle);

  return {
    props: {
      blogPostData,
    },
  };
}

const BlogPost = ({ blogPostData }) => {
  const { content, title, image } = blogPostData;
  console.log({ content, title, image });
  return (
    <p>BLOGPOST</p>
  );
};

export default BlogPost;
