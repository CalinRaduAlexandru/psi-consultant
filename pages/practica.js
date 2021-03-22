import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import MenuBar from "../components/MenuBar";

const PracticaStudenteasca = () => {
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
        <Header title="Practică studențească" />
        <main className="main">
          <div className="left-side">
            <MenuBar />
            <div className="resume-wrapper">
              <div className="hat">
                <img
                  src="/resumeHat.svg"
                  alt="Picture of the author"
                  width="95px"
                  height="auto"
                  style={{
                    transform: `translateY(${offsetY * 0.32}px)`,
                  }}
                />
              </div>
              <div className="talk-bubble">
                <img
                  src="/resumeTalkbubble.svg"
                  alt="Picture of the author"
                  width="55px"
                  height="auto"
                  style={{
                    transform: `translateY(${offsetY * 0.32}px)`,
                  }}
                />
              </div>
              <img
                src="/resumePeopleGreen.svg"
                alt="Picture of the author"
                width="325px"
                height="auto"
                style={{
                  transform: `translateY(${offsetY * 0.32}px)`,
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
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PracticaStudenteasca;
