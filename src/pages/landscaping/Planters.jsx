import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { ChevronLeft, Container, Fence, X } from "lucide-react";

import divider1 from "../../assets/Landscaping/planters/dividers 1.jpg";
import divider2 from "../../assets/Landscaping/planters/dividers 2.png";
import divider3 from "../../assets/Landscaping/planters/dividers 3.jpg";
import divider4 from "../../assets/Landscaping/planters/dividers 4.jpg";
import outdoor1 from "../../assets/Landscaping/planters/outdoor 1.jpg";
import outdoor2 from "../../assets/Landscaping/planters/outdoor 2.avif";
import outdoor3 from "../../assets/Landscaping/planters/outdoor 3.jpg";
import outdoor4 from "../../assets/Landscaping/planters/outdoor 4.jpg";
import outdoor5 from "../../assets/Landscaping/planters/outdoor 5.jpg";
import outdoor6 from "../../assets/Landscaping/planters/outdoor 6.jpg";
import planterseat1 from "../../assets/Landscaping/planters/planterseat 1.jpg";
import planterseat2 from "../../assets/Landscaping/planters/planterseat 2.jpg";
import planterseat3 from "../../assets/Landscaping/planters/planterseat 3.jpg";
import planterseat4 from "../../assets/Landscaping/planters/planterseat 4.jpg";
import planterseat5 from "../../assets/Landscaping/planters/planterseat 5.jpg";
import planterseat6 from "../../assets/Landscaping/planters/planterseat 6.jpg";
import street1 from "../../assets/Landscaping/planters/street 1.jpg";
import street2 from "../../assets/Landscaping/planters/street 2.jpg";
import street3 from "../../assets/Landscaping/planters/street 3.jpg";
import street4 from "../../assets/Landscaping/planters/street 4.jpg";
import street5 from "../../assets/Landscaping/planters/street 5.jpg";
import indoor1 from "../../assets/Landscaping/planters/indoor 1.jpg";
import indoor2 from "../../assets/Landscaping/planters/indoor 2.jpg";
import indoor3 from "../../assets/Landscaping/planters/indoor 3.jpg";
import indoor4 from "../../assets/Landscaping/planters/indoor 4.jpg";
import indoor5 from "../../assets/Landscaping/planters/indoor 5.jpg";

/* ---------------- IMAGE ARRAYS FOR CAROUSEL ---------------- */
const indoorImages = [
  indoor1,
  indoor2,
  indoor3,
  indoor4,
  indoor5
];

const outdoorImages = [
  outdoor1,
  outdoor2,
  outdoor3,
  outdoor4,
  outdoor5,
  outdoor6
];

const streetImages = [
  street1,
  street2,
  street3,
  street4,
  street5
];

const urbanImages = [
  divider2,
  divider1,
  divider3,
  divider4
];

const planterseat = [
  planterseat5,
  planterseat1,
  planterseat2,
  planterseat3,
  planterseat4,
  planterseat6
];



const Planters = () => {
  const navigate = useNavigate();
  const heroImage = "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae";

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
    {
      name: "Planter with Seating",
      icon: Container,
      images: planterseat,
      description:
        "Innovative planters that double as seating, perfect for parks and public spaces.",
      features: ["Dual functionality", "Durable materials", "Comfortable design", "Aesthetic appeal"],
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planters & Containers | Kahf Greens</title>
      </Helmet>

      {/* ---------------- HERO ---------------- */}
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
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/landscaping')}
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
              Planters & Containers
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
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
      { createPortal(
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
      , document.body)
      }

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
              {
                title: "Resin",
                description: "Versatile resin planters that offer a wide range of colors and styles.",
                benefits: ["Color variety", "Lightweight", "Easy to maintain", "Affordable"],
              },
              {
                title: "Stone",
                description: "Elegant stone planters that add a touch of sophistication to any space.",
                benefits: ["Timeless appeal", "Durable", "Low maintenance", "Natural look"],
              }
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

export default Planters;
