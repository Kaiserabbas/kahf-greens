import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Globe,
  Leaf,
} from "lucide-react";

const Landscaping = () => {
  const navigate = useNavigate();
  const [currentSlides, setCurrentSlides] = useState(() => new Array(6).fill(0));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      category: "MAINTENANCE",
      path: "/landscaping/maintenance",
      items: [
        { name: "Garden Care", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", path: "/landscaping/maintenance" },
        { name: "Shrubs Trimming", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800", path: "/landscaping/maintenance" },
        { name: "Lawn Mowing", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800", path: "/landscaping/maintenance" },
        { name: "Indoor Plant Care", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", path: "/landscaping/maintenance" },
        { name: "Turf Care", image: "https://images.unsplash.com/photo-1622297849-2f6e8b0d0e3d?w=800", path: "/landscaping/maintenance" },
      ],
    },
    {
      category: "NEW SERVICES",
      path: "/landscaping/new-services",
      items: [
        { name: "Sustainable Landscaping", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", path: "/landscaping/new-services" },
        { name: "Tree Planting", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", path: "/landscaping/new-services" },
        { name: "Turf Installation", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800", path: "/landscaping/new-services" },
        { name: "Green Walls", image: "https://images.unsplash.com/photo-1570545887596-2a6a3c0a0c0d?w=800", path: "/landscaping/new-services" },
      ],
    },
    {
      category: "SYSTEMS",
      path: "/landscaping/systems",
      items: [
        { name: "Smart Irrigation", image: "https://images.unsplash.com/photo-1622297849-2f6e8b0d0e3d?w=800", path: "/landscaping/systems" },
        { name: "Landscape Lighting", image: "https://images.unsplash.com/photo-1600565198428-4e2a7d0e6d4e?w=800", path: "/landscaping/systems" },
      ],
    },
    {
      category: "OUTDOOR LIVING",
      path: "/landscaping/outdoor-living",
      items: [
        { name: "Pergola", image: "https://images.unsplash.com/photo-1600565198428-4e2a7d0e6d4e?w=800", path: "/landscaping/outdoor-living" },
        { name: "Gazebo", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800", path: "/landscaping/outdoor-living" },
        { name: "Fencing & Panels", image: "https://images.unsplash.com/photo-1622297849-2f6e8b0d0e3d?w=800", path: "/landscaping/outdoor-living" },
        { name: "Seating Areas", image: "https://images.unsplash.com/photo-1600565198428-4e2a7d0e6d4e?w=800", path: "/landscaping/outdoor-living" },
        { name: "Shade Structures", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800", path: "/landscaping/outdoor-living" },
      ],
    },
    {
      category: "PLANTERS",
      path: "/landscaping/planters",
      items: [
        { name: "Indoor Planters", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", path: "/landscaping/planters" },
        { name: "Outdoor Planters", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800", path: "/landscaping/planters" },
        { name: "Street & Urban", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800", path: "/landscaping/planters" },
        { name: "Urban Dividers", image: "https://images.unsplash.com/photo-1570545887596-2a6a3c0a0c0d?w=800", path: "/landscaping/planters" },
      ],
    },
    {
      category: "WATER SAVING",
      path: "/landscaping/water-saving",
      items: [
        { name: "Super Absorbents", image: "https://images.unsplash.com/photo-1622297849-2f6e8b0d0e3d?w=800", path: "/landscaping/water-saving" },
        { name: "Soil Granules", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800", path: "/landscaping/water-saving" },
      ],
    },
  ];

  const cardWidth = 280; // width of card + gap
  const visibleCards = isMobile ? 1 : 4;

  const nextSlide = (serviceIndex) => {
    if (serviceIndex < 0 || serviceIndex >= services.length) return;

    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      const items = services[serviceIndex]?.items || [];
      const max = Math.max(0, items.length - visibleCards);
      newSlides[serviceIndex] = Math.min(newSlides[serviceIndex] + 1, max);
      return newSlides;
    });
  };

  const prevSlide = (serviceIndex) => {
    if (serviceIndex < 0 || serviceIndex >= services.length) return;

    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[serviceIndex] = Math.max(newSlides[serviceIndex] - 1, 0);
      return newSlides;
    });
  };

  return (
    <>
      <Helmet>
        <title>Landscaping Solutions | Kahf Greens – UAE Premium Services</title>
        <meta
          name="description"
          content="Discover Kahf Greens' comprehensive landscaping services: maintenance, new installations, smart systems, outdoor living, planters & water-saving solutions for UAE homes & businesses."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            alt="Luxury sustainable landscaping in UAE"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-5 md:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Premium Landscaping Solutions
          </motion.h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto font-light">
            Transforming UAE outdoor spaces with sustainable design, expert maintenance, and innovative systems — built to thrive in our climate.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 mb-6">
              Why Choose Kahf Greens
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Over 20 years of excellence in creating sustainable, beautiful landscapes that last in the UAE environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { icon: Award, title: "Excellence in Craftsmanship", desc: "Meticulous attention to detail in every project." },
              { icon: Users, title: "Client-Focused Service", desc: "Tailored solutions that reflect your vision." },
              { icon: Globe, title: "Sustainable Commitment", desc: "Eco-conscious practices for a greener tomorrow." },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 text-center border border-emerald-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400"
                >
                  <div className="inline-flex p-5 bg-emerald-100/50 rounded-2xl mb-6">
                    <Icon size={44} className="text-emerald-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services – Slider Sections */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 mb-6">
              Our Landscaping Services
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Comprehensive, climate-adapted solutions from daily care to complete outdoor transformations.
            </p>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3
                  className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 cursor-pointer hover:text-emerald-700 transition-colors"
                  onClick={() => service.path && navigate(service.path)}
                >
                  {service.category}
                </h3>

                <div className="relative">
                  <motion.div
                    className="flex gap-6"
                    animate={{ x: -currentSlides[index] * cardWidth }}
                    transition={{ type: "spring", stiffness: 300, damping: 35 }}
                  >
                    {service.items.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.04, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        onClick={() => item.path && navigate(item.path)}
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <p className="text-white text-lg font-semibold drop-shadow-md">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {service.items.length > visibleCards && (
                    <>
                      <button
                        onClick={() => prevSlide(index)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/95 hover:bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-10"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft size={28} className="text-emerald-800" />
                      </button>
                      <button
                        onClick={() => nextSlide(index)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/95 hover:bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-10"
                        aria-label="Next slide"
                      >
                        <ChevronRight size={28} className="text-emerald-800" />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            alt="Lush sustainable landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Create Your Perfect Outdoor Space?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-emerald-100">
              Contact our team today for a consultation — bring your vision to life with sustainable, premium landscaping.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-white text-emerald-950 hover:bg-emerald-50 px-10 py-7 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Landscaping;