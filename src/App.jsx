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
import Partners from './pages/Partners';
import Landscaping from './pages/Landscaping';
import Maintenance from './pages/landscaping//Maintenance';
import NewServices from './pages/landscaping//NewServices';
import Systems from './pages/landscaping//Systems';
import WaterSaving from './pages/landscaping//WaterSaving';
import WaterSavingAgriculture from './pages/agriculture/WaterSaving';
import OutdoorLiving from './pages/landscaping//OutdoorLiving';
import Planters from './pages/landscaping//Planters';

import PlanterPots from './pages/agriculture/PlanterPots';
import PlanterBags from './pages/agriculture/PlanterBags';
import GreenHouses from './pages/agriculture/GreenHouses';
import Irrigation from './pages/agriculture/Irrigation';
import PumpsAndHoses from './pages/agriculture/PumpsAndHoses';
import Machinery from './pages/agriculture/Machinery';

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
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/agriculture/planter-pots" element={<PlanterPots />} />
          <Route path="/agriculture/planter-bags" element={<PlanterBags />} />
          <Route path="/agriculture/green-houses" element={<GreenHouses />} />
          <Route path="/agriculture/irrigation" element={<Irrigation />} />
          <Route path="/agriculture/pumps-hoses" element={<PumpsAndHoses />} />
          <Route path="/agriculture/machinery" element={<Machinery />} />
          <Route path="/agriculture/water-saving" element={<WaterSavingAgriculture />} />
          <Route path="/landscaping/maintenance" element={<Maintenance />} />
          <Route path="/landscaping/new-services" element={<NewServices />} />
          <Route path="/landscaping/systems" element={<Systems />} />
          <Route path="/landscaping/water-saving" element={<WaterSaving />} />
          <Route path="/landscaping/outdoor-living" element={<OutdoorLiving />} />
          <Route path="/landscaping/planters" element={<Planters />} />
          <Route path="/landscaping/*" element={<Landscaping />} />
          <Route path="/partners" element={<Partners />} />
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
