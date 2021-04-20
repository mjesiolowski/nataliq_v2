import ReactMarkdown from 'react-markdown';
import { getBlogPost, getBlogPostList } from '../../../lib/collection';
import Image from '../../../components/Image/Image';
import Navbar from '../../../components/Navbar/Navbar';
import LinkButton from '../../../components/LinkButton/LinkButton';
import { BLOG_LIST_GO_BACK } from '../../../constants';
import styles from '../../../styles/pages.module.scss';

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

const BlogPostPage = ({ blogPostData = {} }) => {
  const {
    content, title, image, sys,
  } = blogPostData;
  const { image: blogImage, alt } = image || {};
  const { publishedAt } = sys;

  const publishDate = publishedAt.slice(0, 10);

  return (
    <>
      <Navbar />
      <section className={styles.blogPostSection}>
        <p className={styles.blogPostTitle}>{title}</p>
        <Image
          alt={alt}
          image={blogImage}
          stylesName='blogPost'
        />
        <div className={styles.blogPostContent}>
          <p>{ publishDate }</p>
          <ReactMarkdown source={content} />
        </div>
        <LinkButton
          href='/blog/1'
          content={BLOG_LIST_GO_BACK}
          stylesName='backLink'
        />
      </section>
    </>
  );
};

export default BlogPostPage;
