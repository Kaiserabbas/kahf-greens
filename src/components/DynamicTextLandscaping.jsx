import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DynamicText = () => {
  const phrases = [
    "Sustainable Solutions",
    "Green Innovations",
    "Expert Landscaping",
    "Planter Pots",
    "Planter Bags",
    "Water Saving",
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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white text-left"
    >
      <div className="text-xl md:text-2xl min-h-[30px]">
        {currentText}
        <span className="animate-pulse">|</span>
      </div>
    </motion.div>
  );
};

export default DynamicText;
