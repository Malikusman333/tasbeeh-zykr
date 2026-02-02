import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    debug: true,
    fallbackLng: "en",

       ns: [
      "common",
      "navbar",
      "hero",
      "footer",
      "privacy",
      "terms",
      "cookiePolicy",
      "faq",
      "support"
    ],

    defaultNS: "hero",

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
