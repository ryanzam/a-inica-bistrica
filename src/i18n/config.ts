import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "../lang/en.json";  // translation file containing json from above
import bosnian from "../lang/bo.json";

const resources = {
    en: { translation: english },
    ba: { translation: bosnian },
}

const locale = navigator.language.split("-")[0];

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: locale,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;