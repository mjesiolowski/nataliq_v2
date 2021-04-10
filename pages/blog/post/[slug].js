import ReactMarkdown from 'react-markdown';
import { getBlogPost } from '../../../lib/collection';
import Image from '../../../components/Image/Image';

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

const BlogPost = ({ blogPostData }) => {
  const { content, title, image } = blogPostData;
  console.log({ content, title, image });
  const {
    desktopImage, tabletImage, mobileImage, alt,
  } = image;
  return (
    <>
      <p>BLOGPOST</p>
      <Image
        alt={alt}
        title={title}
        desktopImage={desktopImage}
        tabletImage={tabletImage}
        mobileImage={mobileImage}
      />
      <ReactMarkdown source={content} />
    </>
  );
};

export default BlogPost;
