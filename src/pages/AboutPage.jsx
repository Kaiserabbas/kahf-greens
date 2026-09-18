import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Leaf,
  ShieldCheck,
  Sun,
  Users,
  ArrowRight,
  Award,
  Droplets,
  Calendar,
  CheckCircle2,
  Building2,
  Trees,
  Sprout,
  Compass,
  HeartHandshake,
  ExternalLink,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

import shopImg from '../assets/shop.jpg';
import greenerImg from '../assets/greener.jpg';
import farmImg from '../assets/farm.jpg';
import sustainableImg from '../assets/sustainable.webp';
import commercialImg from '../assets/commercial.webp';

const stats = [
  { label: 'Years of Excellence', value: '20+', sub: 'Established in Dubai in 2004' },
  { label: 'Projects Delivered', value: '500+', sub: 'Villas, farms & commercial sites' },
  { label: 'Water Conservation', value: 'Up to 50%', sub: 'Using smart hydrogel & drip systems' },
  { label: 'Coverage', value: '7 Emirates', sub: 'Active projects across the UAE' },
];

const milestones = [
  {
    year: '2004',
    title: 'Foundations in Dubai',
    description:
      'Established in Ras Al Khor, Dubai, with a primary focus on desert-hardy plants, container growing, and specialized soil conditioning for the extreme UAE climate.',
  },
  {
    year: '2011',
    title: 'Smart Irrigation Pioneering',
    description:
      'Expanded into precision water engineering, introducing automated drip irrigation controllers and soil moisture monitoring for private villa estates.',
  },
  {
    year: '2017',
    title: 'Commercial Greenhouses & Machinery',
    description:
      'Inaugurated our agricultural systems division, providing climate-controlled evaporative cooling greenhouses, nursery automation machinery, and large pots.',
  },
  {
    year: '2021',
    title: 'Water-Saving Geotextile Revolution',
    description:
      'Introduced Austrian-engineered Lite-Net and Lite-Strips super-absorbent textiles, allowing lawns, trees, and planters to thrive with half the traditional water demand.',
  },
  {
    year: 'Present',
    title: 'Trusted Regional Leader',
    description:
      'Serving Dubai Municipality, DEWA, SEWA, master developers, and hundreds of private villa owners with sustainable landscape architecture and farming solutions.',
  },
];

const processes = [
  {
    step: '01',
    title: 'Site Diagnostic & Consultation',
    description:
      'Our landscape architects and agronomists evaluate your property — testing soil composition, sun exposure, wind corridors, water pressure, and drainage.',
  },
  {
    step: '02',
    title: 'Bespoke Design & Approvals',
    description:
      'We craft tailored 3D visualizations, material schedules, and planting palettes while managing all regulatory permits (Dubai Municipality, DEWA, developer NOCs).',
  },
  {
    step: '03',
    title: 'Precision Execution',
    description:
      'From sub-base grading and smart irrigation piping to specimen tree installation, hardscape pergolas, and turf laying, our experienced team executes with surgical precision.',
  },
  {
    step: '04',
    title: 'Lifecycle Care & AMC',
    description:
      'We stand behind every project with customized annual maintenance contracts (AMCs), scheduled seasonal pruning, nutrient feeding, and guaranteed plant health.',
  },
];

