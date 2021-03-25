const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="left-header">
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
      <div className="headerMenu"> &#9776;</div>
    </header>
  );
};

export default Header;
