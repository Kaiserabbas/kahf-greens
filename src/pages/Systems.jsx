import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Droplets, Lightbulb } from "lucide-react";

const Systems = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Smart Irrigation",
      icon: Droplets,
      description: "Advanced irrigation systems that deliver water efficiently while adapting to weather conditions and plant needs.",
      features: ["Weather-based scheduling", "Soil moisture sensors", "Mobile app control", "Water conservation", "Leak detection"]
    },
    {
      name: "Landscape Lighting",
      icon: Lightbulb,
      description: "Professional landscape lighting design and installation to enhance your property's beauty and security after dark.",
      features: ["Energy-efficient LED lights", "Custom design planning", "Automated controls", "Safety and security", "Mood enhancement"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Landscape Systems | Kahf Greens</title>
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
              Landscape Systems
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#e8f5e9]">
              Smart, efficient systems that enhance your landscape's functionality, beauty, and sustainability.
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
              Our System Solutions
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Cutting-edge technology integrated with traditional landscaping expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* Benefits Section */}
      <section className="py-20 bg-[#f1f8e9]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              System Benefits
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Discover how our landscape systems can transform your property.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Water Conservation",
                description: "Reduce water usage by up to 50% with smart irrigation systems that adapt to weather and plant needs.",
                icon: "💧"
              },
              {
                title: "Energy Efficiency",
                description: "LED lighting systems that consume minimal energy while providing beautiful illumination.",
                icon: "⚡"
              },
              {
                title: "Remote Control",
                description: "Monitor and control your landscape systems from anywhere using mobile apps and smart technology.",
                icon: "📱"
              },
              {
                title: "Enhanced Security",
                description: "Well-lit landscapes deter intruders and improve safety for your property and family.",
                icon: "🔒"
              },
              {
                title: "Increased Property Value",
                description: "Professional landscape systems add significant value to your property investment.",
                icon: "📈"
              },
              {
                title: "Low Maintenance",
                description: "Automated systems reduce the need for manual intervention and maintenance tasks.",
                icon: "🤖"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-4">{benefit.title}</h3>
                <p className="text-[#2d5f3f]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Advanced Technology
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              We use the latest technology to ensure optimal performance and efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#1a4d2e]">Smart Irrigation Technology</h3>
              <p className="text-[#2d5f3f] leading-relaxed">
                Our smart irrigation systems use weather data, soil moisture sensors, and plant requirements to deliver the perfect amount of water at the right time. This not only saves water but also ensures healthier plants and lawns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#2d5f3f]">
                  <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                  Weather-based scheduling
                </li>
                <li className="flex items-center text-[#2d5f3f]">
                  <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                  Real-time adjustments
                </li>
                <li className="flex items-center text-[#2d5f3f]">
                  <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                  Mobile app control
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                alt="Smart irrigation system"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]"></div>
        <div className="absolute inset-0 opacity-10">
          <img alt="Technology background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64" />
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
              Upgrade Your Landscape
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
              Discover how smart systems can enhance your property's functionality and efficiency.
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
                  Get System Quote
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

export default Systems;
