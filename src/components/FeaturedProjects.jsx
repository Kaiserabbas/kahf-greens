import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Tag, Sparkles, Images } from 'lucide-react';
import { Link } from 'react-router-dom';

import farm from '../assets/farm.jpg';
import largepot from '../assets/largepot.jpg';
import tree1 from '../assets/Landscaping/New/tree 1.jpg';
import orkey from '../assets/orkey.jpg';
import grass from '../assets/Landscaping/New/grass 1.jpg';
import plantsupport from '../assets/plantsupport.jpg';

const projects = [
  {
    id: 1,
    title: 'Greenhouse Climate & Cooling Pads',
    category: 'Agriculture',
    location: 'Al Ain, Abu Dhabi',
    scope: 'Commercial Farm',
    description: 'High-efficiency cellulose cooling pads and shade net integration for a major UAE commercial greenhouse operator, reducing internal temperatures by up to 12°C.',
    image: farm,
  },
  {
    id: 2,
    title: 'Commercial Nursery Planter Containers',
    category: 'Agriculture',
    location: 'Al Dhaid, Sharjah',
    scope: 'Agricultural Supply',
    description: 'Supplied 15,000+ heavy-duty UV-stabilized root-pruning pots to a leading regional nursery, boosting plant root architecture and handling efficiency.',
    image: largepot,
  },
  {
    id: 3,
    title: 'Automated Date Palm Pollination',
    category: 'Agriculture',
    location: 'Liwa Oasis, Abu Dhabi',
    scope: 'Farm Mechanization',
    description: 'Deployment of specialised mechanised pollination units across 500+ date palms, slashing labor costs by 70% while improving fruit yields.',
    image: orkey,
  },
  {
    id: 4,
    title: '1 JBR – Exterior Landscaping & Lighting',
    category: 'Landscaping',
    location: 'JBR, Dubai Marina, Dubai',
    scope: 'Luxury Residential',
    description: 'Full exterior soft & hard landscaping plus electrical lighting works for the iconic 1 JBR tower — planting beds, ornamental trees, pathways, and weatherproof lighting across the beachfront podium.',
    image: '/images/projects/1jbr-exteriors/1jbr-exteriors-000.jpg',
    slug: 'jbr-exterior',
  },
  {
    id: 5,
    title: '1 JBR – Interior Planting & Green Design',
    category: 'Landscaping',
    location: 'JBR, Dubai Marina, Dubai',
    scope: 'Luxury Residential',
    description: 'Bespoke interior soft-landscaping for lobbies, corridors and amenity spaces at 1 JBR — tropical species, custom planters and moss walls designed to complement the luxury interior.',
    image: '/images/projects/1jbr-interiors/1jbr-interiors-000.jpg',
    slug: 'jbr-interior',
  },
  {
    id: 6,
    title: 'JBR Murjan – Concrete Plinth & Pebble Works',
    category: 'Landscaping',
    location: 'JBR Murjan Walk, Dubai',
    scope: 'Commercial',
    description: 'Construction of robust concrete plinths, natural bench stones, and decorative pebble-wash finishes along the JBR Murjan beachfront promenade — built to withstand the UAE coastal environment.',
    image: '/images/projects/jbr-murjan-plinth/jbr-murjan-plinth-000.jpg',
    slug: 'jbr-murjan-plinth',
  },
  {
    id: 7,
    title: 'Drought-Tolerant Paspalum Turf',
    category: 'Landscaping',
    location: 'Dubai South, Dubai',
    scope: 'Urban Greening',
    description: 'Installation of high-salinity-tolerant Platinum TE Paspalum grass combined with sub-surface drip irrigation for wide public open spaces.',
    image: grass,
  },
  {
    id: 8,
    title: 'High-Wind Plant & Tree Stabilization',
    category: 'Landscaping',
    location: 'Palm Jumeirah, Dubai',
    scope: 'Coastal Landscaping',
    description: 'Heavy-duty chain-lock ties, tree stakes, and flexible supports engineered for coastal wind resistance, protecting newly planted specimen trees.',
    image: plantsupport,
  },
  {
    id: 9,
    title: 'Specimen Date Palm & Tree Avenue',
    category: 'Landscaping',
    location: 'Jumeirah Golf Estates, Dubai',
    scope: 'Luxury Residential',
    description: 'Curated selection and turnkey transplantation of 80+ mature specimen date palms creating a regal shaded pedestrian avenue with zero shock loss.',
    image: tree1,
  },
];

const FeaturedProjects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-slate-100/70 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#1a4d2e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-emerald-600" />
            <span>Proven UAE Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a4d2e] tracking-tight mb-4">
            Featured Projects & Implementations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            Transforming UAE landscapes and commercial agriculture with sustainable beauty and Swiss-precision execution.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-gray-200 shadow-sm">
            {['All', 'Landscaping', 'Agriculture'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  filter === category
                    ? 'bg-[#1a4d2e] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {category === 'All' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#1a4d2e] text-xs font-bold rounded-full shadow-sm">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-emerald-800/90 backdrop-blur-md text-white text-xs font-medium rounded-full shadow-sm">
                      {project.scope}
                    </span>
                  </div>

                  {/* Location badge */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-medium text-white/90 drop-shadow">
                    <MapPin size={13} className="text-[#90b77d]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a4d2e] mb-3 group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-gray-100">
                    {project.slug ? (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-emerald-50 hover:bg-[#1a4d2e] text-[#1a4d2e] hover:text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 group/btn"
                      >
                        <span className="flex items-center gap-1.5"><Images size={14} />View Photo Gallery</span>
                        <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-emerald-50 hover:bg-[#1a4d2e] text-[#1a4d2e] hover:text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 group/btn"
                      >
                        <span>Inquire About Similar Project</span>
                        <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Portfolio Link */}
        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-base font-bold text-[#1a4d2e] hover:text-[#2d5f3f] bg-white border border-gray-200 hover:border-emerald-300 shadow-sm hover:shadow-md px-7 py-3.5 rounded-xl transition-all duration-200 group"
          >
            <span>View All Completed UAE Projects in Full Gallery</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
