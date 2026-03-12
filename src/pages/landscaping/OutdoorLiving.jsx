import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import {
  ChevronLeft,
  Home,
  Fence,
  Armchair,
  X,
} from "lucide-react";

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

/* ---------------- IMAGES ---------------- */
const pergolaImages = [
  pergola,
  gazebo,
];

const panelImages = [
  fence1,
  fence2,
];

const seatingImages = [
  seating1,
  seating2,
  seating3,
  seating4,
  seating5,
  seating6,
  seating7,
];

const shadeImages = [
  shade1,
  shade2,
  shade4,
  shade5,
  shade6,
];

const OutdoorLiving = () => {
  const navigate = useNavigate();
  const heroImage = "https://images.unsplash.com/photo-1505691938895-1758d7feb511";

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
              Outdoor Living Solutions
          </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
            Transform your outdoor spaces into stylish, functional living areas.
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

export default OutdoorLiving;
