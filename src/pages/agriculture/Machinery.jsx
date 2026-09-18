import UniversalBackButton from '../../components/UniversalBackButton';
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  Truck,
  Cog,
  TreePine,
  Wrench,
  ChevronLeft,
  ChevronRight,
  X, Sprout, Droplets, Tag, Layers, MoveRight, Grid, Scissors, Leaf, Thermometer, Settings, 
} from "lucide-react";
import { createPortal } from "react-dom";

import pots1 from "../../assets/Agriculture/machinery/Pots Transport 1.jpg";
import pots2 from "../../assets/Agriculture/machinery/Pots Transport 2.jpg";
import pots3 from "../../assets/Agriculture/machinery/Pots Transport 3.jpg";
import pots4 from "../../assets/Agriculture/machinery/Pots Transport 4.jpg";
import trays1 from "../../assets/Agriculture/machinery/Trays Transport 1.png";
import trays2 from "../../assets/Agriculture/machinery/Trays Transport 2.png";

const Machinery = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const heroImage = trays1;

  /* ---------------- STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  /* ---------------- DATA ---------------- */
  const categories = [
    {
      title: isRTL ? "نقل ومناولة الأحواض والأصص" : "Pots Transportation",
      icon: Truck,
      description: isRTL ? "معدات وعربات لنقل أصص وأحواض النباتات." : "Equipment for transporting pots and planters.",
      products: [
        {
          name: isRTL ? "عربات نقل الأصص الأوتوماتيكية" : "Automated Pot Movers",
          desc: isRTL ? "أنظمة ميكانيكية متطورة لنقل وتحريك أصص الزراعة." : "Mechanized systems for pot transportation.",
          images: [pots1, pots2, pots3, pots4],
        },
      ],
    },
    {
      title: isRTL ? "أنظمة نقل صواني التشتيل" : "Tray Transportation System",
      icon: Cog,
      description: isRTL ? "أنظمة لنقل صواني تشتيل البذور والمشاتل." : "Systems for transporting seedling trays.",
      products: [
        {
          name: isRTL ? "ناقلات صواني التشتيل" : "Tray Conveyors",
          desc: isRTL ? "خطوط ناقلة ميكانيكية لنقل الصواني بسهولة." : "Conveyor systems for tray movement.",
          images: [trays1, trays2],
        },
      ],
    }
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
        <title>{isRTL ? "المعدات والآلات الزراعية في الإمارات | كاف جرينز" : "Machinery | Agriculture | Kahf Greens"}</title>
        <meta
          name="description"
          content={isRTL ? "استكشف معداتنا الزراعية بما في ذلك أنظمة النقل والميكنة المتخصصة في الإمارات." : "Explore our agricultural machinery including transportation systems and specialized equipment."}
        />
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Agricultural machinery"
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
              {isRTL ? "المعدات والآلات الزراعية" : "Machinery"}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              {isRTL ? "آلات ومعدات متطورة لرفع كفاءة العمليات الزراعية." : "Advanced machinery for efficient agricultural operations."}
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
      <div className="mt-12 border-t border-emerald-100 pt-12 pb-16 bg-gradient-to-b from-[#f0fdf4] to-white rounded-2xl shadow-xl overflow-hidden">
  <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 tracking-tight mb-5">
        {isRTL ? "مجموعتنا الكاملة من آلات المشاتل والصوب الزراعية" : "Our Complete Range of Nursery & Greenhouse Machinery"}
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto font-light">
        {isRTL
          ? "من البذر والتشتيل إلى التعبئة والمناولة، آلات متطورة ومصممة خصيصاً للمزارعين التجاريين في الإمارات والخليج."
          : "From seeding to transplanting, labelling to handling, high-performance, modular machines designed for professional growers in the UAE and GCC."}
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {[
        {
          icon: Sprout,
          title: isRTL ? "البذر والزراعة" : "Seeding",
          desc: isRTL ? "آلات بذر دقيقة وسريعة للبذر المتناسق في الصواني والأحواض." : "Precision seeders and drum seeders for high-speed, uniform sowing in trays and pots.",
        },
        {
          icon: Droplets,
          title: isRTL ? "التعبئة والخلط" : "Filling",
          desc: isRTL ? "آلات تعبئة أوتوماتيكية للتربة والتربة البديلة بكثافة متسقة." : "Automated soil and substrate filling machines for trays, pots, and packs with consistent density.",
        },
        {
          icon: TreePine,
          title: isRTL ? "التشتيل ونقل الشتلات" : "Transplanting",
          desc: isRTL ? "آلات تشتيل روبوتية يدويّة لنقل النباتات بسرعة ودون الإضرار بالجذور." : "Robotic and manual transplanters for fast, accurate plant movement with minimal root disturbance.",
        },
        {
          icon: Layers,
          title: isRTL ? "فصل الصواني" : "Denesting",
          desc: isRTL ? "آلات أوتوماتيكية لفصل الصواني والأصص المكدسة بفعالية وبدون تلف." : "Automatic denesting machines that separate stacked trays and pots efficiently and without damage.",
        },
        {
          icon: MoveRight,
          title: isRTL ? "المناولة والنقل" : "Handling",
          desc: isRTL ? "خطوط سير وروبوتات مناولة لتدفق سلس للمواد داخل المشاتل." : "Conveyor systems, destackers, and handling robots for smooth material flow in nursery lines.",
        },
        {
          icon: Grid,
          title: isRTL ? "تجهيز حفر الزراعة" : "Dibbling",
          desc: isRTL ? "آلات حفر وتجهيز التربة لإعداد ثقوب زراعة مثالية بأعماق متساوية." : "Dibblers and hole-making machines that prepare perfect planting holes in substrate for uniform depth.",
        },
        {
          icon: Leaf,
          title: isRTL ? "الغسيل والتعقيم" : "Washing",
          desc: isRTL ? "أنظمة غسيل الصواني والأحواض بضغط عالٍ لإعادة الاستخدام والحفاظ على النظافة." : "Tray and pot washing systems with high-pressure cleaning for reuse and hygiene.",
        },
        {
          icon: Thermometer,
          title: isRTL ? "غرف الإنبات" : "Germination",
          desc: isRTL ? "أنظمة وغرف إنبات مصممة للتحكم بالمناخ وتوفير الظروف المثالية للبذور." : "Germination chambers and climate-controlled systems for optimal seed sprouting conditions.",
        },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group bg-white rounded-xl p-7 md:p-9 shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-2 border border-emerald-100/50 flex flex-col items-center text-center"
          >
            <div className="inline-flex p-5 bg-emerald-100/50 rounded-2xl text-emerald-700 mb-6 transition-transform group-hover:scale-110">
              <Icon size={40} strokeWidth={1.4} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-950 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {item.desc}
            </p>
          </motion.div>
        );
      })}
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="text-center mt-12 text-lg text-emerald-700 font-medium"
    >
      {isRTL
        ? "أنظمة متكاملة من البذر حتى الإنبات، صُممت لزيادة الكفاءة والإنتاجية في ظروف الإمارات."
        : "Complete modular systems, from seeding to germination, built for efficiency, reliability, and maximum yield in UAE conditions."}
    </motion.p>
  </div>
</div>
      </div>

      {/* ---------------- MODAL ---------------- */}
      { createPortal(
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
      , document.body) }
    </div>
  );
};

export default Machinery;
