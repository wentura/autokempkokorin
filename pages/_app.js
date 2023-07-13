import Head from "next/head";
import Footer from "/components/footer";
import "/public/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="www.zbyneksvoboda.cz" />
        <meta name="copyright" content="2023 Autokemp Kokořín" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="kokořín,ubytování v přírodě,kempy,kokořínsko,škola v přírodě,teambuilding,srazy,rodinná dovolená, kokořín, autokemp, kemp"
        />
        <meta
          name="description"
          content="Autokemp Kokořín ubytování v nádherném údolí Kokořínska"
        />
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
