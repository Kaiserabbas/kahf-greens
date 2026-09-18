import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import {
  Sprout,
  Users,
  Globe,
  Award,
  CheckCircle2,
  ShieldCheck,
  Droplets,
  ArrowRight,
  Phone,
  MessageCircle,
  FileText,
  Sparkles,
  Tractor,
  Layers,
  Wrench,
  ThermometerSnowflake,
} from "lucide-react";
import CategoryCarousel from "../components/CategoryCarousel";

// Asset imports
import main from "../assets/Agriculture/greenhouses/main.jpg";
import pad from "../assets/Agriculture/greenhouses/Cooling Pad 2.jpg";
import shade from "../assets/Agriculture/greenhouses/Shade Net 1.jpg";
import cover from "../assets/Agriculture/greenhouses/Ground Cover 1.jpg";
import subpumps from "../assets/Agriculture/pumps/Submersible 1.jpg";
import suction from "../assets/Agriculture/pumps/Suction Hose 1.webp";
import outdoorPlanter1 from "../assets/Agriculture/planter pots/Outdoors Pots 1.jpg";
import stackablePot1 from "../assets/Agriculture/planter pots/Vertical 1.png";
import fruitTree1 from "../assets/Agriculture/planter pots/Fruit 1.jpg";
import matureTree1 from "../assets/Agriculture/planter pots/Large Trees 1.jpg";
import woven1 from "../assets/Agriculture/planter bags/Woven 1.webp";
import nonwoven1 from "../assets/Agriculture/planter bags/Non Woven 1.jpg";
import smart from "../assets/Agriculture/irrigation/Smart irrigation.png";
import pipe1 from "../assets/Agriculture/irrigation/Pipe 1.jpg";
import misting1 from "../assets/Agriculture/irrigation/Misting 1.jpg";
import nozzle1 from "../assets/Agriculture/irrigation/Nozzle 1.jpg";
import pots1 from "../assets/Agriculture/machinery/Pots Transport 1.jpg";
import trays1 from "../assets/Agriculture/machinery/Trays Transport 1.png";
import greenhouse from "../assets/Agriculture/greenhouses/Greenhouse Main 2.jpg";
import litenetla1 from "../assets/Agriculture/water Saving/LITE-NET Lawn 1.jpg";
import graneuls2 from "../assets/Agriculture/water Saving/Granules 2.webp";
import farm from "../assets/farm.jpg";

const categoryPills = [
  { name: "Greenhouses & Cooling", path: "/agriculture/greenhouses" },
  { name: "Smart Irrigation", path: "/agriculture/irrigation" },
  { name: "Planter Pots", path: "/agriculture/planter-pots" },
  { name: "Planter Bags", path: "/agriculture/planter-bags" },
  { name: "Pumps & Hoses", path: "/agriculture/pumps-and-hoses" },
  { name: "Farm Machinery", path: "/agriculture/machinery" },
  { name: "Water Saving AgTech", path: "/agriculture/water-saving" },
];

const capabilities = [
  {
    icon: ThermometerSnowflake,
    title: "Turnkey Commercial Greenhouses",
    desc: "Severe-climate climate-controlled structures with high-efficiency cellulose cooling pads, UV shade screens, and ground covers.",
  },
  {
    icon: Droplets,
    title: "Precision Micro-Irrigation",
    desc: "Automated boom sprayers, misting networks, micro-drippers, and solenoid distribution manifolds for large-scale farms.",
  },
  {
    icon: Layers,
    title: "Commercial Nursery Propagation",
    desc: "Heavy-duty HDPE containers, UV-stabilized root-pruning pots, and woven grow bags designed for bulk commercial plant production.",
  },
  {
    icon: Tractor,
    title: "Farm Mechanization & AgTech",
    desc: "Specialized date palm pollination equipment, heavy potting trolleys, and soil water-retaining polymers engineered for arid farming.",
  },
];

