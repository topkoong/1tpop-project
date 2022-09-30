import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='th'>
        <Head>
          <meta charSet='utf-8' />
          <meta property='og:type' content='website' />
          <meta
            name='description'
            content='1TPOP - อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี'
          />
          <meta
            name='title'
            content={`1TPOP - THE WEEK'S MOST POPULAR CURRENT SONGS ACROSS ALL GENRES`}
          />

          <meta
            property='og:title'
            content={`1TPOP - THE WEEK'S MOST POPULAR CURRENT SONGS ACROSS ALL GENRES`}
          />
          <meta
            property='og:description'
            content='1TPOP - อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี'
          />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='/icons/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/icons/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/icons/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/icons/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/icons/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/icons/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/icons/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/icons/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/icons/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/icons/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/icons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/icons/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/icons/favicon-16x16.png'
          />
          <link rel='icon' href='/icons/favicon.ico' />
          <link rel='manifest' href='/icons/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
