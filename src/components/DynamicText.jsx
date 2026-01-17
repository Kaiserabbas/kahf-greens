import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DynamicText = () => {
  const phrases = [
    "Sustainable Solutions",
    "Green Innovations",
    "Expert Landscaping",
    "Planter Pots",
    "Planter Bags",
    "Green Houses",
    "Irrigation",
    "Pumps & Hoses",
    "Machinery",
    "Water Saving",
    "Systems",
    "Outdoor Living",
    "Planters",
    "Water Saving"
    ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(phrase.substring(0, currentText.length + 1));
        if (currentText === phrase) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setCurrentText(phrase.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-xl md:text-2xl font-semibold min-h-[30px]">
          {currentText}
          <span className="animate-pulse">|</span>
        </div>
      </motion.div>
    </div>
  );
};

export default DynamicText;
