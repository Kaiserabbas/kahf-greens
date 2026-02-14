import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import AutoSlider from "./AutoSlider";

const AgricultureSubPageTemplate = ({
  title,
  description,
  categories,
  helmetTitle,
  helmetDescription,
  heroImage,
}) => {
  const navigate = useNavigate();

  /* ---------------- MODAL STATE ---------------- */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

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
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{helmetTitle}</title>
        {helmetDescription && (
          <meta name="description" content={helmetDescription} />
        )}
      </Helmet>

      {/* ---------------- HERO / HEADER ---------------- */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-emerald-900 to-emerald-700 text-white overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 opacity-20">
            <img
              src={heroImage}
              alt={`${title} hero`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="container mx-auto px-5 md:px-8 lg:px-12 py-16 lg:py-24 space-y-24 lg:space-y-32">
        {categories.map((cat, catIndex) => {
          const Icon = cat.icon;

          return (
            <section key={catIndex}>
              <div className="flex items-center gap-5 mb-10 pb-4 border-b border-emerald-100">
                <div className="p-4 bg-emerald-100 rounded-xl text-emerald-700">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">
                    {cat.title}
                  </h2>
                  <p className="text-lg text-gray-600 mt-2">{cat.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.products.map((product, prodIndex) => {
                  const key = `${catIndex}-${prodIndex}`;
                  const activeIndex = carouselIndex[key] || 0;

                  return (
                    <motion.div
                      key={prodIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: prodIndex * 0.1 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    >
                      {/* Image Carousel – Fixed aspect ratio */}
                      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                        <AutoSlider
                          items={product.images}
                          renderItem={(image, index) => (
                            <img
                              src={image}
                              alt={`${product.name} - ${index + 1}`}
                              className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
                              onClick={() => openModal(product.images, index)}
                            />
                          )}
                          onItemClick={(image, index) =>
                            openModal(product.images, index)
                          }
                          className="w-full h-full"
                          itemClassName="w-full h-full"
                          autoSlide={true}
                          interval={4000}
                          showArrows={product.images.length > 1}
                          enableSwipe={true}
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {product.desc}
                        </p>
                        <Button
                          onClick={() => navigate("/contact")}
                          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white transition-all duration-300 rounded-xl shadow-md hover:shadow-lg"
                        >
                          Request Quote
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* ---------------- FULLSCREEN MODAL – MINIMAL PADDING ---------------- */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            {/* Image container – very minimal padding */}
            <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-4 lg:p-8 xl:p-10">
              <img
                src={modalImages[modalIndex]}
                alt="Product full view"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Navigation buttons */}
            {modalImages.length > 1 && (
              <>
                <button
                  onClick={prevModal}
                  className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 text-white z-20 p-4 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={40} />
                </button>

                <button
                  onClick={nextModal}
                  className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 text-white z-20 p-4 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
                  aria-label="Next image"
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

export default AgricultureSubPageTemplate;