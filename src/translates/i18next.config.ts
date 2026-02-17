// src/i18n/config.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./common.es.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: es }
    },
    lng: "es",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
