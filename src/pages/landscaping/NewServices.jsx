import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Recycle,
  Trees,
  Fence,
  X,
} from "lucide-react";

/* ---------------- IMAGES ---------------- */
const sustainabilityImages = [
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
];

const treePlantingImages = [
  "https://images.unsplash.com/photo-1589923188900-85dae523342b",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
];

const grassInstallationImages = [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
];

const greenWallImages = [
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
];

const NewServices = () => {
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
      name: "Green Walls",
      icon: Fence,
      images: greenWallImages,
      description:
        "Living green walls for cooling, aesthetics, and air purification.",
      features: [
        "Vertical systems",
        "Automated irrigation",
        "Plant health monitoring",
        "Custom design options",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>New Installation Services | Kahf Greens</title>
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
            New Installation Services
          </h1>
          <p className="max-w-3xl mx-auto text-[#e8f5e9]">
            Transform your outdoor space with sustainable, climate-smart
            installations.
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
              className="bg-white text-[#1a4d2e] hover:bg-gray-100"
            >
              Start Your Project
            </Button>

            <Button
              onClick={() => navigate("/landscaping")}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1a4d2e]"
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
