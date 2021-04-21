import Link from 'next/link';
import { useState } from 'react';
import {
  BLOG_HREF, NAV_ABOUT, NAV_COLLECTIONS, NAV_HOME, NAV_BLOG, NAV_CONTACT,
} from '../../constants';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };

  const handleNavItemClick = (e) => {
    if (e.target.href) {
      setIsHamburgerActive(!isHamburgerActive);
    }
  };

  return (
    <header>
      <button
        type='button'
        className={`${styles.hamburger} ${isHamburgerActive ? styles.hamburgerActive : ''}`}
        onClick={() => handleHamburgerClick()}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner} />
        </span>
      </button>
      <nav className={`${styles.navbar} ${isHamburgerActive ? styles.navbarActive : ''}`}>
        <ul className={`${styles.navItems}`} onClick={(e) => handleNavItemClick(e)}>
          <li className={styles.navItem}>
            <Link href='/'>
              <a className={styles.navLink}>{NAV_HOME}</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/#collections'>
              <a className={styles.navLink}>{NAV_COLLECTIONS}</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`/${BLOG_HREF}1`} className={styles.navLink}>
              <a className={styles.navLink}>{NAV_BLOG}</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/#about' className={styles.navLink}>
              <a className={styles.navLink}>{NAV_ABOUT}</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/#contact' className={styles.navLink}>
              <a className={styles.navLink}>{NAV_CONTACT}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
