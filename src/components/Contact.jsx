/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Contact({ currentLanguage }) {
  const { t } = useTranslation();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const subject = `${formData.get("subject")}`;
    const body = `${formData.get("message")}`;

    window.location.href = `mailto:felizsdaniel0@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="container" id="contact">
      <h2>
        {currentLanguage === "en" ? t("Contact.Title") : t("Contacto.Title")}
      </h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">
            {currentLanguage === "en"
              ? t("Contact.Subject")
              : t("Contacto.Subject")}
            :
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            {currentLanguage === "en"
              ? t("Contact.Message")
              : t("Contacto.Message")}
            :
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">
          {currentLanguage === "en"
            ? t("Contact.Submit")
            : t("Contacto.Submit")}
        </button>
      </form>
    </div>
  );
}
