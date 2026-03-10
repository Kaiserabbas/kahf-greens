import React from 'react';
import { motion } from 'framer-motion';
import farm from '../assets/farm.jpg';
import largepot from '../assets/largepot.jpg';
import commercial from '../assets/commercial.webp';
import sustainable from '../assets/sustainable.webp';
import tree1 from '../assets/Landscaping/New/tree 1.jpg';

const projects = [
  {
    title: 'Greenhouse - Cooling Pads',
    category: 'Agriculture',
    description: 'High Quality pads for efficient cooling for a large Greenhouse operator. Complete with coating to avoid limescale build up',
    image: farm,
  },
  {
    title: 'Nursery - Large Planter Pots',
    category: 'Agriculture',
    description: 'Superior devices to enhance Date Palm pollination and increase fruit bearing capability while eliminating manual labour',
    image: largepot, 
  },
  {
    title: 'Farms - Date Palm Pollination',
    category: 'Agriculture',
    description: 'Superior devices to enhance Date Palm pollination and increase fruit bearing capability while eliminating manual labour',
    image: 'https://greenorky.com/wp-content/uploads/2022/03/palm.jpeg', 
  },
  {
    title: 'Grass Cover',
    category: 'Landscaping',
    description: 'Superior Paspalum grass for landscapes in city and mountain areas of UAE to enhance the green cover',
    image: commercial, 
  },
  {
    title: 'Plant Supports',
    category: 'Landscaping',
    description: 'Robust ties and chain lock supports for small plants and trees around UAE landscapes to prevent against strong winds and enhances plant growth',
    image: sustainable, 
  },
  {
    title: 'Tree Plantation',
    category: 'Landscaping',
    description: 'Tree plantation and maintenance for Dubai Municipality at Mamzar Beach in the UAE to enhance the green cover and provide shade for visitors',
    image: tree1,
  
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