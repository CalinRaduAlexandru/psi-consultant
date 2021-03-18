const MenuBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <button> Acasa</button>
          </a>
        </li>
        <li>
          <a href="/despre">
            <button> Despre Elena</button>
          </a>
        </li>
        <li>
          <a href="/servicii">
            <button>Servicii</button>
          </a>
        </li>
        <li>
          <a href="/consiliere-email">
            <button>Consiliere prin e-mail</button>
          </a>
        </li>
        <li>
          <a href="/practica">
            <button>Practica studenteasca</button>
          </a>
        </li>
        <li>
          <a href="/grupuri">
            <button>Grupuri</button>
          </a>
        </li>
        <li>
          <a href="/contact">
            <button>Contact</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
