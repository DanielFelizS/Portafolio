/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { DiReact, DiBootstrap } from "react-icons/di";
import { SiDotnet, SiReactrouter, SiMicrosoftsqlserver } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export default function Projects ({currentLanguage}) {
    const { t } = useTranslation();
    const projects = [
        {
          img: "/img/Inventario.png",
          heading: "Inventario Frontend",
          description: `${currentLanguage === 'en' ? t('Projects.Description1') : t('Proyectos.Descripcion1')}`,
          icons: [<DiReact className="react-icon"/>, <DiBootstrap className="icon-purple"/>, <SiReactrouter className="router-icon"/>],
          href: "https://github.com/DanielFelizS/Inventario"
        },
        {
          img: "/img/API.png",
          heading: "Inventario API",
          description: `${currentLanguage === 'en' ? t('Projects.Description2') : t('Proyectos.Descripcion2')}`,
          icons: [<SiDotnet className="icon-purple"/>, <SiMicrosoftsqlserver className="sql-icon"/>],
          href: "https://github.com/DanielFelizS/Inventario_API"
        },
        {
          img: "/img/Panaderia_Felíz.png",
          heading: "Panadería Féliz",
          description: `${currentLanguage === 'en' ? t('Projects.Description3') : t('Proyectos.Descripcion3')}`,
          icons: [<DiReact className="react-icon"/>, <SiReactrouter className="router-icon"/>],
          href: "https://github.com/DanielFelizS/Panaderia"
        },
        {
          img: "/img/Instagram.png",
          heading: "Instagram clon",
          description: `${currentLanguage === 'en' ? t('Projects.Description4') : t('Proyectos.Descripcion4')}`,
          icons: [<DiReact className="react-icon"/>],
          href: "https://main--roaring-axolotl-bf51f2.netlify.app/"
        },
        {
          img: "/img/Pokeball.png",
          heading: "Pokédex",
          description: `${currentLanguage === 'en' ? t('Projects.Description5') : t('Proyectos.Descripcion5')}`,
          icons: [<RiJavascriptFill className="js-icon"/>],
          href: "https://danielfelizs.github.io/Pok-dex/"
        },
        {
          img: "/img/API.png",
          heading: "API de productos",
          description: `${currentLanguage === 'en' ? t('Projects.Description6') : t('Proyectos.Descripcion6')}`,
          icons: [<SiDotnet className="icon-purple"/>, <SiMicrosoftsqlserver className="sql-icon"/>],
          href: "https://github.com/DanielFelizS/Inventario_API"
        },
        {
          img: "/img/Person.png",
          heading: "CRUD Arrays",
          description: `${currentLanguage === 'en' ? t('Projects.Description7') : t('Proyectos.Descripcion7')}`,
          icons: [<SiDotnet className="icon-purple"/>],
          href: "https://github.com/DanielFelizS/CRUD_Arreglos-"
        }
      ];
    return (
      <div className="project" id="projects">
        <h2>{currentLanguage === 'en' ? t('Projects.Heading') : t('Proyectos.Encabezado')}</h2>
        <div className="card-project">
          {projects.map((project, index) => (
            <div className="card-project" key={index}>
              <div className="project-content">
                <h3>{project.heading}</h3>
                <img src={project.img} title="Project img" />
                <p>{project.description}</p>
                <div className="icons-container">
                {project.icons.map((icon, index) => (
                  <span key={index} className="icons">{icon}</span>
                ))}
                </div>
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                {currentLanguage === 'en' ? t('Projects.LinkProject') : t('Proyectos.LinkProyecto')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }