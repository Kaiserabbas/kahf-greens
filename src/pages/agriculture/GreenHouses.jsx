import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Fan, Sun, Layers, ChevronLeft, ChevronRight, X } from "lucide-react";

import coolingPad1 from "../../assets/Agriculture/greenhouses/Cooling Pad 1.jpg";
import coolingPad2 from "../../assets/Agriculture/greenhouses/Cooling Pad 2.jpg";
import shadeNet1 from "../../assets/Agriculture/greenhouses/Shade Net 1.jpg";
import shadeNet2 from "../../assets/Agriculture/greenhouses/Shade Net 2.jpg";
import groundCover1 from "../../assets/Agriculture/greenhouses/Ground Cover 1.jpg";
import groundCover2 from "../../assets/Agriculture/greenhouses/Ground Cover 2.jpg";

const GreenHouses = () => {
  const navigate = useNavigate();

  /* ---------------- PRODUCT CAROUSEL STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});

  /* ---------------- MODAL STATE ---------------- */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  const categories = [
    {
      title: "Cooling Pads",
      icon: Fan,
      description: "Evaporative cooling systems for temperature control in greenhouses.",
      products: [
        {
          name: "Cellulose Cooling Pads",
          desc: "High-efficiency cellulose pads for evaporative cooling.",
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
      <section className="bg-[#1a4d2e] text-white py-20">
       <div className="container mx-auto px-4">
        {/* Back button - LEFT */}
        <div className="mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/agriculture")}
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#1a4d2e] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back
          </Button>
        </div>
        {/* Title & Description - CENTER */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Green Houses
          </h1>
          <p className="max-w-2xl mx-auto text-[#e8f5e9]">
            Essential equipment for maintaining optimal greenhouse environments.
          </p>
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

      {/* ---------------- FULLSCREEN MODAL ---------------- */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            {/* IMAGE */}
            <img
              src={modalImages[modalIndex]}
              alt="Full view"
              className="max-w-full max-h-full object-contain"
            />

            {/* NAV */}
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
    </div>
  );
};

export default GreenHouses;
