import Link from "next/link";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import "../public/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
