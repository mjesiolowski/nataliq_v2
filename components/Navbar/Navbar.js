import Link from 'next/link';
import { BLOG_HREF } from '../../constants';

const Navbar = () => {
  console.log('Navbar');

  return (
    <header>
      <nav>
        <div>Logo</div>
        <ul>
          <li>
            <Link href='/'>
              HOME
            </Link>
          </li>
          <li>
            <Link href='/#collections'>
              Kolekcje
            </Link>
          </li>
          <li>
            <Link href='/#about'>
              O nas
            </Link>
          </li>
          <li>
            <Link href='/#contact'>
              Kontakt
            </Link>
          </li>
          <li>
            <Link href={`/${BLOG_HREF}1`}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
