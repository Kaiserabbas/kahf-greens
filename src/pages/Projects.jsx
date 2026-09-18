import UniversalBackButton from '../components/UniversalBackButton';
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, MessageCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Luxury Residential Villa Garden',
    description:
      'Complete landscape design and implementation for a premium villa — featuring sustainable drip irrigation, climate-resilient native planting, shaded seating areas and custom stone pathways.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070',
    location: 'Emirates Hills, Dubai',
    year: '2024',
    category: 'Residential',
  },
  {
    id: 2,
    title: 'Campus Green Spaces & Tree Plantation',
    description:
      'Large-scale campus landscaping including tree planting, shaded walkways, and low-maintenance drought-tolerant green spaces. Fully automated irrigation system installed across 3 hectares.',
    image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=2070',
    location: 'University District, Sharjah',
    year: '2023',
    category: 'Educational',
  },
  {
    id: 3,
    title: 'Commercial Plaza Green Walls & Planters',
    description:
      'Supplied and installed decorative outdoor planters, indoor tropical arrangements, and a feature living green wall for a premium commercial complex.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=2070',
    location: 'Al Reem Island, Abu Dhabi',
    year: '2024',
    category: 'Commercial',
  },
  {
    id: 4,
    title: 'Private Farm Greenhouse & Irrigation',
    description:
      'Designed and installed a complete greenhouse complex with cooling pad system, shade netting, and smart drip irrigation for a private date palm and vegetable farm.',
    image: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&q=80&w=2070',
    location: 'Al Ain, Abu Dhabi',
    year: '2023',
    category: 'Agriculture',
  },
  {
    id: 5,
    title: 'Public Park Urban Greening Initiative',
    description:
      'Government-commissioned urban greening project — native tree installation, grass cover, public seating areas with shade structures, and water-efficient irrigation infrastructure.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2070',
    location: 'Ras Al Khaimah',
    year: '2024',
    category: 'Government',
  },
  {
    id: 6,
    title: 'Beachfront Resort Landscaping',
    description:
      'Coastal landscaping for a 5-star resort featuring salt-tolerant plant species, outdoor dining garden zones, and sustainable maintenance systems designed for the UAE coastal environment.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2070',
    location: 'Fujairah Beach',
    year: '2023',
    category: 'Hospitality',
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Our Projects | Kahf Greens – UAE Landscaping & Agriculture Portfolio</title>
        <meta
          name="description"
          content="Explore Kahf Greens' portfolio of landscaping and agriculture projects across Dubai, Abu Dhabi, Sharjah and the UAE — residential, commercial, government and agricultural."
        />
        <meta name="keywords" content="landscaping projects UAE, garden design portfolio Dubai, greenhouse installation UAE, irrigation projects, commercial landscaping" />
        <link rel="canonical" href="https://kahfgreens.com/projects" />
        <meta property="og:title" content="Our Projects | Kahf Greens – UAE Landscaping Portfolio" />
        <meta property="og:description" content="Explore transformative landscaping and agriculture projects across the UAE." />
        <meta property="og:url" content="https://kahfgreens.com/projects" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2400"
            alt="Luxury sustainable landscape"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="mb-6 flex justify-center sm:justify-start">
            <UniversalBackButton label="Back" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Our Signature Projects
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 font-light max-w-4xl mx-auto">
              Transforming UAE spaces with sustainable design, premium craftsmanship, and climate-resilient solutions — from luxury villas to public landmarks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100/50"
              >
                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title + ' – ' + project.category + ' project by Kahf Greens'}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"

                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-block px-4 py-1.5 bg-emerald-700/90 text-white text-sm font-medium rounded-full backdrop-blur-sm shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Year & Location Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between text-white text-sm font-medium">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span className="truncate max-w-[140px]">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <h3 className="text-xl md:text-2xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-5 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <Button
                    onClick={() => navigate('/contact')}
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all rounded-xl text-sm"
                  >
                    <MessageCircle size={15} className="mr-2" />
                    Request a Similar Project
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2400"
            alt="Sustainable green landscape"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-3xl mx-auto mb-10 font-light">
              Let's bring your vision to life with sustainable, high-end landscaping and agriculture solutions across the UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-white text-emerald-950 hover:bg-emerald-50 px-10 py-6 text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get a Free Quote
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <a
                href="https://wa.me/971565096880"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-emerald-950 px-10 py-6 text-lg rounded-full transition-all duration-300 font-semibold"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
