import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BLOG_HREF } from '../../constants';
import styles from './navbar.module.scss';

// const Hamburger = () => {
//   const [isHamburgerActive, setIsHamburgerActive] = useState(false);

//   const handleHamburgerClick = () => {
//     setIsHamburgerActive(!isHamburgerActive);
//   };

//   return (
//     <button
//       type='button'
//       className={`${styles.hamburger} ${isHamburgerActive && styles.hamburgerActive}`}
//       onClick={() => handleHamburgerClick()}
//     >
//       <span className={styles.hamburgerBox}>
//         <span className={styles.hamburgerInner} />
//       </span>
//     </button>
//   );
// };

const Navbar = () => {
  console.log('Navbar');
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerActive(!isHamburgerActive);
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
        <ul className={`${styles.navItems}`}>
          <li className={`${styles.navItem} ${styles.navItemHome}`}>
            <Link href='/'>
              <a className={styles.navLink}>Strona główna</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/#collections'>
              <a className={styles.navLink}>Kolekcje</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`/${BLOG_HREF}1`} className={styles.navLink}>
              <a className={styles.navLink}>Blog</a>
            </Link>
          </li>
          {/* <li className={`${styles.navItem} ${styles.navItemLogo}`}>
            <Link href='/'>
              <Image className={styles.navLogoImage} src='/logo.png' alt='logo sklepu' width='150' height='64' />
            </Link>
          </li> */}
          <li className={styles.navItem}>
            <Link href='/' className={styles.navLink}>
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/#about' className={styles.navLink}>
              <a className={styles.navLink}>O nas</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/#contact' className={styles.navLink}>
              <a className={styles.navLink}>Kontakt</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
