import ReactMarkdown from 'react-markdown';

const About = ({ aboutUsData }) => {
  console.log({ aboutUsData });
  return (
    <>
      <div id='about'>ABOUT</div>
      <ReactMarkdown source={aboutUsData} />
    </>
  );
};

export default About;
