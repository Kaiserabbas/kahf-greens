import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { ChevronLeft, Leaf, Droplet, Zap, TreePine, Star, X } from "lucide-react";
import heroImage from "../../assets/Landscaping/balcony/11.jpg";
import zen from "../../assets/Landscaping/balcony/5.avif";
import urban from "../../assets/Landscaping/balcony/11.jpg";
import royal from "../../assets/Landscaping/balcony/royal.png";

const Balcony = () => {
  const navigate = useNavigate();

  const [activePackage, setActivePackage] = useState(null);
  const [hoveredTier, setHoveredTier] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && showPreviewModal) {
        setShowPreviewModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showPreviewModal]);

  /* ============================================================================ */
  /* PRICING TIERS DATA */
  /* ============================================================================ */
  const pricingTiers = [
    {
      id: 1,
      name: "The Zen Starter",
      priceRange: "AED 1,800 – 2,500",
      ideal: "Small Balconies (Studio/1BR)",
      plants: "3–5 Premium Planters",
      background: zen,
      features: [
        "Mix of Snake Plants and ZZ Plants (low water)",
        "Decorative pebbles",
        "Small artificial turf accent",
        "Professional arrangement",
        "Basic care guide included",
      ],
      icon: TreePine,
      color: "from-green-400 to-emerald-500",
      borderColor: "border-green-200 dark:border-green-800",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      tagline: "Low effort, high impact.",
    },
    {
      id: 2,
      name: "The Urban Oasis",
      priceRange: "AED 4,500 – 7,500",
      ideal: "Standard Balconies / Patios",
      plants: "High-Density Curated Selection",
      background: urban,
      features: [
        "High-density Artificial Turf",
        "1 Natural Greenwall (3sqm)",
        "2 large Silver Buttonwood trees in pots",
        "Automated drip irrigation system",
        "Monthly maintenance for 1 month",
      ],
      icon: Leaf,
      color: "from-emerald-400 to-teal-500",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      tagline: "Vacation vibes, no airport required.",
      isPopular: true,
    },
    {
      id: 3,
      name: "The Royal Retreat",
      priceRange: "AED 15,000+",
      ideal: "Large Terraces / Penthouse",
      plants: "Premium Custom Design",
      background: royal,
      features: [
        "Custom Pergola/Gazebo construction",
        "Full-coverage Premium Turf",
        "Bougainvillea climbers with trellising",
        "Smart soil sensors with app integration",
        "3 months of complimentary maintenance",
        "Luxury landscape lighting",
      ],
      icon: Star,
      color: "from-amber-400 to-orange-500",
      borderColor: "border-amber-200 dark:border-amber-800",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      tagline: "Your private sanctuary, engineered for the Emirates.",
    },
  ];

  /* ============================================================================ */
  /* SURFACE PRICING (MATERIAL COSTS) */
  /* ============================================================================ */
  const surfacePricing = [
    {
      name: "Artificial Turf (Premium Grade)",
      price: "AED 65 – 90 / sq. m",
      includes: [
        "Sub-base preparation",
        "High-density UV-resistant turf",
        "Pet-friendly material",
        "Professional installation",
      ],
      icon: Droplet,
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "Natural Turf (Local Desert Grass)",
      price: "AED 55 – 80 / sq. m",
      includes: [
        "Soil enrichment preparation",
        "High-efficiency irrigation nozzles",
        "Complete irrigation system",
        "1st-month fertilization included",
      ],
      icon: Leaf,
      color: "from-green-400 to-lime-500",
    },
    {
      name: "Artificial Greenwalls (Designer Grade)",
      price: "AED 120 – 180 / sq. ft",
      includes: [
        "High-texture foliage selection",
        "3D depth layering effect",
        "UV-protection coating",
        "Optimized for Dubai climate",
      ],
      icon: Leaf,
      color: "from-teal-400 to-green-500",
    },
    {
      name: "Natural Living Greenwalls",
      price: "AED 350 – 550 / sq. ft",
      includes: [
        "Integrated irrigation system",
        "Moisture-wicking fabric",
        "Climate-hardy species (Pothos, Ipomoea)",
        "Professional installation & sealing",
      ],
      icon: TreePine,
      color: "from-emerald-400 to-green-600",
    },
  ];

  /* ============================================================================ */
  /* MAINTENANCE SUBSCRIPTIONS */
  /* ============================================================================ */
  const maintenancePackages = [
    {
      name: "The Caretaker (Basic)",
      price: "AED 299/month",
      frequency: "Bi-weekly visits",
      services: [
        "Watering check-ins",
        "Plant health monitoring",
        "Leaf cleaning & dusting",
        "Debris removal",
        "Basic pest inspection",
      ],
      icon: Droplet,
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "The Botanist (Pro)",
      price: "AED 599/month",
      frequency: "Weekly visits",
      services: [
        "Professional watering & irrigation check",
        "Fertilization & nutrient management",
        "Pruning & deadheading",
        "Pest control treatments",
        "Seasonal adjustments",
        "Performance reports",
      ],
      icon: Leaf,
      color: "from-green-400 to-emerald-500",
      isPopular: true,
    },
  ];

  /* ============================================================================ */
  /* HANDLERS */
  /* ============================================================================ */
  const handleContactWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about your Balcony Garden services."
    );
    window.open(
      `https://wa.me/971565096880?text=${message}`,
      "_blank"
    );
  };

  const handlePhotoPreview = () => {
    setShowPreviewModal(true);
  };

  /* ============================================================================ */
  /* COMPONENT RENDER */
  /* ============================================================================ */
  return (
    <>
      <Helmet>
        <title>Balcony Gardens Design & Installation - Kahf Greens UAE</title>
        <meta
          name="description"
          content="Transform your balcony into a lush green sanctuary. Premium garden packages from AED 1,800. AI 3D preview available. Low maintenance, high elegance landscaping."
        />
        <meta name="keywords" content="balcony garden Dubai, balcony landscaping UAE, balcony plants, urban garden design, artificial turf balcony" />
        <link rel="canonical" href="https://kahfgreens.com/landscaping/balcony" />
      </Helmet>

      {/* ============================================================================ */}
      {/* AI PREVIEW MODAL - RENDERED IN PORTAL */}
      {/* ============================================================================ */}
      {createPortal(
        <AnimatePresence>
          {showPreviewModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
              onClick={() => setShowPreviewModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-800"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    AI 3D Preview
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowPreviewModal(false)
                      navigate("/landscaping/balcony-gallery");
                    }}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <div className="mb-8 space-y-4">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    ✨ Get Your AI Garden Visualization
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    WhatsApp us a photo of your balcony, and we'll create an AI-powered 3D visualization showing exactly how your garden will look. 
                  </p>
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <p className="font-semibold text-green-700 dark:text-green-300">
                      🎁 Completely FREE
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      No cost, no obligation. Just a glimpse of your future oasis.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleContactWhatsApp}
                    className="w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white hover:shadow-lg transition-all"
                  >
                    📱 WhatsApp Your Photo Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowPreviewModal(false);
                      navigate("/landscaping/balcony-gallery");
                    }}
                    className="w-full rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-all dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Later
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* ============================================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================================ */}
      <section className="relative h-[65vh] w-full overflow-hidden">

        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Balcony Garden"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
  
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/landscaping")}
            className="mb-8 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-md hover:bg-white/30"
          >
            <ChevronLeft size={18} />
            Back
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 max-w-4xl text-5xl font-bold text-white md:text-6xl"
          >
            Your private sanctuary, engineered for the Emirates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 max-w-2xl text-xl text-gray-100 md:text-2xl"
          >
            Dubai Heat, Desert Retreat. upgraded from concrete to jungle in 48 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button
              onClick={handleContactWhatsApp}
              className="bg-white px-8 py-6 text-lg font-semibold text-green-600 hover:bg-gray-100"
            >
              Get Quote
            </Button>
            <Button
              onClick={handlePhotoPreview}
              variant="outline"
              className="bg-white px-8 py-6 text-lg font-semibold text-green-600 hover:bg-gray-100"
            >
              AI 3D Preview
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================================ */}
      {/* PRICING TIERS */}
      {/* ============================================================================ */}
      <section className="relative space-y-12 bg-gradient-to-b from-gray-50 to-white px-6 py-20 dark:from-gray-900 dark:to-gray-800 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
               Balcony Garden Packages
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              All-inclusive packages designed to eliminate decision fatigue. No hidden costs, just pure green elegance.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredTier(tier.id)}
                  onMouseLeave={() => setHoveredTier(null)}
                  style={{ 
                    backgroundImage: `url(${tier.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right', 
                    opacity: 0.5,
                  } }
                  className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                    tier.isPopular
                      ? "scale-105 shadow-2xl"
                      : hoveredTier === tier.id
                        ? "scale-105"
                        : ""
                  } ${tier.borderColor} `}
                >
                <div className="absolute inset-0 bg-black/40"></div>
                  {tier.isPopular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-2 text-xs font-bold text-white">
                      POPULAR
                    </div>
                  )}

                  <div className="relative space-y-6 p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white dark:text-white">
                          {tier.name}
                        </h3>
                        <p className="mt-2 text-sm text-white dark:text-gray-300">
                          {tier.ideal}
                        </p>
                      </div>
                      <div className={`rounded-full bg-gradient-to-br ${tier.color} p-3`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                    </div>

                    <div className="space-y-2 border-y border-white py-6 dark:border-gray-700">
                      <p className="text-sm font-semibold text-white dark:text-gray-400">
                        Price Range
                      </p>
                      <p className="text-3xl font-bold text-white dark:text-white">
                        {tier.priceRange}
                      </p>
                      <p className="text-xs italic text-white dark:text-gray-400">
                        "{tier.tagline}"
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-white dark:text-gray-400">
                        Includes:
                      </p>
                      <ul className="space-y-2">
                        {tier.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-white dark:text-gray-300"
                          >
                            <span className={`mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r ${tier.color} flex-shrink-0`}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleContactWhatsApp}
                      className={`w-full rounded-lg bg-gradient-to-r ${tier.color} py-3 font-semibold text-white transition-all hover:shadow-lg`}
                    >
                      Choose Package
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================================ */}
      {/* SURFACE PRICING */}
      {/* ============================================================================ */}
      <section className="space-y-12 bg-white px-6 py-20 dark:bg-gray-800 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Surface & Material Pricing
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Per-square meter pricing for custom installations. Perfect for "Instant Quote" calculations.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {surfacePricing.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <div className={`h-1 bg-gradient-to-r ${item.color}`}></div>
                  <div className="space-y-4 p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <div className={`rounded-lg bg-gradient-to-br ${item.color} p-2`}>
                        <IconComponent size={20} className="text-white" />
                      </div>
                    </div>

                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {item.price}
                    </p>

                    <ul className="space-y-2">
                      {item.includes.map((inc, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <span className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-xl bg-blue-50 p-6 dark:bg-blue-900/20"
          >
            <p className="text-center text-sm font-semibold text-blue-600 dark:text-blue-400">
              💡 Pro Tip: Our "Instant Quote" calculator uses per-square-foot pricing for Artificial Turf & Greenwalls, making cost estimation simple for villa owners and commercial clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================================ */}
      {/* MAINTENANCE SUBSCRIPTIONS */}
      {/* ============================================================================ */}
      <section className="space-y-12 bg-gradient-to-b from-gray-50 to-white px-6 py-20 dark:from-gray-900 dark:to-gray-800 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              The "Forever Green" Promise
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Don't just install a garden. Subscribe to the promise that your balcony stays lush year-round, regardless of Dubai's heat.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {maintenancePackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl border-2 transition-all ${
                    pkg.isPopular
                      ? "scale-105 shadow-2xl border-green-400 dark:border-green-600"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-2 text-xs font-bold text-white">
                      RECOMMENDED
                    </div>
                  )}

                  <div className="space-y-6 p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {pkg.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                          {pkg.frequency}
                        </p>
                      </div>
                      <div className={`rounded-full bg-gradient-to-br ${pkg.color} p-3`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                    </div>

                    <div className="border-y border-gray-200 py-6 dark:border-gray-700">
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">
                        {pkg.price}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Billed monthly
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        Services Include:
                      </p>
                      <ul className="space-y-2">
                        {pkg.services.map((service, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <span className={`mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r ${pkg.color} flex-shrink-0`}></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleContactWhatsApp}
                      className={`w-full rounded-lg py-3 font-semibold text-white transition-all hover:shadow-lg ${
                        pkg.isPopular
                          ? "bg-gradient-to-r from-green-400 to-emerald-500"
                          : "bg-gray-600 hover:bg-gray-700 dark:bg-gray-500"
                      }`}
                    >
                      Subscribe Now
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================================ */}
      {/* DIGITAL PREVIEW SECTION */}
      {/* ============================================================================ */}
      <section className="space-y-8 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-16 dark:from-amber-900/20 dark:to-orange-900/20 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              AI 3D Garden Preview
            </h2>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              WhatsApp us a photo of your empty balcony, and we'll overlay an AI-generated 3D preview of The Urban Oasis package for <span className="font-bold">FREE</span>.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactWhatsApp}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 font-bold text-white hover:shadow-lg transition-all"
            >
              📸 Send Photo for Preview
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Photo-to-Garden Service: Transform an empty concrete surface into a lush sanctuary with our AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================================ */}
      {/* TAGLINES & BENEFITS */}
      {/* ============================================================================ */}
      <section className="space-y-12 bg-white px-6 py-20 dark:bg-gray-800 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose Balcony Gardens
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Forever Green, Zero Water",
                description: "Premium artificial turf that never thirsts, perfect for Dubai's scorching summers.",
                icon: Droplet,
              },
              {
                title: "48-Hour Transformation",
                description: "From concrete to jungle. Your balcony sanctuary is just one afternoon away.",
                icon: Zap,
              },
              {
                title: "Heat-Proof Greenery",
                description: "Hardy plants engineered for a hardworking city. Greenery that survives trends and temperatures.",
                icon: TreePine,
              },
              {
                title: "Low Effort, High Impact",
                description: "We grow it, you enjoy it. Premium luxury with zero stress.",
                icon: Leaf,
              },
              {
                title: "Air-Purifying Luxury",
                description: "Breathable greenwalls designed for your home. Superior air quality meets modern aesthetics.",
                icon: Leaf,
              },
              {
                title: "Your Private Majlis",
                description: "Custom balcony gardens engineered for the Emirates. Your sanctuary awaits.",
                icon: TreePine,
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                    <IconComponent size={24} className="text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================================ */}
      {/* CTA SECTION */}
      {/* ============================================================================ */}
      <section className="relative space-y-12 overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-20 dark:from-green-700 dark:to-emerald-700 md:px-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Transform Your Balcony?
            </h2>
            <p className="mb-8 text-xl text-green-50">
              Your high-rise sanctuary is one consultation away. Let's design your perfect urban garden.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactWhatsApp}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-green-600 hover:bg-gray-100 transition-all"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Balcony;
