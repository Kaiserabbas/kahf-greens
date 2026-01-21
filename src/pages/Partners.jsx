import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const collaborations = [
  {
    name: "Dubai Municipality",
    logo: "https://www.dm.gov.ae/wp-content/webp-express/webp-images/doc-root/wp-content/themes/dubaimunicipality/assets/images/dmLogo.png.webp",
  },
  {
    name: "Sharjah Municipality",
    logo: "https://shjmun.gov.ae/assets/images/shjmun-logo-website.png",
  },
  {
    name: "Ajman Municipality",
    logo: "https://www.am.gov.ae/wp-content/uploads/2024/10/am-logo-2.png",
  },
  {
    name: "DEWA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Logo_of_DEWA.png",
  },
  {
    name: "SEWA",
    logo: "https://www.sewa.gov.ae/media/img/logo.png", // Direct PNG from UAE Logos
  },
  {
    name: "DIEZ / Dubai Industrial City",
    logo: "https://www.diez.ae/documents/877206/0/Logo_DIEZ_resized+1.svg/e8536745-5c92-10db-d8ef-0b3c1cb79592?t=1740571147730",
  },
  {
    name: "Dubai South",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Dubai_South_logo.png",
  },
  {
  name: "DSO",
  logo: "https://www.dubaiapprovals.com/_next/image?url=https%3A%2F%2Fdubai-approval.s3.ap-southeast-1.amazonaws.com%2Fservices%2Ficon%2F1747290212913-1603615918079-DSO-Authority-logo.jpg&w=1200&q=75",
  },
  {
    name: "Dubai Ambulance",
    logo: "https://www.ambulance.gov.ae/img/DubaiAmbulance.svg",
  },
  {
    name: "DCD",
    logo: "https://www.dcd.gov.ae/portal/images/logo3right.png",
  },
  {
    name: "DHA",
    logo: "https://www.dha.gov.ae/img/assets/DHALOGO60.svg",
  },
];

const Partners = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      <Helmet>
        <title>Partners & Clients | Kahf Greens – Sustainable UAE Solutions</title>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0f3d24] via-[#1a4d2e] to-[#2d5f3f] text-white">
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Our Valued Partners
            </h1>
            <p className="mt-5 text-xl text-[#d0e8d5]">
              Collaborating with leading government entities and industry pioneers across the UAE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10">
            {collaborations.map((partner) => (
              <div
                key={partner.name}
                className="group flex items-center justify-center p-6 md:p-10 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl hover:border-[#1a4d2e]/40 transition-all duration-500 hover:scale-110"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-20 md:max-h-28 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white text-center">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Join Our Growing Network
          </motion.h2>
          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="bg-white text-[#1a4d2e] hover:bg-gray-100 px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Become a Partner
          </Button>
        </div>
      </section>
    </>
  );
};

export default Partners;