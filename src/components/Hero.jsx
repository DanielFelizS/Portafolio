/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Hero ({currentLanguage})  {

    const { t } = useTranslation();
    const CV = 'https://drive.google.com/file/d/17vUUWRoOvXggWuiNUNOsebViTqu_Svw4/view?usp=sharing';

    const DownloadCV = () => {
      window.open(CV, '_blank');
    };
    
  return (
    <>
    <div className="hero-container" id="about-me">
  <div className="hero-content">
    <h1>Daniel Féliz</h1>
    <span className="hero-role">Full-stack developer</span>
    <p className="hero-description">
    {currentLanguage === 'en' ? t('Hero.Description') : t('Hero.Descripcion')}
    </p>
    <div className="button-container">
      <button className="hero-button" onClick={DownloadCV}>
      {currentLanguage === 'en' ? t('Hero.btnCV') : t('Hero.btnCvEs')}
      </button>
      <div className="hero-icon-link">
          <a href="https://github.com/DanielFelizS" target="_blank">
            <BsGithub className="hero-icon github-icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCyzzGyR9DKHmw8C3C0f3mRw" target="_blank">
            <FaYoutube className="hero-icon red-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/daniel-f%C3%A9liz/" target="_blank">
            <FaLinkedin className="hero-icon linkedin-icon" />
          </a>
          <a href="mailto:felizsdaniel0@gmail.com" target="_blank">
            <MdEmail className="hero-icon red-icon" />
          </a>
      </div>
    </div>
  </div>
  </div>
  <picture className="hero-imagen">
    <source srcSet="/img/Daniel_Feliz.jpeg" media="(width < 700px)"/>
    <img src="/img/Daniel_Feliz.jpeg" alt="Daniel Feliz" className="hero-image" />
  </picture>

  </>
  )
}

