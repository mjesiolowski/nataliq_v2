import { getBlogPostList } from '../../lib/collection';
import { BLOG_POSTS_LIMIT } from '../../constants';
import Pagination from '../../components/Pagination/Pagination';
import Navbar from '../../components/Navbar/Navbar';
import BlogList from '../../components/BlogList/BlogList';

const getMaxSubpagesNumber = (length, limit) => Math.ceil(length / limit);

export async function getStaticPaths() {
  const allBlogPostList = await getBlogPostList();
  const blogPostsLength = allBlogPostList.length;
  const maxSubpagesNumber = getMaxSubpagesNumber(blogPostsLength, BLOG_POSTS_LIMIT);

  const slugs = Array.from(Array(maxSubpagesNumber).keys()).map((item) => (item + 1));
  const paths = slugs.map((slug) => ({
    params: {
      slug: slug.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const skipValue = (Number(slug) - 1) * BLOG_POSTS_LIMIT;
  const currentBlogPostList = await getBlogPostList({ skip: skipValue, limit: BLOG_POSTS_LIMIT });
  const allBlogPostList = await getBlogPostList();
  const blogPostsLength = allBlogPostList.length;
  const maxSubpagesNumber = getMaxSubpagesNumber(blogPostsLength, BLOG_POSTS_LIMIT);

  return {
    props: {
      blogPostList: currentBlogPostList,
      maxSubpagesNumber,
      slug,
    },
  };
}

const Blog = ({ blogPostList, maxSubpagesNumber, slug }) => (
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

export default Blog;
