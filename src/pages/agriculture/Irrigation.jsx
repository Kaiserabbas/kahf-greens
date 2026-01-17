import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Droplets,
  Zap,
  Settings,
  Target,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import smart from "../../assets/Agriculture/irrigation/Smart irrigation.png";
import pipe1 from "../../assets/Agriculture/irrigation/Pipe 1.jpg";
import pipe2 from "../../assets/Agriculture/irrigation/Pipe 2.jpg";
import misting1 from "../../assets/Agriculture/irrigation/Misting 1.jpg";
import misting2 from "../../assets/Agriculture/irrigation/Misting 2.jpg";
import misting3 from "../../assets/Agriculture/irrigation/Misting 3.jpg";
import misting4 from "../../assets/Agriculture/irrigation/Misting 4.webp";
import nozzle1 from "../../assets/Agriculture/irrigation/Nozzle 1.jpg";
import boom11 from "../../assets/Agriculture/irrigation/Boom 1.jpg";
import boom2 from "../../assets/Agriculture/irrigation/Boom 2.webp";




const Irrigation = () => {
  const navigate = useNavigate();

  /* ---------------- CAROUSEL STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});

  /* ---------------- MODAL STATE ---------------- */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  const categories = [
    {
      title: "Smart Irrigation Systems",
      icon: Zap,
      description: "Intelligent irrigation solutions for efficient water use.",
      products: [
        {
          name: "Automated Drip Systems",
          desc: "Smart drip irrigation with sensors and timers.",
          images: [ smart ],
        },
      {
          name: "Boom Irrigation Systems",
          desc: "Spray irrigation with boom arms.",
          images: [ boom11, boom2  ],
        },
      ],
    },
    {
      title: "Pipe & Fittings",
      icon: Settings,
      description: "Durable pipes and fittings for irrigation networks.",
      products: [
        {
          name: "PVC Irrigation Pipes",
          desc: "Flexible and durable PVC pipes for various applications.",
          images: [ pipe1, pipe2],
        },
      ],
    },
    {
      title: "Misting Systems",
      icon: Droplets,
      description: "Fine mist systems for humidity and cooling.",
      products: [
        {
          name: "High-Pressure Misters",
          desc: "Systems for creating fine mist in greenhouses.",
          images: [ misting1, misting2, misting3, misting4 ],
        },
      ],
    },
    {
      title: "Nozzles",
      icon: Target,
      description: "Precision nozzles for targeted watering.",
      products: [
        {
          name: "Sprinkler Nozzles",
          desc: "Adjustable nozzles for even water distribution.",
          images: [ nozzle1],
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
        <title>Irrigation | Agriculture | Kahf Greens</title>
        <meta
          name="description"
          content="Explore smart irrigation systems, pipes, fittings, misting solutions, and precision nozzles."
        />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Irrigation
            </h1>
            <p className="max-w-2xl mx-auto text-[#e8f5e9]">
              Efficient and sustainable irrigation solutions for modern agriculture.
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Irrigation;
