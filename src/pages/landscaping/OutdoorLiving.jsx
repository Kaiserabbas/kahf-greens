import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Home, Fence, Armchair } from "lucide-react";

const OutdoorLiving = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Pergola",
      icon: Home,
      description: "Custom pergolas that provide shade and elegance to your outdoor living spaces, perfect for the UAE climate.",
      features: ["Custom designs", "Weather resistant materials", "Integrated lighting", "Privacy options"]
    },
    {
      name: "Gazebo",
      icon: Home,
      description: "Beautiful gazebos that create intimate outdoor rooms for relaxation and entertainment.",
      features: ["Multiple sizes", "Weather protection", "Comfortable seating areas", "Aesthetic appeal"]
    },
    {
      name: "Panel",
      icon: Fence,
      description: "Decorative panels and screens that add privacy and visual interest to your outdoor spaces.",
      features: ["Various designs", "Privacy enhancement", "Wind protection", "Noise reduction"]
    },
    {
      name: "Fencing",
      icon: Fence,
      description: "High-quality fencing solutions that provide security, privacy, and property definition.",
      features: ["Security features", "Low maintenance", "Aesthetic designs", "Durability"]
    },
    {
      name: "Seating Areas",
      icon: Armchair,
      description: "Comfortable outdoor seating arrangements designed for relaxation and social gatherings.",
      features: ["Comfortable furniture", "Weather resistant", "Custom layouts", "Integrated features"]
    },
    {
      name: "Shade Structure",
      icon: Home,
      description: "Modern shade structures that protect against the intense UAE sun while maintaining style.",
      features: ["UV protection", "Modern designs", "Easy installation", "Low maintenance"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Outdoor Living Solutions | Kahf Greens</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => navigate('/landscaping')}
            variant="outline"
            className="mb-6 border-white text-white hover:bg-white hover:text-[#1a4d2e]"
          >
            <ChevronLeft className="mr-2" size={16} />
            Back to Landscaping
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Outdoor Living Solutions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#e8f5e9]">
              Transform your outdoor spaces into comfortable, functional living areas designed for the UAE lifestyle.
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
              Our Outdoor Living Solutions
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Create comfortable, functional outdoor spaces that extend your living area into nature.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Design Process Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Our Design Process
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              We create outdoor living spaces that perfectly fit your lifestyle and property.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your lifestyle, preferences, and how you want to use your outdoor space."
              },
              {
                step: "02",
                title: "Site Analysis",
                description: "Evaluating your property layout, sun exposure, wind patterns, and existing features."
              },
              {
                step: "03",
                title: "Design Concept",
                description: "Creating detailed plans that balance functionality, aesthetics, and UAE climate considerations."
              },
              {
                step: "04",
                title: "Implementation",
                description: "Professional installation ensuring perfect execution of your outdoor living vision."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-[#1a4d2e] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-4">{item.title}</h3>
                <p className="text-[#2d5f3f]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-white">
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
              We use only the finest materials to ensure your outdoor living spaces withstand the UAE climate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hardwood",
                description: "Premium hardwood materials that are naturally resistant to UAE weather conditions.",
                benefits: ["Natural beauty", "Weather resistant", "Long lasting", "Sustainable sourcing"]
              },
              {
                title: "Aluminum",
                description: "Lightweight aluminum structures that provide strength without corrosion concerns.",
                benefits: ["Corrosion resistant", "Low maintenance", "Modern look", "Durable finish"]
              },
              {
                title: "Composite Materials",
                description: "Advanced composite materials that combine beauty with exceptional durability.",
                benefits: ["Weather proof", "Low maintenance", "Realistic wood look", "Long lifespan"]
              }
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#f1f8e9] p-8 rounded-lg shadow-lg"
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

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]"></div>
        <div className="absolute inset-0 opacity-10">
          <img alt="Beautiful outdoor living space" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7" />
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
              Create Your Dream Outdoor Space
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
              Transform your outdoor area into a comfortable extension of your home, perfectly suited for UAE living.
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
                  Start Your Project
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

export default OutdoorLiving;
