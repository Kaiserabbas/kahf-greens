import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Sprout,
  Users,
  Globe,
} from "lucide-react";
import main from "../assets/Agriculture/greenhouses/main.jpg";
// Assuming you still use AutoSlider — if not, you can replace with the previous manual slider logic
import AutoSlider from "../components/AutoSlider";

import pad from "../assets/Agriculture/greenhouses/Cooling Pad 2.jpg";
import shade from "../assets/Agriculture/greenhouses/Shade Net 1.jpg";
import cover from "../assets/Agriculture/greenhouses/Ground Cover 1.jpg";

import subpumps from "../assets/Agriculture/pumps/Submersible 1.jpg";
import suction from "../assets/Agriculture/pumps/Suction Hose 1.webp";

import outdoorPlanter1 from "../assets/Agriculture/planter pots/Outdoors Pots 1.jpg";
import stackablePot1 from "../assets/Agriculture/planter pots/Vertical 1.png";
import fruitTree1 from "../assets/Agriculture/planter pots/Fruit 1.jpg";
import matureTree1 from "../assets/Agriculture/planter pots/Large Trees 1.jpg";

import woven1 from "../assets/Agriculture/planter bags/Woven 1.webp";
import nonwoven1 from "../assets/Agriculture/planter bags/Non Woven 1.jpg";

import smart from "../assets/Agriculture/irrigation/Smart irrigation.png";
import pipe1 from "../assets/Agriculture/irrigation/Pipe 1.jpg";
import misting1 from "../assets/Agriculture/irrigation/Misting 1.jpg";
import nozzle1 from "../assets/Agriculture/irrigation/Nozzle 1.jpg";

import pots1 from "../assets/Agriculture/machinery/Pots Transport 1.jpg";
import trays1 from "../assets/Agriculture/machinery/Trays Transport 1.png";
import greenhouse from "../assets/Agriculture/greenhouses/Greenhouse Main 2.jpg";

import litenetla1 from '../assets/Agriculture/water Saving/LITE-NET Lawn 1.jpg'
import graneuls2 from '../assets/Agriculture/water Saving/Granules 2.webp'

import greenhouse2 from "../assets/Agriculture/greenhouses/Greenhouse Main 6.jpg";

