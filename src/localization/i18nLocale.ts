import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './locale-json/en.json';
import bn from './locale-json/bn.json';

// Detect the device language using Localization.getLocales
const getDeviceLanguage = (): string => {
  const locales = Localization.getLocales();
  return locales[0]?.languageTag || 'en';
};

// Initialize i18next
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: {
    en: { translation: en },
    bn: { translation: bn },
  },
  lng: getDeviceLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const i18nLocale = i18n;
