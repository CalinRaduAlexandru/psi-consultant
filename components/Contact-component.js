export const ContactForm = () => {
  const formState = { name: "", email: "", message: "" };

  function updateFormState(key, value) {
    formState[key] = value;
  }

  async function addContact() {
    const data = {
      body: {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      },
    };
  }
  return (
    <div className="contact-section">
      <div data-aos="fade-right" className="form-content-right">
        <form className="form" onSubmit={addContact}>
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
              className="form-input"
              onChange={(e) => updateFormState("name", e.target.value)}
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
              className="form-input"
              onChange={(e) => updateFormState("email", e.target.value)}
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
              className="form-input-message"
              onChange={(e) => updateFormState("message", e.target.value)}
            ></textarea>
          </div>
          <button className="form-input-btn" type="submit" onClick={addContact}>
            Trimite
          </button>
        </form>
      </div>
    </div>
  );
};
