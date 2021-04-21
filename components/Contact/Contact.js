import styles from './contact.module.scss';
import { CONTACT_US } from '../../constants';

const Contact = () => (
  <section id='contact' className={styles.contact}>
    <h2 className={styles.contactTitle}>{CONTACT_US}</h2>
    <div className={styles.contactWrapper}>
      <iframe
        title='mapa salonu'
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9822.298874875232!2d18.5010443!3d52.014627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10d2a51cf730989f!2sSalon+Sukien+%C5%9Alubnych+i+Wizytowych+Nataliq!5e0!3m2!1spl!2spl!4v1559746214640!5m2!1spl!2spl'
        width='100%'
        height='450'
        frameBorder='0'
        // style='border:0'
        allowFullScreen
      />
      <address className={styles.contactAddress}>
        <p>ul. 3 Maja 15</p>
        <p>62-700 Turek</p>
        <p>Telefon: 693-410-920</p>
      </address>
    </div>

  </section>
);

export default Contact;
