import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Users, Award, Globe, Building2, Leaf } from "lucide-react";

/* ---------------- COMBINED PARTNERS & CLIENTS DATA ---------------- */
const collaborations = [
  {
    name: "Dubai Municipality",
    logo: "https://www.dm.gov.ae/wp-content/webp-express/webp-images/doc-root/wp-content/themes/dubaimunicipality/assets/images/dmLogo.png.webp",
    description: "Supporting sustainable urban greening and irrigation innovations across Dubai.",
    category: "Government & Public Sector",
    type: "Partner",
  },
  {
    name: "EcoWater Systems",
    logo: "https://via.placeholder.com/180x90/2d5f3f/ffffff?text=EcoWater",
    description: "Advanced water conservation and rainwater harvesting technologies.",
    category: "Water Management",
    type: "Partner",
  },
  {
    name: "Landscape Pros",
    logo: "https://via.placeholder.com/180x90/1a4d2e/ffffff?text=Landscape+Pros",
    description: "Expert maintenance and design for premium residential & commercial spaces.",
    category: "Landscaping Services",
    type: "Client",
  },
  {
    name: "SolarGrow",
    logo: "https://via.placeholder.com/180x90/2d5f3f/ffffff?text=SolarGrow",
    description: "Solar-powered irrigation for energy-efficient and eco-conscious projects.",
    category: "Renewable Solutions",
    type: "Partner",
  },
  // Add more real partners/clients as available from your business records
];

const Partners = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Partners & Clients | Kahf Greens – Sustainable Landscaping UAE</title>
        <meta
          name="description"
          content="Discover our trusted partners and valued clients at Kahf Greens. Together, we deliver innovative, eco-friendly landscaping and agricultural solutions across the UAE."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f3d24] via-[#1a4d2e] to-[#2d5f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-8 text-white/80 hover:text-white hover:bg-white/10 -ml-4"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Our Partners & Clients
            </h1>
            <p className="text-xl md:text-2xl text-[#d0e8d5] leading-relaxed">
              Collaborating with industry leaders to create sustainable, beautiful, and resilient landscapes across the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Collaborations Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#f0f7f0] text-[#1a4d2e] px-5 py-2 rounded-full text-sm font-medium mb-4">
              <Award size={18} /> Trusted Collaborations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d2e] mb-5">
              Working Together for a Greener Tomorrow
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our strong relationships with government entities, technology providers, and industry specialists enable us to deliver cutting-edge, sustainable solutions that meet the highest standards.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {collaborations.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="h-20 w-auto object-contain mx-auto relative z-10"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-[#1a4d2e] mb-3 group-hover:text-[#2d5f3f] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 bg-[#f0f7f0] text-[#1a4d2e] px-4 py-1.5 rounded-full text-xs font-medium">
                    {item.type === "Government" ? <Building2 size={14} /> : <Leaf size={14} />}
                    {item.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.02)_75%,transparent_75%,transparent)] bg-[length:80px_80px]" />
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Become Our Next Success Story
            </h2>
            <p className="text-xl text-[#d0e8d5] mb-10 max-w-3xl mx-auto">
              Join forces with Kahf Greens to create exceptional, sustainable outdoor environments that stand the test of time.
            </p>

            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-white text-[#1a4d2e] hover:bg-gray-100 font-semibold text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Partner with Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Partners;