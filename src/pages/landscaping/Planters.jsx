import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Container, Fence, X } from "lucide-react";

/* ---------------- IMAGE ARRAYS FOR CAROUSEL ---------------- */
const indoorImages = [
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
  "https://images.unsplash.com/photo-1560185127-6f3ff4aa6c7e",
];

const outdoorImages = [
  "https://images.unsplash.com/photo-1592928302636-17d6f30b3fa3",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
];

const streetImages = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
];

const urbanImages = [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
];

const Planters = () => {
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

  /* ---------------- SERVICES ---------------- */
  const services = [
    {
      name: "Indoor Planters",
      icon: Container,
      images: indoorImages,
      description:
        "Beautiful indoor planters designed to enhance your interior spaces with healthy, thriving plants.",
      features: [
        "Custom sizes",
        "Drainage systems",
        "Attractive designs",
        "Plant health optimization",
      ],
    },
    {
      name: "Outdoor Planters",
      icon: Container,
      images: outdoorImages,
      description:
        "Durable outdoor planters that withstand UAE weather while adding beauty to your landscape.",
      features: ["Weather resistant", "UV protection", "Proper drainage", "Root protection"],
    },
    {
      name: "Street Planters",
      icon: Container,
      images: streetImages,
      description:
        "Commercial-grade planters for streets, walkways, and public spaces with maximum durability.",
      features: ["Heavy-duty construction", "Vandal resistant", "Easy maintenance", "Traffic safe"],
    },
    {
      name: "Urban Dividers",
      icon: Fence,
      images: urbanImages,
      description:
        "Living green walls and dividers providing privacy and noise reduction in urban environments.",
      features: ["Sound absorption", "Privacy screening", "Air purification", "Space definition"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Planters & Containers | Kahf Greens</title>
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
              Planters & Containers
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#e8f5e9]">
              Premium planters and containers designed for the UAE climate, combining functionality with aesthetic appeal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- SERVICES GRID WITH CAROUSEL ---------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
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

      {/* ---------------- MATERIALS ---------------- */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">Premium Materials</h2>
          <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
            We use only the highest quality materials to ensure longevity and beauty in the harsh UAE climate.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Fiberglass",
                description: "Lightweight, durable fiberglass planters that resist cracking and fading.",
                benefits: ["UV resistant", "Crack resistant", "Lightweight", "Custom colors"],
              },
              {
                title: "Concrete",
                description: "Heavy-duty concrete planters perfect for large installations and high-traffic areas.",
                benefits: ["Extremely durable", "Weather resistant", "Heavy weight stability", "Cost effective"],
              },
              {
                title: "Metal",
                description: "Stainless steel and aluminum planters offering modern aesthetics and superior strength.",
                benefits: ["Corrosion resistant", "Modern look", "High strength", "Low maintenance"],
              },
            ].map((material) => (
              <div key={material.title} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-4">{material.title}</h3>
                <p className="text-[#2d5f3f] mb-6">{material.description}</p>
                <ul className="space-y-2 text-sm text-[#2d5f3f]">
                  {material.benefits.map((b) => (
                    <li key={b} className="flex items-center">
                      <span className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CUSTOM DESIGN ---------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d2e]">Custom Design Services</h2>
            <p className="text-lg text-[#2d5f3f] leading-relaxed">
              We provide completely customized planter solutions that match your space and aesthetic.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img
              alt="Custom planter design"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]" />
        <div className="absolute inset-0 opacity-10">
          <img
            alt="Beautiful planters"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Elevate Your Space with Planters
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
            Discover how the right planters can transform your indoor or outdoor environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-white hover:bg-[#f5f5f5] text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
            >
              Get Planter Quote
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

export default Planters;
