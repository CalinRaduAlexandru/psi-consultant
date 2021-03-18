const Testimony = ({ name, text }) => {
  return (
    <div className="testimony-card">
      <div>
        <h1 className="name">{name}</h1>
        <p className="voted">A votat cu nota 10</p>
      </div>
      <div className="testimony">
        <img src="/quotesLeft.svg" />
        <p className="text">{text}</p>
        <div className="quotes-right">
          <img src="/quotesRight.svg" />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
