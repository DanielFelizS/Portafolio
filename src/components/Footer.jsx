/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next"

const Footer = ({ currentLanguage }) => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content"> 
        <div className="footer-section contact">
          <h3>Contact me</h3>
          <p>Email: felizsdaniel0@gmail.com</p>
          <p>Teléfono: 123-4567-891</p>
        </div>
        <div className="footer-section links">
          <h3>Useful links</h3>
          <ul>
            <li><a href="#about-me">{currentLanguage === 'en' ? t('Navbar.AboutMe') : t('Navbar.SobreMi')}</a></li>
            <li><a href="#skills">{currentLanguage === 'en' ? t('Navbar.Skills') : t('Navbar.Habilidades')}</a></li>
            <li><a href="#projects">{currentLanguage === 'en' ? t('Navbar.Projects') : t('Navbar.Proyectos')}</a></li>
            <li><a href="#contact">{currentLanguage === 'en' ? t('Navbar.Contact') : t('Navbar.Contacto')}</a></li>
        </ul>
        </div>
      </div>
    <div className="footer-bottom">
      &copy; 2024 Daniel Féliz. Todos los derechos reservados.
    </div>
  </footer>
  )
}

export default Footer