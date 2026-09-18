import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoryCarousel = ({
  items = [],
  renderItem,
  onItemClick,
  categoryTitle = "",
  categoryPath = "",
  onCategoryClick,
}) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [items, checkScroll]);

  const scroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".carousel-card-wrapper")?.clientWidth || 320;
    const scrollAmount = direction === "left" ? -(cardWidth + 24) : (cardWidth + 24);
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full relative group">
      {/* Category Header Row */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-7 md:h-9 bg-[#1a4d2e] rounded-full" />
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a4d2e] hover:text-emerald-700 transition-colors cursor-pointer tracking-tight"
            onClick={onCategoryClick}
          >
            {categoryTitle}
          </h3>
          {categoryPath && (
            <span
              onClick={onCategoryClick}
              className="hidden sm:inline-block text-xs uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-full cursor-pointer transition-colors border border-emerald-200/60"
            >
              Explore Category &rarr;
            </span>
          )}
        </div>

        {/* Arrow Controls on Header */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label={`Scroll ${categoryTitle} left`}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border ${
              canScrollLeft
                ? "bg-white text-[#1a4d2e] border-emerald-200 shadow-sm hover:bg-[#1a4d2e] hover:text-white hover:border-[#1a4d2e] cursor-pointer"
                : "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed opacity-60"
            }`}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label={`Scroll ${categoryTitle} right`}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border ${
              canScrollRight
                ? "bg-white text-[#1a4d2e] border-emerald-200 shadow-sm hover:bg-[#1a4d2e] hover:text-white hover:border-[#1a4d2e] cursor-pointer"
                : "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed opacity-60"
            }`}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track - Left Aligned */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-3 px-1 scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="carousel-card-wrapper flex-shrink-0 snap-start w-[260px] sm:w-[290px] md:w-[320px]"
            onClick={() => onItemClick && onItemClick(item, idx)}
          >
            {renderItem ? (
              renderItem(item, idx)
            ) : (
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-white text-base sm:text-lg font-semibold drop-shadow">
                      {item.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
