import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, TreePine, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Landscaping Images
import balconyImg from '../assets/Landscaping/balcony/4.webp';
import plantersImg from '../assets/Landscaping/planters/landscaping.png';
import pergolaImg from '../assets/Landscaping/outdoor living/pergola.png';
import maintenanceImg from '../assets/Landscaping/maintenance/garden 1.jpg';
import systemsImg from '../assets/Landscaping/systems/smart 1.png';
import sustainableImg from '../assets/sustainable.webp';

// Agriculture Images
import greenhouseImg from '../assets/Agriculture/greenhouses/main.jpg';
import smartIrriImg from '../assets/Agriculture/irrigation/Smart irrigation.png';
import largepotImg from '../assets/largepot.jpg';
import orkeyImg from '../assets/orkey.jpg';
import farmImg from '../assets/farm.jpg';
import pumpsImg from '../assets/Agriculture/irrigation/Misting 1.jpg';

const landscapingServices = [
  {
    title: 'Water-Saving Landscaping',
    link: '/landscaping/water-saving',
    badge: 'Eco-Smart',
    image: sustainableImg,
    description: 'Desert-adapted xeriscaping, gravel mulching, and drought-hardy flora engineered to cut water consumption by up to 50%.',
    highlights: ['Desert-adapted plants', 'Up to 50% water reduction', 'Low maintenance luxury'],
  },
  {
    title: 'Balcony & Terrace Gardens',
    link: '/landscaping/balcony',
    badge: 'Urban Living',
    image: balconyImg,
    description: 'Transform apartments and penthouses into lush private sky sanctuaries with lightweight planters and automatic drip irrigation.',
    highlights: ['Micro-irrigation installed', 'Lightweight weather-proof pots', 'Custom urban layouts'],
  },
  {
    title: 'Luxury Planters & Greenery',
    link: '/landscaping/planters',
    badge: 'Indoor & Outdoor',
    image: plantersImg,
    description: 'Architectural fiberglass, ceramic, and modular planters paired with specimen plants for commercial lobbies and luxury villas.',
    highlights: ['UV & thermal resistant', 'Custom sizes & RAL colors', 'Interior & exterior grade'],
  },
  {
    title: 'Outdoor Living & Pergolas',
    link: '/landscaping/outdoor-living',
    badge: 'Outdoor Comfort',
    image: pergolaImg,
    description: 'Bespoke pergolas, gazebos, acoustic fencing, and shaded entertainment lounges built to endure the extreme UAE summer sun.',
    highlights: ['Aluminum & thermal wood', 'Custom ambient lighting', 'Climate-resilient shades'],
  },
  {
    title: 'Landscape Maintenance',
    link: '/landscaping/maintenance',
    badge: 'Year-Round Care',
    image: maintenanceImg,
    description: 'Comprehensive annual care contracts including automated irrigation checks, soil conditioning, seasonal pruning, and pest control.',
    highlights: ['Certified horticulturists', 'Monthly irrigation audits', 'Residential & commercial'],
  },
  {
    title: 'Smart Landscape Systems',
    link: '/landscaping/systems',
    badge: 'Automation',
    image: systemsImg,
    description: 'Weather-sensing smart controllers, automated fertigation, and energy-efficient LED garden illumination systems.',
    highlights: ['App-controlled irrigation', 'Low-voltage garden LEDs', 'Soil moisture sensors'],
  },
];

