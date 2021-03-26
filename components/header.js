import react, { useState } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";

const Header = ({ title }) => {
  const [dropdown, setDropdown] = useState(false);
  const toggleMenu = () => {
    setDropdown(!dropdown);
    console.log(dropdown);
  };
  return (
    <header className="header">
      <div className="left-header">
        <Link href="/">
          <a>
            <div className="logo">
              <img src="/logoTest.svg" alt="logo" width="75px" height="auto" />
              <div className="shape">
                <img
                  src="/LogoTestShape.svg"
                  alt="logo"
                  width="22px"
                  height="auto"
                />
              </div>
            </div>
          </a>
        </Link>

        <h3 id="cabinetHeader">
          Cabinet individual
          <br /> Psiholog Elena Chivu
        </h3>
        <div id="MobileLogo">
          <img src="/Logo.svg" alt="logo" width="35px" height="auto" />
        </div>
      </div>
      <div className="header-title">
        <h1>{title}</h1>
      </div>
      <h3 className="headerContact">
        Bucuresti <br /> Mobil: 0722 834 334 <br /> Email: elena@psi-consult.ro
      </h3>
      <div className="headerMenu" onClick={toggleMenu}>
        {" "}
        &#9776;
      </div>
      {dropdown && <Dropdown toggleMenu={toggleMenu} />}
    </header>
  );
};

export default Header;
