import UniversalBackButton from '../../components/UniversalBackButton';
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { ChevronLeft, ChevronRight, Leaf, Star, Sparkles, X } from "lucide-react";

import b1 from "../../assets/Landscaping/balcony/1.avif";
import b2 from "../../assets/Landscaping/balcony/2.avif";
import b3 from "../../assets/Landscaping/balcony/3.avif";
import b4 from "../../assets/Landscaping/balcony/4.webp";
import b5 from "../../assets/Landscaping/balcony/5.avif";
import b6 from "../../assets/Landscaping/balcony/6.avif";
import b7 from "../../assets/Landscaping/balcony/7.avif";
import b8 from "../../assets/Landscaping/balcony/8.webp";
import b9 from "../../assets/Landscaping/balcony/9.jpg";
import b10 from "../../assets/Landscaping/balcony/10.jpg";
import b11 from "../../assets/Landscaping/balcony/11.jpg";
import b12 from "../../assets/Landscaping/balcony/12.jpg";
import royal from "../../assets/Landscaping/balcony/royal.png";
import urban from "../../assets/Landscaping/balcony/urban.png";
import zen from "../../assets/Landscaping/balcony/zen.png";

const Balcony = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const heroImage = b11;

  /* ---------------- STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  /* ---------------- ESC KEY LISTENER ---------------- */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextModal();
      if (e.key === "ArrowLeft") prevModal();
    };
    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, modalImages.length]);

  /* ---------------- DATA ---------------- */
  const categories = [
    {
      title: isRTL ? "باقات حدائق الشرفات" : "Balcony Garden Packages",
      icon: Leaf,
      description: isRTL
        ? "باقات تحويل وتنسيق الشرفات المتكاملة المصممة خصيصاً لأبراج دبي وتراسات الشقق."
        : "Turnkey balcony transformation packages engineered specifically for UAE high-rises, apartment terraces, and private patios.",
      products: [
        {
          name: isRTL ? "باقة زين الاقتصادية (استوديو / غرفة واحدة)" : "The Zen Starter Package (Studio / 1BR)",
          desc: isRTL
            ? "مثالية للشرفات الصغيرة (1,800 - 2,500 درهم). تتضمن 3-5 أحواض فاخرة (نباتات جلد النمر والزمرد)، حصى نهرية تجميلية، لمسات عشب صناعي، تنسيق محترف ودليل رعاية."
            : "Ideal for compact balconies (AED 1,800 – 2,500). Includes 3–5 premium planters (Snake Plants & ZZ Plants), decorative river pebbles, artificial turf accent, professional arrangement, and basic care guide.",
          images: [zen, b5, b1, b2, b3],
        },
        {
          name: isRTL ? "باقة الواحة الحضرية (الشرفات القياسية)" : "The Urban Oasis Package (Standard Balconies)",
          desc: isRTL
            ? "الباقة الأكثر طلباً (4,500 - 7,500 درهم). عشب صناعي عالي الكثافة، جدار أخضر طبيعي (3 متر مربع)، شجيرتان كبيرتان في أحواض، ري أوتوماتيكي بالتنقيط، وصيانة مجانية لمدة شهر."
            : "Our most popular package (AED 4,500 – 7,500). High-density artificial turf, natural green wall (3 sqm), 2 large Silver Buttonwood trees in pots, automated drip irrigation, and 1 month complimentary maintenance.",
          images: [urban, b11, b4, b6, b7],
        },
      ],
    },
    {
      title: isRTL ? "التراسات الفاخرة والبنتهاوس" : "Luxury Terraces & Sky Penthouses",
      icon: Star,
      description: isRTL
        ? "جلسات خارجية مخصصة، مظلات وبرجولات تظليل، وجدران خضراء معمارية مصممة للتراسات الواسعة."
        : "Bespoke luxury retreats, custom shade pergolas, and vertical green architectural installations designed for expansive terraces.",
      products: [
        {
          name: isRTL ? "باقة الملاذ الملكي (التراس / البنتهاوس)" : "The Royal Retreat (Terrace / Penthouse)",
          desc: isRTL
            ? "واحتك الخاصة في السماء (15,000+ درهم). بناء برجولة أو مظلة مخصصة، عشب طبيعي/صناعي كامل التغطية، متسلقات جهنمية، مستشعرات رطوبة تربة ذكية، إضاءة حدائق، ورعاية لمدة 3 أشهر."
            : "Your private sky sanctuary (AED 15,000+). Custom pergola/gazebo construction, full-coverage premium turf, Bougainvillea climbers with trellising, smart soil sensors, landscape lighting, and 3 months care.",
          images: [royal, b12, b8, b9, b10],
        },
        {
          name: isRTL ? "التحديثات المخصصة والجدران الخضراء" : "Custom Balcony Upgrades & Greenwalls",
          desc: isRTL
            ? "جدران خضراء رأسية صناعية وطبيعية (120-180 درهم/قدم مربع)، بلاط أرضيات خشبية، شبكات ري بالتنقيط الذكي، وأحواض مخصصة لمقاومة الرياح الشديدة بالأبراج."
            : "Designer artificial and living vertical green walls (AED 120–180/sq.ft), composite timber interlocking decking tiles, smart micro-drip networks, and bespoke planters built for high-altitude desert wind.",
          images: [b2, b3, b6, b8, b9],
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
        <title>{isRTL ? "حدائق وباقات الشرفات والتراس في الإمارات | كاف جرينز" : "Balcony Gardens & Packages | Kahf Greens UAE"}</title>
        <meta
          name="description"
          content={isRTL ? "باقات حدائق الشرفات المتكاملة لشقق دبي: باقات تزيين، جدران خضراء، عشب صناعي، وتراسات بنتهاوس فاخرة." : "Turnkey balcony garden packages for Dubai apartments: starter kits, vertical greenwalls, turf installation, and luxury penthouse terraces."}
        />
        <link rel="canonical" href="https://kahfgreens.com/landscaping/balcony" />
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Balcony gardens"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="mb-6 sm:mb-8 flex justify-start">
            <UniversalBackButton to="/landscaping" label={isRTL ? "الرجوع إلى قسم تنسيق الحدائق" : "Back to Landscaping"} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              {isRTL ? "حدائق الشرفات والتراس" : "Balcony Gardens"}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              {isRTL
                ? "حوّل شرفة شقتك إلى واحة خضراء مريحة وخاصة في دولة الإمارات."
                : "Turn your apartment balcony into a lush, private outdoor sanctuary in the UAE."}
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
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white"
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
                    className="absolute left-6 text-white"
                  >
                    <ChevronLeft size={40} className={isRTL ? "rotate-180" : ""} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextModal();
                    }}
                    className="absolute right-6 text-white"
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

export default Balcony;
