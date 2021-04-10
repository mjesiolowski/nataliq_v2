import { getBlogPostsTitles } from '../../lib/collection';
import { BLOG_POSTS_LIMIT, BLOG_HREF } from '../../constants';
import Pagination from '../../components/Pagination/Pagination';
import Navbar from '../../components/Navbar/Navbar';
import BlogList from '../../components/BlogList/BlogList';

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
  if (slug > maxSubpagesNumber) {
    return (
      <>
        <p>Ta strona nie istnieje.</p>
        <Link href={`/${BLOG_HREF}1`}>
          <a>Powrót do bloga</a>
        </Link>
      </>
    );
  }
  return (
    <section className='blogListSection'>
      <Navbar />
      <div className='blogListSectionContent'>
        <span className='blogListTitle'>Blog</span>
        <ul className='blogList'>
          <BlogList titles={blogPostsTitles} />
        </ul>
        <div className='pagination'>
          <Pagination subpagesCount={maxSubpagesNumber} slug={slug} />
        </div>
      </div>
    </section>
  );
};

export default Blog;
