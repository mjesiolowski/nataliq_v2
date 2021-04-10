import { getBlogPostList } from '../../lib/collection';
import { BLOG_POSTS_LIMIT, BLOG_HREF } from '../../constants';
import Pagination from '../../components/Pagination/Pagination';
import Navbar from '../../components/Navbar/Navbar';
import BlogList from '../../components/BlogList/BlogList';

export async function getStaticProps({ params }) {
  const { slug } = params;

  const skipValue = (Number(slug) - 1) * BLOG_POSTS_LIMIT;
  const currentBlogPostList = await getBlogPostList({ skip: skipValue, limit: BLOG_POSTS_LIMIT });
  const allBlogPostList = await getBlogPostList();
  const blogPostsLength = allBlogPostList.length;
  const maxSubpagesNumber = Math.ceil(blogPostsLength / BLOG_POSTS_LIMIT);

  return {
    props: {
      blogPostList: currentBlogPostList,
      maxSubpagesNumber,
      slug,
    },
  };
}

const Blog = ({ blogPostList, maxSubpagesNumber, slug }) => {
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
          <BlogList list={blogPostList} />
        </ul>
        <div className='pagination'>
          <Pagination subpagesCount={maxSubpagesNumber} slug={slug} />
        </div>
      </div>
    </section>
  );
};

export default Blog;
