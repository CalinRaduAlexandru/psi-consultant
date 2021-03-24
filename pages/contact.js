import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import MenuBar from "../components/MenuBar";
import { ContactForm } from "../components/Contact-component";

const Contact = () => {
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
        <Header title="Contact" />
        <main className="main">
          <div className="left-side">
            <MenuBar />
            <div className="resume-wrapper">
              <img
                src="/MentionAdBase.svg"
                alt="Picture of the author"
                width="260px"
                height="auto"
                style={{
                  transform: `translateY(${offsetY * 0.15}px)`,
                }}
              />
            </div>
          </div>
          <div className="contactContainer">
            <div className="contactForm">
              <ContactForm />
            </div>
            <div className="contactPlantLeft">
              <img
                src="/PlantLeft.svg"
                alt="Picture of the author"
                width="150"
                height="auto"
              />{" "}
            </div>
            <div className="psiChar">
              <img
                src="/PsiCharTwo.svg"
                alt="Picture of the author"
                width="160"
                height="auto"
              />{" "}
            </div>
            <div className="contactPlantRight">
              <img
                src="/PlantRight.svg"
                alt="Picture of the author"
                width="150"
                height="auto"
              />{" "}
            </div>
            <div>
              <h2
                style={{
                  marginBottom: "50px",
                  display: "flex",
                  justifyContent: "center",
                  color: "#9c33b0",
                }}
              >
                Sau
              </h2>
              <div className="contactBottomInfo">
                <div className="contactNumber" style={{ marginRight: "20px" }}>
                  <img
                    src="/phoneIcon.svg"
                    alt="Picture of the author"
                    width="50"
                    height="auto"
                  />{" "}
                  <div className="contactText">
                    <h2>(+40) 0722 834 334</h2>
                  </div>
                </div>
                <div className="contactEmail">
                  <img
                    src="/ContactMailIcon.svg"
                    alt="Picture of the author"
                    width="50"
                    height="auto"
                  />{" "}
                  <div className="contactText">
                    <h2>elena@psi-consult.ro</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
