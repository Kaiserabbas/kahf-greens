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
    <div className="bg-white">
      <Helmet>
        <title>{helmetTitle}</title>
        {helmetDescription && (
          <meta name="description" content={helmetDescription} />
        )}
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="bg-[#1a4d2e] text-white py-20">
        <div className="container mx-auto px-4">
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

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="max-w-2xl mx-auto text-[#e8f5e9]">{description}</p>
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
                {cat.products.map((product, prodIndex) => (
                  <div
                    key={prodIndex}
                    className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                  >
                    {/* IMAGE SLIDER */}
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <AutoSlider
                        items={product.images}
                        renderItem={(image, index) => (
                          <img
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-full object-cover cursor-pointer"
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
                ))}
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
    </div>
  );
};

export default AgricultureSubPageTemplate;
