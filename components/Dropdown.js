import Link from "next/link";

const Dropdown = ({ toggleMenu }) => {
  return (
    <div className="dropdown">
      <p className="dropdownX" onClick={toggleMenu}>
        &#10006;
      </p>
      <ul>
        <li>
          <Link href="/">
            <a>Acasa</a>
          </Link>
        </li>
        <li>
          <Link href="/despre">
            <a>Despre</a>
          </Link>
        </li>
        <li>
          <Link href="/servicii">
            <a>Servicii</a>
          </Link>
        </li>
        <li>
          <Link href="/consiliere-email ">
            <a>Consiliere prin e-mail</a>
          </Link>
        </li>
        <li>
          <Link href="/practica">
            <a>Practică studențească</a>
          </Link>
        </li>
        <li>
          <Link href="/grupuri">
            <a>Grupuri</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <div className="meditationDesktop">
        <img
          src="/Meditation.svg"
          alt="Meditation Woman"
          width="260px"
          height="auto"
          style={{ marginTop: "-20px", marginBottom: "40px" }}
        />
      </div>
      <div className="mediationMobile">
        <img
          src="/Meditation.svg"
          alt="Meditation Woman"
          width="90px"
          height="auto"
          style={{ marginTop: "-20px", marginBottom: "40px" }}
        />
      </div>
    </div>
  );
};

export default Dropdown;
