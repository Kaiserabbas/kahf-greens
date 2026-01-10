import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { TreeDeciduous, Apple, TreePine } from "lucide-react";

const PlanterPots = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Outdoor Growing",
      icon: TreeDeciduous,
      description: "Pots designed for outdoor cultivation in various climates.",
      products: [
        {
          name: "Raised Garden Beds",
          desc: "Elevated beds for better drainage and accessibility.",
          image: "https://source.unsplash.com/800x600/?raised+garden+beds"
        },
        {
          name: "Outdoor Planters",
          desc: "Durable pots for outdoor use.",
          image: "https://source.unsplash.com/800x600/?outdoor+planters"
        }
      ]
    },
    {
      title: "Vertical Farming",
      icon: TreePine,
      description: "Specialized pots for vertical growing systems.",
      products: [
        {
          name: "Stackable Pots",
          desc: "Pots designed for vertical stacking.",
          image: "https://source.unsplash.com/800x600/?stackable+pots"
        },
        {
          name: "Hydroponic Containers",
          desc: "Containers for hydroponic systems.",
          image: "https://source.unsplash.com/800x600/?hydroponic+containers"
        }
      ]
    },
    {
      title: "Fruit Growing",
      icon: Apple,
      description: "Pots optimized for fruit tree cultivation.",
      products: [
        {
          name: "Fruit Tree Pots",
          desc: "Deep pots for fruit tree roots.",
          image: "https://source.unsplash.com/800x600/?fruit+tree+pots"
        },
        {
          name: "Berry Bush Containers",
          desc: "Containers for berry-producing plants.",
          image: "https://source.unsplash.com/800x600/?berry+bush+containers"
        }
      ]
    },
    {
      title: "Tree Large",
      icon: TreePine,
      description: "Extra-large containers for mature trees.",
      products: [
        {
          name: "Root Ball Containers",
          desc: "Containers for large root systems.",
          image: "https://source.unsplash.com/800x600/?root+ball+containers"
        },
        {
          name: "Mature Tree Pots",
          desc: "Pots for established trees.",
          image: "https://source.unsplash.com/800x600/?mature+tree+pots"
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Planter Pots | Agriculture | Kahf Greens</title>
        <meta name="description" content="Explore our planter pots for outdoor growing, vertical farming, fruit growing, and large trees." />
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
              Planter Pots
            </motion.h1>
            <p className="text-xl text-[#e8f5e9] max-w-2xl mx-auto">
              Versatile pots for all your planting needs.
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

export default PlanterPots;
