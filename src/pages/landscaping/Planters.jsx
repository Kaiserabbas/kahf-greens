import UniversalBackButton from '../../components/UniversalBackButton';
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Container, Building2, Armchair, X } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

import divider1 from "../../assets/Landscaping/planters/dividers 1.jpg";
import divider2 from "../../assets/Landscaping/planters/dividers 2.png";
import divider3 from "../../assets/Landscaping/planters/dividers 3.jpg";
import divider4 from "../../assets/Landscaping/planters/dividers 4.jpg";
import outdoor1 from "../../assets/Landscaping/planters/outdoor 1.jpg";
import outdoor2 from "../../assets/Landscaping/planters/outdoor 2.avif";
import outdoor3 from "../../assets/Landscaping/planters/outdoor 3.jpg";
import outdoor4 from "../../assets/Landscaping/planters/outdoor 4.jpg";
import outdoor5 from "../../assets/Landscaping/planters/outdoor 5.jpg";
import outdoor6 from "../../assets/Landscaping/planters/outdoor 6.jpg";
import planterseat1 from "../../assets/Landscaping/planters/planterseat 1.jpg";
import planterseat2 from "../../assets/Landscaping/planters/planterseat 2.jpg";
import planterseat3 from "../../assets/Landscaping/planters/planterseat 3.jpg";
import planterseat4 from "../../assets/Landscaping/planters/planterseat 4.jpg";
import planterseat5 from "../../assets/Landscaping/planters/planterseat 5.jpg";
import planterseat6 from "../../assets/Landscaping/planters/planterseat 6.jpg";
import street1 from "../../assets/Landscaping/planters/street 1.jpg";
import street2 from "../../assets/Landscaping/planters/street 2.jpg";
import street3 from "../../assets/Landscaping/planters/street 3.jpg";
import street4 from "../../assets/Landscaping/planters/street 4.jpg";
import street5 from "../../assets/Landscaping/planters/street 5.jpg";
import indoor1 from "../../assets/Landscaping/planters/indoor 1.jpg";
import indoor2 from "../../assets/Landscaping/planters/indoor 2.jpg";
import indoor3 from "../../assets/Landscaping/planters/indoor 3.jpg";
import indoor4 from "../../assets/Landscaping/planters/indoor 4.jpg";
import indoor5 from "../../assets/Landscaping/planters/indoor 5.jpg";