const Agriculture = () => {
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
      category: "PLANTER POTS",
      path: "/agriculture/planter-pots",
      items: [
        { name: "Outdoor Growing", image: outdoorPlanter1, path: "/agriculture/planter-pots" },
        { name: "Vertical Farming", image: stackablePot1, path: "/agriculture/planter-pots" },
        { name: "Fruit Growing", image: fruitTree1, path: "/agriculture/planter-pots" },
        { name: "Large Trees", image: matureTree1, path: "/agriculture/planter-pots" },
      ],
    },
    {
      category: "PLANTER BAGS",
      path: "/agriculture/planter-bags",
      items: [
        { name: "Woven", image: woven1, path: "/agriculture/planter-bags" },
        { name: "Non-Woven", image: nonwoven1, path: "/agriculture/planter-bags" },
      ],
    },
    {
      category: "GREENHOUSES",
      path: "/agriculture/green-houses",
      items: [
        { name: "Cooling Pads", image: pad, path: "/agriculture/green-houses" },
        { name: "Shade Nets", image: shade, path: "/agriculture/green-houses" },
        { name: "Ground Covers", image: cover, path: "/agriculture/green-houses" },
      ],
    },
    {
      category: "IRRIGATION",
      path: "/agriculture/irrigation",
      items: [
        { name: "Smart Irrigation Systems", image: smart, path: "/agriculture/irrigation" },
        { name: "Pipe & Fittings", image: pipe1, path: "/agriculture/irrigation" },
        { name: "Misting Systems", image: misting1, path: "/agriculture/irrigation" },
        { name: "Nozzles", image: nozzle1, path: "/agriculture/irrigation" },
      ],
    },
    {
      category: "PUMPS & HOSES",
      path: "/agriculture/pumps-and-hoses",
      items: [
        { name: "Agricultural Pumps", image: subpumps, path: "/agriculture/pumps-and-hoses" },
        { name: "Suction and Delivery Hose", image: suction, path: "/agriculture/pumps-and-hoses" },
      ],
    },
    {
      category: "MACHINERY",
      path: "/agriculture/machinery",
      items: [
        { name: "Pots Transportation", image: pots1, path: "/agriculture/machinery" },
        { name: "Tray Transportation System", image: trays1, path: "/agriculture/machinery" },
        { name: "Greenhouse Machinery", image: greenhouse, path: "/agriculture/machinery" },
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
        <title>Agriculture Solutions | Kahf Greens – UAE Sustainable Farming</title>
        <meta
          name="description"
          content="Discover premium agriculture solutions from Kahf Greens: planter pots & bags, greenhouses, irrigation systems, pumps, machinery & water-saving technologies tailored for the UAE climate."
        />
        <meta name="keywords" content="agriculture UAE, sustainable farming Dubai, irrigation systems, greenhouses Abu Dhabi, agricultural machinery Emirates, water-saving agriculture" />
        <link rel="canonical" href="https://kahfgreens.com/agriculture" />
        <meta property="og:title" content="Agriculture Solutions | Kahf Greens – UAE Sustainable Farming" />
        <meta property="og:description" content="Discover premium agriculture solutions from Kahf Greens: planter pots & bags, greenhouses, irrigation systems, pumps, machinery & water-saving technologies tailored for the UAE climate." />
        <meta property="og:image" content="https://kahfgreens.com/assets/logo.png" />
        <meta property="og:url" content="https://kahfgreens.com/agriculture" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agriculture Solutions | Kahf Greens – UAE Sustainable Farming" />
        <meta name="twitter:description" content="Discover premium agriculture solutions from Kahf Greens: planter pots & bags, greenhouses, irrigation systems, pumps, machinery & water-saving technologies tailored for the UAE climate." />
        <meta name="twitter:image" content="https://kahfgreens.com/assets/logo.png" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-8 md:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img
            src= { main }
            alt="Sustainable agriculture in UAE desert environment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-3 md:mb-4 lg:mb-6">
              Sustainable Agriculture Solutions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light leading-relaxed">
              Empowering UAE growers with climate-resilient technologies, efficient systems, and expert support for higher yields and resource conservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer – Services with AutoSlider */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 mb-3 md:mb-4 lg:mb-6">
              What We Offer
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Comprehensive agricultural solutions designed for the UAE climate and your specific farming needs.
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
                  className="text-center md:text-left text-3xl md:text-4xl font-bold text-emerald-900 mb-4 md:mb-6 lg:mb-8 cursor-pointer hover:text-emerald-700 transition-colors"
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
      
      {/* Why We Do What We Do */}
      <section className="bg-white py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 mb-3 md:mb-4 lg:mb-6">
              Why We Do What We Do
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              At Kahf Greens, we're committed to advancing sustainable agriculture in the UAE, providing innovative solutions that maximize yields while conserving precious resources.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {[
              { icon: Sprout, title: "Sustainable Farming", desc: "Innovative practices that protect the environment and ensure long-term productivity." },
              { icon: Users, title: "Expert Guidance", desc: "Tailored agricultural solutions from experienced specialists." },
              { icon: Globe, title: "Local Expertise", desc: "Deep knowledge of UAE climate, soil, and water challenges." },
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

      {/* Who We Are */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-28 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950">
                Who We Are
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Kahf Greens is the UAE's leading provider of agriculture solutions, specializing in sustainable farming technologies and practices.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                With decades of experience in the region's challenging desert environment, we've become trusted partners for farmers, commercial growers, and agricultural enterprises.
              </p>
              <Button
                onClick={() => navigate("/about")}
                size="lg"
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-7 text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <img
                alt="Kahf Greens agricultural facilities and sustainable farming in UAE"
                className="w-full h-72 sm:h-[420px] md:h-[600px] object-cover"
                src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-28 bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 mb-3 md:mb-4 lg:mb-6">
              Our Agricultural Projects
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Innovative farming solutions implemented across the UAE — from desert farms to high-tech greenhouses.
            </p>
          </motion.div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src= { greenhouse2 }
              alt="Modern sustainable agriculture project in UAE"
              className="w-full h-72 sm:h-[420px] md:h-[700px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
            alt="Agricultural landscape in UAE"
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
              Ready to Enhance Your Farm?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto text-emerald-100">
              Let's discuss your agricultural vision and create sustainable solutions that boost productivity and efficiency.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-white text-emerald-950 hover:bg-emerald-50 px-8 md:px-10 py-6 md:py-7 text-lg md:text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Agriculture;
