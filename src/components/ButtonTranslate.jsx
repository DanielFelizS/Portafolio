/* eslint-disable react/prop-types */

export default function ButtonTranslate  ({ handleChangeLanguage, currentLanguage }) {
    const handleLanguageChange = () => {
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    handleChangeLanguage(newLanguage);
    }
  return (
        <button onClick={handleLanguageChange}>
            {currentLanguage === 'en' ? 'ES' : 'EN'}
        </button>
  )
}