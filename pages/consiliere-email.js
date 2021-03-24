import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import MenuBar from "../components/MenuBar";
import Faq from "../components/FAQ";
import PrimaryBtn from "../components/Primary-btn";

const ConsiliereEmail = () => {
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
        <Header title="Consiliere prin E-mail" />
        <main className="main">
          <div className="left-side">
            <MenuBar />
            <div className="resume-wrapper">
              <img
                src="/EmailsLaptop.svg"
                alt="Picture of the author"
                width="260px"
                height="auto"
                style={{
                  transform: `translateY(${offsetY * 0.64}px)`,
                }}
              />
            </div>
          </div>
          <div className="rectangle-wrapper" style={{ paddingBottom: "200px" }}>
            <div className="EmailsBro-wrapper">
              <img
                src="/EmailsBro.svg"
                alt="Picture of the author"
                width="180"
                height="auto"
              />
            </div>
            <div className="consiliereText">
              <h1>
                Consilierea prin e-mail se adresează persoanelor care nu doresc
                sau nu au acces la o formă de intervenţie psihologică sau
                psihoterapeutică directă;
              </h1>
              <h4>
                Consilierea vă poate ajuta să depăşiţi o dificultate, să ieşiţi
                dintr-o criză <br />
                sau să vă clarificaţi o problemă care vă preocupă.
              </h4>
              <div className="consiliereSection">
                <div>
                  <h2> Termeni şi condiţii:</h2>
                  <p>
                    Se realizează cu respectarea legislaţiei în vigoare, a
                    normelor de exercitare a profesiei de psiholog şi a
                    standardelor de confidenţialitate stabilite de Codul
                    deontologic al profesiei de psiholog;
                  </p>
                  <p>
                    Se adresează persoanelor adulte (peste 18 ani). Pentru
                    consilierea adolescenţilor este necesar consimţământul unui
                    părinte;
                  </p>
                  <p>
                    Nu înlocuieşte evaluarea psihologică, psihiatrică sau
                    participarea la un program de consiliere / psihoterapie;
                  </p>
                  <p>
                    În cazul în care aveţi probleme grave de sănătate mentală,
                    vă rugăm să vă adresaţi medicului de familie sau unui
                    cabinet medical / psihologic specializat.
                  </p>
                </div>
                <div className="consiliereIcon">
                  <img
                    src="/handshakeIcon.svg"
                    alt="Picture of the author"
                    width="50"
                    height="auto"
                  />{" "}
                </div>
              </div>
              <div className="consiliereSection">
                <div>
                  <h2> Ce trebuie să faceţi?</h2>
                  <p>
                    Trimiteţi un e-mail la adresa elena@psi-consult.ro, care să
                    conţină:{" "}
                  </p>
                  <ul>
                    <li>
                      Datele dvs. de identificare: numele, prenumele, adresa,
                      nr. telefon, vârsta;
                    </li>
                    <li>Prezentarea pe scurt a problemei dvs.</li>
                  </ul>

                  <p>
                    În cel mult 2 zile lucrătoare, unul dintre consilierii
                    noştri va analiza solicitarea dvs. şi vă va trimite un
                    e-mail de răspuns;
                  </p>
                  <p>
                    Dacă răspunsul este afirmativ, viraţi în contul cabinetului
                    contravaloarea serviciului solicitat;
                  </p>
                  <p>
                    Trimiteţi un e-mail prin care ne anunţaţi efectuarea plăţii;
                  </p>
                  <p>
                    Primiti confirmare a recepţionării plăţii, iar consilierea
                    va începe de comun acord prin serviciul de email sau de
                    skype.
                  </p>
                </div>
                <div className="consiliereIcon">
                  <img
                    src="/emailIcon.svg"
                    alt="Picture of the author"
                    width="50"
                    height="auto"
                  />{" "}
                </div>
              </div>

              <div className="consiliereSection">
                <div>
                  <h2>Cum se realizează consilierea prin e-mail?</h2>
                  <p>
                    Serviciul de consiliere constă într-un schimb de 5
                    e-mail-uri; un e-mail trimis de dvs. va avea maximum 4
                    pagini ;
                  </p>
                  <p>
                    Consilierul va răspunde e-mail-ului dvs. în cel mult 2 zile
                    lucrătoare din momentul în care l-a primit;
                  </p>
                  <p>
                    Consilierea prin e-mail poate fi continuată prin integrarea
                    într-un program de evaluare / consiliere / psihoterapie;
                  </p>
                  <p>
                    În cazuri speciale (probleme de ordin tehnic, medical etc),
                    serviciul de consiliere prin e-mail poate fi suspendat
                    temporar.
                  </p>
                </div>
                <div className="consiliereIcon">
                  {" "}
                  <img
                    src="/cloud-networkIcon.svg"
                    alt="Picture of the author"
                    width="50"
                    height="auto"
                  />{" "}
                </div>
              </div>
              <div className="consiliereSection">
                <div>
                  <h2> Cum plătiţi?</h2>
                  <p>Serviciul de consiliere prin e-mail costă 150 lei;</p>
                  <p>
                    Plata se face în contul cabinetului direct, prin depunere la
                    bancă, prin card sau ordin de plată;
                  </p>
                  <p>
                    Suma depusă în cont nu se returnează în cazul în care
                    renunţaţi total sau parţial la serviciile de consiliere prin
                    e-mail.
                  </p>
                </div>
                <div className="consiliereIcon">
                  <img
                    src="/paymentMethodIcon.svg"
                    alt="Picture of the author"
                    width="50"
                    height="auto"
                  />{" "}
                </div>
              </div>
            </div>
            <div className="ConsiliereBtn">
              <PrimaryBtn text="Să începem călătoria" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ConsiliereEmail;
