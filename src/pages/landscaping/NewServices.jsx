import UniversalBackButton from '../../components/UniversalBackButton';
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, X, Recycle, Trees, Fence } from "lucide-react";
import { createPortal } from "react-dom";

import grass1 from "../../assets/Landscaping/New/grass 1.jpg";
import grass2 from "../../assets/Landscaping/New/grass 2.jpg";
import grass3 from "../../assets/Landscaping/New/grass 3.jpg";
import grass4 from "../../assets/Landscaping/New/grass 4.jpg";
import tree1 from "../../assets/Landscaping/New/tree 1.jpg";
import tree2 from "../../assets/Landscaping/New/tree 2.jpg";
import tree3 from "../../assets/Landscaping/New/tree 3.jpg";
import tree5 from "../../assets/Landscaping/New/tree 5.jpg";
import sustainable1 from "../../assets/Landscaping/New/sustainable 1.jpg";
import sustainable2 from "../../assets/Landscaping/New/sustainable 2.webp";
import sustainable3 from "../../assets/Landscaping/New/sustainable 3.jpg";
import wall1 from "../../assets/Landscaping/New/wall 1.webp";
import wall2 from "../../assets/Landscaping/New/wall 2.jpg";
import wall3 from "../../assets/Landscaping/New/wall 3.jpg";
import wall4 from "../../assets/Landscaping/New/wall 4.webp";
import wall5 from "../../assets/Landscaping/New/wall 5.jpg";
import artificial1 from "../../assets/Landscaping/New/artificial 1.jpg";
import artificial2 from "../../assets/Landscaping/New/artificial 2.jpg";
import artificial3 from "../../assets/Landscaping/New/artificial 3.jpg";
import artificial4 from "../../assets/Landscaping/New/artificial 4.jpg";

const NewServices = () => {
  const navigate = useNavigate();
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
      title: "Sustainable Landscaping & Planting",
      icon: Recycle,
      description:
        "Eco-friendly landscaping solutions that minimize environmental impact through native plant selection, drought tolerance, and climate-adaptive site design.",
      products: [
        {
          name: "Sustainability Landscaping",
          desc: "Holistic, eco-friendly landscape architecture incorporating drought-hardy regional species, permeable surfaces, and sustainable mulch to dramatically curb water consumption.",
          images: [sustainable1, sustainable2, sustainable3],
        },
        {
          name: "Tree Planting & Sourcing",
          desc: "Turnkey tree procurement, planting pit preparation, root guidance, and early-stage nurturing for shade trees and ornamental palms adapted to desert heat.",
          images: [tree1, tree2, tree3, tree5],
        },
      ],
    },
    {
      title: "Lawn & Turf Solutions",
      icon: Trees,
      description:
        "Premium natural turf establishment and designer synthetic grass installations for villas, private estates, and commercial grounds.",
      products: [
        {
          name: "Natural Grass Installation",
          desc: "High-grade, heat-tolerant turf varieties installed over enriched soil beds with precision laser grading and integrated sub-surface or drip irrigation.",
          images: [grass1, grass2, grass3, grass4],
        },
        {
          name: "Artificial Plants & Foliage",
          desc: "Ultra-realistic, UV-stabilized artificial trees, potted specimen shrubs, and topiaries that bring permanent, vibrant greenery with zero irrigation demands.",
          images: [artificial1, artificial2, artificial3, artificial4],
        },
      ],
    },
    {
      title: "Vertical Greenery & Green Walls",
      icon: Fence,
      description:
        "Architectural vertical garden systems providing microclimate cooling, acoustic dampening, and eye-catching natural elegance.",
      products: [
        {
          name: "Living Green Walls",
          desc: "Automated modular vertical gardens with closed-loop sub-irrigation, integrated fertilization, and plant palettes selected for maximum air purification.",
          images: [wall4, wall1, wall5],
        },
        {
          name: "Artificial Green Walls",
          desc: "Architectural UV-resistant synthetic green wall panels featuring rich multi-dimensional foliage, effortless installation, and lifelong vivid color.",
          images: [wall2, wall3, wall1],
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
        <title>New Installation Services | Landscaping | Kahf Greens</title>
        <meta
          name="description"
          content="Transform your outdoor space with sustainable landscaping, tree planting, green walls, and turf installations."
        />
        <link rel="canonical" href="https://kahfgreens.com/landscaping/new-services" />
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="New installation services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="mb-6 sm:mb-8 flex justify-start">
            <UniversalBackButton to="/landscaping" label="Back to Landscaping" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              New Installation Services
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              Transform your outdoor space with sustainable, climate-smart installations.
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
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default NewServices;
