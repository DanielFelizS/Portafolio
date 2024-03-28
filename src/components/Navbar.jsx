/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next"
import ButtonTranslate from "./ButtonTranslate"
const Navbar = ({currentLanguage, handleChangeLanguage}) => {
  const { t } =  useTranslation();
  return (
    <>
     <nav>
        <ul>
            <li><a href="#about-me">{currentLanguage === 'en' ? t('Navbar.AboutMe') : t('Navbar.SobreMi')}</a></li>
            <li><a href="#skills">{currentLanguage === 'en' ? t('Navbar.Skills') : t('Navbar.Habilidades')}</a></li>
            <li><a href="#projects">{currentLanguage === 'en' ? t('Navbar.Projects') : t('Navbar.Proyectos')}</a></li>
            <li><a href="#contact">{currentLanguage === 'en' ? t('Navbar.Contact') : t('Navbar.Contacto')}</a></li>
        </ul>
      <ButtonTranslate currentLanguage={currentLanguage} handleChangeLanguage={handleChangeLanguage}/>
     </nav>
    </>
  )
}

export default Navbar