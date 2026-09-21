import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const UniversalBackButton = ({ to, label, className = '' }) => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  const displayLabel = label || (isRTL ? 'الرجوع' : 'Back');

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 backdrop-blur-md bg-white/20 hover:bg-white/35 text-white border border-white/25 shadow-sm hover:shadow-md ${
        isRTL ? 'hover:translate-x-0.5' : 'hover:-translate-x-0.5'
      } active:translate-x-0 focus:outline-none focus:ring-2 focus:ring-white/40 ${className}`}
      aria-label={displayLabel}
    >
      {isRTL ? (
        <ChevronRight size={18} strokeWidth={2.2} />
      ) : (
        <ChevronLeft size={18} strokeWidth={2.2} />
      )}
      <span>{displayLabel}</span>
    </button>
  );
};

export default UniversalBackButton;
