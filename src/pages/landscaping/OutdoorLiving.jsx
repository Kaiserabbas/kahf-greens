import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Home,
  Fence,
  Armchair,
  X,
} from "lucide-react";

/* ---------------- IMAGES ---------------- */
const pergolaImages = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
];

const panelImages = [
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1592928302636-17d6f30b3fa3",
];

const seatingImages = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
];

const shadeImages = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
];

const OutdoorLiving = () => {
  const navigate = useNavigate();

  /* ---------------- STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  /* ---------------- MODAL HELPERS ---------------- */
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
    setModalIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevModal = () => {
    setModalIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  };

  /* ---------------- SERVICES ---------------- */
  const services = [
    {
      name: "Pergola & Gazebo",
      icon: Home,
      images: pergolaImages,
      description:
        "Custom pergolas providing shade and elegance for UAE outdoor living and Beautiful gazebos creating comfortable outdoor rooms.",
      features: [
        "Custom designs",
        "Weather resistant",
        "Integrated lighting",
        "Privacy options",
      ],
    },
    {
      name: "Panels & Fencing",
      icon: Fence,
      images: panelImages,
      description:
        "Decorative panels for privacy and visual enhancement and High-quality fencing for security and property definition.",
      features: [
        "Various designs",
        "Privacy enhancement",
        "Wind protection",
        "Noise reduction",
      ],
    },
    {
      name: "Seating Areas",
      icon: Armchair,
      images: seatingImages,
      description:
        "Comfortable outdoor seating for relaxation and gatherings.",
      features: [
        "Weather resistant",
        "Custom layouts",
        "Comfort focused",
        "Integrated features",
      ],
    },
    {
      name: "Shade Structure",
      icon: Home,
      images: shadeImages,
      description:
        "Modern shade structures protecting from UAE sun.",
      features: [
        "UV protection",
        "Modern designs",
        "Easy installation",
        "Low maintenance",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Outdoor Living Solutions | Kahf Greens</title>
      </Helmet>

      {/* ---------------- HERO ---------------- */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white">
        <Button
          onClick={() => navigate("/landscaping")}
          variant="outline"
          className="ml-4 px-4 border-gray-300 text-white hover:bg-gray-300 hover:text-[#1a4d2e]"
        >
          <ChevronLeft size={16} className="mr-2" />
        </Button>

        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Outdoor Living Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-[#e8f5e9]">
            Transform your outdoor spaces into stylish, functional living areas.
          </p>
        </div>
      </section>

      {/* ---------------- SERVICES GRID ---------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const activeIndex = carouselIndex[service.name] ?? 0;

            return (
              <motion.div
                key={service.name}
                whileHover={{ y: -5 }}
                className="bg-[#f1f8e9] rounded-xl overflow-hidden shadow"
              >
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.images[activeIndex]}
                    alt={service.name}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() =>
                      openModal(service.images, activeIndex)
                    }
                  />

                  {service.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCarouselIndex((prev) => ({
                            ...prev,
                            [service.name]:
                              activeIndex === 0
                                ? service.images.length - 1
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
                            [service.name]:
                              (activeIndex + 1) %
                              service.images.length,
                          }));
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
                      >
                        <ChevronLeft size={18} className="rotate-180" />
                      </button>
                    </>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#1a4d2e] p-3 rounded-full">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#2d5f3f] mb-4">
                    {service.description}
                  </p>

                  <ul className="text-sm text-left space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center">
                        <span className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ---------------- IMAGE MODAL ---------------- */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white"
            >
              <X size={36} />
            </button>

            <motion.img
              key={modalIndex}
              src={modalImages[modalIndex]}
              alt="Fullscreen"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
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
                  <ChevronLeft size={48} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextModal();
                  }}
                  className="absolute right-6 text-white"
                >
                  <ChevronLeft size={48} className="rotate-180" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- DESIGN PROCESS ---------------- */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Our Design Process
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              We create outdoor living spaces that perfectly fit your lifestyle and property.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Understanding your lifestyle, preferences, and how you want to use your outdoor space.",
              },
              {
                step: "02",
                title: "Site Analysis",
                description:
                  "Evaluating your property layout, sun exposure, wind patterns, and existing features.",
              },
              {
                step: "03",
                title: "Design Concept",
                description:
                  "Creating detailed plans that balance functionality, aesthetics, and UAE climate considerations.",
              },
              {
                step: "04",
                title: "Implementation",
                description:
                  "Professional installation ensuring perfect execution of your outdoor living vision.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-[#1a4d2e] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-4">{item.title}</h3>
                <p className="text-[#2d5f3f]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MATERIALS / PREMIUM ---------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Premium Materials
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              We use only the finest materials to ensure your outdoor living spaces withstand the UAE climate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hardwood",
                description:
                  "Premium hardwood materials that are naturally resistant to UAE weather conditions.",
                benefits: ["Natural beauty", "Weather resistant", "Long lasting", "Sustainable sourcing"],
              },
              {
                title: "Aluminum",
                description:
                  "Lightweight aluminum structures that provide strength without corrosion concerns.",
                benefits: ["Corrosion resistant", "Low maintenance", "Modern look", "Durable finish"],
              },
              {
                title: "Composite Materials",
                description:
                  "Advanced composite materials that combine beauty with exceptional durability.",
                benefits: ["Weather proof", "Low maintenance", "Realistic wood look", "Long lifespan"],
              },
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#f1f8e9] p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-4">{material.title}</h3>
                <p className="text-[#2d5f3f] mb-6">{material.description}</p>
                <ul className="space-y-2">
                  {material.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-[#2d5f3f]">
                      <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]" />
        <div className="absolute inset-0 opacity-10">
          <img
            alt="Beautiful outdoor living space"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Create Your Dream Outdoor Space
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
              Transform your outdoor area into a comfortable extension of your home, perfectly suited for UAE living.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                className="bg-white hover:bg-[#f5f5f5] text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Button>

              <Button
                onClick={() => navigate("/landscaping")}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300"
              >
                <ChevronLeft size={20} className="mr-2" />
                Back to Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OutdoorLiving;
