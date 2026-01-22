import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient + image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] via-[#2d5f3f] to-[#556b2f]" />
      
      <div className="absolute inset-0 opacity-15 mix-blend-overlay">
        <img
          alt="Luxury sustainable landscaping in UAE – green oasis in modern villa garden"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070"
          // Alternative strong options:
          // https://images.unsplash.com/photo-1598963086364-4b985a95376a (vibrant garden)
          // https://images.unsplash.com/photo-1743819455744-05417bf55cea (luxury building + green lawn)
        />
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
                  font-semibold text-lg md:text-xl px-10 py-7 
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
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                variant="outline"
                className="
                  border-2 border-white/80 hover:bg-white/10 hover:border-white 
                  text-white hover:text-white font-semibold 
                  text-lg md:text-xl px-10 py-7 rounded-xl 
                  transition-all duration-400 flex items-center gap-3 group
                "
              >
                <MessageCircle size={26} className="group-hover:scale-110 transition-transform" />
                Speak with an Expert
              </Button>
            </motion.div>
          </div>

          {/* Trust signals / small footer text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 text-base md:text-lg text-[#e8f5e9]/70"
          >
            ✓ 100% UAE-based team • ✓ Sustainable & water-efficient designs • ✓ 5+ years transforming Dubai landscapes
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;