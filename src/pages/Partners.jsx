import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Users, Award, Globe } from "lucide-react";

/* ---------------- SAMPLE PARTNERS DATA ---------------- */
const partners = [
  {
    name: "Dubai Municipality",
    logo: "https://www.dm.gov.ae/wp-content/webp-express/webp-images/doc-root/wp-content/themes/dubaimunicipality/assets/images/dmLogo.png.webp",
    description:
      "Innovative irrigation and landscaping technologies for sustainable development.",
    category: "Technology",
  },
  {
    name: "EcoWater Systems",
    logo: "https://via.placeholder.com/150?text=EcoWater",
    description:
      "Leading provider of water conservation and rainwater harvesting solutions.",
    category: "Water Solutions",
  },
  {
    name: "Landscape Pros",
    logo: "https://via.placeholder.com/150?text=Landscape+Pros",
    description:
      "Professional landscaping and maintenance services with years of expertise.",
    category: "Landscaping",
  },
  {
    name: "SolarGrow",
    logo: "https://via.placeholder.com/150?text=SolarGrow",
    description:
      "Innovative solar-powered irrigation systems for energy-efficient landscapes.",
    category: "Renewable Energy",
  },
];

/* ---------------- SAMPLE CLIENTS DATA ---------------- */
const clients = [
  {
    name: "Dubai Municipality",
    logo: "https://www.dm.gov.ae/wp-content/webp-express/webp-images/doc-root/wp-content/themes/dubaimunicipality/assets/images/dmLogo.png.webp",
    description:
      "Innovative irrigation and landscaping technologies for sustainable development.",
    category: "Technology",
  },
  {
    name: "EcoWater Systems",
    logo: "https://via.placeholder.com/150?text=EcoWater",
    description:
      "Leading provider of water conservation and rainwater harvesting solutions.",
    category: "Water Solutions",
  },
  {
    name: "Landscape Pros",
    logo: "https://via.placeholder.com/150?text=Landscape+Pros",
    description:
      "Professional landscaping and maintenance services with years of expertise.",
    category: "Landscaping",
  },
  {
    name: "SolarGrow",
    logo: "https://via.placeholder.com/150?text=SolarGrow",
    description:
      "Innovative solar-powered irrigation systems for energy-efficient landscapes.",
    category: "Renewable Energy",
  },
];

const Partners = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Our Partners | Kahf Greens</title>
      </Helmet>

      {/* ---------------- HERO PARTNERS ---------------- */}
      <section className="relative py-8 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white">
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
              Our Partners
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#e8f5e9]">
              We collaborate with industry leaders to bring you the most advanced, sustainable, and professional landscape solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- PARTNERS GRID ---------------- */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Our partnerships with top companies ensure innovative, reliable, and eco-friendly landscape solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#f1f8e9] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 object-contain rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">
                  {partner.name}
                </h3>
                <p className="text-[#2d5f3f] text-sm mb-3">{partner.description}</p>
                <div className="inline-flex items-center bg-[#1a4d2e] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  <Globe size={14} className="mr-1" /> {partner.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- HERO CLIENTS ---------------- */}
      <section className="relative py-8 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Clients
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#e8f5e9]">
              We collaborate with industry leaders to bring you the most advanced, sustainable, and professional landscape solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- CLIENTS GRID ---------------- */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((clients, index) => (
              <motion.div
                key={clients.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#f1f8e9] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={clients.logo}
                    alt={clients.name}
                    className="w-24 h-24 object-contain rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">
                  {clients.name}
                </h3>
                <p className="text-[#2d5f3f] text-sm mb-3">{clients.description}</p>
                <div className="inline-flex items-center bg-[#1a4d2e] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  <Globe size={14} className="mr-1" /> {clients.category}
                </div>
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
            alt="Partners background"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Network
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
              Partner with Kahf Greens to deliver exceptional, sustainable landscaping solutions together.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-white hover:bg-[#f5f5f5] text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
            >
              Become a Partner
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Partners;
