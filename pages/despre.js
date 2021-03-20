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
                  src="/ResumeHat.svg"
                  alt="Picture of the author"
                  width="95px"
                  height="auto"
                  style={{
                    transform: `translateY(${offsetY * 0.42}px)`,
                  }}
                />
              </div>
              <div className="talk-bubble">
                <img
                  src="/ResumeTalkbubble.svg"
                  alt="Picture of the author"
                  width="55px"
                  height="auto"
                  style={{
                    transform: `translateY(${offsetY * 0.42}px)`,
                  }}
                />
              </div>
              <img
                src="/resumePeople.svg"
                alt="Picture of the author"
                width="325px"
                height="auto"
                style={{
                  transform: `translateY(${offsetY * 0.42}px)`,
                }}
              />
            </div>
          </div>
          <div className="rectangle-wrapper">
            <div className="elena-bgrmv-wrapper">
              <img
                src="/photoMockup.png"
                alt="Picture of the author"
                width="200"
                height="auto"
                style={{ borderRadius: "25px" }}
              />
              <h3>Psiholog Elena Chivu</h3>
              <h4>Atestare profesională: PSIHOLOGIE CLINICA</h4>
            </div>

            <h1>Pregătire Academică:</h1>
            <p>
              Doctorand - Universitatea de Stat Moldova <br />
              Master - Institutul Teologic Catolic, Bucuresti <br />
              Licență - Universitatea Ecologică București, Facultatea de
              Psihologie <br />
            </p>
            <h1>Activitate Profesională:</h1>
            <p>
              Cabinet Medical Psihiatrie- Neurologie infantilă :evaluarea nivel
              dezvoltare - IQ <br />
              Şcoala Specială nr. 10 Bucureşti : psihopedagogie specială <br />
              Colegiul Naţional Gheorghe Lazăr : profesor psihologie-logică{" "}
              <br />
            </p>
            <h1>Formare Profesională | Conferințe | Workshopuri</h1>
            <p>
              Curs postuniversitar de specializare în psihoterapie - European
              Association Transactional Analysis; <br />
              Testul de diagnostic pulsional SZONDI, teste proiective -
              Asociaţia Szondi din România; <br />
              Specializare didactică - Universitatea Ecologică Bucureşti. <br />
              Workshop : Comunicare pentru Profesori şi Părinţi - IRSCA Gifted
              Education <br />
              Workshop : Dezvoltare Inteligenţe Multiple - IRSCA Gifted
              Education <br />
              Asociaţia Română de Analiză Tranzacţională . Conferinţa
              Internaţională - Bucureşti <br />
              Asociaţia Română de Psihiatrie : aVa Conferinţă Naţională de
              Sănătate Mintală
              <br />
              Asociaţia Psihologilor din Banat - Conferinţa Internaţională de
              Psihologie Aplicată
              <br />
              Universitatea Bucureşti - Conferinţa Internaţională de Psihologie
              <br />
              Asociaţia Psihologilor din România - Conferinţa naţională de
              psihologie – Cluj Napoca
              <br />
              Asociaţia medicilor rezidenţi în psihiatrie - Anxietate şi
              depresie în noul mileniu
              <br />
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default despre;
