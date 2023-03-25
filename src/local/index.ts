import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./en.json";
import zhCN from "./zh.json";
import jaJP from "./ja.json";

const resources = {
  en: {
    translation: enUS,
  },
  zh: {
    translation: zhCN,
  },
  ja: {
    translation: jaJP,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
