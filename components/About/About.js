import ReactMarkdown from 'react-markdown';

const About = ({ aboutUsData }) => {
  console.log({ aboutUsData });
  return (
    <>
      <div>ABOUT</div>
      <ReactMarkdown source={aboutUsData} />
    </>
  );
};

export default About;
