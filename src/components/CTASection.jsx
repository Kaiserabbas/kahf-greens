import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import greener from '../assets/greener.jpg';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${greener})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="absolute inset-0 opacity-15 mix-blend-overlay">
      </div>

      {/* Subtle texture/overlay for readability */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center text-white max-w-5xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 md:mb-8">
            Ready to Create Your <span className="text-[#90b77d] inline-block">Sustainable</span> Outdoor Paradise?
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-14 text-[#e8f5e9]/90 font-light leading-relaxed max-w-4xl mx-auto">
            From luxury villa gardens and rooftop terraces to large-scale agricultural estates and commercial green spaces — our expert team delivers climate-adapted, water-smart landscapes that thrive in the UAE.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl font-medium text-[#c8e6c9] mb-12"
          >
            Start today — your dream landscape is one conversation away.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center">
            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="
                  bg-white hover:bg-[#f0f9f0] text-[#1a4d2e] 
                  w-full sm:w-auto justify-center
                  font-semibold text-base sm:text-lg md:text-xl px-6 sm:px-10 py-6 sm:py-7 
                  rounded-xl shadow-xl hover:shadow-2xl 
                  transition-all duration-400 transform 
                  flex items-center gap-3 group
                "
              >
                <FileText size={26} className="group-hover:rotate-6 transition-transform" />
                Get Your Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              >
              <a 
                href="https://wa.me/971565096880"
                target="_blank"
                rel="noopener noreferrer"                
                >
              <Button
                size="lg"
                variant="outline"
                className="
                  border-2 border-white/80 hover:border-white 
                  bg-white hover:bg-[#f0f9f0] text-[#1a4d2e] font-semibold 
                  w-full sm:w-auto justify-center
                  text-base sm:text-lg md:text-xl px-6 sm:px-10 py-6 sm:py-7 rounded-xl 
                  transition-all duration-400 flex items-center gap-3 group
                "
              >
                <MessageCircle size={26} className="group-hover:scale-110 transition-transform" />
                Speak with an Expert
              </Button>
                </a>
            </motion.div>
          </div>

          {/* Trust signals / small footer text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 text-base md:text-lg text-[#e8f5e9]/70"
          >
            ✓ 100% UAE-based team • ✓ Sustainable & water-efficient designs • ✓ Custom solutions as per your needs
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
