import React from 'react';
import { motion } from 'framer-motion';
import { Award, ThumbsUp, MapPin, Droplets, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import shop from "../assets/shop.jpg";

const stats = [
  {
    icon: Award,
    value: '20+',
    label: 'Years in the UAE',
    description: 'Pioneering desert-adapted greenery and agricultural innovation across the Emirates since 2004.',
  },
  {
    icon: Droplets,
    value: 'Up to 50%',
    label: 'Water Reduction',
    description: 'Smart automated drip, micro-sprinklers, and xeriscaping methods that conserve vital resources.',
  },
  {
    icon: MapPin,
    value: '7 Emirates',
    label: 'Complete Coverage',
    description: 'Direct logistics, site installation, and support from Abu Dhabi to Ras Al Khaimah and Fujairah.',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Municipality Compliant',
    description: 'Trusted by Dubai Municipality, DEWA, SEWA, Dubai South, and leading master developers.',
  },
];

const pillars = [
  {
    title: 'Desert-Adapted Horticulture',
    description: 'Decades of selecting, acclimatizing, and propagating plant varieties proven to thrive in extreme arid conditions.',
  },
  {
    title: 'Water Conservation Engineering',
    description: 'Smart weather-responsive irrigation, subsurface systems, and water-retaining polymers that maximize growth while cutting waste.',
  },
  {
    title: 'Turnkey Commercial & Residential',
    description: 'End-to-end capabilities from initial landscape architecture to high-pressure agricultural pumping and seasonal maintenance.',
  },
  {
    title: 'UAE Regulatory Excellence',
    description: 'Full municipal approvals, environmental compliance, and safety standards for government and master-developer scale projects.',
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#1a4d2e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-emerald-600" />
            <span>Pioneering Sustainable Greenery Since 2004</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a4d2e] tracking-tight mb-6">
            Crafting the UAE’s Green Legacy
            <br className="hidden sm:block" />
            for Over Two Decades
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            What began as a passion for desert-adapted horticulture has evolved into one of the UAE’s premier names in sustainable landscaping and commercial agriculture.
            For more than 20 years, we have helped transform challenging arid environments into vibrant, water-wise sanctuaries.
          </p>
        </motion.div>

        {/* Statistics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="bg-white rounded-2xl shadow-md p-6 sm:p-7 text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 flex justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] shadow-md text-white">
                    <stat.icon size={32} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-[#1a4d2e] mb-2 tracking-tight">
                  {stat.value}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Pillars Grid & Feature Box */}
        <div className="bg-emerald-950/5 border border-emerald-900/10 rounded-3xl p-6 sm:p-10 lg:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1a4d2e] mb-3">
              Why Government Entities & Developers Choose Us
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Engineered specifically for the Arabian Gulf climate, combining rigorous horticulture science with Swiss-precision execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-white p-6 rounded-2xl border border-emerald-900/5 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 flex-shrink-0 mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA to full About page */}
          <div className="mt-10 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base group"
            >
              <span>Explore Our 20-Year UAE Story & Methodology</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Big Facility Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-emerald-950"
        >
          <img
            src={shop}
            alt="Kahf Greens nursery facilities, team and sustainable growing operations in the UAE"
            loading="lazy"
            decoding="async"
            className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
          />

          {/* Overlay caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none flex items-end">
            <div className="p-6 sm:p-10 lg:p-12 text-white max-w-3xl">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-3">
                Ras Al Khor Distribution & Growing Center
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow-md leading-relaxed">
                Our facilities, skilled agronomists, and 20-year local commitment form the foundation behind every thriving green space we engineer across the Emirates.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
