import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Zap, Wrench, Droplets } from "lucide-react";

const PumpsAndHoses = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Agricultural Pumps",
      icon: Zap,
      description: "High-efficiency pumps for agricultural applications.",
      products: [
        {
          name: "Centrifugal Pumps",
          desc: "Pumps for high-volume water transfer.",
          image: "https://source.unsplash.com/800x600/?centrifugal+pumps"
        },
        {
          name: "Submersible Pumps",
          desc: "Pumps designed for underwater operation.",
          image: "https://source.unsplash.com/800x600/?submersible+pumps"
        }
      ]
    },
    {
      title: "Suction and Delivery Hose",
      icon: Wrench,
      description: "Durable hoses for suction and delivery systems.",
      products: [
        {
          name: "PVC Suction Hose",
          desc: "Flexible PVC hose for suction applications.",
          image: "https://source.unsplash.com/800x600/?pvc+suction+hose"
        },
        {
          name: "Delivery Hose",
          desc: "Reinforced hose for water delivery.",
          image: "https://source.unsplash.com/800x600/?delivery+hose"
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Pumps & Hoses | Agriculture | Kahf Greens</title>
        <meta name="description" content="Explore our agricultural pumps and hoses for efficient water management." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-[#1a4d2e] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              onClick={() => navigate('/agriculture')}
              variant="outline"
              size="sm"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#1a4d2e] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Back
            </Button>
          </motion.div>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Pumps & Hoses
            </motion.h1>
            <p className="text-xl text-[#e8f5e9] max-w-2xl mx-auto">
              Reliable pumps and hoses for agricultural water systems.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {categories.map((cat, catIndex) => {
          const CatIcon = cat.icon;
          return (
            <section key={catIndex}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8 border-b pb-4"
              >
                <div className="p-3 rounded-full bg-[#e8f5e9] text-[#1a4d2e]">
                  <CatIcon size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1a4d2e]">{cat.title}</h2>
                  <p className="text-gray-600">{cat.description}</p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {cat.products.map((product, prodIndex) => (
                  <motion.div
                    key={prodIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: prodIndex * 0.1 }}
                    className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="h-48 bg-gray-200 relative overflow-hidden group">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={product.image}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{product.desc}</p>
                      <Button
                        onClick={() => navigate('/contact')}
                        className="w-full mt-auto bg-[#1a4d2e] hover:bg-[#2d5f3f]"
                      >
                        Request Quote
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default PumpsAndHoses;
