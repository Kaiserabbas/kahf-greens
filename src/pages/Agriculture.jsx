import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Award, Users, Globe, Sprout, TreeDeciduous, Droplets, Leaf, PencilRuler, Flower2, Zap, Home, Trees, Fence, Scissors, Lightbulb, Armchair, Container, Recycle } from "lucide-react";
import AutoSlider from "../components/AutoSlider";

const Agriculture = () => {
  const navigate = useNavigate();
  const [currentSlides, setCurrentSlides] = useState(() => new Array(7).fill(0));
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
      category: "PLANTER POTS",
      path: "/agriculture/planter-pots",
      items: [
        { name: "Outdoor Growing", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop", path: "/agriculture/planter-pots" },
        { name: "Vertical Farming", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/planter-pots" },
        { name: "Fruit Growing", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/planter-pots" },
        { name: "Large Trees", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/planter-pots" }
      ]
    },
    {
      category: "PLANTER BAGS",
      path: "/agriculture/planter-bags",
      items: [
        { name: "Woven", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop", path: "/agriculture/planter-bags" },
        { name: "Non-Woven", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/planter-bags" }
      ]
    },
    {
      category: "GREENHOUSES",
      path: "/agriculture/green-houses",
      items: [
        { name: "Cooling Pads", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop", path: "/agriculture/green-houses" },
        { name: "Shade Nets", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/green-houses" },
        { name: "Ground Covers", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/green-houses" }
      ]
    },
    {
      category: "IRRIGATION",
      path: "/agriculture/irrigation",
      items: [
        { name: "Smart Irrigation Systems", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/irrigation" },
        { name: "Pipe & Fittings", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/irrigation" },
        { name: "Misting Systems", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/irrigation" },
        { name: "Nozzles", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/irrigation" }
      ]
    },
    {
      category: "PUMPS & HOSES",
      path: "/agriculture/pumps-and-hoses",
      items: [
        { name: "Agricultural Pumps", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/pumps-and-hoses" },
        { name: "Suction and Delivery Hose", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/pumps-and-hoses" }
      ]
    },
    {
      category: "MACHINERY",
      path: "/agriculture/machinery",
      items: [
        { name: "Pots Transportation", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/machinery" },
        { name: "Tray Transportation System", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/machinery" },
        { name: "Greenhouse Machinery", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/machinery" },
        { name: "Tree Lifting & Transportation", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/machinery" }
      ]
    },
    {
      category: "WATER SAVING",
      path: "/agriculture/water-saving",
      items: [
        { name: "Super Absorbent Textiles", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/water-saving" },
        { name: "Granules", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop", path: "/agriculture/water-saving" }
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
        <title>Agriculture Solutions | Kahf Greens</title>
      </Helmet>

      {/* WHY - Why We Do What We Do */}
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
              At Kahf Greens, we're committed to advancing sustainable agriculture in the UAE, providing innovative solutions that maximize yields while conserving precious resources. With extensive expertise in the region's unique climate, we empower farmers and growers to thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                title: "Sustainable Farming",
                description: "Innovative agricultural practices that protect the environment and ensure long-term productivity."
              },
              {
                icon: Users,
                title: "Expert Guidance",
                description: "Our team of agricultural specialists provides tailored solutions for every farming need."
              },
              {
                icon: Globe,
                title: "Local Expertise",
                description: "Deep understanding of UAE climate and soil conditions for optimal results."
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
                Kahf Greens is the UAE's leading provider of agricultural solutions, specializing in sustainable farming technologies and practices. With decades of experience in the region's challenging desert environment, we've become trusted partners for farmers, commercial growers, and agricultural enterprises.
              </p>
              <p className="text-lg text-[#2d5f3f] leading-relaxed">
                Our comprehensive approach combines cutting-edge greenhouse technology, efficient irrigation systems, and expert agricultural consulting to help you maximize productivity while minimizing environmental impact.
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
                alt="Kahf Greens agricultural facilities"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop"
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
              Comprehensive agricultural solutions designed for the UAE climate and your specific farming needs.
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

                <AutoSlider
                  items={service.items}
                  renderItem={(item, itemIndex) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      className="w-64 h-48 relative bg-cover bg-center rounded-xl cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-3"
                      style={{ backgroundImage: `url(${item.image})` }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => item.path && navigate(item.path)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                      <span className="absolute bottom-0 left-0 right-0 text-white text-sm font-medium text-center py-3 px-2">
                        {item.name}
                      </span>
                    </motion.div>
                  )}
                  visibleItems={visibleCards}
                  autoSlide={true}
                  interval={5000}
                  showArrows={true}
                  enableSwipe={true}
                  className="w-full"
                />
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
              Our Agricultural Projects
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Discover our portfolio of innovative agricultural solutions across the UAE.
            </p>
          </motion.div>

          <div className="relative">
            <img
              alt="Featured agricultural project"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400&h=300&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e] to-transparent rounded-lg"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <Button
                onClick={() => navigate("/projects")}
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
              Trusted by leading agricultural organizations and farmers across the UAE.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Ministry of Agriculture",
              "Commercial Farms",
              "Research Institutes",
              "Private Estates",
              "Agricultural Cooperatives",
              "Export Companies",
              "Greenhouse Operators",
              "Sustainable Farms"
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
          <img alt="Agricultural landscape background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop" />
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
              Ready to Enhance Your Farm?
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
              Let's discuss your agricultural vision and create sustainable solutions that boost productivity and efficiency. Our experts are ready to help you grow.
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

export default Agriculture;
