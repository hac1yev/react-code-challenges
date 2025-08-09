import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

const lang = localStorage.getItem("lang");

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: lang
  });