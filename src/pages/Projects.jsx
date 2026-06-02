import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, ArrowRight, ChevronLeft } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dubai Marina Residential Complex",
    description:
      "Complete landscape transformation of a luxury residential complex featuring sustainable irrigation systems, native plant species, and modern outdoor living spaces.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070",
    location: "Dubai Marina, Dubai",
    year: "2024",
    category: "Residential",
  },
  {
    id: 2,
    title: "Sharjah University Campus",
    description:
      "Extensive campus landscaping project including tree planting, green spaces, walking paths, and water-efficient landscaping solutions for educational environment.",
    image:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=2070",
    location: "Sharjah University, Sharjah",
    year: "2023",
    category: "Educational",
  },
  {
    id: 3,
    title: "Abu Dhabi Mall Landscape",
    description:
      "Commercial landscaping for major shopping mall including decorative planters, outdoor seating areas, and sustainable green walls throughout the complex.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=2070",
    location: "Abu Dhabi Mall, Abu Dhabi",
    year: "2024",
    category: "Commercial",
  },
  {
    id: 4,
    title: "Palm Jumeirah Villa Gardens",
    description:
      "Private villa landscaping with Mediterranean-style gardens, swimming pool surrounds, and automated irrigation systems for luxury residential property.",
    image:
      "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&q=80&w=2070",
    location: "Palm Jumeirah, Dubai",
    year: "2023",
    category: "Residential",
  },
  {
    id: 5,
    title: "Ras Al Khaimah Government Complex",
    description:
      "Large-scale government landscaping project featuring native plant species, water conservation systems, and public green spaces for community use.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2070",
    location: "Ras Al Khaimah Government Complex",
    year: "2024",
    category: "Government",
  },
  {
    id: 6,
    title: "Fujairah Beach Resort",
    description:
      "Beachfront resort landscaping with coastal vegetation, outdoor dining areas, and sustainable landscaping practices for tourism industry.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2070",
    location: "Fujairah Beach Resort",
    year: "2023",
    category: "Hospitality",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Our Projects | Kahf Greens – Premium UAE Landscaping</title>
        <meta
          name="description"
          content="Explore Kahf Greens' portfolio of transformative landscaping projects across Dubai, Abu Dhabi, Sharjah, and beyond — residential, commercial, educational, and government spaces."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400"
            alt="Luxury sustainable landscape in UAE"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-8 text-white/80 hover:text-white hover:bg-white/10 transition-all -ml-4"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
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
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100/50"
              >
                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} – ${project.category} project by Kahf Greens`}
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
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-4 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <Button
                    onClick={() => navigate("/contact")}
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all rounded-xl"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-2" />
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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400"
            alt="Sustainable green landscape"
            className="w-full h-full object-cover"
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
              Let's bring your vision to life with sustainable, high-end landscaping that stands the test of time.
            </p>

            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto bg-white text-emerald-950 hover:bg-emerald-50 px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
