import ReactMarkdown from 'react-markdown';
import { getBlogPost, getBlogPostList } from '../../../lib/collection';
import Image from '../../../components/Image/Image';

export async function getStaticPaths() {
  const allBlogPostList = await getBlogPostList();

  const paths = allBlogPostList.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const blogTitle = (slug.charAt(0).toUpperCase() + slug.slice(1)).split('-').join(' ');
  const blogPostData = await getBlogPost(blogTitle);

  return {
    props: {
      blogPostData,
    },
  };
}

const BlogPost = ({ blogPostData = {} }) => {
  const { content, title, image } = blogPostData;
  const {
    image: blogImage, alt,
  } = image || {};

  return (
    <>
      <p>BLOGPOST</p>
      <Image
        alt={alt}
        title={title}
        image={blogImage}
      />
      <ReactMarkdown source={content} />
    </>
  );
};

export default BlogPost;
