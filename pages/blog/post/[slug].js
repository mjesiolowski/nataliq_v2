export async function getServerSideProps({ params }) {
  const { slug } = params;

  return {
    props: {
      slug,
    },
  };
}

const BlogPost = ({ slug }) => {
  console.log({ slug });
  return (
    <p>BLOGPOST</p>
  );
};

export default BlogPost;
