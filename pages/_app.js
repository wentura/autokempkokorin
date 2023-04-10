import Link from "next/link";
import Footer from "/components/footer";
import Header from "/components/header";
import "/public/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
