import ReactMarkdown from 'react-markdown';
import { getBlogPost, getBlogPostList } from '../../../lib/collection';
import Image from '../../../components/Image/Image';
import Navbar from '../../../components/Navbar/Navbar';
import LinkButton from '../../../components/LinkButton/LinkButton';
import { BLOG_LIST_GO_BACK } from '../../../constants';

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
  console.log({ blogPostData });
  return (
    <>
      <Navbar />
      <section className='blogPostSection'>
        <p className='blogPostTitle'>{title}</p>
        <Image
          alt={alt}
          // title={title}
          image={blogImage}
          className='blogPost'
        />
        <div className='blogPostContent'>
          <ReactMarkdown source={content} />
        </div>
        <LinkButton
          href='/blog/1'
          content={BLOG_LIST_GO_BACK}
          className='backLink'
        />
      </section>
    </>
  );
};

export default BlogPost;
