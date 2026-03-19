import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import pumps from "../../assets/Agriculture/pumps/pumps.jpg"
import {
  Zap,
  Wrench,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";

import subpump1 from "../../assets/Agriculture/pumps/Submersible 1.jpg";
import subpump2 from "../../assets/Agriculture/pumps/Submersible 2.jpg";
import centrifugal1 from "../../assets/Agriculture/pumps/Centrifugal 1.jpg";
import centrifugal2 from "../../assets/Agriculture/pumps/Centrifugal 2.jpg";
import suction1 from "../../assets/Agriculture/pumps/Suction Hose 1.webp";
import suction2 from "../../assets/Agriculture/pumps/Suction Hose 2.avif";
import delivery1 from "../../assets/Agriculture/pumps/Delivery Hose 1.jpeg";
import delivery2 from "../../assets/Agriculture/pumps/Delivery Hose 2.webp";


const PumpsAndHoses = () => {
  const navigate = useNavigate();
  const heroImage = pumps;

  /* ---------------- STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  /* ---------------- DATA ---------------- */
  const categories = [
    {
      title: "Agricultural Pumps",
      icon: Zap,
      description: "High-efficiency pumps for agricultural applications.",
      products: [
        {
          name: "Centrifugal Pumps",
          desc: "Pumps for high-volume water transfer.",
          images: [ centrifugal1, centrifugal2 ],
        },
        {
          name: "Submersible Pumps",
          desc: "Pumps designed for underwater operation.",
          images: [ subpump1, subpump2 ],
        },
      ],
    },
    {
      title: "Suction and Delivery Hose",
      icon: Wrench,
      description: "Durable hoses for suction and delivery systems.",
      products: [
        {
          name: "PVC Suction Hose",
          desc: "Flexible PVC hose for suction applications.",
          images: [ suction1, suction2 ],
        },
        {
          name: "Delivery Hose",
          desc: "Reinforced hose for water delivery.",
          images: [ delivery1, delivery2 ],
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
        <title>Pumps & Hoses | Agriculture | Kahf Greens</title>
        <meta
          name="description"
          content="Explore our agricultural pumps and hoses for efficient water management."
        />
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-2 md:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Planter pots"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />
        
        {/* Fixed Back Button */}
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/agriculture')}
            className="bg-black/20 backdrop-blur-sm text-white/90 hover:text-white hover:bg-black/30 border border-white/20"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back
          </Button>
        </div>
        
        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Pumps & Hoses
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              Reliable pumps and hoses for agricultural water systems.
            </p>
            </motion.div>
          </div>
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
                          className="w-full h-full object-cover cursor-pointer"  
                          src={product.images[activeIndex]}
                          alt={product.name}
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
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
                            >
                              <ChevronLeft size={18} />
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
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
                            >
                              <ChevronRight size={18} />
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
                  <ChevronLeft size={40} />
                </button>
                <button
                  onClick={nextModal}
                  className="absolute right-6 text-white"
                >
                  <ChevronRight size={40} />
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

export default PumpsAndHoses;
