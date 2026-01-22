import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, MapPin } from 'lucide-react';
import shop from '../assets/shop.jpg';

const stats = [
  {
    icon: Award,
    value: '20+',
    label: 'Years of Excellence',
    description: 'Pioneering sustainable landscaping across the Emirates since the early 2000s',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Satisfied Clients',
    description: 'From luxury villas to government projects — trusted by Dubai’s finest',
  },
  {
    icon: MapPin,
    value: 'UAE-Wide',
    label: 'Coverage',
    description: 'Delivering premium services from Abu Dhabi to Ras Al Khaimah',
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-950 tracking-tight mb-5 md:mb-6">
            Crafting the UAE’s Green Legacy
            <br className="hidden sm:block" />
            for Over Two Decades
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
            What began as a passion for desert-adapted greenery has evolved into one of the UAE’s most respected names in sustainable landscaping and horticulture.
            <br className="hidden md:block" />
            For more than 20 years we have turned challenging environments into vibrant, water-wise landscapes — combining innovation, native species knowledge and uncompromising quality.
          </p>
        </motion.div>

        {/* Statistics cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.15,
                ease: 'easeOut',
              }}
            >
              <div className="
                bg-white rounded-2xl shadow-lg p-7 sm:p-9 text-center
                border border-slate-100 hover:shadow-xl transition-all duration-400
                hover:-translate-y-1.5
              ">
                <div className="mb-6 flex justify-center">
                  <div
                    className="p-5 rounded-2xl shadow-sm"
                    style={{
                      background: 'linear-gradient(135deg, #1a4d2e 0%, #2d5f3f 100%)',
                    }}
                  >
                    <stat.icon size={44} className="text-white" strokeWidth={1.6} />
                  </div>
                </div>

                <div className="text-5xl sm:text-6xl font-bold text-emerald-950 mb-2">
                  {stat.value}
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-emerald-900 mb-3">
                  {stat.label}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-200px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-emerald-950/5"
        >
          <img
            src={shop}
            alt="Kahf Greens nursery facilities, team and sustainable growing operations in the UAE"
            loading="lazy"
            decoding="async"
            className="
              w-full 
              aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[5/3]
              object-contain object-center
              transition-transform duration-1000 ease-out
              hover:scale-[1.025]
            "
          />

          {/* Overlay caption – stronger theme integration */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-950/20 to-transparent pointer-events-none flex items-end">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-white">
              <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-4xl drop-shadow-md">
                Our people, our advanced skills, and our commitment — the true foundation behind every remarkable green space we create across the Emirates.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;