const values = [
  {
    icon: Droplets,
    title: 'Water Stewardship',
    desc: 'Water is our most precious resource. We pioneer hydrogels, sub-surface nets, and weather-adaptive smart irrigation that drastically cut consumption without compromising lush beauty.',
  },
  {
    icon: ShieldCheck,
    title: 'Climate-Hardened Quality',
    desc: 'Every plant variety, planter container, and irrigation fitting we supply is tested and proven to endure relentless 50°C summer heat, saline breezes, and desert dust.',
  },
  {
    icon: Users,
    title: 'Deep Local Expertise',
    desc: 'Over 20 years of hands-on experience navigating the microclimates of Dubai, Abu Dhabi, and the Northern Emirates enables us to prescribe solutions that actually thrive.',
  },
  {
    icon: Sun,
    title: 'Architectural Elegance',
    desc: 'We merge ecological principles with contemporary architectural aesthetics — creating outdoor living spaces, pergolas, and vertical green walls that expand your living area.',
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>About Kahf Greens | Sustainable Landscaping & Agriculture UAE</title>
        <meta
          name="description"
          content="Over 20 years of excellence in sustainable landscaping, smart irrigation, and agriculture in Dubai and across the UAE. Learn about our story, mission, and team."
        />
        <meta
          name="keywords"
          content="sustainable landscaping UAE, agriculture Dubai, green solutions Emirates, nursery Abu Dhabi, landscape contractor Dubai, Kahf Greens history"
        />
        <link rel="canonical" href="https://kahfgreens.com/about" />
        <meta property="og:title" content="About Kahf Greens | Sustainable Landscaping & Agriculture in the UAE" />
        <meta
          property="og:description"
          content="Over 20 years of turning desert environments into thriving, sustainable green spaces across Dubai and the UAE."
        />
      </Helmet>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[75vh] flex items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <img
            src={shopImg}
            alt="Kahf Greens nursery and showroom"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 border border-white/20 mb-6 text-emerald-200">
              <Award size={14} className="text-amber-400" />
              <span>Celebrating 20+ Years in the UAE (Est. 2004)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Cultivating a Greener, <br className="hidden sm:block" />
              <span className="text-emerald-300">More Sustainable UAE</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 mb-8 font-light max-w-2xl leading-relaxed">
              For more than two decades, Kahf Greens has transformed desert conditions into flourishing landscapes, high-yield farms, and luxurious outdoor sanctuaries across the Emirates.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-white hover:bg-gray-100 text-[#1a4d2e] font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Schedule a Consultation
              </Button>
              <Button
                onClick={() => navigate('/projects')}
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border-white/40 font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- STATS STRIP ---------------- */}
      <section className="relative -mt-10 z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left border-r last:border-r-0 border-gray-100 pr-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a4d2e] mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 font-normal">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- OUR STORY / COMPANY HERITAGE ---------------- */}
      <section className="py-20 lg:py-28 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/5]">
              <img
                src={greenerImg}
                alt="Sustainable desert greenery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider bg-emerald-700/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  Ras Al Khor, Dubai
                </span>
                <h3 className="text-xl font-bold mt-2">Engineered for Extreme Gulf Climates</h3>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1a4d2e] uppercase tracking-wider bg-[#e8f5e9] px-3.5 py-1.5 rounded-full">
              <Compass size={14} />
              <span>Our Story & Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Mastering the Balance Between Desert Heat and Living Nature
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              Founded in 2004 in Dubai, Kahf Greens began with a singular ambition: to solve the complex challenges of gardening and farming in arid desert conditions. Where conventional approaches struggled with scorching temperatures, salty soils, and scarce water, we developed science-backed, climate-resilient solutions.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Today, Kahf Greens operates two synergistic divisions — <strong>Landscaping</strong> and <strong>Agriculture</strong>. We provide end-to-end design, construction, and horticultural supplies for private royal estates, five-star resorts, urban apartment terraces, and commercial hydroponic farms.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#1a4d2e]" /> Our Mission
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  To deliver climate-resilient landscaping and agriculture that maximizes ecological sustainability and creates lasting value.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#1a4d2e]" /> Our Vision
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  To lead the transformation of the Emirates into a world benchmark for desert greening and water-wise agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TWO PILLAR DIVISIONS ---------------- */}
      <section className="py-20 bg-gray-50/70 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#1a4d2e] uppercase tracking-wider bg-[#e8f5e9] px-3.5 py-1.5 rounded-full">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Our Two Specialized Divisions
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Whether transforming residential outdoor living or engineering commercial food production, our divisions offer comprehensive, turnkey capability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Division 1: Landscaping */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-60 relative overflow-hidden">
                  <img
                    src={commercialImg}
                    alt="Landscaping division"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-white flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Division 01</span>
                      <h3 className="text-2xl font-bold">Landscaping Services</h3>
                    </div>
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                      <Trees size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Turnkey landscape architecture, exterior styling, and maintenance contracts designed for luxury villas, residential communities, and commercial properties.
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#1a4d2e] flex-shrink-0" />
                      <span>Custom Villa Landscaping & Hardscaping (Pergolas, Gazebos, Seating)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#1a4d2e] flex-shrink-0" />
                      <span>Turnkey Balcony Garden Packages (Zen Starter, Urban Oasis, Royal Retreat)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#1a4d2e] flex-shrink-0" />
                      <span>Living Green Walls & Designer Artificial Foliage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#1a4d2e] flex-shrink-0" />
                      <span>Annual Garden Maintenance & Turf Care (AMC Contracts)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Button
                  onClick={() => navigate('/landscaping')}
                  className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span>Explore Landscaping Division</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            {/* Division 2: Agriculture */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-60 relative overflow-hidden">
                  <img
                    src={farmImg}
                    alt="Agriculture division"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-white flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">Division 02</span>
                      <h3 className="text-2xl font-bold">Agriculture Solutions</h3>
                    </div>
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                      <Sprout size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Advanced agricultural technologies, climate-controlled greenhouses, and water-saving irrigation systems tailored for commercial farms and tree nurseries.
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-amber-700 flex-shrink-0" />
                      <span>High-Tech Greenhouses with Cellulose Cooling Pads & Shade Nets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-amber-700 flex-shrink-0" />
                      <span>Commercial Agricultural Planter Pots & Woven Grow Bags</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-amber-700 flex-shrink-0" />
                      <span>Submersible Agricultural Pumps & Heavy-Duty Suction Hoses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-amber-700 flex-shrink-0" />
                      <span>Water-Saving Super Absorbent Geotextiles (Lite-Net & Granules)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Button
                  onClick={() => navigate('/agriculture')}
                  className="w-full bg-amber-900 hover:bg-amber-950 text-white rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span>Explore Agriculture Division</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4-STEP CLIENT JOURNEY ---------------- */}
      <section className="py-20 lg:py-28 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#1a4d2e] uppercase tracking-wider bg-[#e8f5e9] px-3.5 py-1.5 rounded-full">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            How We Bring Your Vision to Reality
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            From initial site evaluation to long-term plant health guarantees, our 4-step workflow ensures peace of mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-black text-[#1a4d2e]/20 mb-4">{p.step}</div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{p.description}</p>
              </div>
              <div className="w-8 h-1 bg-[#1a4d2e] rounded-full mt-6" />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 20-YEAR TIMELINE ---------------- */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#1a4d2e] uppercase tracking-wider bg-[#e8f5e9] px-3.5 py-1.5 rounded-full">
              Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Two Decades of Continuous Innovation
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Key chapters in our journey to becoming the UAE's most trusted name in sustainable greening.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 px-3.5 py-1.5 bg-[#e8f5e9] text-[#1a4d2e] font-black text-lg rounded-xl">
                  {m.year}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CORE VALUES ---------------- */}
      <section className="py-20 lg:py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#1a4d2e] uppercase tracking-wider bg-[#e8f5e9] px-3.5 py-1.5 rounded-full">
            Our Principles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            The Values That Guide Every Project
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Uncompromising standards, respect for the environment, and lasting value for every client.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 bg-[#e8f5e9] rounded-2xl flex items-center justify-center text-[#1a4d2e] mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- FINAL CTA BANNER ---------------- */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-950 via-[#1a4d2e] to-[#2d5f3f] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Ready to Build Something Remarkable Together?
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/90 mb-8 font-light leading-relaxed">
            Reach out today to discuss your villa garden, commercial property, or farming installation with our senior landscape engineers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-gray-100 text-[#1a4d2e] font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-base"
            >
              Get in Touch with Our Team
            </Button>
            <Button
              onClick={() => navigate('/projects')}
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white/40 font-semibold px-8 py-4 rounded-xl transition-all text-base"
            >
              Explore Our Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
