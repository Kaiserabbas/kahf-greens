import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, TreeDeciduous, Droplets } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: 'Planting',
    description:
      'Expert installation of trees, palms, shrubs and ground covers tailored to the UAE’s unique climate — ensuring long-term vitality and aesthetic harmony.',
    color: '#1a4d2e',
    bgImage:
      'https://cdn11.bigcommerce.com/s-ljo0upzvqc/product_images/uploaded_images/xeriscaping-with-large-boulders.png', // desert planting example
  },
  {
    icon: TreeDeciduous,
    title: 'Growing',
    description:
      'State-of-the-art nursery operations producing premium, climate-adapted plants — from date palms to drought-tolerant exotics — using sustainable cultivation methods.',
    color: '#2d5f3f',
    bgImage:
      'https://www.gulfagriculture.com/wp-content/uploads/2024/06/20230913_160333.jpg', // date palm nursery
  },
  {
    icon: Droplets,
    title: 'Saving',
    description:
      'Advanced water-smart irrigation, xeriscaping principles and resource-efficient designs that dramatically reduce consumption while preserving lush, year-round beauty.',
    color: '#556b2f',
    bgImage:
      'https://cactuslap.com/wp-content/uploads/2025/04/DSCF8956-1024x683.jpg', // drip irrigation in desert
  },
];

const PlantingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="container mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a4d2e] tracking-tight">
            Planting <span className="text-[#90b77d]">·</span> Growing <span className="text-[#90b77d]">·</span> Saving
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Our integrated philosophy delivers sustainable, beautiful landscapes built to thrive in the UAE's demanding environment.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                className="group relative"
              >
                <div
                  className={`
                    relative overflow-hidden rounded-2xl shadow-xl bg-white h-full 
                    transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3
                    border border-gray-100
                  `}
                >
                  {/* Subtle background image overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity duration-700"
                    style={{ backgroundImage: `url(${feature.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95" />

                  <div className="relative p-8 md:p-10 flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <div
                      className="mb-8 p-6 rounded-2xl transition-all duration-400 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}cc 100%)`,
                      }}
                    >
                      <Icon size={56} className="text-white" strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a4d2e] mb-5 group-hover:text-[#2d5f3f] transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlantingSection;