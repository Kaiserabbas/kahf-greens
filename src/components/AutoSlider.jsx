import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AutoSlider = ({
  items,
  renderItem,
  autoSlide = true,
  interval = 3000,
  showArrows = true,
  className = "",
  itemClassName = "",
  onItemClick,
  enableSwipe = true,
  visibleItems = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const maxIndex = Math.max(0, items.length - visibleItems);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) > maxIndex ? 0 : prev + 1);
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1) < 0 ? maxIndex : prev - 1);
  }, [maxIndex]);

  useEffect(() => {
    if (!autoSlide || items.length <= visibleItems || isHovered) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoSlide, interval, nextSlide, items.length, visibleItems, isHovered]);

  const handleDragEnd = (event, info) => {
    if (!enableSwipe) return;
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  };

  if (items.length === 0) return null;

  const itemWidth = 100 / visibleItems;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex"
        drag={enableSwipe ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        animate={{ x: -currentIndex * itemWidth + "%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ${itemClassName}`}
            style={{ width: `${itemWidth}%` }}
            onClick={() => onItemClick && onItemClick(item, index)}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </motion.div>

      {showArrows && items.length > visibleItems && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {items.length > visibleItems && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoSlider;
