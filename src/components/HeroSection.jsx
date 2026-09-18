import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Leaf, TreePine, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import DynamicTextAgriculture from './DynamicTextAgriculture';
import DynamicTextLandscaping from './DynamicTextLandscaping';
import main from '../assets/Agriculture/greenhouses/main.jpg';
import landscaping from '../assets/Landscaping/planters/landscaping.png';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] overflow-hidden">
      <div className="grid md:grid-cols-2 h-full">
        {/* Left Panel - Agriculture */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#133820] via-[#1a4d2e] to-[#2d5f3f] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start text-white min-h-[440px] md:min-h-[700px] border-b md:border-b-0 md:border-r border-white/10"
        >
          {/* Background Image with Dark Vignette Overlay */}
          <div className="absolute inset-0 opacity-25">
            <img
              alt="Growing plants and agricultural greenhouse facilities"
              className="w-full h-full object-cover"
              src={main}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#133820] via-transparent to-[#133820]/40 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 max-w-xl w-full">
            {/* Top Division Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#90b77d] uppercase tracking-wider mb-4"
            >
              <Leaf size={14} className="text-[#90b77d]" />
              <span>{isRTL ? 'التقنيات والحلول الزراعية التجارية' : 'Commercial Agriculture & AgTech'}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 leading-[1.15] tracking-tight"
            >
              {isRTL ? 'المنتجات والهندسة الزراعية' : 'Agriculture Products & Engineering'}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg mb-6 text-[#e8f5e9]/90 font-light leading-relaxed max-w-lg"
            >
              {isRTL
                ? 'حلول متكاملة للبيوت المحمية، شبكات الري الذكية في بيئة الصحراء، مستلزمات المشاتل، تقنيات توفير المياه ومعدات المزارع في الإمارات.'
                : 'Advanced turnkey systems for commercial greenhouses, smart desert irrigation, nursery equipment, water-saving tech & farm machinery across the UAE.'}
            </motion.p>

            {/* Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6"
            >
              <Button
                onClick={() => navigate('/agriculture')}
                size="lg"
                className="bg-[#90b77d] hover:bg-[#a3c990] text-[#133820] font-bold text-base md:text-lg px-7 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>{isRTL ? 'استكشف الحلول الزراعية' : 'Explore Agriculture'}</span>
                <ArrowRight size={18} className={`transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Button>
            </motion.div>

            {/* Typing dynamic preview badge */}
            <div className="px-4 py-2.5 rounded-xl border border-white/10 max-w-md mb-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#90b77d] flex items-center gap-1.5 mb-1">
                <Sparkles size={12} />
                <span>{isRTL ? 'حلول متخصصة:' : 'Specialized Solutions:'}</span>
              </div>
              <DynamicTextAgriculture />
            </div>

            {/* Sub-Category Quick Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-xs text-white/60 font-medium">{isRTL ? 'روابط سريعة:' : 'Quick Access:'}</span>
              <Link
                to="/agriculture/greenhouses"
                className="text-xs text-[#e8f5e9] hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md transition-colors"
              >
                {t('sectors.agriculture.greenhouses.name')}
              </Link>
              <Link
                to="/agriculture/irrigation"
                className="text-xs text-[#e8f5e9] hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md transition-colors"
              >
                {t('sectors.agriculture.irrigation.name')}
              </Link>
              <Link
                to="/agriculture/water-saving"
                className="text-xs text-[#e8f5e9] hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md transition-colors"
              >
                {t('sectors.agriculture.waterSaving.name')}
              </Link>
              <Link
                to="/agriculture/planter-pots"
                className="text-xs text-[#e8f5e9] hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md transition-colors"
              >
                {t('sectors.agriculture.planterPots.name')}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Panel - Landscaping */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#3b4c1f] via-[#4d6325] to-[#6b8e23] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start text-white min-h-[440px] md:min-h-[700px]"
        >
          {/* Background Image with Dark Vignette Overlay */}
          <div className="absolute inset-0 opacity-25">
            <img
              alt="Professional urban landscape design and planter installations"
              className="w-full h-full object-cover"
              src={landscaping}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c3917] via-transparent to-[#2c3917]/40 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 max-w-xl w-full">
            {/* Top Division Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#c8d8b4] uppercase tracking-wider mb-4"
            >
              <TreePine size={14} className="text-[#c8d8b4]" />
              <span>{isRTL ? 'تنسيق وتصميم المساحات الخضراء' : 'Urban Landscaping & Design'}</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 leading-[1.15] tracking-tight"
            >
              {isRTL ? 'تنسيق الحدائق والمساحات العصرية' : 'Urban Landscaping & Living'}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg mb-6 text-[#f1f8e9]/90 font-light leading-relaxed max-w-lg"
            >
              {isRTL
                ? 'تحويل الفلل، الأبراج التجارية، الشرفات والمساحات العامة إلى واحات خضراء مستدامة موفرة للمياه ومصممة لمناخ الخليج.'
                : 'Transforming villas, commercial developments, balconies, and urban spaces into lush, sustainable, water-wise environments engineered for the desert climate.'}
            </motion.p>

            {/* Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6"
            >
              <Button
                onClick={() => navigate('/landscaping')}
                size="lg"
                className="bg-[#c8d8b4] hover:bg-[#d8e8c4] text-[#1a4d2e] font-bold text-base md:text-lg px-7 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>{isRTL ? 'استكشف خدمات الحدائق' : 'Explore Landscaping'}</span>
                <ArrowRight size={18} className={`transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Button>
            </motion.div>

            {/* Typing dynamic preview badge */}
            <div className="px-4 py-2.5 rounded-xl border border-white/10 max-w-md mb-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#c8d8b4] flex items-center gap-1.5 mb-1">
                <Sparkles size={12} />
                <span>{isRTL ? 'حلول متخصصة:' : 'Specialized Solutions:'}</span>
              </div>
              <DynamicTextLandscaping />
            </div>

            {/* Sub-Category Quick Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-xs text-white/60 font-medium">{isRTL ? 'روابط سريعة:' : 'Quick Access:'}</span>
              <Link
                to="/landscaping/water-saving"
                className="text-xs text-[#f1f8e9] hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md transition-colors"
              >
                {t('sectors.landscaping.waterSaving.name')}
              </Link>
              <Link
                to="/landscaping/balcony"
                className="text-xs text-[#f1f8e9] hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md transition-colors"
              >
                {t('sectors.landscaping.balcony.name')}
              </Link>
              <Link
                to="/landscaping/planters"
                className="text-xs text-[#f1f8e9] hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md transition-colors"
              >
                {t('sectors.landscaping.planters.name')}
              </Link>
              <Link
                to="/landscaping/outdoor-living"
                className="text-xs text-[#f1f8e9] hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md transition-colors"
              >
                {t('sectors.landscaping.outdoorLiving.name')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
