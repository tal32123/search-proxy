import { useState, useEffect } from 'react';

const useTranslation = () => {
    //hardcoded for now
  const  locale = 'en';
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const currentLocale = locale || 'en';
      try {
        const translations = await import(`./locales/${currentLocale}`);
        setTranslations(translations.default);
      } catch (error) {
        console.error(`Error loading translations for locale "${currentLocale}":`, error);
      }
    };

    loadTranslations();
  }, [locale]);

  const t = (key: string) => {
    return translations[key] || key;
  };

  return { t };
};

export default useTranslation;
