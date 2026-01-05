import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import HeaderAgriculture from './components/HeaderAgriculture';
import HeaderLandscaping from './components/HeaderLandscaping';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PlantingSection from './components/PlantingSection';
import FeaturedProjects from './components/FeaturedProjects';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

import AboutPage from './pages/AboutPage';
import Agriculture from './pages/Agriculture';
import ContactPage from './pages/ContactPage';
import Landscaping from './pages/Landscaping';

import { Toaster } from './components/ui/toaster';

// Home Component
const Home = () => (
  <>
    <Helmet>
      <title>Kahf Greens - Growing, Planting & Landscape Design in UAE</title>
      <meta
        name="description"
        content="20+ years of experience in sustainable landscaping, planting, and green space design across the UAE. Specializing in farms, residential, commercial, and government projects."
      />
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
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {renderHeader()}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agriculture/*" element={<Agriculture />} />
          <Route path="/landscaping/*" element={<Landscaping />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
