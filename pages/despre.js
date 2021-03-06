import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import MenuBar from "../components/MenuBar";

const despre = () => {
  const [offsetY, setOffsetY] = useState(0);
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
        <Header title="Despre Elena Chivu" />
        <main className="main">
          <div className="left-side">
            <MenuBar />
            <div className="resume-wrapper">
              <div className="hat">
                <img
                  src="/resumeHat.svg"
                  alt="Picture of the author"
                  width="75px"
                  height="auto"
                  style={{
                    transform: `translateY(${offsetY * 0.13}px)`,
                  }}
                />
              </div>
              <div className="talk-bubble">
                <img
                  src="/resumeTalkbubble.svg"
                  alt="Picture of the author"
                  width="45px"
                  height="auto"
                  style={{
                    transform: `translateY(${offsetY * 0.14}px)`,
                  }}
                />
              </div>
              <img
                src="/resumePeopleGreen.svg"
                alt="Picture of the author"
                width="260px"
                height="auto"
                style={{
                  transform: `translateY(${offsetY * 0.15}px)`,
                }}
              />
            </div>
          </div>

          <div className="rectangle-wrapper">
            <div className="elena-bgrmv-wrapper">
              <img
                src="/photoMockup.png"
                alt="Picture of the author"
                width="150"
                height="auto"
                style={{ borderRadius: "25px" }}
              />
              <h3>Psiholog Elena Chivu</h3>
            </div>

            <h4>Atestare profesional??: PSIHOLOGIE CLINICA</h4>
            <h1>Preg??tire Academic??:</h1>
            <p>
              Doctorand - Universitatea de Stat Moldova <br />
              Master - Institutul Teologic Catolic, Bucuresti <br />
              Licen???? - Universitatea Ecologic?? Bucure??ti, Facultatea de
              Psihologie <br />
            </p>
            <h1>Activitate Profesional??:</h1>
            <p>
              Cabinet Medical Psihiatrie- Neurologie infantil?? :evaluarea nivel
              dezvoltare - IQ <br />
              ??coala Special?? nr. 10 Bucure??ti : psihopedagogie special?? <br />
              Colegiul Na??ional Gheorghe Laz??r : profesor psihologie-logic??{" "}
              <br />
            </p>
            <h1>Formare Profesional?? | Conferin??e | Workshopuri</h1>
            <p>
              Curs postuniversitar de specializare ??n psihoterapie - European
              Association Transactional Analysis; <br />
              Testul de diagnostic pulsional SZONDI, teste proiective -
              Asocia??ia Szondi din Rom??nia; <br />
              Specializare didactic?? - Universitatea Ecologic?? Bucure??ti. <br />
              Workshop : Comunicare pentru Profesori ??i P??rin??i - IRSCA Gifted
              Education <br />
              Workshop : Dezvoltare Inteligen??e Multiple - IRSCA Gifted
              Education <br />
              Asocia??ia Rom??n?? de Analiz?? Tranzac??ional?? . Conferin??a
              Interna??ional?? - Bucure??ti <br />
              Asocia??ia Rom??n?? de Psihiatrie : aVa Conferin???? Na??ional?? de
              S??n??tate Mintal??
              <br />
              Asocia??ia Psihologilor din Banat - Conferin??a Interna??ional?? de
              Psihologie Aplicat??
              <br />
              Universitatea Bucure??ti - Conferin??a Interna??ional?? de Psihologie
              <br />
              Asocia??ia Psihologilor din Rom??nia - Conferin??a na??ional?? de
              psihologie ??? Cluj Napoca
              <br />
              Asocia??ia medicilor reziden??i ??n psihiatrie - Anxietate ??i
              depresie ??n noul mileniu
              <br />
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default despre;
