import { useTranslation } from "react-i18next";

const Translate = () => {
    const { t,i18n } = useTranslation('common');

    const handleChange = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang)
    };      

    return (
        <>
            <h1>{t('welcome')}</h1>
            <h1>{t('logout')}</h1>
            <button onClick={() => handleChange('en')}>EN</button>
            <button onClick={() => handleChange('az')}>AZ</button>
        </>
    );
};

export default Translate;