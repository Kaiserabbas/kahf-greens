import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Leaf, Scissors, Home, X } from "lucide-react";
import { createPortal } from "react-dom";

import garden1 from "../../assets/Landscaping/Maintenance/Garden 1.jpg";
import garden2 from "../../assets/Landscaping/Maintenance/Garden 2.jpg";
import garden3 from "../../assets/Landscaping/Maintenance/Garden 3.jpg";
import garden4 from "../../assets/Landscaping/Maintenance/Garden 4.jpg";
import garden5 from "../../assets/Landscaping/Maintenance/Garden 5.jpg";
import garden6 from "../../assets/Landscaping/Maintenance/Garden 6.jpg";
import indoor1 from "../../assets/Landscaping/Maintenance/indoor 1.jpg";
import indoor2 from "../../assets/Landscaping/Maintenance/indoor 2.png";
import shrubs1 from "../../assets/Landscaping/Maintenance/shrubs 1.webp";
import turf1 from "../../assets/Landscaping/Maintenance/turf 1.webp";
import lawn1 from "../../assets/Landscaping/Maintenance/lawn 1.jpg";

/* ---------------- IMAGES ---------------- */
const gardenCareImages = [
  garden1,
  garden2,
  garden3,
  garden4,
  garden5,
  garden6,
];
const shrubsTrimmingImages = [
  shrubs1,
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
];
const lawnMowingImages = [
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
];
const indoorPlantCareImages = [
  indoor1,
  indoor2,
];
const turfCareImages = [
  turf1,
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
];

const Maintenance = () => {
  const navigate = useNavigate();
  const heroImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80";

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
      name: "Garden Care",
      icon: Leaf,
      images: gardenCareImages,
      description:
        "Comprehensive garden maintenance including pruning and seasonal care.",
      features: ["Weekly visits", "Seasonal planting", "Pest control"],
    },
    {
      name: "Shrubs Trimming",
      icon: Scissors,
      images: shrubsTrimmingImages,
      description:
        "Professional shrub trimming for healthy growth and aesthetics.",
      features: ["Seasonal trimming", "Disease prevention"],
    },
    {
      name: "Indoor Plant Care",
      icon: Home,
      images: indoorPlantCareImages,
      description:
        "Expert indoor plant care including watering and repotting.",
      features: ["Watering schedules", "Nutrient care"],
    },
    {
      name: "Turf Care",
      icon: Leaf,
      images: turfCareImages,
      description:
        "Specialized turf fertilization, aeration, and disease control.",
      features: ["Fertilization", "Aeration", "Weed control", "mowing & Edge trimming"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Maintenance Services | Kahf Greens</title>
      </Helmet>

      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-emerald-900 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Planter pots"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/agriculture')}
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
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
             Maintenance Services</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
            Professional landscape maintenance programs designed for UAE climate.
          </p>
        </ motion.div>
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
      {createPortal(
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white z-50"
            >
              <X size={36} />
            </button>

            {/* Image */}
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

            {/* Arrows */}
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
      , document.body)
    }

          {/* Why Choose Us */}
      <section className="py-20 bg-[#f1f8e9]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Why Choose Our Maintenance Services?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our certified professionals have over 20 years of experience in landscape maintenance."
              },
              {
                title: "Customized Programs",
                description: "Tailored maintenance schedules based on your specific landscape needs and UAE climate conditions."
              },
              {
                title: "Quality Guarantee",
                description: "We stand behind our work with comprehensive service guarantees and satisfaction assurance."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-4">{item.title}</h3>
                <p className="text-[#2d5f3f]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* ---------------- CTA SECTION ---------------- */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]" />

        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
            alt="Landscape background"
            className="w-full h-full object-cover"
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
              Ready to Maintain Your Landscape?
            </h2>

            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
              Contact us today to discuss your maintenance needs and receive a
              customized service plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                className="bg-white hover:bg-[#f5f5f5] text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Button>

              <Button
                onClick={() => navigate("/landscaping")}
                variant="outline"
                size="lg"
                className="bg-white hover:bg-[#f5f5f5] text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
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

export default Maintenance;
