import React from "react";
import Head from "next/head";
import Header from "../components/header";
import MenuBar from "../components/MenuBar";

const despre = () => {
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
        </main>
      </div>
    </>
  );
};

export default despre;
