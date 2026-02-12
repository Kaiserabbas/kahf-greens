import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header';
import HeaderAgriculture from './components/HeaderAgriculture';
import HeaderLandscaping from './components/HeaderLandscaping';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PlantingSection from './components/PlantingSection';
import FeaturedProjects from './components/FeaturedProjects';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

import LoadingSpinner from './components/LoadingSpinner';

import { Toaster } from './components/ui/toaster';

// Lazy load page components
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const Agriculture = React.lazy(() => import('./pages/Agriculture'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Landscaping = React.lazy(() => import('./pages/Landscaping'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Maintenance = React.lazy(() => import('./pages/landscaping/Maintenance'));
const NewServices = React.lazy(() => import('./pages/landscaping/NewServices'));
const Systems = React.lazy(() => import('./pages/landscaping/Systems'));
const WaterSaving = React.lazy(() => import('./pages/landscaping/WaterSaving'));
const WaterSavingAgriculture = React.lazy(() => import('./pages/agriculture/WaterSaving'));
const OutdoorLiving = React.lazy(() => import('./pages/landscaping/OutdoorLiving'));
const Planters = React.lazy(() => import('./pages/landscaping/Planters'));
const PlanterPots = React.lazy(() => import('./pages/agriculture/PlanterPots'));
const PlanterBags = React.lazy(() => import('./pages/agriculture/PlanterBags'));
const GreenHouses = React.lazy(() => import('./pages/agriculture/GreenHouses'));
const Irrigation = React.lazy(() => import('./pages/agriculture/Irrigation'));
const PumpsAndHoses = React.lazy(() => import('./pages/agriculture/PumpsAndHoses'));
const Machinery = React.lazy(() => import('./pages/agriculture/Machinery'));

// Home Component
const Home = () => (
  <>
    <Helmet>
      <title>Kahf Greens - Growing, Planting & Landscape Design in UAE</title>
      <meta
        name="description"
        content="20+ years of experience in sustainable landscaping, planting, and green space design across the UAE. Specializing in farms, residential, commercial, and government projects."
      />
      <meta name="keywords" content="landscaping UAE, agriculture Dubai, sustainable farming, green spaces design, nursery Abu Dhabi, landscape design Emirates" />
      <link rel="canonical" href="https://kahfgreens.com/" />
      <meta property="og:title" content="Kahf Greens - Growing, Planting & Landscape Design in UAE" />
      <meta property="og:description" content="20+ years of experience in sustainable landscaping, planting, and green space design across the UAE. Specializing in farms, residential, commercial, and government projects." />
      <meta property="og:image" content="https://kahfgreens.com/assets/logo.png" />
      <meta property="og:url" content="https://kahfgreens.com/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kahf Greens - Growing, Planting & Landscape Design in UAE" />
      <meta name="twitter:description" content="20+ years of experience in sustainable landscaping, planting, and green space design across the UAE." />
      <meta name="twitter:image" content="https://kahfgreens.com/assets/logo.png" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Kahf Greens",
          "url": "https://kahfgreens.com",
          "logo": "https://kahfgreens.com/assets/logo.png",
          "description": "20+ years of experience in sustainable landscaping, planting, and green space design across the UAE. Specializing in farms, residential, commercial, and government projects.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AE",
            "addressRegion": "UAE"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971-XXX-XXXXXX",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.facebook.com/kahfgreens",
            "https://www.instagram.com/kahfgreens",
            "https://www.linkedin.com/company/kahfgreens"
          ],
          "foundingDate": "2004",
          "knowsAbout": ["Sustainable Landscaping", "Agriculture Solutions", "Greenhouse Technology", "Irrigation Systems", "UAE Green Spaces"]
        })}
      </script>
    </Helmet>

    <HeroSection />
    <AboutSection />
    <PlantingSection />
    <FeaturedProjects />
    <CTASection />
  </>
);

function App() {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // 🔥 Header switch logic
  const renderHeader = () => {
    if (location.pathname.startsWith('/agriculture')) {
      return <HeaderAgriculture />;
    }
    else if (location.pathname.startsWith('/landscaping')) {
      return <HeaderLandscaping />;
    } else {
      return <Header />;
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {renderHeader()}

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><LoadingSpinner size={48} /></div>}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/agriculture" element={<Agriculture />} />
                <Route path="/agriculture/planter-pots" element={<PlanterPots />} />
                <Route path="/agriculture/planter-bags" element={<PlanterBags />} />
                <Route path="/agriculture/green-houses" element={<GreenHouses />} />
                <Route path="/agriculture/irrigation" element={<Irrigation />} />
                <Route path="/agriculture/pumps-and-hoses" element={<PumpsAndHoses />} />
                <Route path="/agriculture/machinery" element={<Machinery />} />
                <Route path="/agriculture/water-saving" element={<WaterSavingAgriculture />} />
                <Route path="/landscaping/maintenance" element={<Maintenance />} />
                <Route path="/landscaping/new-services" element={<NewServices />} />
                <Route path="/landscaping/systems" element={<Systems />} />
                <Route path="/landscaping/water-saving" element={<WaterSaving />} />
                <Route path="/landscaping/outdoor-living" element={<OutdoorLiving />} />
                <Route path="/landscaping/planters" element={<Planters />} />
                <Route path="/landscaping/*" element={<Landscaping />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
