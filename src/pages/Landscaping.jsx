import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Award,
  Users,
  Globe,
} from "lucide-react";
import AutoSlider from "../components/AutoSlider";
import garden1 from "../assets/Landscaping/Maintenance/Garden 1.jpg";
import shrubs1 from "../assets/Landscaping/Maintenance/shrubs 1.webp";
import lawn1 from "../assets/Landscaping/Maintenance/lawn 1.jpg";
import turf1 from "../assets/Landscaping/Maintenance/turf 1.webp";
import indoor from "../assets/Landscaping/Maintenance/indoor 1.jpg";
import grass4 from "../assets/Landscaping/New/grass 4.jpg";
import wall1 from "../assets/Landscaping/New/wall 1.webp";
import tree1 from "../assets/Landscaping/New/tree 1.jpg";
import artificial1 from "../assets/Landscaping/New/artificial 1.jpg";
import smart1 from "../assets/Landscaping/systems/smart 1.png";
import light1 from "../assets/Landscaping/systems/light 1.jpg";
import gazebo from "../assets/Landscaping/outdoor living/gazebo.jpg";
import fence from "../assets/Landscaping/outdoor living/fence.jpg";
import seat1 from "../assets/Landscaping/outdoor living/seating 5.jpg";
import shade1 from "../assets/Landscaping/outdoor living/shade 1.jpg";
import street1 from "../assets/Landscaping/planters/street 1.jpg";
import divider1 from "../assets/Landscaping/planters/dividers 1.jpg";
import outdoor1 from "../assets/Landscaping/planters/outdoor 1.jpg";
import indoor1 from "../assets/Landscaping/planters/indoor 1.jpg";  
import litenetla1 from '../assets/Agriculture/water Saving/LITE-NET Lawn 1.jpg'
import graneuls2 from '../assets/Agriculture/water Saving/Granules 2.webp'
import balcony from "../assets/Landscaping/balcony/11.jpg";


const Landscaping = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else if (width < 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const services = [
    {
      category: "MAINTENANCE",
      path: "/landscaping/maintenance",
      items: [
        { name: "Garden Care", image: garden1, path: "/landscaping/maintenance" },
        { name: "Shrubs Trimming", image: shrubs1, path: "/landscaping/maintenance" },
        { name: "Indoor Plant Care", image: indoor, path: "/landscaping/maintenance" },
        { name: "Turf Care", image: turf1, path: "/landscaping/maintenance" },
      ],
    },
    {
      category: "NEW SERVICES",
      path: "/landscaping/new-services",
      items: [
        { name: "Sustainable Landscaping", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", path: "/landscaping/new-services" },
        { name: "Plants & Trees Installation", image: tree1, path: "/landscaping/new-services" },
        { name: "Artificial & Real Grass Installation", image: grass4, path: "/landscaping/new-services" },
        { name: "Artificial & Real Green Walls", image: wall1, path: "/landscaping/new-services" },
        { name: "Artificial Plants & Trees", image: artificial1, path: "/landscaping/new-services" },
      ],
    },
    {
      category: "SYSTEMS",
      path: "/landscaping/systems",
      items: [
        { name: "Smart Irrigation", image: smart1, path: "/landscaping/systems" },
        { name: "Landscape Lighting", image: light1, path: "/landscaping/systems" },
      ],
    },
    {
      category: "OUTDOOR LIVING",
      path: "/landscaping/outdoor-living",
      items: [
        { name: "Pergola & Gazebo", image: gazebo, path: "/landscaping/outdoor-living" },
        { name: "Fencing & Panels", image: fence, path: "/landscaping/outdoor-living" },
        { name: "Seating Areas", image: seat1, path: "/landscaping/outdoor-living" },
        { name: "Shade Structures", image: shade1, path: "/landscaping/outdoor-living" },
      ],
    },
    {
      category: "PLANTERS",
      path: "/landscaping/planters",
      items: [
        { name: "Indoor Planters", image: indoor1, path: "/landscaping/planters" },
        { name: "Outdoor Planters", image: outdoor1, path: "/landscaping/planters" },
        { name: "Street & Urban", image: street1, path: "/landscaping/planters" },
        { name: "Urban Dividers", image: divider1, path: "/landscaping/planters" },
      ],
    },
    {
      category: "BALCONY GARDENS",
      path: "/landscaping/balcony",
      items: [
        { name: "Balcony Gardens & Maintenance", image: balcony, path: "/landscaping/balcony" },
      ],
    },
       {
          category: "WATER SAVING",
          path: "/agriculture/water-saving",
          items: [
            { name: "Super Absorbent Textiles", image: litenetla1, path: "/agriculture/water-saving" },
            { name: "Granules", image: graneuls2, path: "/agriculture/water-saving" },
          ],
        },
  ];

  return (
    <>
      <Helmet>
        <title>Landscaping Solutions | Kahf Greens UAE Premium Services</title>
        <meta
          name="description"
          content="Discover Kahf Greens' comprehensive landscaping services: maintenance, new installations, smart systems, outdoor living, planters & water-saving solutions for UAE homes & businesses."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-8 md:py-16 lg:py-24 overflow-hidden">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 tracking-tight"
          >
            Premium Landscaping Solutions
          </motion.h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto font-light leading-relaxed">
            Transforming UAE outdoor spaces with sustainable design, expert maintenance, and innovative systems, built to thrive in our climate.
          </p>
        </div>
      </section>

      {/* Services – Slider Sections */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 mb-3 md:mb-4 lg:mb-6">
              Our Landscaping Services
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Comprehensive, climate-adapted solutions from daily care to complete outdoor transformations.
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3
                  className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4 md:mb-6 lg:mb-8 cursor-pointer hover:text-emerald-700 transition-colors"
                  onClick={() => service.path && navigate(service.path)}
                >
                  {service.category}
                </h3>

                <AutoSlider
                  items={service.items}
                  renderItem={(item) => (
                      <motion.div
                        whileHover={{ scale: 1.04, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        onClick={() => item.path && navigate(item.path)}
                      >
                        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-5">
                            <p className="text-white text-lg font-semibold drop-shadow-md">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                  )}
                  visibleItems={visibleCards}
                  autoSlide={true}
                  interval={5000}
                  showArrows={true}
                  enableSwipe={true}
                  className="w-full pb-8"
                  itemClassName="px-2 md:px-3"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-white py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 mb-3 md:mb-4 lg:mb-6">
              Why Choose Kahf Greens
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Over 20 years of excellence in helping create sustainable, beautiful landscapes that last in the UAE environment.
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
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 text-center border border-emerald-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400"
                >
                  <div className="inline-flex p-4 md:p-5 bg-emerald-100/50 rounded-2xl mb-4 md:mb-6">
                    <Icon size={44} className="text-emerald-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 lg:mb-6">
              Ready to Create Your Perfect Outdoor Space?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto text-emerald-100">
              Contact our team today for a consultation — bring your vision to life with sustainable, premium landscaping.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-white text-emerald-950 hover:bg-emerald-50 px-8 md:px-10 py-6 md:py-7 text-lg md:text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all"
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
