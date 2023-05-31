import Footer from "/components/footer";
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
