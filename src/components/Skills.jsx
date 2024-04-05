/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";

const Skills = ({currentLanguage}) => {
  const { t } = useTranslation();

    const skills1 = [
    {
      imgUrl: "/img/HTML_5.png",
      imgAlt: "HTML 5"
    },
    {
      imgUrl: "/img/CSS_3.png",
      imgAlt: "CSS 3"
    },
    {
      imgUrl: "/img/Javascript.jpg",
      imgAlt: "JavaScript"
    },
    {
      imgUrl: "/img/Typescript.png",
      imgAlt: "TypeScript"
    },
    {
      imgUrl: "/img/React_js.png",
      imgAlt: "React JS"
    },
    {
      imgUrl: "/img/SASS.png",
      imgAlt: "SASS CSS"
    },
    {
      imgUrl: "/img/Tailwindcss.png",
      imgAlt: "Tailwind CSS"
    },
    {
      imgUrl: "/img/React_bootstrap.png",
      imgAlt: "React Bootstrap"
    },
  ];

  const skills2 = [
    {
      imgUrl: "/img/Csharp.png",
      imgAlt: "C#"
    },
    {
      imgUrl: "/img/NET_Core.png",
      imgAlt: ".NET Core"
    },
    {
      imgUrl: "/img/SQLServer.png",
      imgAlt: "SQL Server"
    }
  ];

  const others = [
    {
      imgUrl: "/img/Python.png",
      imgAlt: "Python"
    },
    {
      imgUrl: "/img/Git.png",
      imgAlt: "Git"
    },
    {
      imgUrl: "/img/Github.png",
      imgAlt: "Github"
    },
    {
      imgUrl: "/img/npm.png",
      imgAlt: "Npm"
    },
    {
      imgUrl: "/img/postman.png",
      imgAlt: "Postman"
    }
  ];

  const learning = [
    {
      imgUrl: "/img/Azure.png",
      imgAlt: "Microsoft Azure"
    }
    // {
    //   imgUrl: "/img/Angular.png",
    //   imgAlt: "Angular 17"
    // }
  ];

  return (
    <>
    <div className="skills" id="skills">
      <h2>{currentLanguage === "en"? t("Skills.Heading"): t("Habilidades.Encabezado")}</h2>
      <h3>Frontend</h3>
      <div className="skills-img">
        {skills1.map((skill, index) => (
          <div className="img" key={index}>
            <img src={skill.imgUrl} alt={`Logo de ${skill.imgAlt}`} title={skill.imgAlt} />
          </div>
        ))}
      </div>
      <h3>Backend</h3>
      <div className="skills-img">
        {skills2.map((skill, index) => (
          <div className="img" key={index}>
            <img src={skill.imgUrl} alt={`Logo de ${skill.imgAlt}`} title={skill.imgAlt} />
          </div>
        ))}
      </div>
      <h3>{currentLanguage === "en" ? t("Skills.Others"): t("Habilidades.Otros")}</h3>
      <div className="skills-img">
        {others.map((skill, index) => (
          <div className="img" key={index}>
            <img src={skill.imgUrl} alt={`Logo de ${skill.imgAlt}`} title={skill.imgAlt} />
          </div>
        ))}
      </div>
      <h3>{currentLanguage === "en" ? t("Skills.knowledge"): t("Habilidades.Conocimiento")}</h3>
      <div className="skills-img">
        {learning.map((skill, index) => (
          <div className="img" key={index}>
            <img src={skill.imgUrl} alt={`Logo de ${skill.imgAlt}`} title={skill.imgAlt} />
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Skills