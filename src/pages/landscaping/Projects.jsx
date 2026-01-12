import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Dubai Marina Residential Complex",
      description: "Complete landscape transformation of a luxury residential complex featuring sustainable irrigation systems, native plant species, and modern outdoor living spaces.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      location: "Dubai Marina, Dubai",
      year: "2024",
      category: "Residential"
    },
    {
      id: 2,
      title: "Sharjah University Campus",
      description: "Extensive campus landscaping project including tree planting, green spaces, walking paths, and water-efficient landscaping solutions for educational environment.",
      image: "https://images.unsplash.com/photo-1572177812156-58036aae439c",
      location: "Sharjah University, Sharjah",
      year: "2023",
      category: "Educational"
    },
    {
      id: 3,
      title: "Abu Dhabi Mall Landscape",
      description: "Commercial landscaping for major shopping mall including decorative planters, outdoor seating areas, and sustainable green walls throughout the complex.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
      location: "Abu Dhabi Mall, Abu Dhabi",
      year: "2024",
      category: "Commercial"
    },
    {
      id: 4,
      title: "Palm Jumeirah Villa Gardens",
      description: "Private villa landscaping with Mediterranean-style gardens, swimming pool surrounds, and automated irrigation systems for luxury residential property.",
      image: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda",
      location: "Palm Jumeirah, Dubai",
      year: "2023",
      category: "Residential"
    },
    {
      id: 5,
      title: "Ras Al Khaimah Government Complex",
      description: "Large-scale government landscaping project featuring native plant species, water conservation systems, and public green spaces for community use.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      location: "Ras Al Khaimah Government Complex",
      year: "2024",
      category: "Government"
    },
    {
      id: 6,
      title: "Fujairah Beach Resort",
      description: "Beachfront resort landscaping with coastal vegetation, outdoor dining areas, and sustainable landscaping practices for tourism industry.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      location: "Fujairah Beach Resort",
      year: "2023",
      category: "Hospitality"
    }
  ];

  const handleViewDetails = (projectId) => {
    // For now, navigate to contact page. In a real app, this would go to project details
    navigate('/contact');
  };

  return (
    <>
      <Helmet>
        <title>Our Projects | Kahf Greens</title>
        <meta name="description" content="Explore our portfolio of successful landscaping and agriculture projects across the UAE. From residential gardens to commercial developments." />
      </Helmet>

      {/* Header */}
      <section className="bg-[#1a4d2e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <p className="text-xl text-[#e8f5e9] max-w-3xl mx-auto">
            Discover our portfolio of transformative landscaping projects across the UAE, showcasing our commitment to sustainable, beautiful outdoor spaces.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e] to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1a4d2e] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a4d2e] mb-3 group-hover:text-[#2d5f3f] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-[#2d5f3f] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-[#556b2f] mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleViewDetails(project.id)}
                    className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] group-hover:bg-[#2d5f3f] transition-colors duration-300"
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

      {/* CTA Section */}
      <section className="py-20 bg-[#f1f8e9]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d2e] mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-[#2d5f3f] mb-8">
              Let's discuss your vision and create something extraordinary together. Our team of experts is ready to bring your landscaping dreams to life.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-[#1a4d2e] hover:bg-[#2d5f3f] text-lg px-8 py-6"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
