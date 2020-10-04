import { useQuery } from '@apollo/react-hooks';
import ReactMarkdown from 'react-markdown';
import { GET_ABOUT_US } from '../lib/queries';

const About = () => {
  const { loading, data, error } = useQuery(GET_ABOUT_US);

  const { aboutUs } = data?.aboutCollection?.items[0] || {};
  // console.log({ aboutUs });

  return (
    <>
      <div>ABOUT</div>
      <ReactMarkdown source={aboutUs} />
    </>
  );
};

export default About;
