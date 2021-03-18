import "../styles/globals.css";
import "./../styles/index.scss";
import "./../styles/header.scss";
import "./../styles/testimony.scss";
import "./../styles/despre.scss";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
