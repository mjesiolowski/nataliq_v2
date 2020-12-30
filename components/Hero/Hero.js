import Link from 'next/link';

const Hero = () => {
  console.log('Hero');

  return (
    <section id='hero'>
      <div>
        <h1 className='intro__title__text'>Salon sukien ślubnych i wizytowych NataliQ</h1>
        <p>
          <Link href='/#collections'>
            Poznaj nasze kolekcje
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Hero;
