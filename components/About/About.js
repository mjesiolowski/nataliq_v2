import ReactMarkdown from 'react-markdown';

const About = ({ aboutUsData }) => {
  console.log({ aboutUsData });

  return (
    <section id='about'>
      <ReactMarkdown source={aboutUsData} />
    </section>
  );
};

export default About;
