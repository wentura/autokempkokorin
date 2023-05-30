import Head from "next/head";
import Link from "next/link";
import Footer from "/components/footer";
import Header from "/components/header";
import "/public/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bahiana&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
