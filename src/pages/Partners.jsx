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
    logo: "https://www.sewa.gov.ae/media/img/logo.png",
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
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-emerald-950 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
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
              className="bg-white text-emerald-950 hover:bg-emerald-50 px-12 py-8 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
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