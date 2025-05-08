import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const lang = localStorage.getItem('lang') || 'az';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: lang,
});

export default i18n;