const Agriculture = () => {
  const navigate = useNavigate();

  const services = [
    {
      category: "GREENHOUSES & COOLING",
      path: "/agriculture/greenhouses",
      desc: "Turnkey climate control, high-efficiency cellulose cooling pads, shade netting & ground covers.",
      items: [
        { name: "Cooling Pads", image: pad, path: "/agriculture/greenhouses" },
        { name: "Shade Nets", image: shade, path: "/agriculture/greenhouses" },
        { name: "Ground Covers", image: cover, path: "/agriculture/greenhouses" },
      ],
    },
    {
      category: "SMART IRRIGATION",
      path: "/agriculture/irrigation",
      desc: "Automated boom sprayers, precision misting networks, heavy-duty agricultural pipes & fittings.",
      items: [
        { name: "Smart Irrigation Systems", image: smart, path: "/agriculture/irrigation" },
        { name: "Pipes & Fittings", image: pipe1, path: "/agriculture/irrigation" },
        { name: "Misting Systems", image: misting1, path: "/agriculture/irrigation" },
        { name: "Precision Nozzles", image: nozzle1, path: "/agriculture/irrigation" },
      ],
    },
    {
      category: "PLANTER POTS",
      path: "/agriculture/planter-pots",
      desc: "Heavy-duty HDPE nursery pots, vertical stackable systems, fruit growing & large tree containers.",
      items: [
        { name: "Outdoor Growing Pots", image: outdoorPlanter1, path: "/agriculture/planter-pots" },
        { name: "Vertical Farming Systems", image: stackablePot1, path: "/agriculture/planter-pots" },
        { name: "Fruit Growing Pots", image: fruitTree1, path: "/agriculture/planter-pots" },
        { name: "Large Specimen Tree Pots", image: matureTree1, path: "/agriculture/planter-pots" },
      ],
    },
    {
      category: "PLANTER BAGS",
      path: "/agriculture/planter-bags",
      desc: "UV-treated woven and non-woven grow bags supporting rapid, healthy root development.",
      items: [
        { name: "Woven Grow Bags", image: woven1, path: "/agriculture/planter-bags" },
        { name: "Non-Woven Grow Bags", image: nonwoven1, path: "/agriculture/planter-bags" },
      ],
    },
    {
      category: "PUMPS & HOSES",
      path: "/agriculture/pumps-and-hoses",
      desc: "Industrial submersible pumps, pressure boosters, chemical-dosing pumps & suction hoses.",
      items: [
        { name: "Agricultural Submersible Pumps", image: subpumps, path: "/agriculture/pumps-and-hoses" },
        { name: "Heavy Suction & Delivery Hoses", image: suction, path: "/agriculture/pumps-and-hoses" },
      ],
    },
    {
      category: "FARM MACHINERY",
      path: "/agriculture/machinery",
      desc: "Specialized date palm pollination machinery, automated potting carts, and nursery equipment.",
      items: [
        { name: "Pot Transportation Trolleys", image: pots1, path: "/agriculture/machinery" },
        { name: "Tray Transport Systems", image: trays1, path: "/agriculture/machinery" },
        { name: "Greenhouse Equipment", image: greenhouse, path: "/agriculture/machinery" },
      ],
    },
    {
      category: "WATER SAVING AGTECH",
      path: "/agriculture/water-saving",
      desc: "Super-absorbent geotextile irrigation networks and water-retaining soil conditioners.",
      items: [
        { name: "Subsurface Irrigation Net", image: litenetla1, path: "/agriculture/water-saving" },
        { name: "Polymer Soil Granules", image: graneuls2, path: "/agriculture/water-saving" },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Agriculture Solutions UAE | Commercial Farming, Greenhouses & Irrigation | Kahf Greens</title>
        <meta
          name="description"
          content="Explore Kahf Greens' agricultural technologies: commercial greenhouses, cellulose cooling pads, smart irrigation systems, heavy-duty nursery pots, pumps & machinery across the UAE."
        />
        <meta
          name="keywords"
          content="agriculture UAE, greenhouse supplier Dubai, commercial farming Dubai, irrigation systems UAE, agricultural machinery Emirates, planter pots bulk UAE"
        />
        <link rel="canonical" href="https://kahfgreens.com/agriculture" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#102816] via-[#1a4425] to-[#2d5f3f] text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={main}
            alt="Sustainable agriculture in UAE desert environment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#102816] via-black/40 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-5xl">
          {/* Division Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#90b77d] uppercase tracking-widest mb-5"
          >
            <Sprout size={15} />
            <span>Commercial Agriculture & AgTech Division</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight"
          >
            Commercial Agriculture & Desert Farm Engineering in the UAE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto font-light leading-relaxed mb-8"
          >
            Equipping commercial growers, nursery operators, and agricultural estates with turnkey greenhouses, precision irrigation, heavy nursery supplies, and specialized machinery.
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              onClick={() => {
                const el = document.getElementById("agri-catalog");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="w-full sm:w-auto bg-[#90b77d] hover:bg-[#a3c990] text-[#102816] font-bold px-8 py-6 rounded-xl shadow-lg transition-all"
            >
              Explore 7 Agricultural Categories
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold px-8 py-6 rounded-xl backdrop-blur-md transition-all"
            >
              Request Commercial BOQ & Pricing
            </Button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-emerald-100/80 font-medium">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 size={15} className="text-[#90b77d]" />
              <span>20+ Years UAE Experience</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck size={15} className="text-[#90b77d]" />
              <span>Severe Heat & Salinity Resilient</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Droplets size={15} className="text-[#90b77d]" />
              <span>Precision Water-Saving Tech</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Award size={15} className="text-[#90b77d]" />
              <span>Bulk Nursery Supply Across UAE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Category Navigator Strip */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm py-3 px-4 overflow-x-auto">
        <div className="container mx-auto max-w-7xl flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider hidden lg:inline mr-2">
            Categories:
          </span>
          {categoryPills.map((pill) => (
            <Link
              key={pill.name}
              to={pill.path}
              className="flex-shrink-0 px-3.5 py-1.5 text-xs font-bold text-[#102816] bg-amber-50 hover:bg-[#1a4425] hover:text-white rounded-full transition-all duration-200 border border-amber-200/60"
            >
              {pill.name}
            </Link>
          ))}
        </div>
      </section>

      {/* 4-Pillar Commercial Capabilities Matrix */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a4425] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
              Commercial AgTech Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102816] tracking-tight mt-3 mb-3">
              Engineered for Severe Arid Agriculture
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Supplying commercial greenhouse complexes, date palm plantations, and large regional nurseries across the UAE and GCC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-gray-50/70 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3.5 rounded-xl bg-amber-100 text-amber-900 w-fit mb-4">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services – Left-Aligned Carousels with Category Badges */}
      <section id="agri-catalog" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#fbfdfa] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} className="text-amber-700" />
              <span>Full Agricultural Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102816] tracking-tight mb-4">
              Our 7 Specialized Agricultural Categories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Click any category header or item to view technical datasheets, specifications, and wholesale inquiries.
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm"
              >
                <div className="mb-4">
                  <CategoryCarousel
                    items={service.items}
                    categoryTitle={service.category}
                    categoryPath={service.path}
                    onCategoryClick={() => service.path && navigate(service.path)}
                    renderItem={(item) => (
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col h-full group"
                        onClick={() => item.path && navigate(item.path)}
                      >
                        <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                          <div className="absolute bottom-3 left-4 right-4">
                            <p className="text-white text-sm sm:text-base font-bold drop-shadow flex items-center justify-between">
                              <span>{item.name}</span>
                              <ArrowRight size={14} className="text-[#90b77d] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  />
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-slate-500">
                  <span>{service.desc}</span>
                  <Link
                    to={service.path}
                    className="text-[#102816] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>View All {service.category}</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Do What We Do */}
      <section className="bg-emerald-950/5 py-16 sm:py-20 border-t border-emerald-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102816] tracking-tight mb-3">
              Why UAE Commercial Growers Partner With Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Providing end-to-end technical equipment, climate simulation, and direct wholesale delivery across the Emirates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Sprout,
                title: "Sustainable Desert Agriculture",
                desc: "Innovative practices and technologies that maximize crop yields while cutting water and labor costs.",
              },
              {
                icon: Users,
                title: "Technical Agronomy Support",
                desc: "Experienced engineers ready to calculate exact cooling pad CFM, pump GPM, and irrigation emitter spacing.",
              },
              {
                icon: Globe,
                title: "UAE-Wide Fast Logistics",
                desc: "Substantial local inventory in Ras Al Khor with fast delivery to Al Ain, Liwa, Al Dhaid, and all 7 Emirates.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 text-center border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="inline-flex p-4 bg-amber-50 rounded-2xl mb-4 text-amber-900">
                    <Icon size={36} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-lg font-bold text-[#102816] mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${farm})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/80" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[#a3c990] text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-md">
            <Sparkles size={14} />
            <span>Commercial Farm & Nursery Supply</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Equip Your Farm or Nursery with Industry-Leading UAE AgTech
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Contact our technical agronomy sales team for wholesale pricing, container loads, custom greenhouse engineering, or smart irrigation design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="w-full sm:w-auto bg-[#90b77d] hover:bg-[#a3c990] text-[#102816] font-bold text-base px-8 py-6 rounded-xl shadow-xl flex items-center justify-center gap-2"
            >
              <FileText size={18} />
              <span>Request Commercial BOQ</span>
            </Button>

            <a
              href="https://wa.me/971565096880?text=Hello%20Kahf%20Greens,%20I%20would%20like%20to%20inquire%20about%20commercial%20agriculture%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base px-8 py-6 rounded-xl shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Technical Sales</span>
              </Button>
            </a>

            <a href="tel:+97142240733" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold text-base px-7 py-6 rounded-xl backdrop-blur-md flex items-center justify-center gap-2"
              >
                <Phone size={17} />
                <span>+971 4 224 0733</span>
              </Button>
            </a>
          </div>

          <p className="text-xs text-emerald-200/70">
            ✓ Wholesale commercial pricing • ✓ Direct stock in Ras Al Khor • ✓ Technical engineering calculations
          </p>
        </div>
      </section>
    </>
  );
};

export default Agriculture;
