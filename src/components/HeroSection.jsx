import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Leaf, TreePine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DynamicText from './DynamicText';

const HeroSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleServicesClick = () => {
    toast({
      title: "🚧 The Services page isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px]">
      <DynamicText />
      <div className="grid md:grid-cols-2 h-full">
        {/* Left Panel - Products */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start text-white min-h-[400px] md:min-h-[700px]"
        >
          <div className="absolute inset-0 opacity-10">
            <img alt="Growing plants and greenery" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1561058625-d9982b18d43c" />
          </div>
          <div className="relative z-10 max-w-xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <Leaf size={48} className="text-[#90b77d]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Agricultural Services & Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl mb-8 text-[#e8f5e9]"
            >
              Premium plants, seeds, and sustainable growing solutions for the UAE
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                onClick={() => navigate('/agriculture')}
                size="lg"
                className="bg-[#90b77d] hover:bg-[#7a9e6a] text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
              >
                Explore more
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel - Services */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#556b2f] to-[#6b8e23] p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start text-white min-h-[400px] md:min-h-[700px]"
        >
          <div className="absolute inset-0 opacity-10">
            <img alt="Professional landscape design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1677967906132-7275d444b407" />
          </div>
          <div className="relative z-10 max-w-xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <TreePine size={48} className="text-[#c8d8b4]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Landscape Design & Planters
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl mb-8 text-[#e8f5e9]"
            >
              Professional landscaping services for residential and commercial spaces
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                onClick={() => navigate('/landscaping')} 
                size="lg"
                className="bg-[#c8d8b4] hover:bg-[#b0c098] text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
              >
                View more
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;