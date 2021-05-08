import React from 'react';
import Head from 'next/head';

function MetaTags() {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta
          name='description'
          content='NataliQ | Salon sukien ślubnych w Turku | suknie ślubne, suknie szyte na miarę, Duber, Sedinum Bridal, suknie plus, suknie wizytowe, dodatki | ul. 3-go Maja 15 62-700 Turek'
        />
        <meta property='og:description' content='NataliQ | Salon sukien ślubnych w Turku | suknie ślubne, suknie szyte na miarę, Duber, Sedinum Bridal, suknie plus, suknie wizytowe, dodatki | ul. 3-go Maja 15 62-700 Turek' />
        <title>Suknie ślubne i wizytowe Turek | NataliQ</title>
        <meta property='og:title' content='Suknie ślubne i wizytowe Turek | NataliQ' />
        <meta name='language' content='pl' />
        <meta property='og:image' content='/couple.png' />
        <meta property='og:locale' content='pl' />
        <link rel='shortcut icon' href='/couple.png' />
        <link rel='canonical' href='https://nataliq.pl' />

      </Head>
    </>
  );
}

export default MetaTags;
