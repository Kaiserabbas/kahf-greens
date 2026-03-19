import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from 'react-dom';
import {
  TreeDeciduous,
  Apple,
  TreePine,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

/* ---------------- LOCAL IMAGES ---------------- */
// Outdoor Growing
import outdoorPlanter1 from "../../assets/Agriculture/planter pots/Outdoors Pots 1.jpg";
import outdoorPlanter2 from "../../assets/Agriculture/planter pots/Outdoors Pots 2.jpg";
import outdoorPlanter3 from "../../assets/Agriculture/planter pots/Outdoors Pots 3.jpg";
import outdoorPlanter4 from "../../assets/Agriculture/planter pots/Outdoors Pots 4.jpg";

// Vertical Farming
import stackablePot1 from "../../assets/Agriculture/planter pots/Vertical 1.png";
import stackablePot2 from "../../assets/Agriculture/planter pots/Vertical 2.png";

// Fruit Growing
import fruitTree1 from "../../assets/Agriculture/planter pots/Fruit 1.jpg";
import fruitTree2 from "../../assets/Agriculture/planter pots/Fruit 2.jpg";
import fruitTree3 from "../../assets/Agriculture/planter pots/Fruit 3.jpg";
import fruitTree4 from "../../assets/Agriculture/planter pots/Fruit 4.jpg";

// Large Trees
import matureTree1 from "../../assets/Agriculture/planter pots/Large Trees 1.jpg";
import matureTree2 from "../../assets/Agriculture/planter pots/Large Trees 2.jpg";
import matureTree3 from "../../assets/Agriculture/planter pots/Large Trees 3.jpg";
import matureTree4 from "../../assets/Agriculture/planter pots/Large Trees 4.jpg";
import matureTree5 from "../../assets/Agriculture/planter pots/Large Trees 5.jpg";

const PlanterPots = () => {
  const navigate = useNavigate();
  const heroImage = outdoorPlanter1;

  /* ---------------- CAROUSEL STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});

  /* ---------------- MODAL STATE ---------------- */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  const categories = [
    {
      title: "Outdoor Growing",
      icon: TreeDeciduous,
      description: "Pots designed for outdoor cultivation in various climates.",
      products: [
        {
          name: "Outdoor Planters",
          desc: "Durable pots for outdoor use.",
          images: [outdoorPlanter1, outdoorPlanter2, outdoorPlanter3, outdoorPlanter4],
        },
      ],
    },
    {
      title: "Vertical Farming",
      icon: TreePine,
      description: "Specialized pots for vertical growing systems.",
      products: [
        {
          name: "Stackable Pots",
          desc: "Pots designed for vertical stacking.",
          images: [stackablePot1, stackablePot2],
        }
      ],
    },
    {
      title: "Fruit Growing",
      icon: Apple,
      description: "Pots optimized for fruit tree cultivation.",
      products: [
        {
          name: "Fruit Tree Pots",
          desc: "Deep pots for fruit tree roots.",
          images: [fruitTree1, fruitTree2, fruitTree3, fruitTree4],
        },
      ],
    },
    {
      title: "Tree Large",
      icon: TreePine,
      description: "Extra-large containers for mature trees.",
      products: [
        {
          name: "Mature Tree Pots",
          desc: "Pots for established trees.",
          images: [matureTree1, matureTree2, matureTree3, matureTree4, matureTree5],
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
        <title>Planter Pots | Agriculture | Kahf Greens</title>
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Planter Pots
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              Versatile planter pots for outdoor growing, vertical farming, fruit plants, and large trees.
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
                          className="w-auto h-auto object-cover cursor-pointer"
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
                              [key]:
                                (activeIndex + 1) %
                                product.images.length,
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
      </div>

{/* ---------------- FULLSCREEN MODAL ---------------- */}
      {createPortal(
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // fixed inset-0 ensures it covers the whole screen
              // h-screen and w-screen locks the dimensions
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
                  // object-contain ensures the whole image is visible without scrolling
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

export default PlanterPots;
