import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Farms & Nurseries',
    category: 'Agriculture',
    description: 'Large-scale agricultural projects & premium nurseries across the UAE',
    image: 'https://images.unsplash.com/photo-1500384066616-8a8d547abfc9?auto=format&fit=crop&q=80', // Modern greenhouse / farm rows
  },
  {
    title: 'City Landscaping',
    category: 'Urban',
    description: 'Green public spaces, roundabouts & municipal beautification projects',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80', // Urban park / greenery in city
  },
  {
    title: 'Residential Gardens',
    category: 'Residential',
    description: 'Luxury villa gardens, private estates & community landscapes',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', // Luxury villa garden/pool
  },
  {
    title: 'Commercial Spaces',
    category: 'Commercial',
    description: 'Corporate headquarters, business parks & office greenery',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073', // Modern building with landscaping
  },
  {
    title: 'Government Initiatives',
    category: 'Public Sector',
    description: 'Sustainable public parks, government buildings & eco-projects',
    image: 'https://cd1.mediaoffice.ae/-/media/2025/july/13-07/12/4e70eda8-b05c-4899-90c8-eb6e6a460ca4.jpg?h=864&iar=0&w=1600&hash=493517EA4DEC8F4014E293859F8F4197', // Sustainable green public space
  },
  {
    title: 'Educational Institutions',
    category: 'Education',
    description: 'University campuses, school gardens & learning environments',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_apdhOGqyamdD9NcXurSBpDlY00290SzhDw&s", // University campus with greenery
  },];

const FeaturedProjects = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9]">
      <div className="container mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a4d2e] tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-5 text-lg md:text-xl text-[#4b5563] max-w-3xl mx-auto font-light">
            Transforming UAE landscapes with sustainable beauty and innovation — from desert farms to luxury estates
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white h-full flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Image + Overlay */}
                <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-80" />

                  {/* Category badge */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-block px-4 py-1.5 bg-[#90b77d]/90 text-white text-sm font-medium rounded-full backdrop-blur-sm shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#1a4d2e] mb-3 group-hover:text-[#2d5f3f] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#4b5563] text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* CTA - appears on hover */}
                 {/* <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                    <button className="inline-flex items-center px-6 py-3 bg-[#1a4d2e] text-white font-medium rounded-lg hover:bg-[#2d5f3f] transition-colors shadow-md">
                      View Project
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div> */}
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