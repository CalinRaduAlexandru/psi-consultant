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
                  <h1 id="topRightSwitchBar"> Adul??i </h1>
                  <p>&#8811;</p>
                </div>
                <InfoCardRight
                  image="/MarriageCounseling.svg"
                  title="Grup pentru p??rin??i, viitori p??rin??i dar si pentru tineri sau adul??i cu:"
                  t1="Dificult????i de comunicare ??i rela??ionare;"
                  t2="Dificult????i ??n rela??ia de cuplu;"
                  t3="Tulbur??ri emo??ionale depresie,anxietate, fobii)."
                  text="??ncepe s?? ??nflore??ti"
                />
                <InfoCardLeft
                  image="/GroupTherapy.svg"
                  title="Grup suport pentru tineri ??i adul??i"
                  t1="Au suferit o pierdere;"
                  t2="Au o dizabilitate;"
                  t3="Sufer?? de o boal?? somatic??."
                  text="G??se??te echilibrul"
                />
                <InfoCardRight
                  image="/CreativeTeamRocket.svg"
                  title="Tehnicile utilizate sunt specifice psihoterapiei umanist-experien??iale:"
                  t1="Exerci??ii ??i jocuri de exprimare emo??ional?? pentru dep????irea inhibi??iilor ??i blocajelor"
                  t2="Jocuri de rol,  tehnici de improvizatie;"
                  t3="Tehnici de exprimare prin mi??care/ dans;"
                  t4="Elemente de artterapie (desen, modelaj, colaj etc)."
                  text="Fortific??-??i rela??iile"
                />{" "}
                <div
                  className="pageSlide pageSlideBottom"
                  style={{ marginTop: "7px" }}
                >
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
                  <h1 id="topRightSwitchBar"> Adul??i </h1>
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
                    Adul??i
                  </h3>
                  <p onClick={() => setCopii(true)}>&#8811;</p>
                </div>
                <InfoCardRight
                  image="/KidsPlaying.svg"
                  title="Grupe de v??rst?? axate pe valorificarea poten??ialului"
                  subtitle=""
                  t1="Vizual-spa??ial?? - exersare capacit????i perceptive"
                  t2="Emo??ional?? - exprimare emo??ional?? ??i descoperirea empatiei"
                  t3="Social??/interpersonal?? -antrenare conduite prosociale"
                  t5="Verbal??/lingvistic?? - dezvoltare poten??ial lingvistic/ imagistic"
                  t6="Creativ?? - dezvoltare spontaneitate /stimulare poten??ial creativ"
                  t7="Spiritual?? - ??ntelegerea conexiunilor cu ceilal??i, cu natura, cu universul"
                  text="Ofer??-le aripi copiilor"
                />
                <InfoCardLeft
                  image="/Bullying.svg"
                  title="Evaluare ??i psihoterapie pentru copii ??i adolescen??i"
                  t1="Stabilire nivel dezvoltare cognitiv??; Orientare ??colar??;"
                  t2="Consilierea familiilor copiilor cu dizabilit????i;"
                  t3="Psihopedagogie special?? copii cu deficit de aten??ie, sindr.Asperger;"
                  t4="Psihoterapia copil abuzat; Proces psihoterapeutic posttraumatic;"
                  t5="Determinare stil de ??nv????are; Dezvoltare abilit????i de ??nv????are."
                  text="G??se??te-i echilibrul"
                />
                <InfoCardRight
                  image="/TeamWorkFour.svg"
                  title="Tehnicile utilizate sunt specifice psihoterapiei umanist-experien??iale:"
                  t1="Exerci??ii ??i jocuri de exprimare emo??ional?? pentru dep????irea inhibi??iilor ??i blocajelor"
                  t2="Jocuri de rol,  tehnici de improvizatie;"
                  t3="Tehnici de exprimare prin mi??care/ dans;"
                  t4="Elemente de artterapie (desen, modelaj, colaj etc)."
                  text="Fortific??-i rela??iile"
                />{" "}
                <div
                  className="pageSlide pageSlideBottom"
                  style={{ marginTop: "7px" }}
                >
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
                    Adul??i
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
