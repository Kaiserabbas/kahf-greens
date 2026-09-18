import UniversalBackButton from '../../components/UniversalBackButton';
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Home, Fence, Armchair, X } from "lucide-react";

import fence1 from "../../assets/Landscaping/outdoor living/fence 1.png";
import fence2 from "../../assets/Landscaping/outdoor living/fence 2.png";
import pergola from "../../assets/Landscaping/outdoor living/pergola.png";
import gazebo from "../../assets/Landscaping/outdoor living/gazebo.png";
import seating1 from "../../assets/Landscaping/outdoor living/seating 1.jpg";
import seating2 from "../../assets/Landscaping/outdoor living/seating 2.jpg";
import seating3 from "../../assets/Landscaping/outdoor living/seating 3.jpg";
import seating4 from "../../assets/Landscaping/outdoor living/seating 4.jpg";
import seating5 from "../../assets/Landscaping/outdoor living/seating 5.jpg";
import seating6 from "../../assets/Landscaping/outdoor living/seating 6.jpg";
import seating7 from "../../assets/Landscaping/outdoor living/seating 7.jpg";
import shade1 from "../../assets/Landscaping/outdoor living/shade 1.jpg";
import shade2 from "../../assets/Landscaping/outdoor living/shade 2.jpg";
import shade4 from "../../assets/Landscaping/outdoor living/shade 4.jpg";
import shade5 from "../../assets/Landscaping/outdoor living/shade 5.jpg";
import shade6 from "../../assets/Landscaping/outdoor living/shade 6.jpg";

const OutdoorLiving = () => {
  const navigate = useNavigate();
  const heroImage = "https://images.unsplash.com/photo-1505691938895-1758d7feb511";

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
      title: "Pergolas & Shade Structures",
      icon: Home,
      description:
        "Bespoke architectural structures providing essential desert shade, solar protection, and comfortable outdoor living extensions.",
      products: [
        {
          name: "Custom Pergolas & Gazebos",
          desc: "Handcrafted natural timber, powder-coated aluminum, and bioclimatic motorized louvered pergolas engineered with integrated LED lighting and cooling misting options.",
          images: [pergola, gazebo],
        },
        {
          name: "Modern Shade Canopies & Sails",
          desc: "Architectural tensile shade structures, commercial-grade shade cloth, and cantilevered sails built to withstand Gulf winds and reduce ambient temperatures.",
          images: [shade1, shade2, shade4, shade5, shade6],
        },
      ],
    },
    {
      title: "Seating Areas & Boundary Solutions",
      icon: Armchair,
      description:
        "Custom outdoor entertaining lounges, sunken seating pits, and decorative perimeter screens that define luxury and privacy.",
      products: [
        {
          name: "Bespoke Outdoor Seating Areas",
          desc: "Custom-built masonry seating, sunken fire pit lounges, and weather-resistant upholstered gathering spaces tailored for intimate family evenings or large gatherings.",
          images: [seating1, seating2, seating3, seating4, seating5, seating6, seating7],
        },
        {
          name: "Decorative Panels & Fencing",
          desc: "Laser-cut architectural metal privacy screens, composite timber slats, and security fencing designed to provide acoustic dampening, wind reduction, and modern aesthetics.",
          images: [fence1, fence2],
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
        <title>Outdoor Living | Landscaping | Kahf Greens</title>
        <meta
          name="description"
          content="Custom pergolas, gazebos, shade sails, outdoor seating, and fencing for luxury outdoor living in the UAE."
        />
        <link rel="canonical" href="https://kahfgreens.com/landscaping/outdoor-living" />
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Outdoor living"
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
              Outdoor Living
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              Bespoke pergolas, shaded lounges, seating, and decorative boundaries for luxury outdoor living.
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

export default OutdoorLiving;
