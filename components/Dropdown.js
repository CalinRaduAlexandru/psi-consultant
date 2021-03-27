import Link from "next/link";

const Dropdown = ({ toggleMenu }) => {
  return (
    <div className="dropdown">
      <div className="dropdownX" onClick={toggleMenu}>
        &#10006;
      </div>
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
      <img
        src="/Meditation.svg"
        alt="Meditation Woman"
        width="260px"
        height="auto"
        style={{ marginTop: "-20px", marginBottom: "40px" }}
      />
    </div>
  );
};

export default Dropdown;
