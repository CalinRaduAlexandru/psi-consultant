import React, { useState, useEffect } from "react";
import { db } from "./../Firebase.js";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        date: new Date(),
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-section">
      <div data-aos="fade-right" className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
          <div id="sendMailContact">
            <img
              src="/sendMail.svg"
              alt="Meditation Woman"
              width="150px"
              height="auto"
              style={{ marginTop: "-20px", marginBottom: "40px" }}
            />
          </div>
          <h1 className="form-title">Intră în contact cu mine!</h1>
          <div className="form-inputs">
            <label htmlFor="name" className="form-label">
              Nume și Prenume{" "}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              className="form-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-inputs message">
            <label htmlFor="text" className="form-label">
              Mesaj{" "}
            </label>
            <textarea
              id="text"
              type="text"
              name="message"
              value={message}
              className="form-input-message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            className="form-input-btn"
            type="submit"
          >
            Trimite
          </button>
        </form>
      </div>
    </div>
  );
};
