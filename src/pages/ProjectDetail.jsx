import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, X, ChevronLeft, ChevronRight, ZoomIn, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import UniversalBackButton from '../components/UniversalBackButton';
import { allProjects, getTranslatedProject } from '../data/projectsData';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  const rawProject = allProjects.find((p) => p.slug === slug);
  const project = getTranslatedProject(rawProject, isRTL);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Close lightbox on ESC
  const handleKeyDown = useCallback((e) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') setLightboxIndex(null);
    if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % (project?.images?.length || 1));
    if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + (project?.images?.length || 1)) % (project?.images?.length || 1));
  }, [lightboxIndex, project]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-emerald-950">{isRTL ? 'المشروع غير موجود' : 'Project not found'}</h1>
        <Button onClick={() => navigate('/projects')}>{isRTL ? 'العودة إلى المشاريع' : 'Back to Projects'}</Button>
      </div>
    );
  }

  const images = project.images || [project.coverImage];

  return (
    <>
      <Helmet>
        <title>{project.title} | Kahf Greens</title>
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
            <UniversalBackButton label={t('common.allProjects')} fallbackPath="/projects" />
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
            <span className="text-emerald-300">{images.length} {t('common.photos')}</span>
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
              <MessageCircle size={16} className={isRTL ? 'ml-2' : 'mr-2'} />
              {t('common.requestSimilar')}
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 bg-emerald-50/30">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-950">{t('projects.projectGallery')}</h2>
            <span className="text-sm font-medium text-emerald-800 bg-emerald-100/70 px-4 py-1.5 rounded-full w-fit">
              {isRTL ? `عرض ${images.length} صورة` : `Showing ${images.length} Photos`}
            </span>
          </div>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="break-inside-avoid mb-4 group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-emerald-100/40"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={src}
                  alt={`${project.title} – photo ${idx + 1}`}
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl flex items-center justify-center">
                  <div className="bg-black/50 backdrop-blur-sm text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox via Portal directly onto document.body to escape ancestor transforms */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {lightboxIndex !== null && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex flex-col justify-between items-center w-screen h-screen h-[100dvh] overflow-hidden select-none"
                onClick={() => setLightboxIndex(null)}
              >
                {/* Top header bar */}
                <div
                  className="w-full flex items-center justify-between px-4 sm:px-8 py-4 text-white z-50 bg-gradient-to-b from-black/80 to-transparent"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="text-sm sm:text-base font-medium text-white/90 truncate max-w-[70vw]">
                    {project.title} &middot;{' '}
                    <span className="text-emerald-400 font-semibold">{lightboxIndex + 1}</span> / {images.length}
                  </div>
                  <button
                    type="button"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all shadow-md cursor-pointer ml-4"
                    onClick={() => setLightboxIndex(null)}
                    aria-label="Close fullscreen view"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Left navigation arrow */}
                <button
                  type="button"
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all shadow-lg backdrop-blur-sm cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>

                {/* Central image display */}
                <div
                  className="flex-1 flex items-center justify-center w-full h-full max-w-7xl max-h-[82vh] max-h-[82dvh] px-4 sm:px-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.img
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    src={images[lightboxIndex]}
                    alt={`${project.title} photo ${lightboxIndex + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </div>

                {/* Right navigation arrow */}
                <button
                  type="button"
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all shadow-lg backdrop-blur-sm cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) => (i + 1) % images.length);
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Bottom hint bar */}
                <div
                  className="w-full pb-4 pt-2 text-center text-xs text-white/60 bg-gradient-to-t from-black/80 to-transparent z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t('projects.lightboxHint')}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default ProjectDetail;
