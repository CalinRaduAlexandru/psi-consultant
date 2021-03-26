import "./../styles/global.scss";
import "./../styles/index.scss";
import "./../styles/despre.scss";
import "./../styles/grupuri.scss";
import "./../styles/consiliere.scss";
import "./../styles/contact.scss";

import "./../styles/infoCard.scss";
import "./../styles/faqs.scss";

import "./../styles/header.scss";
import "./../styles/dropdown.scss";
import "./../styles/testimony.scss";
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
