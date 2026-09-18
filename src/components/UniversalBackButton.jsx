import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const UniversalBackButton = ({ to, label = 'Back', className = '' }) => {
  const navigate = useNavigate();

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
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 backdrop-blur-md bg-white/20 hover:bg-white/35 text-white border border-white/25 shadow-sm hover:shadow-md hover:-translate-x-0.5 active:translate-x-0 focus:outline-none focus:ring-2 focus:ring-white/40 ${className}`}
      aria-label={label}
    >
      <ChevronLeft size={18} strokeWidth={2.2} />
      <span>{label}</span>
    </button>
  );
};

export default UniversalBackButton;
