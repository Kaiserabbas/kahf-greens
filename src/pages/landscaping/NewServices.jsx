import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Recycle,
  Trees,
  Fence,
  X,
} from "lucide-react";

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


/* ---------------- IMAGES ---------------- */
const sustainabilityImages = [
  sustainable1,
  sustainable2,
  sustainable3,
];

const treePlantingImages = [
  tree1,
  tree2,
  tree3,
  tree5,
];

const grassInstallationImages = [
  grass1,
  grass2,
  grass3,
  grass4,
];

const lgreenWallImages = [
  wall4,
  wall1,
  wall5,
];

const agreenWallImages = [
  wall2,
  wall3,
  wall1,
];

const artificialPlantsImages = [
  artificial1,
  artificial2,
  artificial3,
  artificial4,
];

const NewServices = () => {
  const navigate = useNavigate();
  const heroImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80';

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
      name: "Sustainability Landscaping",
      icon: Recycle,
      images: sustainabilityImages,
      description:
        "Eco-friendly landscaping solutions that minimize environmental impact.",
      features: [
        "Native plant selection",
        "Water-efficient design",
        "Recycled materials",
        "Low maintenance solutions",
      ],
    },
    {
      name: "Tree Planting",
      icon: Trees,
      images: treePlantingImages,
      description:
        "Professional tree planting with species suitable for UAE climate.",
      features: [
        "Species selection",
        "Correct planting depth",
        "Root protection",
        "Growth monitoring",
      ],
    },
    {
      name: "Grass Installation",
      icon: Trees,
      images: grassInstallationImages,
      description:
        "High-quality grass installation with drought-resistant varieties.",
      features: [
        "Premium grass varieties",
        "Soil preparation",
        "Irrigation integration",
        "Aftercare guidance",
      ],
    },
    {
      name: "Living Green Walls",
      icon: Fence,
      images: lgreenWallImages,
      description:
        "Living green walls for cooling, aesthetics, and air purification.",
      features: [
        "Vertical systems",
        "Automated irrigation",
        "Plant health monitoring",
        "Custom design options",
      ],
    },
    {
      name: "Artificial Green walls",
      icon: Fence,
      images: agreenWallImages,
      description:
        "Artificial green walls for low-maintenance greenery and aesthetics.",
      features: [
        "UV-resistant materials",
        "Customizable designs",
        "Easy installation",
        "Durable and long-lasting",
      ],
    },
    {
      name: "Artificial Plants & Trees",
      icon: Trees,
      images: artificialPlantsImages,
      description:
        "Realistic artificial plants and trees for low maintenance greenery.",
      features: [
        "No watering or maintenance",
        "Life like feel",
        "Easy installation",
        "Durable and long-lasting",
        "Help bring nature feel indoors",
      ],
    }
  ];

  return (
    <>
      <Helmet>
        <title>New Installation Services | Kahf Greens</title>
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
              onClick={() => navigate('/landscaping')}
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
              New Installation Services
          </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
            Transform your outdoor space with sustainable, climate-smart
            installations.
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
                        <ChevronLeft
                          size={18}
                          className="rotate-180"
                        />
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
                  <ChevronLeft
                    size={48}
                    className="rotate-180"
                  />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      , document.body)
        }

      {/* ---------------- PROCESS SECTION ---------------- */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1a4d2e] mb-12">
            Our Installation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              ["01", "Consultation", "Site evaluation & client briefing"],
              ["02", "Design", "Custom sustainable design planning"],
              ["03", "Installation", "Professional execution"],
              ["04", "Maintenance", "Ongoing care guidance"],
            ].map(([step, title, desc]) => (
              <div key={step}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1a4d2e] text-white flex items-center justify-center text-xl font-bold">
                  {step}
                </div>
                <h3 className="font-bold text-[#1a4d2e] mb-2">
                  {title}
                </h3>
                <p className="text-[#2d5f3f]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-[#e8f5e9]">
            Let’s create a sustainable and beautiful outdoor environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
        </div>
      </section>
    </>
  );
};

export default NewServices;
