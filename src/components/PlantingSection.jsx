import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, TreeDeciduous, Droplets } from 'lucide-react';

const PlantingSection = () => {
  const features = [
    {
      icon: Sprout,
      title: 'Planting',
      description: 'Expert planting services for all types of landscapes, from residential gardens to large-scale commercial projects. We ensure every plant thrives in the UAE climate.',
      color: '#1a4d2e'
    },
    {
      icon: TreeDeciduous,
      title: 'Growing',
      description: 'Premium nursery facilities growing native and exotic plants suited for UAE conditions. Our sustainable growing practices ensure healthy, robust plants.',
      color: '#2d5f3f'
    },
    {
      icon: Droplets,
      title: 'Saving',
      description: 'Water-efficient irrigation systems and sustainable landscaping solutions that save resources while maintaining beautiful green spaces year-round.',
      color: '#556b2f'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Planting | Growing | Saving
          </h2>
          <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
            Our comprehensive approach to sustainable landscaping in the UAE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-[#f5f5f5] p-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-6">
                    <div 
                      className="p-6 rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: feature.color }}
                    >
                      <Icon size={48} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a4d2e] mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-[#2d5f3f] leading-relaxed text-center">
                    {feature.description}
                  </p>
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