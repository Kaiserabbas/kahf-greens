import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Truck, Cog, TreePine, Wrench } from "lucide-react";

const Machinery = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Pots Transportation",
      icon: Truck,
      description: "Equipment for transporting pots and planters.",
      products: [
        {
          name: "Pot Transport Carts",
          desc: "Wheeled carts for moving pots efficiently.",
          image: "https://source.unsplash.com/800x600/?pot+transport+carts"
        },
        {
          name: "Automated Pot Movers",
          desc: "Mechanized systems for pot transportation.",
          image: "https://source.unsplash.com/800x600/?automated+pot+movers"
        }
      ]
    },
    {
      title: "Tray Transportation System",
      icon: Cog,
      description: "Systems for transporting seedling trays.",
      products: [
        {
          name: "Tray Conveyors",
          desc: "Conveyor systems for tray movement.",
          image: "https://source.unsplash.com/800x600/?tray+conveyors"
        },
        {
          name: "Tray Lifts",
          desc: "Hydraulic lifts for tray handling.",
          image: "https://source.unsplash.com/800x600/?tray+lifts"
        }
      ]
    },
    {
      title: "Greenhouse Machinery",
      icon: TreePine,
      description: "Specialized machinery for greenhouse operations.",
      products: [
        {
          name: "Ventilation Systems",
          desc: "Automated ventilation for greenhouses.",
          image: "https://source.unsplash.com/800x600/?greenhouse+ventilation"
        },
        {
          name: "Climate Control Units",
          desc: "Systems for maintaining greenhouse climate.",
          image: "https://source.unsplash.com/800x600/?climate+control+units"
        }
      ]
    },
    {
      title: "Tree Lifting & Transportation",
      icon: Wrench,
      description: "Equipment for lifting and transporting trees.",
      products: [
        {
          name: "Tree Spades",
          desc: "Machines for digging and transplanting trees.",
          image: "https://source.unsplash.com/800x600/?tree+spades"
        },
        {
          name: "Tree Cranes",
          desc: "Cranes for lifting large trees.",
          image: "https://source.unsplash.com/800x600/?tree+cranes"
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Machinery | Agriculture | Kahf Greens</title>
        <meta name="description" content="Explore our agricultural machinery including transportation systems and specialized equipment." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-[#1a4d2e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Machinery
          </motion.h1>
          <p className="text-xl text-[#e8f5e9] max-w-2xl mx-auto">
            Advanced machinery for efficient agricultural operations.
          </p>
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

export default Machinery;