const agricultureServices = [
  {
    title: 'Greenhouses & Cooling Pads',
    link: '/agriculture/greenhouses',
    badge: 'Turnkey Climate',
    image: greenhouseImg,
    description: 'Turnkey climate-controlled greenhouses, high-efficiency cellulose cooling pads, shade nets, and anti-insect thermal screens.',
    highlights: ['Cellulose cooling pads', 'UV-stabilized shade nets', 'Severe climate resistance'],
  },
  {
    title: 'Smart Agricultural Irrigation',
    link: '/agriculture/irrigation',
    badge: 'Precision Flow',
    image: smartIrriImg,
    description: 'Precision boom sprayers, misting systems, micro-drippers, and automated solenoid distribution networks for large-scale farms.',
    highlights: ['Overhead boom systems', 'Micro-misting nozzles', 'High-uniformity flow'],
  },
  {
    title: 'Planter Pots & Nursery Bags',
    link: '/agriculture/planter-pots',
    badge: 'Commercial Growing',
    image: largepotImg,
    description: 'Heavy-duty HDPE nursery containers, UV-treated grow bags, and root-pruning pots designed for commercial plant propagation.',
    highlights: ['Root-breathable design', 'Heavy-duty HDPE build', 'Bulk nursery supply'],
  },
  {
    title: 'Water-Saving AgTech',
    link: '/agriculture/water-saving',
    badge: 'Resource Efficiency',
    image: farmImg,
    description: 'Subsurface irrigation, polymer soil moisture enhancers, and closed-loop fertigation systems engineered for arid soil farming.',
    highlights: ['Sub-surface drip lines', 'Evaporation barriers', 'Soil conditioner blends'],
  },
  {
    title: 'Misting & High-Pressure Pumps',
    link: '/agriculture/pumps-and-hoses',
    badge: 'Flow Engineering',
    image: pumpsImg,
    description: 'Industrial-grade booster pumps, chemical dosing pumps, reinforced hoses, and specialized agricultural filtration equipment.',
    highlights: ['Continuous duty motors', 'Chemical-resistant seals', 'Pressure control stations'],
  },
  {
    title: 'Farm Machinery & Pollination',
    link: '/agriculture/machinery',
    badge: 'Mechanization',
    image: orkeyImg,
    description: 'Specialized date palm pollination machines, potting transport carts, mechanical sprayers, and nursery harvest equipment.',
    highlights: ['Date palm pollinators', 'Heavy nursery trolleys', 'Labor saving machinery'],
  },
];

const DivisionShowcase = () => {
  const [activeTab, setActiveTab] = useState('landscaping');

  const currentServices = activeTab === 'landscaping' ? landscapingServices : agricultureServices;

  return (
    <section className="py-20 md:py-28 bg-[#fbfdfa] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[#1a4d2e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-emerald-600" />
            <span>Comprehensive Solutions Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a4d2e] tracking-tight mb-4">
            Explore Our Two Specialized Divisions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Whether you are creating a private villa garden sanctuary or outfitting a commercial farm with cutting-edge irrigation, Kahf Greens brings 20+ years of proven UAE expertise.
          </p>
        </div>

        {/* Division Switcher Tabs */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200/80 shadow-inner max-w-md w-full">
            <button
              onClick={() => setActiveTab('landscaping')}
              className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'landscaping'
                  ? 'bg-gradient-to-r from-[#1a4d2e] to-[#2d5f3f] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <TreePine size={18} />
              <span>Urban Landscaping</span>
            </button>

            <button
              onClick={() => setActiveTab('agriculture')}
              className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'agriculture'
                  ? 'bg-gradient-to-r from-[#1a4d2e] to-[#2d5f3f] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <Leaf size={18} />
              <span>Agriculture Tech</span>
            </button>
          </div>
        </div>

        {/* Dynamic Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {currentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image & Badge Container */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-[#1a4d2e] font-semibold text-xs rounded-full shadow-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1a4d2e] group-hover:text-emerald-700 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 mb-6 border-t border-gray-100">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link Button */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-[#1a4d2e] text-[#1a4d2e] hover:text-white font-semibold text-sm transition-all duration-200 group/btn"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-[#1a4d2e] to-[#2d5f3f] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-1">
              Need a Customized Turnkey Solution or Commercial BOQ?
            </h4>
            <p className="text-emerald-100 text-sm sm:text-base font-light">
              Our UAE engineers and landscape architects provide custom designs, technical calculations, and direct wholesale pricing.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 px-6 py-3.5 bg-white hover:bg-emerald-50 text-[#1a4d2e] font-bold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            Request Technical Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DivisionShowcase;
