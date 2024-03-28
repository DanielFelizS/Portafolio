/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next"

export default function Contact ({ currentLanguage }) {
  const { t } = useTranslation();

  return (
    <div className="container" id="contact">
    <h2>{currentLanguage === 'en' ? t('Contact.Title') : t('Contacto.Title')}</h2>
    <form id="contact-form">
      <div className="form-group">
        <label htmlFor="name">{currentLanguage === 'en' ? t('Contact.Name') : t('Contacto.Name')}:</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div className="form-group">
        <label htmlFor="email">{currentLanguage === 'en' ? t('Contact.Email') : t('Contacto.Email')}:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div className="form-group">
        <label htmlFor="message">{currentLanguage === 'en' ? t('Contact.Message') : t('Contacto.Message')}:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit">{currentLanguage === 'en' ? t('Contact.Submit') : t('Contacto.Submit')}</button>
    </form>
  </div>
  )
}