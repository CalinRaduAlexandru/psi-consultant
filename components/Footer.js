import SecondaryBtn from "../components/SecondaryBtn";

const Footer = () => {
  return (
    <footer>
      <div className="wave">
        <img src="/wave.svg" alt="footer wave" />
      </div>
      <div className="footer-wrapper">
        <SecondaryBtn />
        <div className="links">
          <a href="/">Acasa </a>
          <a href="/despre">Elena Chivu </a>
          <a href="/servicii">Servicii </a>
          <a href="/consiliere-email">Consiliere prin e-mail </a>
          <a href="/practica">Practica studenteasca </a>
          <a href="/grupuri">Grupuri </a>
          <a href="/contact">Contact </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
