import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import en from '../locales/en';
import ar from '../locales/ar';

const translations = { en, ar };

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('kahf_language');
      if (saved === 'ar' || saved === 'en') return saved;
      // Default to English, but detect browser language if starts with 'ar'
      if (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('ar')) {
        return 'ar';
      }
    } catch (e) {
      // fallback
    }
    return 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    root.setAttribute('lang', language);
    try {
      localStorage.setItem('kahf_language', language);
    } catch (e) {
      // ignore
    }
  }, [language, isRTL]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'ar') {
      setLanguageState(lang);
    }
  };

  // Helper translation function with support for nested keys like 'nav.home'
  const t = useMemo(() => {
    const currentDict = translations[language] || translations.en;
    const fallbackDict = translations.en;

    return (path, params = {}) => {
      const keys = path.split('.');
      let result = currentDict;
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          result = undefined;
          break;
        }
      }

      // Fallback to English if not found
      if (result === undefined) {
        let fallback = fallbackDict;
        for (const k of keys) {
          if (fallback && typeof fallback === 'object' && k in fallback) {
            fallback = fallback[k];
          } else {
            fallback = undefined;
            break;
          }
        }
        result = fallback !== undefined ? fallback : path;
      }

      if (typeof result === 'string' && params && typeof params === 'object') {
        return Object.entries(params).reduce((acc, [key, val]) => {
          return acc.replace(new RegExp(`\\{${key}\\}`, 'g'), String(val));
        }, result);
      }

      return result;
    };
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isRTL,
      toggleLanguage,
      setLanguage,
      t,
    }),
    [language, isRTL, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
