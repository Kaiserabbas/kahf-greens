import UniversalBackButton from '../../components/UniversalBackButton';
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { Package, Recycle, ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";

import woven1 from "../../assets/Agriculture/planter bags/Woven 1.webp";
import woven2 from "../../assets/Agriculture/planter bags/Woven 2.webp";
import woven3 from "../../assets/Agriculture/planter bags/Woven 3.webp";
import woven4 from "../../assets/Agriculture/planter bags/Woven 4.webp";

import nonwoven1 from "../../assets/Agriculture/planter bags/Non Woven 1.jpg";
import nonwoven2 from "../../assets/Agriculture/planter bags/Non Woven 2.webp";
import nonwoven3 from "../../assets/Agriculture/planter bags/Non Woven 3.webp";
import nonwoven4 from "../../assets/Agriculture/planter bags/Non Woven 4.webp";
import nonwoven5 from "../../assets/Agriculture/planter bags/Non Woven 5.webp";

const PlanterBags = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const heroImage = nonwoven1;

  /* ---------------- STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  /* ---------------- DATA ---------------- */
  const categories = [
    {
      title: isRTL ? "أكياس الزراعة المنسوجة" : "Woven",
      icon: Package,
      description: isRTL ? "أكياس منسوجة فائقة المتانة لمختلف التطبيقات الزراعية والمشاتل." : "Durable woven bags for various agricultural applications.",
      products: [
        {
          name: isRTL ? "أكياس الزراعة المنسوجة القياسية" : "Standard Woven Bags",
          desc: isRTL ? "أكياس بولي بروبيلين منسوجة شاقة الاستخدام لإنتاج المشاتل والأشجار." : "Heavy-duty woven polypropylene bags for general use.",
          images: [ woven1,woven2, woven3, woven4],
        },
      ],
    },
    {
      title: isRTL ? "أكياس الزراعة غير المنسوجة (القماشية)" : "Non-Woven",
      icon: Recycle,
      description: isRTL ? "أكياس قماشية صديقة للبيئة تسمح بتنفس الجذور وتقليمها طبيعياً." : "Eco-friendly non-woven bags for sustainable growing.",
      products: [
        {
          name: isRTL ? "أكياس قماشية غير منسوجة معادة التدوير" : "Recycled Non-Woven Bags",
          desc: isRTL ? "مصنوعة من مواد معادة التدوير لحماية البيئة وتشجيع النمو الجذري السليم." : "Made from recycled materials for sustainability.",
          images: [ nonwoven1,nonwoven2, nonwoven3, nonwoven4, nonwoven5 ],
        },
      ],
    },
  ];

  /* ---------------- HELPERS ---------------- */
  const openModal = (images, index) => {
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  };

  const nextModal = () =>
    setModalIndex((prev) => (prev + 1) % modalImages.length);

  const prevModal = () =>
    setModalIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );

  return (
    <div className="bg-white">
      <Helmet>
        <title>{isRTL ? "أكياس الزراعة (الجروباج) في الإمارات | كاف جرينز" : "Grow Bags & Planter Bags Supplier UAE | Kahf Greens"}</title>
        <meta
          name="description"
          content={isRTL ? "أكياس زراعة منسوجة وغير منسوجة عالية الجودة للمشاتل والزراعة في دبي وأبوظبي والإمارات." : "Premium woven and non-woven planter bags for nursery propagation, farming, and tree planting across Dubai, Abu Dhabi, and the UAE."}
        />
        <meta name="keywords" content="planter bags UAE, grow bags Dubai, fabric pots UAE, nursery bags Emirates, non-woven grow bags" />
        <link rel="canonical" href="https://kahfgreens.com/agriculture/planter-bags" />
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Planter pots"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />
        
        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="mb-6 sm:mb-8 flex justify-start">
            <UniversalBackButton to="/agriculture" label={isRTL ? "الرجوع إلى قسم الزراعة" : "Back to Agriculture"} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              {isRTL ? "أكياس الزراعة (الجروباج)" : "Planter Bags"}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              {isRTL ? "أكياس زراعية متعددة الاستخدامات ومستدامة لجميع متطلبات المشاتل والمزارع." : "Versatile and sustainable planter bags for all your growing needs."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- CONTENT ---------------- */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {categories.map((cat, catIndex) => {
          const Icon = cat.icon;

          return (
            <section key={catIndex}>
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
                {cat.products.map((product, prodIndex) => {
                  const key = `${catIndex}-${prodIndex}`;
                  const activeIndex = carouselIndex[key] || 0;

                  return (
                    <div
                      key={prodIndex}
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
                          className="w-full bg-[#1a4d2e] text-white hover:bg-white hover:text-[#1a4d2e] transition-all duration-300 shadow-lg hover:shadow-xl border border-[#1a4d2e]"
                        >
                          {isRTL ? "طلب عرض أسعار" : "Request Quote"}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            <img
              src={modalImages[modalIndex]}
              alt="Full view"
              className="max-w-full max-h-full object-contain"
            />

            {modalImages.length > 1 && (
              <>
                <button
                  onClick={prevModal}
                  className="absolute left-6 text-white"
                >
                  <ChevronLeft size={40} className={isRTL ? "rotate-180" : ""} />
                </button>
                <button
                  onClick={nextModal}
                  className="absolute right-6 text-white"
                >
                  <ChevronRight size={40} className={isRTL ? "rotate-180" : ""} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      , document.body)}
    </div>
  );
};

export default PlanterBags;
