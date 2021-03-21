import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import PrimaryBtn from "../components/Primary-btn";
import MenuBar from "../components/MenuBar";
import Testimony from "../components/Testimony";
import Carousel from "react-elastic-carousel";
import { Testimonials } from "../components/Testimonials-data";

export default function Home({ name, text }) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Psi-consult</title>
        <link rel="icon" href="/Logo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;0,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <Header title="Consultanță de psihoterapie" />
        <main className="main">
          <MenuBar />
          <div className="main-title-container">
            <div className="main-title">
              <h3>
                Depășim împreună toate blocajele pentru a înflori spre
                adevarătul tău potențial.
                <div className="underline">
                  <img src="/underline.svg" alt="underline" width="200px" />
                </div>
              </h3>
              <div className="primary-btn-wrapper">
                <PrimaryBtn text="Începe creșterea" />
              </div>
            </div>

            <div className="elena-wrapper">
              <img
                src="/profileMockup.png"
                alt="Picture of the author"
                width="285"
                height="auto"
              />
              <div className="psiholog-elena">
                <p>Psiholog Elena Chivu </p>
              </div>
            </div>
          </div>
        </main>
        <img
          src="/Shelves.svg"
          alt="rafturi terapie"
          width="700px"
          height="auto"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        />
        <div className="line-wrap">
          <img
            src="/line.svg"
            alt="fir intortocheat devine deznodat de la psiholog la client"
            width="370px"
            height="auto"
            style={{ transform: `translateY(${offsetY * -0.06}px)` }}
          />
        </div>
        <img src="/Characters.svg" alt="therapy" width="500px" height="auto" />
        <section className="section-testimony">
          <Carousel breakPoints={breakPoints}>
            {Testimonials.map((testimony) => (
              <Testimony
                key={testimony.id}
                name={testimony.name}
                text={testimony.text}
              />
            ))}
          </Carousel>
        </section>
      </div>
    </div>
  );
}
