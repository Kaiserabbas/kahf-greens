import UniversalBackButton from '../../components/UniversalBackButton';
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, X, Leaf, Scissors, Home, Sparkles } from "lucide-react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../contexts/LanguageContext";

import garden1 from "../../assets/Landscaping/Maintenance/Garden 1.jpg";
import garden2 from "../../assets/Landscaping/Maintenance/Garden 2.jpg";
import garden3 from "../../assets/Landscaping/Maintenance/Garden 3.jpg";
import garden4 from "../../assets/Landscaping/Maintenance/Garden 4.jpg";
import garden5 from "../../assets/Landscaping/Maintenance/Garden 5.jpg";
import garden6 from "../../assets/Landscaping/Maintenance/Garden 6.jpg";
import indoor1 from "../../assets/Landscaping/Maintenance/indoor 1.jpg";
import indoor2 from "../../assets/Landscaping/Maintenance/indoor 2.png";
import shrubs1 from "../../assets/Landscaping/Maintenance/shrubs 1.webp";
import turf1 from "../../assets/Landscaping/Maintenance/turf 1.webp";
import lawn1 from "../../assets/Landscaping/Maintenance/lawn 1.jpg";

const Maintenance = () => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();
  const heroImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80";

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
      title: isRTL ? "العناية بالحدائق والإدارة الموسمية" : "Garden Care & Seasonal Management",
      icon: Leaf,
      description: isRTL
        ? "خدمات صيانة شاملة للحدائق، الزراعة الموسمية، المكافحة العضوية للآفات، وإدارة التربة لضمان نمو زاهٍ في ظروف مناخ الإمارات."
        : "Comprehensive garden maintenance, seasonal planting, organic pest control, and soil management tailored for UAE climate conditions.",
      products: [
        {
          name: isRTL ? "العناية الشاملة بالحدائق" : "Comprehensive Garden Care",
          desc: isRTL
            ? "صيانة دورية للفلل والمجمعات السكنية تشمل تحسين التربة، زراعة الأحواض الموسمية، المكافحة والتهوية الجذرية لحفظ صحة النباتات."
            : "Scheduled villa and estate maintenance including soil conditioning, seasonal bed planting, pest control, and root aeration for lush, healthy gardens.",
          images: [garden1, garden2, garden3, garden4, garden5, garden6],
        },
        {
          name: isRTL ? "تقليم الشجيرات والأسوار النباتية" : "Shrubs & Hedge Trimming",
          desc: isRTL
            ? "تشذيب تقليمي وتجميلي لتعزيز كفاءة التفرع، وتكثيف الأوراق والأزهار مع الوقاية من أمراض الشجيرات والنباتات."
            : "Formative and aesthetic pruning to promote strong branching, dense foliage, and optimal flowering while preventing disease across all shrub species.",
          images: [shrubs1, "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"],
        },
      ],
    },
    {
      title: isRTL ? "العناية العشبية والنباتات الخاصة" : "Turf & Specialist Plant Care",
      icon: Scissors,
      description: isRTL
        ? "حلول متخصصة للمسطحات الخضراء القوية، تحديد الحواف بدقة، والعناية بالأنظمة النباتية الداخلية في المنازل والمكاتب."
        : "Specialized solutions for resilient turf lawns, precision edge detailing, and flourishing indoor plant environments in homes and corporate spaces.",
      products: [
        {
          name: isRTL ? "العناية بالمسطحات الخضراء والمروج" : "Turf Care & Lawn Maintenance",
          desc: isRTL
            ? "تسميد العشب الطبيعي، التهوية، تهذيب الأعشاب الضارة، القص الدقيق وتحديد الحواف لإنشاء مروج خضراء كثيفة ومقاومة للجفاف."
            : "Specialized lawn fertilization, aeration, weed control, precision mowing, and edge trimming engineered for drought-resilient, dense green turf.",
          images: [turf1, lawn1, "https://images.unsplash.com/photo-1625246333195-78d9c38ad449"],
        },
        {
          name: isRTL ? "العناية بالنباتات الداخلية" : "Indoor & Interior Plant Care",
          desc: isRTL
            ? "برامج ري وتنظيف وتدوير أحواض وتغذية دقيقة للنباتات الداخلية في الفلل الفاخرة والمكاتب والشركات."
            : "Expert scheduled watering, foliage cleaning, repotting, and micro-nutrient management for indoor plants in private villas, penthouses, and corporate offices.",
          images: [indoor1, indoor2],
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
        <title>{isRTL ? "خدمات الصيانة | تنسيق الحدائق | كهف جرينز" : "Maintenance Services | Landscaping | Kahf Greens"}</title>
        <meta
          name="description"
          content={
            isRTL
              ? "برامج صيانة حدائق الفلل والمشاريع التجارية في دبي والإمارات: العناية بالمسطحات الخضراء، تقليم الشجيرات، وقص الأشجار."
              : "Professional villa and commercial garden maintenance in Dubai: lawn care, shrub trimming, tree pruning, and indoor plant care contracts."
          }
        />
        <meta name="keywords" content="garden maintenance Dubai, landscape maintenance UAE, villa garden care Dubai, lawn care Emirates" />
        <link rel="canonical" href="https://kahfgreens.com/landscaping/maintenance" />
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Maintenance services"
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
              {isRTL ? "خدمات الصيانة" : "Maintenance Services"}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              {isRTL
                ? "برامج صيانة احترافية للمساحات الخضراء مصممة خصيصاً لمناخ دولة الإمارات."
                : "Professional landscape maintenance programs designed for the UAE climate."}
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

export default Maintenance;
