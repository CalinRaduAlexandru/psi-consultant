import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import MenuBar from "../components/MenuBar";
import Faq from "../components/FAQ";
import PrimaryBtn from "../components/Primary-btn";

const PracticaStudenteasca = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [faqs, setfaqs] = useState([
    {
      question: "SELECŢIE:",
      answer:
        "Înscrierea se va face pentru unul dintre cele două module, în funcţie de numărul locurilor disponibile. Se pot înscrie 8-10 persoane într-o grupă ",
      open: true,
    },
    {
      question: "DURATA:",
      answer:
        "16 ore pentru fiecare modul; orarul este flexibil şii se va stabili de comun acord cu participanţii; studenţii vor continua cu activităţi practice, până la acoperirea numărului de ore solicitat de instituţia de învăţământ.",
      open: false,
    },
    {
      question: "FINALIZAREA PROGRAMULUI:",
      answer:
        "Participanţii vor primi adeverinţe de participare care să  certifice efectuarea numărului de ore de practică de specialitate stabilit de unităţile de învăţământ şi calificativul obţinut; ",
      open: false,
    },
    {
      question: "COSTUL PROGRAMULUI:",
      answer:
        "250lei, incluzând materialele de curs. Pentru grupe de studenţi (minim 5 persoane) se oferă o reducere de 20%. .",
      open: false,
    },
    {
      question: "COORDONATORI:",
      answer: "drd. Elena Chivu, psiholog  clinician, MA, psihoterapeut ",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

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
        <Header title="Practică studențească" />
        <main className="main">
          <div className="left-side">
            <MenuBar />
            <div className="resume-wrapper">
              <img
                src="/GraduationCuate.svg"
                alt="Picture of the author"
                width="260px"
                height="auto"
                style={{
                  transform: `translateY(${offsetY * 0.2}px)`,
                }}
              />
            </div>
          </div>
          <div className="rectangle-wrapper">
            <div className="teamSpiritHiFive-wrapper">
              <img
                src="/TeamSpiritHiFive.svg"
                alt="Picture of the author"
                width="200"
                height="auto"
              />
            </div>
            <div className="faqText">
              <h1>OBIECTIVELE PROGRAMULUI: </h1>
              <p>
                Familiarizarea studenţilor cu evaluare clinică copil, adolescent
                /adult;
              </p>
              <p>
                Asigurarea unui bagaj de cunoştinţe minimal pentru desfăşurarea
                unei <br /> activităţi eficiente în acest domeniu.
              </p>
              <p>
                Cursul include atât prezentări teoretice, cât şi aplicaţii
                practice.
              </p>
              <p>
                Se prezintă metodologia evaluării clinice, Ghid de bune
                practici, model raport psihodiagnostic clinic elaborat de CPR,
                Sistem evaluare clinică, SCID, FFPI, ZKPQ, YSQ, CAT, Fabulele
                Duss, Desenul persoanei, Desenul familiei, HSPQ, TSCC, EMBU).
              </p>
            </div>
            <div className="faqs">
              {faqs.map((faq, i) => (
                <Faq faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
              ))}
            </div>
            <div className="PracticaBtn">
              <PrimaryBtn text="Să începem călătoria" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PracticaStudenteasca;
