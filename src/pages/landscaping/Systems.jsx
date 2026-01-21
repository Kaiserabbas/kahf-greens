import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Droplets, Lightbulb, X } from "lucide-react";

/* ---------------- IMAGE ARRAYS FOR CAROUSEL ---------------- */
const smartIrrigationImages = [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
  "https://images.unsplash.com/photo-1602526217931-2e23284e0b8a",
];

const landscapeLightingImages = [
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
  "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee",
];

const Systems = () => {
  const navigate = useNavigate();

  /* ---------------- STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  /* ---------------- MODAL HANDLERS ---------------- */
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

  /* ---------------- SYSTEM SERVICES ---------------- */
  const services = [
    {
      name: "Smart Irrigation",
      icon: Droplets,
      images: smartIrrigationImages,
      description:
        "Advanced irrigation systems that deliver water efficiently while adapting to weather conditions and plant needs.",
      features: [
        "Weather-based scheduling",
        "Soil moisture sensors",
        "Mobile app control",
        "Water conservation",
        "Leak detection",
      ],
    },
    {
      name: "Landscape Lighting",
      icon: Lightbulb,
      images: landscapeLightingImages,
      description:
        "Professional landscape lighting design and installation to enhance your property's beauty and security after dark.",
      features: [
        "Energy-efficient LED lights",
        "Custom design planning",
        "Automated controls",
        "Safety and security",
        "Mood enhancement",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Landscape Systems | Kahf Greens</title>
      </Helmet>

      {/* ---------------- HERO ---------------- */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white relative">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => navigate("/landscaping")}
            variant="outline"
            className="mb-6 border-gray-300 text-white hover:bg-gray-300 hover:text-[#1a4d2e]"
          >
            <ChevronLeft size={16} className="mr-2" />
            Back
          </Button>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Landscape Systems
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#e8f5e9]">
              Smart, efficient systems that enhance your landscape's functionality, beauty, and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- SYSTEM SERVICES GRID WITH CAROUSEL ---------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    onClick={() => openModal(service.images, activeIndex)}
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
                              (activeIndex + 1) % service.images.length,
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
                  <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">{service.name}</h3>
                  <p className="text-sm text-[#2d5f3f] mb-4">{service.description}</p>
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
            <button onClick={closeModal} className="absolute top-6 right-6 text-white">
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
                <button onClick={(e) => { e.stopPropagation(); prevModal(); }} className="absolute left-6 text-white">
                  <ChevronLeft size={48} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); nextModal(); }} className="absolute right-6 text-white">
                  <ChevronLeft size={48} className="rotate-180" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- BENEFITS ---------------- */}
      <section className="py-20 bg-[#f1f8e9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">System Benefits</h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Discover how our landscape systems can transform your property.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Water Conservation", desc: "Reduce water usage by up to 50% with smart irrigation systems.", icon: "💧" },
              { title: "Energy Efficiency", desc: "LED lighting systems consume minimal energy while illuminating your landscape.", icon: "⚡" },
              { title: "Remote Control", desc: "Monitor and control systems from anywhere with mobile apps.", icon: "📱" },
              { title: "Enhanced Security", desc: "Well-lit landscapes deter intruders and improve safety.", icon: "🔒" },
              { title: "Increased Property Value", desc: "Professional systems add value to your property.", icon: "📈" },
              { title: "Low Maintenance", desc: "Automated systems reduce manual maintenance.", icon: "🤖" },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-4">{b.title}</h3>
                <p className="text-[#2d5f3f]">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TECHNOLOGY ---------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="text-4xl font-bold text-[#1a4d2e]">Advanced Technology</h2>
            <p className="text-[#2d5f3f] leading-relaxed">
              We use the latest technology to ensure optimal performance and efficiency.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-[#2d5f3f]">
                <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                Weather-based scheduling
              </li>
              <li className="flex items-center text-[#2d5f3f]">
                <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                Real-time adjustments
              </li>
              <li className="flex items-center text-[#2d5f3f]">
                <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                Mobile app control
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img
              alt="Smart irrigation system"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]" />
        <div className="absolute inset-0 opacity-10">
          <img
            alt="Technology background"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Upgrade Your Landscape
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
            Discover how smart systems can enhance your property's functionality and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-white hover:bg-[#f5f5f5] text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
            >
              Get System Quote
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
        </div>
      </section>
    </>
  );
};

export default Systems;
