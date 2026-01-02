import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Award, label: '20+ Years', description: 'Of Excellence' },
    { icon: Users, label: '500+', description: 'Happy Clients' },
    { icon: Globe, label: 'UAE Wide', description: 'Coverage' }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a4d2e] mb-6">
            20+ Years Supporting Greener UAE Landscapes
          </h2>
          <p className="text-lg md:text-xl text-[#2d5f3f] max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming the UAE's trusted partner in sustainable landscaping, 
            we've dedicated over two decades to transforming spaces into thriving green environments. 
            Our commitment to quality, sustainability, and innovation has helped shape the green landscape of the Emirates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#1a4d2e] p-4 rounded-full">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-[#1a4d2e] mb-2">{stat.label}</h3>
                <p className="text-[#2d5f3f]">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <img alt="Kahf Greens team and facilities" className="w-full h-[400px] object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1703001716301-c684d501f9a7" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;