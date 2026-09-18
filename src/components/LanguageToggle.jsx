import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = ({ className = '', variant = 'header' }) => {
  const { language, toggleLanguage } = useLanguage();
  const isAr = language === 'ar';

  if (variant === 'mobile') {
    return (
      <button
        type="button"
        onClick={toggleLanguage}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 ${
          isAr
            ? 'bg-emerald-900/10 border-emerald-700/30 text-emerald-900 font-semibold'
            : 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100'
        } ${className}`}
        aria-label="Toggle language"
      >
        <span className="flex items-center gap-2.5 text-sm font-medium">
          <Globe size={18} className="text-emerald-700" />
          <span>{isAr ? 'English Language' : 'اللغة العربية (الإمارات)'}</span>
        </span>
        <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-700 text-white">
          {isAr ? 'EN' : 'العربية'}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-gray-700 hover:text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs transition-all duration-200 cursor-pointer ${className}`}
      title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
      aria-label="Toggle language"
    >
      <Globe size={15} className="text-emerald-700 transition-transform group-hover:rotate-45" />
      <span className="tracking-wide">{isAr ? 'English' : 'العربية'}</span>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
    </button>
  );
};

export default LanguageToggle;
