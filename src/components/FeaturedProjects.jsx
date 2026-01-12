import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'Farms & Nurseries',
      description: 'Large-scale agricultural and nursery projects',
      image: 'Modern farm with organized rows of plants and greenhouse structures'
    },
    {
      title: 'City Landscaping',
      description: 'Urban green spaces and municipal projects',
      image: 'Beautiful city park with walking paths and green landscaping'
    },
    {
      title: 'Residential Gardens',
      description: 'Private homes and villa communities',
      image: 'Luxurious residential garden with manicured lawn and elegant plants'
    },
    {
      title: 'Commercial Spaces',
      description: 'Corporate campuses and business parks',
      image: 'Modern office building with professional landscaping and green spaces'
    },
    {
      title: 'Government Initiatives',
      description: 'Public sector sustainability projects',
      image: 'Government building with sustainable landscaping and native plants'
    },
    {
      title: 'Educational Institutions',
      description: 'Schools and universities green spaces',
      image: 'University campus with beautiful gardens and outdoor study areas'
    }
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#2d5f3f] max-w-2xl mx-auto">
            Transforming the UAE landscape one project at a time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e] to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#2d5f3f]">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;