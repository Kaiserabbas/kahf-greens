import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import {
  Fan,
  Sun,
  Layers,
  ChevronLeft,
  ChevronRight,
  X,
  Award,
  Leaf,
  ShieldCheck,
} from "lucide-react";

/* ---------------- LOCAL IMAGES ---------------- */
import coolingPad1 from "../../assets/Agriculture/greenhouses/Cooling Pad 1.jpg";
import coolingPad2 from "../../assets/Agriculture/greenhouses/Cooling Pad 2.jpg";

import shadeNet1 from "../../assets/Agriculture/greenhouses/Shade Net 1.jpg";
import shadeNet2 from "../../assets/Agriculture/greenhouses/Shade Net 2.jpg";

import groundCover1 from "../../assets/Agriculture/greenhouses/Ground Cover 1.jpg";
import groundCover2 from "../../assets/Agriculture/greenhouses/Ground Cover 2.jpg";

const GreenHouses = () => {
  const navigate = useNavigate();
  const heroImage = coolingPad1;

  /* ---------------- CAROUSEL STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});

  /* ---------------- MODAL STATE ---------------- */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  const categories = [
    {
      title: "Cooling Pads",
      icon: Fan,
      description:
        "High Quality pads for efficient cooling for a large Greenhouse operator. Complete with coating to avoid limescale build up.",
      products: [
        {
          name: "Cooling Pads",
          desc: "High-efficiency pads for evaporative cooling complete with coating to avoid limescale build up.",
          images: [coolingPad1, coolingPad2],
        },
      ],
    },
    {
      title: "Shade Nets",
      icon: Sun,
      description: "Protective netting to reduce heat and UV exposure.",
      products: [
        {
          name: "UV Shade Nets",
          desc: "UV-resistant nets for plant protection.",
          images: [shadeNet1, shadeNet2],
        },
      ],
    },
    {
      title: "Ground Covers",
      icon: Layers,
      description: "Mulching materials to protect soil and retain moisture.",
      products: [
        {
          name: "Plastic Ground Covers",
          desc: "Durable plastic sheets for weed control and moisture retention.",
          images: [groundCover1, groundCover2],
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
        <title>Green Houses | Agriculture | Kahf Greens</title>
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-emerald-900 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Green houses"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/agriculture")}
              className="mb-8 text-white/80 hover:text-white hover:bg-white/10 transition-all -ml-4"
            >
              <ChevronLeft size={20} className="mr-2" />
              Back
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Green Houses
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              Essential equipment for maintaining optimal greenhouse
              environments.
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
                      <div className="relative h-48 bg-gray-200 overflow-hidden flex items-center justify-center">
                        <img
                          src={product.images[activeIndex]}
                          alt={product.name}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={() =>
                            openModal(product.images, activeIndex)
                          }
                        />

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
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
                        >
                          <ChevronLeft size={18} />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCarouselIndex((prev) => ({
                              ...prev,
                              [key]: (activeIndex + 1) % product.images.length,
                            }));
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
                        >
                          <ChevronRight size={18} />
                        </button>
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
                          Request Quote
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
          <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 tracking-tight mb-5">
                Why Partner with Kahf Greens?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light">
                Premium quality, climate-adapted solutions built to last, tailored specifically for your farming needs in the UAE.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Award,
                  title: "Premium Quality Materials",
                  desc: "Durable, UV-stabilized, and corrosion-resistant products engineered to withstand extreme UAE conditions for years.",
                },
                {
                  icon: Leaf,
                  title: "Tailored & Custom Solutions",
                  desc: "Every project is customized, from size and material to irrigation compatibility and crop-specific requirements.",
                },
                {
                  icon: ShieldCheck,
                  title: "Trusted UAE-Wide Support",
                  desc: "Reliable delivery, expert consultation, and after-sales service from Abu Dhabi to Ras Al Khaimah.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    className="group bg-white rounded-xl p-7 md:p-9 shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-2 border border-emerald-100/50"
                  >
                    <div className="inline-flex p-4 bg-emerald-100/50 rounded-xl text-emerald-700 mb-6">
                      <Icon size={36} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-950 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Optional trust line / CTA */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center mt-12 text-lg text-emerald-700 font-medium"
            >
              Join hundreds of growers who trust Kahf Greens for consistent quality and results.
            </motion.p>
          </div>
        </div>
      </div>
      {/* ---------------- FULLSCREEN MODAL ---------------- */}
      {createPortal(
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center overflow-hidden touch-none"
              onClick={() => setModalOpen(false)}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpen(false);
                }}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[10000] p-2"
              >
                <X size={32} />
              </button>

              {/* Navigation - Left */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevModal();
                }}
                className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-all z-[10000] p-4"
              >
                <ChevronLeft size={48} />
              </button>

              {/* Image Container */}
              <div
                className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={modalIndex}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  src={modalImages[modalIndex]}
                  alt="Full view"
                  className="max-w-full max-h-full object-contain shadow-2xl"
                />
              </div>

              {/* Navigation - Right */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextModal();
                }}
                className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-all z-[10000] p-4"
              >
                <ChevronRight size={48} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-6 text-white/60 text-sm font-medium">
                {modalIndex + 1} / {modalImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default GreenHouses;
