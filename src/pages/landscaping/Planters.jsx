import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Container, Fence } from "lucide-react";

const Planters = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Indoor Planters",
      icon: Container,
      description: "Beautiful indoor planters designed to enhance your interior spaces with healthy, thriving plants.",
      features: ["Custom sizes", "Drainage systems", "Attractive designs", "Plant health optimization"]
    },
    {
      name: "Outdoor Planters",
      icon: Container,
      description: "Durable outdoor planters that withstand UAE weather conditions while adding beauty to your landscape.",
      features: ["Weather resistant", "UV protection", "Proper drainage", "Root protection"]
    },
    {
      name: "Street Planters",
      icon: Container,
      description: "Commercial-grade planters for streets, walkways, and public spaces with maximum durability.",
      features: ["Heavy-duty construction", "Vandal resistant", "Easy maintenance", "Traffic safe"]
    },
    {
      name: "Urban Dividers",
      icon: Fence,
      description: "Living green walls and dividers that provide privacy and noise reduction in urban environments.",
      features: ["Sound absorption", "Privacy screening", "Air purification", "Space definition"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planters & Containers | Kahf Greens</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Planters & Containers
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#e8f5e9]">
              Premium planters and containers designed for the UAE climate, combining functionality with aesthetic appeal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Our Planter Solutions
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              From indoor accents to large-scale urban installations, we have the perfect planter for every need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#f1f8e9] p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-[#1a4d2e] p-4 rounded-full">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a4d2e] mb-4 text-center">
                    {service.name}
                  </h3>
                  <p className="text-[#2d5f3f] mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-[#2d5f3f]">
                        <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Premium Materials
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              We use only the highest quality materials to ensure longevity and beauty in the harsh UAE climate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fiberglass",
                description: "Lightweight, durable fiberglass planters that resist cracking and fading in extreme temperatures.",
                benefits: ["UV resistant", "Crack resistant", "Lightweight", "Custom colors"]
              },
              {
                title: "Concrete",
                description: "Heavy-duty concrete planters perfect for large installations and high-traffic areas.",
                benefits: ["Extremely durable", "Weather resistant", "Heavy weight stability", "Cost effective"]
              },
              {
                title: "Metal",
                description: "Stainless steel and aluminum planters offering modern aesthetics and superior strength.",
                benefits: ["Corrosion resistant", "Modern look", "High strength", "Low maintenance"]
              }
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-4">{material.title}</h3>
                <p className="text-[#2d5f3f] mb-6">{material.description}</p>
                <ul className="space-y-2">
                  {material.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-[#2d5f3f]">
                      <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d2e]">
                Custom Design Services
              </h2>
              <p className="text-lg text-[#2d5f3f] leading-relaxed">
                Every space is unique, which is why we offer completely customized planter solutions. Our design team works with you to create planters that perfectly complement your architecture and landscape design.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#1a4d2e] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-[#1a4d2e]">Site Assessment</h4>
                    <p className="text-[#2d5f3f] text-sm">We evaluate your space, lighting, and environmental conditions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#1a4d2e] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-[#1a4d2e]">Design Concept</h4>
                    <p className="text-[#2d5f3f] text-sm">Custom designs that match your vision and architectural style.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#1a4d2e] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-[#1a4d2e]">Plant Selection</h4>
                    <p className="text-[#2d5f3f] text-sm">Expert plant selection for optimal growth and visual impact.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                alt="Custom planter design"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]"></div>
        <div className="absolute inset-0 opacity-10">
          <img alt="Beautiful planters" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b" />
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
              Elevate Your Space with Planters
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
              Discover how the right planters can transform your indoor or outdoor environment.
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
                  Get Planter Quote
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  onClick={() => navigate('/landscaping')}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300"
                >
                  <ChevronLeft className="mr-2" size={20} />
                  Back to Services
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Planters;
