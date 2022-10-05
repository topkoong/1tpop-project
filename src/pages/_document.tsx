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
            content={`1TPOP - เช็คอันดับเพลงฮิตทุกแนว 2022 อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม Top Chart Songs เพลงใหม่ล่าสุด`}
          />

          <meta
            property='og:title'
            content={`1TPOP - เช็คอันดับเพลงฮิตทุกแนว 2022 อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม Top Chart Songs เพลงใหม่ล่าสุด`}
          />
          <meta property='og:site_name' content='1TPOP' />
          <meta
            property='og:description'
            content='1TPOP - อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี'
          />
          <meta property='og:locale' content='th_TH' />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='https://topkoong.github.io/1tpop-project/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='https://topkoong.github.io/1tpop-project/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='https://topkoong.github.io/1tpop-project/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='https://topkoong.github.io/1tpop-project/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='https://topkoong.github.io/1tpop-project/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='https://topkoong.github.io/1tpop-project/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='https://topkoong.github.io/1tpop-project/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='https://topkoong.github.io/1tpop-project/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='https://topkoong.github.io/1tpop-project/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='https://topkoong.github.io/1tpop-project/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='https://topkoong.github.io/1tpop-project/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='https://topkoong.github.io/1tpop-project/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='https://topkoong.github.io/1tpop-project/favicon-16x16.png'
          />
          <link rel='icon' href='./favicon.ico' />
          <link rel='manifest' href='./manifest.json' />
          <meta
            property='og:image:url'
            content='https://topkoong.github.io/1tpop-project/apple-icon-180x180.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
