import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="bg">
      <Head>
        <link
          rel="preload"
          href="https://bgkalendar.com/fonts/notoserif-regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'NotoSerif';
              src: url('https://bgkalendar.com/fonts/notoserif-regular.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
            * {
              font-family: 'NotoSerif', 'Times New Roman', 'DejaVu Serif', serif;
            }
          `
        }} />
      </Head>
      <body className="bg-gray-900 text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
