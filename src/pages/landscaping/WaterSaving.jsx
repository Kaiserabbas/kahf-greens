import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import litesoil from '../../assets/Agriculture/water Saving/litesoil.jpg';
import lites1 from '../../assets/Agriculture/water Saving/LITE-S 1.jpg';
import lites2 from '../../assets/Agriculture/water Saving/LITE-S 2.jpg';
import lites3 from '../../assets/Agriculture/water Saving/LITE-S 3.jpg';
import lites4 from '../../assets/Agriculture/water Saving/LITE-S 4.jpg';
import lites5 from '../../assets/Agriculture/water Saving/LITE-S 5.png';
import lites6 from '../../assets/Agriculture/water Saving/LITE-S 6.png';

import litel1 from '../../assets/Agriculture/water Saving/LITE-L 1.jpg';
import litel2 from '../../assets/Agriculture/water Saving/LITE-L 2.jpg';
import litel3 from '../../assets/Agriculture/water Saving/LITE-L 3.png';
import litel4 from '../../assets/Agriculture/water Saving/LITE-L 4.jpg';
import litel5 from '../../assets/Agriculture/water Saving/LITE-L 5.png';

import litenetla1 from '../../assets/Agriculture/water Saving/LITE-NET Lawn 1.jpg';
import litenetla2 from '../../assets/Agriculture/water Saving/LITE-NET Lawn 2.png';
import litenetla3 from '../../assets/Agriculture/water Saving/LITE-NET Lawn 3.jpg';
import litenetla4 from '../../assets/Agriculture/water Saving/LITE-NET Lawn 4.jpg';
import litenetla5 from '../../assets/Agriculture/water Saving/LITE-NET Lawn 5.jpg';
import litenetla6 from '../../assets/Agriculture/water Saving/LITE-NET Lawn 6.jpg';
import litenetla7 from '../../assets/Agriculture/water Saving/Lite-Net Lawn 7.png';
import litenetla8 from '../../assets/Agriculture/water Saving/LITE-NET Lawn 8.jpg';

import litenetslope1 from '../../assets/Agriculture/water Saving/LITE-NET Slope 1.jpg';
import litenetslope2 from '../../assets/Agriculture/water Saving/LITE-NET Slope 2.jpg';
import litenetslope3 from '../../assets/Agriculture/water Saving/LITE-NET Slope 3.jpg';
import litenetslope4 from '../../assets/Agriculture/water Saving/LITE-NET Slope 4.jpg';
import litenetgolf1 from '../../assets/Agriculture/water Saving/LITE-NET Golf 1.jpg';
import litenetgolf2 from '../../assets/Agriculture/water Saving/LITE-NET Golf 2.jpg';
import litenetgolf3 from '../../assets/Agriculture/water Saving/LITE-NET Golf 3.jpg';

import tree1 from '../../assets/Agriculture/water Saving/Tree 1.jpg';
import tree2 from '../../assets/Agriculture/water Saving/Tree 2.jpg';
import tree3 from '../../assets/Agriculture/water Saving/Tree 3.jpg';
import tree4 from '../../assets/Agriculture/water Saving/Tree 4.jpg';
import tree5 from '../../assets/Agriculture/water Saving/Tree 5.png';

import graneuls from '../../assets/Agriculture/water Saving/Granules.jpg';
import graneuls2 from '../../assets/Agriculture/water Saving/Granules 2.webp';

import {
  Droplets,
  Recycle,
  ChevronLeft,
  ChevronRight,
  X,
  Grid,
  TreePine,
} from "lucide-react";
import { createPortal } from "react-dom";

const WaterSaving = () => {
  const navigate = useNavigate();
  const heroImage = litesoil;

  /* ---------------- STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  /* ---------------- DATA ---------------- */
const categories = [
  {
    title: "Lite Strips for Planter Pots",
    icon: Droplets, // water retention theme
    description:
      "Pre-cut super-absorbent polymer strips designed to be placed at the bottom of planter pots. They absorb and slowly release water and nutrients directly to the root zone, reducing irrigation frequency by up to 50% and preventing over- or under-watering in hot climates.",
    products: [
      {
        name: "Lite Strips – Standard Size",
        desc: "Ideal for 10–25 liter pots. High water-holding capacity with gradual release for consistent moisture.",
        images: [ lites5,lites4, lites6, lites1, lites2, lites3 ],
      },
      {
        name: "Lite Strips – Large Size",
        desc: "For 30–60 liter containers and large specimen trees. Long-lasting moisture retention for reduced maintenance.",
        images: [ litel3, litel4, litel5, litel1, litel2],
      },
    ],
  },
  {
    title: "Lite Net for Lawns & Ground Covers",
    icon: Grid, // net / mesh theme
    description:
      "Rolled super-absorbent polymer net laid beneath turf, sod, or ground cover plants. It stores large volumes of water and releases it slowly to the roots, dramatically improving lawn establishment and drought resistance while reducing watering needs by up to 50%.",
    products: [
      {
        name: "Lite Net – Lawn Grade",
        desc: "Perfect for residential lawns, golf courses, and sports fields. Enhances root development and turf density in sandy soils.",
        images: [litenetla1, litenetla2, litenetla3, litenetla4, litenetla5, litenetla6, litenetla7, litenetla8],
      },
      {
        name: "Lite Net – Ground Cover Grade",
        desc: "Optimized for ornamental beds, slopes, and erosion control areas. Long-term moisture retention for low-maintenance landscapes.",
        images: [litenetslope1, litenetslope2, litenetslope3, litenetgolf1, litenetgolf2, litenetgolf3],
      },
    ],
  },
  {
    title: "Lite Net for Trees",
    icon: TreePine,
    description:
      "Heavy-duty super-absorbent polymer net specifically developed for tree planting pits. Placed around the root ball or in the planting hole, it holds water and nutrients close to the roots during establishment, significantly improving survival rates and reducing irrigation in the critical first 2–3 years.",
    products: [
      {
        name: "Lite Net – Tree Planting Kit",
        desc: "Pre-sized net rolls for standard tree pits (50–100 cm diameter). Supports rapid root establishment in desert conditions.",
        images: [tree1, tree2, tree3, tree4, tree5],
      }
    ],
  },
    {
      title: "Granules",
      icon: Recycle,
      description: "Granular materials for soil moisture management.",
      products: [
        {
          name: "Water Retaining Granules",
          desc: "Granules that absorb and release water slowly.",
          images: [graneuls],
        },
        {
          name: "Soil Amendment Granules",
          desc: "Granules to improve soil water-holding capacity.",
          images: [graneuls2],
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
        <title>Water Saving | Agriculture | Kahf Greens</title>
        <meta
          name="description"
          content="Explore our water-saving technologies including super absorbent textiles and granules."
        />
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-2 md:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Water saving solutions"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />
        
        {/* Fixed Back Button */}
        <div className="absolute top-4 left-4 z-20 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/landscaping')}
            className="bg-black/20 backdrop-blur-sm text-white/90 hover:text-white hover:bg-black/30 border border-white/20"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back
          </Button>
        </div>
        
        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Water Saving
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              Innovative solutions for efficient water conservation in landscaping.
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
                {cat.products.map((product, prodIndex) => {
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
                  <ChevronLeft size={40} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextModal();
                  }}
                  className="absolute right-6 text-white"
                >
                  <ChevronRight size={40} />
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

export default WaterSaving;
