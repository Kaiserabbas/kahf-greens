import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Award, Users, Globe, Leaf, PencilRuler, Flower2, Droplets, Zap, Home, Trees, Fence, Scissors, Lightbulb, Armchair, Container, Recycle } from "lucide-react";

const Landscaping = () => {
  const navigate = useNavigate();
  const [currentSlides, setCurrentSlides] = useState(() => new Array(6).fill(0));
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      category: "MAINTENANCE",
      path: "/landscaping/maintenance",
      items: [
        { name: "Garden Care", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop", path: "/landscaping/maintenance" },
        { name: "Shrubs Trimming", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/maintenance" },
        { name: "Lawn Mowing", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/maintenance" },
        { name: "Indoor Plant Care", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop", path: "/landscaping/maintenance" },
        { name: "Turf Care", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/maintenance" }
      ]
    },
    {
      category: "NEW",
      path: "/landscaping/new-services",
      items: [
        { name: "Sustainability Landscaping", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/new-services" },
        { name: "Tree Planting", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", path: "/landscaping/new-services" },
        { name: "Grass", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/new-services" },
        { name: "Green Walls", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/new-services" }
      ]
    },
    {
      category: "SYSTEMS",
      path: "/landscaping/systems",
      items: [
        { name: "Smart Irrigation", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/systems" },
        { name: "Landscape Lighting", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/systems" }
      ]
    },
    {
      category: "OUTDOOR LIVING",
      path: "/landscaping/outdoor-living",
      items: [
        { name: "Pergola", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop", path: "/landscaping/outdoor-living" },
        { name: "Gazebo", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop", path: "/landscaping/outdoor-living" },
        { name: "Panel", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/outdoor-living" },
        { name: "Fencing", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/outdoor-living" },
        { name: "Seating Areas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop", path: "/landscaping/outdoor-living" },
        { name: "Shade Structure", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop", path: "/landscaping/outdoor-living" }
      ]
    },
    {
      category: "PLANTERS",
      path: "/landscaping/planters",
      items: [
        { name: "Indoor", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop", path: "/landscaping/planters" },
        { name: "Outdoor", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/planters" },
        { name: "Street", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/planters" },
        { name: "Urban Dividers", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/planters" }
      ]
    },
    {
      category: "WATER SAVING",
      path: "/landscaping/water-saving",
      items: [
        { name: "Super Textiles", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/water-saving" },
        { name: "Granules", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/landscaping/water-saving" }
      ]
    }
  ];

  const cardWidth = 280; // Approximate width including gap
  const visibleCards = isMobile ? 1 : 4;

  const nextSlide = (serviceIndex) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      const maxSlide = Math.max(0, services[serviceIndex].items.length - visibleCards);
      newSlides[serviceIndex] = Math.min(newSlides[serviceIndex] + 1, maxSlide);
      return newSlides;
    });
  };

  const prevSlide = (serviceIndex) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[serviceIndex] = Math.max(newSlides[serviceIndex] - 1, 0);
      return newSlides;
    });
  };

  return (
    <>
      <Helmet>
        <title>Landscaping Solutions | Kahf Greens</title>
      </Helmet>

      {/* WHY - Why We Do */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Why We Do What We Do
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-3xl mx-auto">
              At Kahf Greens, we're passionate about creating sustainable, beautiful landscapes that enhance lives and protect our environment. With over 20 years of experience in the UAE, we combine traditional expertise with modern innovation to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence in Craftsmanship",
                description: "Every project reflects our commitment to quality and attention to detail."
              },
              {
                icon: Users,
                title: "Client-Centric Approach",
                description: "We listen, understand, and deliver solutions tailored to your unique needs."
              },
              {
                icon: Globe,
                title: "Sustainable Practices",
                description: "Environmental responsibility is at the heart of everything we do."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#1a4d2e] p-4 rounded-full">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a4d2e] mb-4">{item.title}</h3>
                  <p className="text-[#2d5f3f]">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO - Who Are We, About */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e]">
                Who We Are
              </h2>
              <p className="text-lg text-[#2d5f3f] leading-relaxed">
                Kahf Greens is the UAE's trusted partner in sustainable landscaping, with over two decades of experience transforming outdoor spaces. From humble beginnings to becoming industry leaders, we've dedicated ourselves to creating green, beautiful environments that enhance quality of life.
              </p>
              <p className="text-lg text-[#2d5f3f] leading-relaxed">
                Our team of experts combines traditional landscaping knowledge with modern sustainable practices, ensuring every project not only looks beautiful but also contributes to environmental conservation and water efficiency in the challenging UAE climate.
              </p>
              <Button
                onClick={() => navigate("/about")}
                className="bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white"
              >
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                alt="Kahf Greens team and facilities"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1572177812156-58036aae439c"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT - Products and Services */}
      <section className="py-20 bg-[#f5f5f5] overflow-x-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Comprehensive landscaping solutions tailored for the UAE climate and your specific needs.
            </p>
          </motion.div>

          <div>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-lg p-8 md:p-8"
              >
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-8 text-left ${
                    service.path ? 'text-[#1a4d2e] hover:text-[#2d5f3f] cursor-pointer transition-colors duration-300' : 'text-[#1a4d2e]'
                  }`}
                  onClick={() => service.path && navigate(service.path)}
                >
                  {service.category}
                </h3>

                <div className="relative overflow-x-hidden">
                  <motion.div
                    className="flex gap-6 justify-start"
                    animate={{ x: -currentSlides[index] * 280 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {service.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                        className="flex-shrink-0 w-64 h-48 relative bg-cover bg-center rounded-xl cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        style={{ backgroundImage: `url(${item.image})` }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => item.path && navigate(item.path)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                        <span className="absolute bottom-0 left-0 right-0 text-white text-sm font-medium text-center py-3 px-2">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Navigation arrows */}
                  {service.items.length > visibleCards && (
                    <>
                      <button
                        onClick={() => prevSlide(index)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a4d2e] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <ChevronLeft size={25} />
                      </button>
                      <button
                        onClick={() => nextSlide(index)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a4d2e] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <ChevronRight size={25} />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Our Work
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Discover our portfolio of transformative landscaping projects across the UAE.
            </p>
          </motion.div>

          <div className="relative">
            <img
              alt="Featured landscaping project"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e] to-transparent rounded-lg"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <Button
                onClick={() => navigate("/landscaping/projects")}
                className="bg-white hover:bg-[#f5f5f5] text-[#1a4d2e] font-semibold"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PARTNERS & CLIENTS */}
      <section className="py-20 bg-[#f1f8e9]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Our Partners & Clients
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Trusted by leading organizations and individuals across the UAE.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Dubai Municipality",
              "Sharjah Government",
              "Leading Hotels",
              "Private Estates",
              "Commercial Developers",
              "Educational Institutions",
              "Healthcare Facilities",
              "Sports Complexes"
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <h4 className="font-semibold text-[#1a4d2e]">{partner}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]"></div>
        <div className="absolute inset-0 opacity-10">
          <img alt="Green landscape background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1689450150136-08823406524e" />
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
              Let's discuss your landscaping vision and create something extraordinary together. Our experts are ready to bring your ideas to life with sustainable, beautiful solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  onClick={() => navigate('/contact')}
                  size="lg"
                  className="bg-white hover:bg-[#f5f5f5] text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Landscaping;
