import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import dmLogo from '../assets/partners/dmLogo.png';
import dewaLogo from '../assets/partners/dewaLogo.jpg';
import sewaLogo from '../assets/partners/sewaLogo.png';
import dsLogo from '../assets/partners/dsLogo.svg';
import shjmunLogo from '../assets/partners/shjmunLogo.png';
import amLogo from '../assets/partners/amLogo.png';
import diezLogo from '../assets/partners/diezLogo.png';
import dsoLogo from '../assets/partners/dsoLogo.webp';
import { useLanguage } from '../contexts/LanguageContext';

const partnerLogos = [
  { name: 'Dubai Municipality', logo: dmLogo, category: 'Municipal Authority' },
  { name: 'DEWA', logo: dewaLogo, category: 'Water & Electricity' },
  { name: 'Sharjah Municipality', logo: shjmunLogo, category: 'Municipal Authority' },
  { name: 'Dubai South', logo: dsLogo, category: 'Master Developer' },
  { name: 'SEWA', logo: sewaLogo, category: 'Utilities Authority' },
  { name: 'Ajman Municipality', logo: amLogo, category: 'Municipal Authority' },
  { name: 'DIEZ', logo: diezLogo, category: 'Economic Zones' },
  { name: 'Dubai Silicon Oasis', logo: dsoLogo, category: 'Innovation Hub' },
];

const TrustBanner = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative bg-white border-y border-emerald-900/10 py-10 sm:py-12 overflow-hidden shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a4d2e]">
                {isRTL ? 'اعتماد وشراكات حكومية موثوقة' : 'Institutional Trust & Accreditation'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              {isRTL
                ? 'شركاء موثوقون لدى الهيئات الحكومية وكبرى شركات التطوير العقاري في الإمارات'
                : 'Trusted by Government Bodies & Leading Master Developers Across the UAE'}
            </h3>
          </div>

          <Link
            to="/partners"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4d2e] hover:text-[#2d5f3f] transition-colors group self-start md:self-auto"
          >
            <span>{isRTL ? 'عرض كافة اعتمادات الشركاء' : 'View All Partner Credentials'}</span>
            <ArrowRight size={16} className={`transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </Link>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center justify-items-center">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="w-full h-24 p-3 bg-gray-50/70 hover:bg-white rounded-xl border border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center group"
            >
              <div className="h-12 w-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-10 max-w-[90%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="text-[11px] font-medium text-gray-500 group-hover:text-[#1a4d2e] text-center mt-1 truncate max-w-full transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Credential Micro Badges */}
        <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
            <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
            <span>{isRTL ? 'خبرة تفوق 20 عاماً في الإمارات' : '20+ Years UAE Experience'}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
            <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />
            <span>{isRTL ? 'معتمد رسمياً لدى البلديات' : 'Municipality Approved'}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
            <Award size={16} className="text-emerald-600 flex-shrink-0" />
            <span>{isRTL ? 'تغطية شاملة للإمارات السبع' : '7 Emirates Coverage'}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
            <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
            <span>{isRTL ? 'تقنيات ري ذكية وموفرة للمياه' : 'Water-Smart Technologies'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
