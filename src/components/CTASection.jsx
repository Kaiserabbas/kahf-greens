import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f]"></div>
      <div className="absolute inset-0 opacity-10">
        <img alt="Green landscape background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1689450150136-08823406524e" />
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
            Let's Build Sustainable Green Spaces Together
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#e8f5e9]">
            Whether you're planning a residential garden, commercial landscape, or large-scale agricultural project, 
            our team of experts is ready to bring your vision to life with sustainable, beautiful solutions.
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
                className="bg-white hover:bg-[#f5f5f5] text-[#1a4d2e] font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <FileText size={24} />
                Request a Quote
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1a4d2e] text-white font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <MessageCircle size={24} />
                Talk to an Expert
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;