const Planters = () => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();
  const heroImage = "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae";

  /* ---------------- STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  /* ---------------- ESC KEY LISTENER ---------------- */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") isRTL ? prevModal() : nextModal();
      if (e.key === "ArrowLeft") isRTL ? nextModal() : prevModal();
    };
    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, modalImages.length, isRTL]);

  /* ---------------- DATA ---------------- */
  const categories = [
    {
      title: isRTL ? "الأحواض الداخلية والخارجية" : "Interior & Exterior Planters",
      icon: Container,
      description: isRTL
        ? "أحواض معمارية فاخرة مصنوعة من الألياف الزجاجية (فايبر جلاس) و GRC والمواد المركبة للفلل والمساحات الراقية."
        : "Premium architectural planters crafted from high-performance fiberglass, GRC, and composite materials for villas and luxury spaces.",
      products: [
        {
          name: isRTL ? "أحواض نباتية داخلية معمارية" : "Indoor Architectural Planters",
          desc: isRTL
            ? "أحواض تزيينية خفيفة الوزن وأنيقة مزودة بنظم ري ذاتية وعزل مائي لحماية الأرضيات وتغذية النباتات."
            : "Sleek, lightweight decorative planters with built-in sub-irrigation liners and waterproofing designed to protect floors while keeping interior flora thriving.",
          images: [indoor1, indoor2, indoor3, indoor4, indoor5],
        },
        {
          name: isRTL ? "أحواض خارجية للفلل" : "Outdoor Villa Planters",
          desc: isRTL
            ? "أحواض قوية مقاومة للطقس والأشعة فوق البنفسجية مصممة لتحمل تقلبات الحرارة العالية وحماية جذور النباتات."
            : "Weather-resistant, UV-stabilized heavy pots and trough planters designed to withstand extreme thermal fluctuations and shield root systems.",
          images: [outdoor1, outdoor2, outdoor3, outdoor4, outdoor5, outdoor6],
        },
      ],
    },
    {
      title: isRTL ? "أحواض الشوارع والحواجز العمرانية" : "Streetscapes & Urban Dividers",
      icon: Building2,
      description: isRTL
        ? "أحواض تجارية وحلول حواجز نمطية للمشاريع العمرانية والمربعات السكنية والفنادق والمقاهي."
        : "Commercial-grade planters and modular barrier solutions for urban developments, corporate plazas, hotel entrances, and dining terraces.",
      products: [
        {
          name: isRTL ? "أحواض تجارية وللمساحات العامة" : "Street & Commercial Planters",
          desc: isRTL
            ? "أحواض ضخمة للمساحات العامة والفنادق والمراكز التجارية تتميز بالمتانة العالية والمقاومة."
            : "Heavy-duty, large-scale public realm planters engineered for hotels, retail boulevards, and commercial plazas requiring durability and impact resistance.",
          images: [street1, street2, street3, street4, street5],
        },
        {
          name: isRTL ? "حواجز الأحواض العمرانية" : "Urban Planter Dividers",
          desc: isRTL
            ? "أحواض نمطية مستطيلة وشاشات خضراء لتحديد جلسات المقاهي الخارجية وتوجيه حركة المشاة وإنشاء حواجز صوتية."
            : "Modular trough planters and green screens designed to delineate outdoor cafe seating, guide pedestrian movement, and create natural acoustic barriers.",
          images: [divider2, divider1, divider3, divider4],
        },
      ],
    },
    {
      title: isRTL ? "جلسات المقاعد المدمجة بالأحواض" : "Integrated Planter Seating",
      icon: Armchair,
      description: isRTL
        ? "أثاث حدائق متعدد الوظائف يجمع بين الخضرة الطبيعية ومقاعد الجلوس المريحة."
        : "Multi-functional street and garden furniture combining natural greenery with robust, comfortable seating solutions.",
      products: [
        {
          name: isRTL ? "مقاعد وأحواض نباتية مدمجة" : "Planter Benches & Integrated Seating",
          desc: isRTL
            ? "مقاعد مدمجة مباشرة في أحواض النباتات، مثالية للأفنية الداخلية والمداخل والحدائق المنزلية."
            : "Bespoke built-in bench seating combined directly into lush planter beds, perfect for courtyards, commercial lobbies, and residential gardens.",
          images: [planterseat5, planterseat1, planterseat2, planterseat3, planterseat4, planterseat6],
        },
        {
          name: isRTL ? "أحواض هندسية مخصصة" : "Custom Geometric Planter Features",
          desc: isRTL
            ? "أحواض نباتية مسبقة الصنع بأشكال هندسية ومنحنية مخصصة حسب المخططات الهندسية والمعمارية."
            : "Custom-cast geometric and curved planter installations fabricated to exact contractor and architect drawings.",
          images: [planterseat2, planterseat3, planterseat4, outdoor3],
        },
      ],
    },
  ];

  /* ---------------- HELPERS ---------------- */
  const openModal = (images, index = 0) => {
    if (!images?.length) return;
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
    setModalIndex(0);
  };

  const nextModal = () => {
    if (!modalImages.length) return;
    setModalIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevModal = () => {
    if (!modalImages.length) return;
    setModalIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>{isRTL ? "الأحواض والأواني النباتية | تنسيق الحدائق | كهف جرينز" : "Planters | Landscaping | Kahf Greens"}</title>
        <meta
          name="description"
          content={
            isRTL
              ? "أحواض نباتات داخلية وخارجية، حواجز الشوارع، وجلسات الأحواض المدمجة في الإمارات."
              : "Indoor and outdoor planters, urban street planters, and integrated bench planter seating across the UAE."
          }
        />
        <link rel="canonical" href="https://kahfgreens.com/landscaping/planters" />
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Planters"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="mb-6 sm:mb-8 flex justify-start">
            <UniversalBackButton to="/landscaping" label={isRTL ? "العودة إلى تنسيق الحدائق" : "Back to Landscaping"} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              {isRTL ? "الأحواض والعناصر الخضراء" : "Planters & Green Elements"}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              {isRTL
                ? "أحواض نباتية داخلية وخارجية مخصصة، حواجز للممرات، وجلسات مدمجة بالأحواض."
                : "Custom indoor and outdoor planters, urban street dividers, and integrated bench planters."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- CONTENT ---------------- */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <section key={cat.title}>
              <div className="flex items-center gap-4 mb-8 border-b pb-4">
                <div className="p-3 bg-[#e8f5e9] rounded-full text-[#1a4d2e]">
                  <Icon size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1a4d2e]">
                    {cat.title}
                  </h2>
                  <p className="text-gray-600">{cat.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {cat.products.map((product) => {
                  const key = `${cat.title}-${product.name}`;
                  const activeIndex = carouselIndex[key] ?? 0;

                  return (
                    <div
                      key={product.name}
                      className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                    >
                      {/* IMAGE */}
                      <div className="relative h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={product.images[activeIndex]}
                          alt={product.name}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={() =>
                            openModal(product.images, activeIndex)
                          }
                        />

                        {product.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIndex((prev) => ({
                                  ...prev,
                                  [key]:
                                    activeIndex === 0
                                      ? product.images.length - 1
                                      : activeIndex - 1,
                                }));
                              }}
                              className={`absolute ${isRTL ? "right-2" : "left-2"} top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full`}
                            >
                              <ChevronLeft size={18} className={isRTL ? "rotate-180" : ""} />
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIndex((prev) => ({
                                  ...prev,
                                  [key]:
                                    (activeIndex + 1) %
                                    product.images.length,
                                }));
                              }}
                              className={`absolute ${isRTL ? "left-2" : "right-2"} top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full`}
                            >
                              <ChevronRight size={18} className={isRTL ? "rotate-180" : ""} />
                            </button>
                          </>
                        )}
                      </div>

                      {/* INFO */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {product.desc}
                        </p>
                        <Button
                          onClick={() => navigate("/contact")}
                          className="w-full bg-[#1a4d2e] text-white hover:bg-white hover:text-[#1a4d2e] transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          {isRTL ? "طلب سعر" : "Request Quote"}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* ---------------- MODAL ---------------- */}
      {createPortal(
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <button
                onClick={closeModal}
                className={`absolute top-6 ${isRTL ? "left-6" : "right-6"} text-white`}
              >
                <X size={32} />
              </button>

              <img
                src={modalImages[modalIndex]}
                alt="Full view"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevModal();
                    }}
                    className={`absolute ${isRTL ? "right-6" : "left-6"} text-white`}
                  >
                    <ChevronLeft size={40} className={isRTL ? "rotate-180" : ""} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextModal();
                    }}
                    className={`absolute ${isRTL ? "left-6" : "right-6"} text-white`}
                  >
                    <ChevronRight size={40} className={isRTL ? "rotate-180" : ""} />
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Planters;
