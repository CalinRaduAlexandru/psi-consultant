import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import MenuBar from "../components/MenuBar";

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
          <MenuBar />
          <div className="desk-lady-wrap">
            <div>
              <img
                src="/desk-lady-painting.svg"
                alt="Picture of the author"
                height="auto"
                width="80px"
                style={{
                  transform: `translateY(${offsetY * 0.366}px)`,
                  zIndex: "2",
                }}
              />
              <img
                src="/desk-lady-clock.svg"
                alt="Picture of the author"
                height="auto"
                width="50px"
                style={{
                  transform: `translateY(${offsetY * 0.31}px)`,
                  marginLeft: "20px",
                  zIndex: "3",
                }}
              />
            </div>
            <div>
              <img
                src="/desk-lady.svg"
                alt="Picture of the author"
                width="200"
                height="auto"
                style={{
                  transform: `translateY(${offsetY * 0.33}px)`,
                  zIndex: "1",
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
