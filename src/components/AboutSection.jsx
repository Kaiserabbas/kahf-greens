import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, MapPin } from 'lucide-react'; // Changed Globe → MapPin for UAE-specific feel
import shop from '../assets/shop.png';

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
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9]">
      <div className="container mx-auto px-5 md:px-8 lg:px-12">
        {/* Header / Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a4d2e] tracking-tight mb-6">
            Crafting the UAE’s Green Legacy for Over Two Decades
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            What began as a passion for desert-friendly greenery has grown into the UAE’s most trusted name in sustainable landscaping and agriculture. 
            For more than 20 years, we’ve transformed arid landscapes into thriving oases — blending innovation, native resilience, and timeless beauty to create environments that inspire and endure.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative"
            >
              <div className="
                bg-white rounded-2xl shadow-xl p-8 md:p-10 text-center 
                transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3
                border border-gray-100
              ">
                <div className="mb-6 inline-flex">
                  <div 
                    className="p-5 rounded-2xl shadow-md transition-transform duration-400 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, #1a4d2e 0%, #2d5f3f 100%)`,
                    }}
                  >
                    <stat.icon size={48} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="text-5xl md:text-6xl font-bold text-[#1a4d2e] mb-3 group-hover:text-[#2d5f3f] transition-colors">
                  {stat.value}
                </div>
                <h3 className="text-2xl font-semibold text-[#1a4d2e] mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-base">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Showcase Image – Team / Nursery / Facilities */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={shop}
            alt="Kahf Greens state-of-the-art nursery, team, and sustainable landscaping facilities in the UAE"
            className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          {/* Optional subtle overlay text / caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end">
            <div className="p-8 md:p-12 text-white">
              <p className="text-xl md:text-2xl font-medium max-w-3xl">
                Our dedicated team and advanced facilities — the foundation behind every exceptional green space we create.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;