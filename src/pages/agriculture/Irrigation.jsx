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
  ShieldCheck,
  Leaf,
} from "lucide-react";
import { createPortal } from "react-dom";

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
  const heroImage = boom2;

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
        <div className="absolute top-4 left-4 z-20 md:hidden">
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
            Irrigation
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              Efficient and sustainable irrigation solutions for modern agriculture.
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
                Why Partner with Kahf Greens for Your Irrigation Needs?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light">
                Precision-engineered, reliable irrigation systems built for the UAE climate, delivering efficiency, durability, and maximum crop performance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Settings,
                  title: "Fully Tailored Solutions",
                  desc: "Every irrigation system is customized to match your exact crop type, soil conditions, farm size, and water availability, no one-size-fits-all compromises.",
                },
                {
                  icon: ShieldCheck,
                  title: "Premium European Reliability",
                  desc: "High-quality components sourced directly from trusted European manufacturers, built to perform consistently under extreme heat, dust, and salinity.",
                },
                {
                  icon: Leaf,
                  title: "Proven Across All Crops",
                  desc: "Tried-and-tested performance on vegetables, fruits, date palms, ornamentals, and field crops, optimized for yield, water savings, and long-term root health.",
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

            {/* Optional trust closer */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center mt-12 text-lg text-emerald-700 font-medium"
            >
              Join the UAE growers who rely on Kahf Greens for irrigation systems that save water, reduce costs, and boost yields.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ---------------- FULLSCREEN MODAL ---------------- */}
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
        , document.body) }
    </div>
  );
};

export default Irrigation;
