import { Analytics } from "@vercel/analytics/react"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  }

  return (
    <>
      <Analytics/>
      <Navbar currentLanguage={currentLanguage} handleChangeLanguage={handleChangeLanguage}/>
      <Hero currentLanguage={currentLanguage}/>
      <Skills currentLanguage={currentLanguage}/>
      <Projects currentLanguage={currentLanguage}/>
      <Contact currentLanguage={currentLanguage}/>
      <Footer currentLanguage={currentLanguage}/>
    </>
  )
}

export default App
