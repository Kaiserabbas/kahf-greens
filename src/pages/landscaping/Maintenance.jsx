import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Leaf, Scissors, Home } from "lucide-react";

const Maintenance = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Garden Care",
      icon: Leaf,
      description: "Comprehensive garden maintenance including weeding, pruning, and seasonal care to keep your garden looking pristine year-round.",
      features: ["Weekly maintenance visits", "Seasonal planting", "Pest control", "Soil health management"]
    },
    {
      name: "Shrubs Trimming",
      icon: Scissors,
      description: "Professional shrub trimming and shaping to maintain the health and aesthetic appeal of your landscape.",
      features: ["Seasonal trimming", "Disease prevention", "Shape maintenance", "Growth control"]
    },
    {
      name: "Lawn Mowing",
      icon: Scissors,
      description: "Regular lawn mowing services with precision cutting to maintain the perfect lawn height and appearance.",
      features: ["Weekly mowing", "Edge trimming", "Debris removal", "Seasonal adjustments"]
    },
    {
      name: "Indoor Plant Care",
      icon: Home,
      description: "Expert care for your indoor plants including watering, fertilizing, and health monitoring.",
      features: ["Watering schedules", "Nutrient management", "Pest monitoring", "Repotting services"]
    },
    {
      name: "Turf Care",
      icon: Leaf,
      description: "Specialized turf maintenance including fertilization, aeration, and disease prevention.",
      features: ["Fertilization programs", "Aeration services", "Weed control", "Disease treatment"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Maintenance Services | Kahf Greens</title>
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
              Maintenance Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#e8f5e9]">
              Keep your landscape beautiful and healthy with our comprehensive maintenance programs designed for the UAE climate.
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
              Our Maintenance Services
            </h2>
            <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
              Professional maintenance solutions to preserve and enhance your landscape investment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  id={service.name.toLowerCase().replace(/\s+/g, '-')}
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

      {/* Why Choose Us */}
      <section className="py-20 bg-[#f1f8e9]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
              Why Choose Our Maintenance Services?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our certified professionals have over 20 years of experience in landscape maintenance."
              },
              {
                title: "Customized Programs",
                description: "Tailored maintenance schedules based on your specific landscape needs and UAE climate conditions."
              },
              {
                title: "Quality Guarantee",
                description: "We stand behind our work with comprehensive service guarantees and satisfaction assurance."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-4">{item.title}</h3>
                <p className="text-[#2d5f3f]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]"></div>
        <div className="absolute inset-0 opacity-10">
          <img alt="Green landscape background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b" />
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
              Ready to Maintain Your Landscape?
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
              Contact us today to discuss your maintenance needs and get a customized service plan for your property.
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
                  Get Started Today
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

export default Maintenance;
