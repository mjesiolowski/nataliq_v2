import Link from 'next/link';
import { BLOG_HREF } from '../../constants';

const Navbar = ({ isHomepage }) => {
  console.log('Navbar');

  return (
    <header>
      <nav>
        <div>Logo</div>
        <ul>
          <li>
            <Link href='/'>
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href='/#collection'>
              <a>Kolekcje</a>
            </Link>
          </li>
          <li>
            <Link href='/#about'>
              <a>O nas</a>
            </Link>
          </li>
          <li>
            <Link href='/#contact'>
              <a>Kontakt</a>
            </Link>
          </li>
          <li>
            <Link href={`/${BLOG_HREF}1`}>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
