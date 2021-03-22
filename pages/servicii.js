import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import MenuBar from "../components/MenuBar";
import { InfoCardLeft, InfoCardRight } from "../components/InfoCard";

const Servicii = ({ title, src, subTitle, alt, text }) => {
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
        <Header title="Servicii" />
        <main className="main">
          <div className="left-side">
            <MenuBar />
            <div className="resume-wrapper">
              <img
                src="/PsychologistRafiki.svg"
                alt="Picture of the author"
                width="260px"
                height="auto"
                style={{
                  transform: `translateY(${offsetY * 0.58}px)`,
                }}
              />
            </div>
          </div>
          <div className="rectangles">
            <InfoCardRight
              image="/MentalHealth.svg"
              title="Evaluare şi psihoterapie adult"
              t1="Evaluare clinică/cognitivă. Autocunoaştere/dezvoltare personală. Depăşirea dependenţei prin integrarea autonomiei. "
              t2="Tulburări comportament alimentar; Abandon, abuz/adicţii."
              t3="Terapie suportivă în procesul de doliu; Creşterea performanţelor."
              t4="Accesarea inteligenţei emoţionale;Abilităţi comunicare/relaţionare. "
              t5="Managementul stresului; Depăşire situaţie criză."
              t6="Integrarea creativităţii, a resurselor personale şi spirituale."
              text="Începe să înflorești"
            />
            <InfoCardLeft
              image="/StressRafiki.svg"
              title="Evaluare şi psihoterapie pentru copii şi adolescenți"
              t1="Stabilire nivel dezvoltare cognitivă; Orientare şcolară;"
              t2="Consilierea familiilor copiilor cu dizabilităţi;"
              t3="Psihopedagogie specială copii cu deficit de atenţie, sindr.Asperger;"
              t4="Psihoterapia copil abuzat; Proces psihoterapeutic posttraumatic;"
              t5="Determinare stil de învăţare; Dezvoltare abilităţi de învăţare."
              text="Găsește echilibrul"
            />

            <InfoCardRight
              image="/CoupleBicycle.svg"
              title="Psihoterapie de cuplu şi familie"
              t1="Consiliere maritală şi premaritală; Fuziune şi autonomie;"
              t2="Diagnoza familială;Transformarea competiţiei în cooperare;"
              t3="Adaptare abuz fizic /emoţional;Comunicare încuplu;"
              t4="Depaşirea situaţiilor de criză; Negocierea conflictelor;"
              t5="Parenting, adaptare la schimbările legate de vârsta copilului"
              t6="Infidelitate, gelozie, divorţ; Redobândirea relaţiei intime;"
              t7="Familii uniparentale; Probleme legate de schimbare rol."
              text="Fortifică-ți relațiile"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Servicii;
