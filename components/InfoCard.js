import { InfoCardData } from "./InfoCardData.js";
import PrimaryBtn from "../components/Primary-btn";

export const InfoCardLeft = ({
  image,
  title,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  text,
  subtitle,
}) => {
  return (
    <div className="rectangles">
      <div className="rectangle-wrapper">
        <div className="imgSideLeft">
          <img src={image} width="auto" height="300" />
        </div>
        <div className="textSideRight">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <ul>
            {InfoCardData.map((item) => (
              <li key={item.li}>{item.li}</li>
            ))}
          </ul>
        </div>
        <div className="infoBtn">
          <PrimaryBtn text={text} />
        </div>
      </div>
    </div>
  );
};

export const InfoCardRight = ({
  image,
  title,
  text,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  subtitle,
}) => {
  return (
    <div className="rectangles">
      <div className="rectangle-wrapper">
        <div className="textSideLeft">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <ul>
            <li>{t1}</li>
            <li>{t2}</li>
            <li>{t3}</li>
            <li>{t4}</li>
            <li>{t5}</li>
            <li>{t6}</li>
            <li>{t7}</li>
          </ul>
        </div>
        <div className="imgSideRight">
          <img src={image} width="auto" height="300" />
        </div>
        <div className="infoBtn">
          <PrimaryBtn text={text} />
        </div>
      </div>
    </div>
  );
};
