import ReactMarkdown from 'react-markdown';
import styles from './about.module.scss';
import { ABOUT_US } from '../../constants';

const About = ({ aboutUsData }) => {
  console.log({ aboutUsData });

  return (
    <section id='about' className={styles.about}>
      <h2 className={styles.aboutTitle}>O nas</h2>
      <div className={styles.aboutWrapper}>
        <ReactMarkdown source={aboutUsData} />
      </div>
    </section>
  );
};

export default About;
