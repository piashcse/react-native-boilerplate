import { useMemo } from 'react';
import { i18nLocale } from '@/src/localization/i18nLocale';
import { APP_STRING } from '@/src/localization/appString';

type AppStringKey = keyof typeof APP_STRING; // Keys of APP_STRING
type Variables = Record<string, string | number>; // Placeholder variables

export const useLocalization = () => {
  return useMemo(() => {
    const localizedStrings: Record<
      AppStringKey,
      (variables?: Variables) => string
    > = {} as Record<AppStringKey, (variables?: Variables) => string>;

    (Object.keys(APP_STRING) as AppStringKey[]).forEach((key) => {
      localizedStrings[key] = (variables?: Variables) => {
        const translation = i18nLocale.t(APP_STRING[key], variables);
        return translation || `Missing translation for ${key}`;
      };
    });

    return localizedStrings;
  }, []);
};
