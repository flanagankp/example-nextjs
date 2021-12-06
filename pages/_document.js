/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable @next/next/no-page-custom-font */

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
            rel="stylesheet"
          />
          <link href='https://fonts.googleapis.com/css?family=DM Sans:400,700' rel='stylesheet'></link>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}