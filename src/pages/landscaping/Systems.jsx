import UniversalBackButton from '../../components/UniversalBackButton';
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Droplets, Lightbulb, X } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

import smart1 from "../../assets/Landscaping/systems/smart 1.png";
import smart2 from "../../assets/Landscaping/systems/smart 2.jpg";
import smart3 from "../../assets/Landscaping/systems/smart 3.webp";
import light1 from "../../assets/Landscaping/systems/light 1.jpg";
import light2 from "../../assets/Landscaping/systems/light 2.webp";
import light3 from "../../assets/Landscaping/systems/light 3.jpg";

const Systems = () => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();
  const heroImage = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449";

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
      title: isRTL ? "أنظمة الري الذكية" : "Smart Irrigation Systems",
      icon: Droplets,
      description: isRTL
        ? "أنظمة ري متطورة تتكيف تلقائياً مع أحوال الطقس ومعدلات التبخر ورطوبة التربة."
        : "Intelligent water delivery systems that automatically adapt to local weather conditions, evapotranspiration rates, and plant moisture requirements.",
      products: [
        {
          name: isRTL ? "أنظمة الري بالتنقيط والرش المتكيفة" : "Weather-Adaptive Drip & Sprinkler Systems",
          desc: isRTL
            ? "وحدات تحكم بالري ذكية متصلة بشبكات Wi-Fi وحساسات رطوبة التربة لتقليل استهلاك المياه بنسبة تصل إلى 50%."
            : "Wi-Fi and IoT-enabled irrigation controllers paired with in-ground soil moisture sensors and rain gauges to eliminate water waste and reduce utility bills by up to 50%.",
          images: [smart3, smart1, smart2],
        },
        {
          name: isRTL ? "تدقيق الري واكتشاف التسريبات" : "Irrigation Auditing & Leak Detection",
          desc: isRTL
            ? "مستشعرات تدفق ومحابس إغلاق رئيسية تكتشف تسربات الأنابيب تحت الأرض وتنبّه عبر تطبيق الهاتف فوراً."
            : "Smart ultrasonic flow sensors and motorized master shut-off valves that detect subterranean pipe leaks and pressure abnormalities instantly via mobile alerts.",
          images: [smart1, smart2, smart3],
        },
      ],
    },
    {
      title: isRTL ? "إضاءة الحدائق والمعمار" : "Architectural & Landscape Lighting",
      icon: Lightbulb,
      description: isRTL
        ? "أنظمة إضاءة منخفضة الجهد وعالية الكفاءة تحول المساحات الخارجية إلى ملاذ مسائي دافئ وآمن."
        : "Low-voltage, high-efficiency illumination systems that transform outdoor spaces into evening sanctuaries while ensuring nighttime safety and security.",
      products: [
        {
          name: isRTL ? "إضاءة LED للممرات والحدائق" : "LED Landscape & Pathway Lighting",
          desc: isRTL
            ? "وحدات إضاءة LED مصنعة من النحاس والألمنيوم المقاوم للظروف الجوية للعمل في الأجواء الصحراوية."
            : "Solid brass and marine-grade aluminum low-voltage LED fixtures, pathway bollards, and tree uplighting engineered to resist desert dust and heat.",
          images: [light1, light2, light3],
        },
        {
          name: isRTL ? "التحكم الذكي بالإضاءة والأتمتة" : "Smart Lighting Controls & Automation",
          desc: isRTL
            ? "مؤقتات ذكية وأتمتة مشاهد الإضاءة عبر تطبيقات الهاتف المحمول مدمجة مع نظام المنزل الذكي."
            : "Smart astronomical timers, smartphone app scene zoning, and motion-activated security illumination seamlessly integrated into home automation systems.",
          images: [light2, light3, light1],
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
        <title>{isRTL ? "أنظمة الحدائق والري والإضاءة | كهف جرينز" : "Landscape Systems | Kahf Greens"}</title>
        <meta
          name="description"
          content={
            isRTL
              ? "أنظمة ري ذكية وإضاءة حدائق معمارية مصممة للفلل والمشاريع التجارية في الإمارات."
              : "Smart irrigation systems and architectural landscape lighting designed for UAE villas and commercial landscapes."
          }
        />
        <link rel="canonical" href="https://kahfgreens.com/landscaping/systems" />
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Landscaping systems"
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
              {isRTL ? "أنظمة تنسيق الحدائق" : "Landscape Systems"}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              {isRTL
                ? "أنظمة ذكية وفعالة تعزز جمال الحدائق واستدامتها وكفاءة استهلاك المياه."
                : "Smart, efficient systems that enhance your landscape's functionality, beauty, and sustainability."}
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

export default Systems;
