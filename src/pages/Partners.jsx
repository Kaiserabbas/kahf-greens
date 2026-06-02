import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import dmlogo from "../assets/partners/dmLogo.png";
import shjmunLogo from "../assets/partners/shjmunLogo.png";
import amLogo from "../assets/partners/amLogo.png";
import dewaLogo from "../assets/partners/dewaLogo.jpg";
import sewaLogo from "../assets/partners/sewaLogo.png";
import diezLogo from "../assets/partners/diezLogo.png";
import dsLogo from "../assets/partners/dsLogo.svg";
import dsoLogo from "../assets/partners/dsoLogo.webp";
import daLogo from "../assets/partners/daLogo.svg";
import dcdLogo from "../assets/partners/dcdLogo.png";
import dhaLogo from "../assets/partners/dhaLogo.png";

const collaborations = [
  {
    name: "Dubai Municipality",
    logo: dmlogo,
  },
  {
    name: "Sharjah Municipality",
    logo: shjmunLogo,
  },
  {
    name: "Ajman Municipality",
    logo: amLogo,
  },
  {
    name: "DEWA",
    logo: dewaLogo,
  },
  {
    name: "SEWA",
    logo: sewaLogo,
  },
  {
    name: "DIEZ",
    logo: diezLogo,
  },
  {
    name: "Dubai South",
    logo: dsLogo,
  },
  {
    name: "DSO",
    logo: dsoLogo,
  },
  {
    name: "Dubai Ambulance",
    logo: daLogo,
  },
  {
    name: "DCD",
    logo: dcdLogo,
  },
  {
    name: "DHA",
    logo: dhaLogo,
  },
];

const Partners = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <Helmet>
        <title>Our Partners & Collaborations | Kahf Greens – Trusted UAE Network</title>
        <meta
          name="description"
          content="Kahf Greens proudly partners with leading UAE government entities, municipalities, and organizations including Dubai Municipality, DEWA, SEWA, Dubai South and more."
        />
      </Helmet>

      {/* Hero with watercolor overlay */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400"
            alt="Sustainable UAE landscape watercolor background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-8 text-white/80 hover:text-white hover:bg-white/10 -ml-4 transition-all"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Our Valued Partners & Collaborators
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 font-light max-w-4xl mx-auto">
              Working hand-in-hand with the UAE's leading government entities, municipalities, utilities, and developers to build a greener, more sustainable future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo Grid – Premium presentation */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10"
          >
            {collaborations.map((partner) => (
              <motion.div
                key={partner.name}
                variants={itemVariants}
                className="group relative flex items-center justify-center p-8 md:p-12 bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-2xl shadow-lg hover:shadow-2xl hover:border-emerald-300/50 transition-all duration-500 hover:scale-[1.04] hover:-translate-y-2"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} – Official Partner of Kahf Greens`}
                  className="max-h-20 md:max-h-28 w-auto object-contain grayscale group-hover:grayscale-0 group-hover:opacity-100 opacity-90 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                {/* Subtle name tooltip on hover (accessible) */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 hidden md:block bg-emerald-950 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA – Elevated & Centered */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400"
            alt="Sustainable green landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Join Our Growing Network of Partners
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-3xl mx-auto mb-10 font-light">
              Collaborate with Kahf Greens to shape sustainable landscapes and agricultural solutions across the UAE.
            </p>

            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto bg-white text-emerald-950 hover:bg-emerald-50 px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            >
              Become a Partner Today
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Partners;
