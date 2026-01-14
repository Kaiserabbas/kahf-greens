import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Droplets, Recycle, Zap } from "lucide-react";

const WaterSaving = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Drip Irrigation Systems",
      icon: Droplets,
      description: "Precision water delivery systems that target plant roots directly, minimizing evaporation and runoff.",
      features: ["Up to 50% water savings", "Precise water delivery", "Reduced weed growth", "Customizable flow rates"]
    },
    {
      name: "Rainwater Harvesting",
      icon: Recycle,
      description: "Collect and store rainwater for landscape irrigation, reducing reliance on municipal water sources.",
      features: ["Sustainable water source", "Reduced water bills", "Environmental benefits", "Multiple collection methods"]
    },
    {
      name: "Smart Irrigation Controllers",
      icon: Zap,
      description: "Intelligent controllers that adjust watering based on weather conditions, soil moisture, and plant needs.",
      features: ["Weather-based scheduling", "Soil moisture sensors", "Mobile app control", "Real-time adjustments"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Water Saving Solutions | Kahf Greens</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white">
        <div className="container mx-auto px-4">
                 <Button
            onClick={() => navigate('/landscaping')}
            variant="outline"
            className="mb-6 border-gray-300 text-white hover:bg-gray-300 hover:text-[#1a4d2e]"
          >
            <ChevronLeft className="mr-2" size={16} />
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Water Saving Solutions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#e8f5e9]">
              Innovative water conservation technologies that maintain beautiful landscapes while preserving precious water resources.
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
              Our Water Conservation Solutions
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Advanced technologies designed to maximize water efficiency in landscape irrigation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* Conservation Benefits */}
      <section className="py-20 bg-[#f1f8e9]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Conservation Benefits
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Discover the environmental and financial advantages of water-saving landscape solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Significant Water Savings",
                description: "Reduce water usage by up to 50-70% compared to traditional irrigation methods.",
                icon: "💧"
              },
              {
                title: "Cost Reduction",
                description: "Lower water bills and maintenance costs through efficient water management.",
                icon: "💰"
              },
              {
                title: "Environmental Impact",
                description: "Contribute to water conservation efforts and sustainable landscaping practices.",
                icon: "🌱"
              },
              {
                title: "Healthier Plants",
                description: "Precise watering promotes stronger root systems and overall plant health.",
                icon: "🌿"
              },
              {
                title: "Regulatory Compliance",
                description: "Meet local water conservation regulations and sustainability standards.",
                icon: "📋"
              },
              {
                title: "Long-term Investment",
                description: "Water-saving systems pay for themselves through reduced utility costs over time.",
                icon: "📈"
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
              Advanced Water Technologies
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Cutting-edge solutions that combine efficiency with intelligent water management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#1a4d2e]">Smart Water Management</h3>
              <p className="text-[#2d5f3f] leading-relaxed">
                Our integrated water management systems use weather data, soil moisture sensors, and plant water requirements to deliver the perfect amount of water at the optimal time. This intelligent approach ensures maximum efficiency and plant health.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#2d5f3f]">
                  <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                  Weather-based scheduling
                </li>
                <li className="flex items-center text-[#2d5f3f]">
                  <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                  Real-time soil monitoring
                </li>
                <li className="flex items-center text-[#2d5f3f]">
                  <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                  Automated adjustments
                </li>
                <li className="flex items-center text-[#2d5f3f]">
                  <div className="w-2 h-2 bg-[#1a4d2e] rounded-full mr-3"></div>
                  Mobile app integration
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
          <img alt="Water conservation landscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad" />
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
              Save Water, Save Money
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
              Transform your landscape into a water-efficient paradise. Our experts will design and implement the perfect water-saving solution for your property.
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
                  Get Water Saving Quote
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

export default WaterSaving;
