import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, X, ChevronLeft, ChevronRight, ZoomIn, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import UniversalBackButton from '../components/UniversalBackButton';
import { allProjects } from '../data/projectsData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find((p) => p.slug === slug);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  // Close lightbox on ESC
  const handleKeyDown = useCallback((e) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') setLightboxIndex(null);
    if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % project.images.length);
    if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + project.images.length) % project.images.length);
  }, [lightboxIndex, project]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleImgLoad = (idx) => setLoadedImages((prev) => ({ ...prev, [idx]: true }));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-emerald-950">Project not found</h1>
        <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
      </div>
    );
  }

  const images = project.images || [project.coverImage];

  return (
    <>
      <Helmet>
        <title>{project.title} | Kahf Greens Projects</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://kahfgreens.com/projects/${project.slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-50"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10 pb-12 pt-28">
          <div className="mb-6">
            <UniversalBackButton label="All Projects" fallbackPath="/projects" />
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-4 py-1.5 bg-emerald-600/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-4xl"
          >
            {project.title}
          </motion.h1>
          <div className="flex flex-wrap gap-5 text-white/80 text-sm font-medium">
            <span className="flex items-center gap-1.5"><MapPin size={14} />{project.location}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} />{project.year}</span>
            <span className="text-emerald-300">{images.length} photos</span>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-4xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            {project.description}
          </p>
          {project.longDescription && (
            <p className="text-base text-gray-600 leading-relaxed">
              {project.longDescription}
            </p>
          )}
          <div className="mt-8">
            <Button
              onClick={() => navigate('/contact')}
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-5 rounded-full text-base"
            >
              <MessageCircle size={16} className="mr-2" />
              Request a Similar Project
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 bg-emerald-50/30">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-8">Project Gallery</h2>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: (idx % 12) * 0.04 }}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                onClick={() => setLightboxIndex(idx)}
              >
                {!loadedImages[idx] && (
                  <div className="w-full h-40 bg-emerald-100 animate-pulse rounded-xl" />
                )}
                <img
                  src={src}
                  alt={`${project.title} – photo ${idx + 1}`}
                  className={`w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 ${loadedImages[idx] ? 'block' : 'hidden'}`}
                  loading="lazy"
                  onLoad={() => handleImgLoad(idx)}
                  onError={() => handleImgLoad(idx)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={32} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + images.length) % images.length); }}
            >
              <ChevronLeft size={42} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={images[lightboxIndex]}
              alt={`${project.title} photo ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % images.length); }}
            >
              <ChevronRight size={42} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;
