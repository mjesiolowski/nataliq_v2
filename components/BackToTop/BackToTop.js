import Link from 'next/link';

const BackToTop = () => {
  console.log('BackToTop');

  return (
    <Link href='/#hero'>
      Powrót na górę strony
    </Link>
  );
};

export default BackToTop;
