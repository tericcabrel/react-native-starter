import i18n from 'i18n-js';

import en from '../locales/en';
import fr from '../locales/fr';
import { LOCALE_IDS } from "./constants";

i18n.defaultLocale = LOCALE_IDS.english;
i18n.locale = LOCALE_IDS.english;
i18n.fallbacks = true;
i18n.translations = { en, fr };

export const changeLocale = (locale: string) => {
  i18n.locale = locale;
};

export const getCurrentLocale = () => i18n.locale;

export default i18n.translate.bind(i18n);
