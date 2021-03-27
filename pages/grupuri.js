import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import MenuBar from "../components/MenuBar";
import { InfoCardLeft, InfoCardRight } from "../components/InfoCard";

const Servicii = ({ title, src, subTitle, alt, text }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [copii, setCopii] = useState(false);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Head>
        <title>Psi-consult</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;0,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <Header title="Grupuri" />
        <main className="main">
          {copii ? (
            <>
              <div className="left-side">
                <MenuBar />

                <div className="resume-wrapper">
                  <img
                    src="/EthnicFriendship.svg"
                    alt="Picture of the author"
                    width="260px"
                    height="auto"
                    style={{
                      transform: `translateY(${offsetY * 0.63}px)`,
                    }}
                  />
                </div>
              </div>
              <div className="rectangles">
                <div className="pageSlide">
                  <p onClick={() => setCopii(false)}>&#8810;</p>
                  <h3
                    onClick={() => setCopii(false)}
                    style={{
                      color: "#ded7f7",
                      cursor: "pointer",
                    }}
                  >
                    Copii
                  </h3>
                  <span style={{ position: "absolute", left: "50%" }}>|</span>
                  <h1 id="topRightSwitchBar"> Adulți </h1>
                  <p>&#8811;</p>
                </div>
                <InfoCardRight
                  image="/MarriageCounseling.svg"
                  title="Grup pentru părinţi, viitori părinţi dar si pentru tineri sau adulţi cu:"
                  t1="Dificultăţi de comunicare şi relaţionare;"
                  t2="Dificultăţi în relaţia de cuplu;"
                  t3="Tulburări emoţionale depresie,anxietate, fobii)."
                  text="Începe să înflorești"
                />
                <InfoCardLeft
                  image="/GroupTherapy.svg"
                  title="Grup suport pentru tineri și adulţi"
                  t1="Au suferit o pierdere;"
                  t2="Au o dizabilitate;"
                  t3="Suferă de o boală somatică."
                  text="Găsește echilibrul"
                />
                <InfoCardRight
                  image="/CreativeTeamRocket.svg"
                  title="Tehnicile utilizate sunt specifice psihoterapiei umanist-experienţiale:"
                  t1="Exerciţii şi jocuri de exprimare emoţională pentru depăşirea inhibiţiilor şi blocajelor"
                  t2="Jocuri de rol,  tehnici de improvizatie;"
                  t3="Tehnici de exprimare prin mişcare/ dans;"
                  t4="Elemente de artterapie (desen, modelaj, colaj etc)."
                  text="Fortifică-ți relațiile"
                />{" "}
                <div
                  className="pageSlide pageSlideBottom"
                  style={{ marginTop: "7px" }}
                >
                  <p onClick={() => setCopii(false)}>&#8810;</p>
                  <h3
                    onClick={() => setCopii(false)}
                    style={{ color: "#ded7f7", cursor: "pointer" }}
                  >
                    Copii
                  </h3>
                  <span style={{ position: "absolute", left: "50%" }}>|</span>
                  <h1 id="bottomRightSwitchBar"> Adulți </h1>
                  <p>&#8811;</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="left-side">
                <MenuBar />

                <div className="resume-wrapper">
                  <img
                    src="/Children.svg"
                    alt="Picture of the author"
                    width="260px"
                    height="auto"
                    style={{
                      transform: `translateY(${offsetY * 0.63}px)`,
                    }}
                  />
                </div>
              </div>
              <div className="rectangles">
                <div className="pageSlide">
                  <p>&#8810;</p>
                  <h1 id="topLeftSwitchBar"> Copii </h1>
                  <span style={{ position: "absolute", left: "50%" }}>|</span>
                  <h3
                    onClick={() => setCopii(true)}
                    style={{
                      color: "#ded7f7",
                      cursor: "pointer",
                    }}
                  >
                    Adulți
                  </h3>
                  <p onClick={() => setCopii(true)}>&#8811;</p>
                </div>
                <InfoCardRight
                  image="/KidsPlaying.svg"
                  title="Grupe de vârstă axate pe valorificarea potenţialului"
                  subtitle=""
                  t1="Vizual-spaţială - exersare capacităţi perceptive"
                  t2="Emoţională - exprimare emoţională și descoperirea empatiei"
                  t3="Socială/interpersonală -antrenare conduite prosociale"
                  t5="Verbală/lingvistică - dezvoltare potenţial lingvistic/ imagistic"
                  t6="Creativă - dezvoltare spontaneitate /stimulare potenţial creativ"
                  t7="Spirituală - întelegerea conexiunilor cu ceilalţi, cu natura, cu universul"
                  text="Oferă-le aripi copiilor"
                />
                <InfoCardLeft
                  image="/Bullying.svg"
                  title="Evaluare şi psihoterapie pentru copii şi adolescenți"
                  t1="Stabilire nivel dezvoltare cognitivă; Orientare şcolară;"
                  t2="Consilierea familiilor copiilor cu dizabilităţi;"
                  t3="Psihopedagogie specială copii cu deficit de atenţie, sindr.Asperger;"
                  t4="Psihoterapia copil abuzat; Proces psihoterapeutic posttraumatic;"
                  t5="Determinare stil de învăţare; Dezvoltare abilităţi de învăţare."
                  text="Găsește-i echilibrul"
                />
                <InfoCardRight
                  image="/TeamWorkFour.svg"
                  title="Tehnicile utilizate sunt specifice psihoterapiei umanist-experienţiale:"
                  t1="Exerciţii şi jocuri de exprimare emoţională pentru depăşirea inhibiţiilor şi blocajelor"
                  t2="Jocuri de rol,  tehnici de improvizatie;"
                  t3="Tehnici de exprimare prin mişcare/ dans;"
                  t4="Elemente de artterapie (desen, modelaj, colaj etc)."
                  text="Fortifică-i relațiile"
                />{" "}
                <div
                  className="pageSlide pageSlideBottom"
                  style={{ marginTop: "7px" }}
                >
                  <p>&#8810;</p>
                  <h1 id="bottomLeftSwitchBar"> Copii </h1>
                  <span style={{ position: "absolute", left: "50%" }}>|</span>
                  <h3
                    onClick={() => setCopii(true)}
                    style={{ color: "#ded7f7", cursor: "pointer" }}
                  >
                    Adulți
                  </h3>
                  <p onClick={() => setCopii(true)}>&#8811;</p>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Servicii;
