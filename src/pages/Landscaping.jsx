import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import {
  Award,
  Users,
  Globe,
  Trees,
  CheckCircle2,
  ShieldCheck,
  Droplets,
  ArrowRight,
  Phone,
  MessageCircle,
  FileText,
  Sparkles,
  Home,
  Building2,
  Clock,
} from "lucide-react";
import CategoryCarousel from "../components/CategoryCarousel";
import { useLanguage } from "../contexts/LanguageContext";

// Asset imports
import garden1 from "../assets/Landscaping/Maintenance/Garden 1.jpg";
import shrubs1 from "../assets/Landscaping/Maintenance/shrubs 1.webp";
import lawn1 from "../assets/Landscaping/Maintenance/lawn 1.jpg";
import turf1 from "../assets/Landscaping/Maintenance/turf 1.webp";
import indoor from "../assets/Landscaping/Maintenance/indoor 1.jpg";
import grass4 from "../assets/Landscaping/New/grass 4.jpg";
import wall1 from "../assets/Landscaping/New/wall 1.webp";
import tree1 from "../assets/Landscaping/New/tree 1.jpg";
import artificial1 from "../assets/Landscaping/New/artificial 1.jpg";
import smart1 from "../assets/Landscaping/systems/smart 1.png";
import light1 from "../assets/Landscaping/systems/light 1.jpg";
import gazebo from "../assets/Landscaping/outdoor living/gazebo.jpg";
import fence from "../assets/Landscaping/outdoor living/fence.jpg";
import seat1 from "../assets/Landscaping/outdoor living/seating 5.jpg";
import shade1 from "../assets/Landscaping/outdoor living/shade 1.jpg";
import street1 from "../assets/Landscaping/planters/street 1.jpg";
import divider1 from "../assets/Landscaping/planters/dividers 1.jpg";
import outdoor1 from "../assets/Landscaping/planters/outdoor 1.jpg";
import indoor1 from "../assets/Landscaping/planters/indoor 1.jpg";
import litenetla1 from "../assets/Agriculture/water Saving/LITE-NET Lawn 1.jpg";
import graneuls2 from "../assets/Agriculture/water Saving/Granules 2.webp";
import balcony from "../assets/Landscaping/balcony/11.jpg";
import landscapingHero from "../assets/Landscaping/planters/landscaping.png";
import greener from "../assets/greener.jpg";

const Landscaping = () => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  const categoryPills = [
    { name: isRTL ? "توفير المياه" : "Water Saving", path: "/landscaping/water-saving" },
    { name: isRTL ? "حدائق الشرفات" : "Balcony Gardens", path: "/landscaping/balcony" },
    { name: isRTL ? "أحواض الزراعة والتجميل" : "Planters", path: "/landscaping/planters" },
    { name: isRTL ? "الجلسات والمظلات الخارجية" : "Outdoor Living", path: "/landscaping/outdoor-living" },
    { name: isRTL ? "صيانة الحدائق" : "Maintenance", path: "/landscaping/maintenance" },
    { name: isRTL ? "أنظمة الإضاءة والري" : "Systems", path: "/landscaping/systems" },
    { name: isRTL ? "الخدمات الحديثة" : "New Services", path: "/landscaping/new-services" },
  ];

  const capabilities = [
    {
      icon: Home,
      title: isRTL ? "حدائق الفلل السكنية الفاخرة" : "Luxury Residential Villas",
      desc: isRTL
        ? "تصميم وتنفيذ الحدائق الخاصة بالفلل، محيط حمامات السباحة، البرجولات الخارجية، والجلسات العائلية المظللة في الإمارات."
        : "Bespoke private garden retreats, swimming pool surrounds, outdoor pergolas, and shaded family lounges tailored to luxury UAE estates.",
    },
    {
      icon: Building2,
      title: isRTL ? "المشاريع التجارية والفندقية" : "Commercial & Hospitality",
      desc: isRTL
        ? "أحواض المداخل للشركات، حدائق الفنادق، تنسيق الطرق والمجمعات السكنية والحدائق العامة المصممة لتحمل ظروف البيئة."
        : "Grand corporate lobby planters, hotel courtyards, community streetscapes, and public parks engineered for heavy footfall and desert resilience.",
    },
    {
      icon: Droplets,
      title: isRTL ? "التصميم المستدام الموفر للمياه" : "Smart Water-Saving Xeriscaping",
      desc: isRTL
        ? "شبكات ري تحت سطحية أوتوماتيكية، نباتات محليّة مقاومة للجفاف، وتنسيق الأحجار والديكورات التي تقلل استهلاك المياه حتى 50%."
        : "Subsurface automated irrigation networks, drought-hardy flora, and decorative gravel mulching cutting water use by up to 50%.",
    },
    {
      icon: Clock,
      title: isRTL ? "عقود الصيانة السنوية الشاملة" : "Comprehensive Annual AMC",
      desc: isRTL
        ? "فرق متخصصة من المهندسين الزراعيين لتقديم رعاية مجدولة للمسطحات الخضراء، فحص الري، تقليم الأشجار، وتغذية التربة."
        : "Dedicated horticulturist teams delivering scheduled lawn care, irrigation audits, tree pruning, soil conditioning, and pest control.",
    },
  ];

  const services = [
    {
      category: isRTL ? "تقنيات توفير المياه" : "WATER SAVING",
      path: "/landscaping/water-saving",
      desc: isRTL ? "تنسيق حدائق صحراوية مستدامة، شبكات نسيجية فائقة الامتصاص وبوليمرات لحفظ الرطوبة." : "Desert-adapted xeriscaping, super-absorbent geotextiles & moisture-holding polymers.",
      items: [
        { name: isRTL ? "شبكات النسيج فائقة الامتصاص" : "Super Absorbent Textiles", image: litenetla1, path: "/landscaping/water-saving" },
        { name: isRTL ? "حبيبات البوليمر لحفظ الرطوبة" : "Moisture Granules", image: graneuls2, path: "/landscaping/water-saving" },
      ],
    },
    {
      category: isRTL ? "حدائق الشرفات والتراس" : "BALCONY GARDENS",
      path: "/landscaping/balcony",
      desc: isRTL ? "تحويل شرفات الأبراج والتراسات إلى واحات خضراء خاصة ومريحة." : "Transforming high-rise balconies and terraces into lush, private green sky sanctuaries.",
      items: [
        { name: isRTL ? "تصميم وتخضير الشرفات" : "Balcony Design & Greenery", image: balcony, path: "/landscaping/balcony" },
      ],
    },
    {
      category: isRTL ? "أحواض الزراعة والديكور" : "PLANTERS & GREENERY",
      path: "/landscaping/planters",
      desc: isRTL ? "أحواض زراعية معمارية من الفايبرجلاس والحجر والسيراميك مع نباتات صحراوية مميزة." : "Architectural fiberglass, stone & ceramic planters paired with specimen desert plants.",
      items: [
        { name: isRTL ? "أحواض النباتات الداخلية" : "Indoor Planters", image: indoor1, path: "/landscaping/planters" },
        { name: isRTL ? "أحواض النباتات الخارجية" : "Outdoor Planters", image: outdoor1, path: "/landscaping/planters" },
        { name: isRTL ? "أحواض الطرق والمساحات العامة" : "Street & Urban Planters", image: street1, path: "/landscaping/planters" },
        { name: isRTL ? "الفواصل والحواجز النباتية" : "Urban Dividers", image: divider1, path: "/landscaping/planters" },
      ],
    },
    {
      category: isRTL ? "الجلسات والمظلات الخارجية" : "OUTDOOR LIVING",
      path: "/landscaping/outdoor-living",
      desc: isRTL ? "برجولات ومظلات مخصصة، أسوار ديكورية، ومناطق جلسات خارجية مقاومة للمناخ." : "Custom pergolas, gazebos, acoustic fencing, and climate-resilient shaded lounge areas.",
      items: [
        { name: isRTL ? "المظلات والبرجولات" : "Pergolas & Gazebos", image: gazebo, path: "/landscaping/outdoor-living" },
        { name: isRTL ? "السواتر والأسوار التجميلية" : "Fencing & Boundary Panels", image: fence, path: "/landscaping/outdoor-living" },
        { name: isRTL ? "الجلسات الخارجية" : "Outdoor Seating Areas", image: seat1, path: "/landscaping/outdoor-living" },
        { name: isRTL ? "مظلات الحماية الحرارية" : "Thermal Shade Structures", image: shade1, path: "/landscaping/outdoor-living" },
      ],
    },
    {
      category: isRTL ? "صيانة الحدائق والمساحات الخضراء" : "LANDSCAPE MAINTENANCE",
      path: "/landscaping/maintenance",
      desc: isRTL ? "رعاية زراعية على مدار العام، تجديد العشب، تقليم الأشجار، وفحص أنظمة الري." : "Year-round horticulturist care, turf revitalization, pruning, and scheduled irrigation audits.",
      items: [
        { name: isRTL ? "الرعاية الشاملة للحدائق" : "Comprehensive Garden Care", image: garden1, path: "/landscaping/maintenance" },
        { name: isRTL ? "تقليم الشجيرات والأسيجة" : "Shrub & Hedge Pruning", image: shrubs1, path: "/landscaping/maintenance" },
        { name: isRTL ? "رعاية النباتات الداخلية" : "Indoor Specimen Plant Care", image: indoor, path: "/landscaping/maintenance" },
        { name: isRTL ? "العناية بالمسطحات الخضراء" : "Turf & Lawn Conditioning", image: turf1, path: "/landscaping/maintenance" },
      ],
    },
    {
      category: isRTL ? "الأنظمة الذكية والإضاءة" : "SMART SYSTEMS",
      path: "/landscaping/systems",
      desc: isRTL ? "أنظمة ري ذكية أوتوماتيكية تتكيف مع الطقس وإضاءة ليد معمارية للمساحات الخضراء." : "Weather-responsive automated irrigation controllers and architectural low-voltage LED lighting.",
      items: [
        { name: isRTL ? "الري الذكي بالتنقيط" : "Smart Drip Irrigation", image: smart1, path: "/landscaping/systems" },
        { name: isRTL ? "إضاءة الحدائق الليلية" : "Landscape Night Illumination", image: light1, path: "/landscaping/systems" },
      ],
    },
    {
      category: isRTL ? "الخدمات الحديثة والتنسيق" : "NEW SERVICES",
      path: "/landscaping/new-services",
      desc: isRTL ? "نقل وزراعة الأشجار الكبيرة، العشب الطبيعي والصناعي، الجدران الخضراء، والنباتات الصناعية." : "Specimen tree transplantation, synthetic & natural turf, green living walls, and artificial plants.",
      items: [
        { name: isRTL ? "زراعة الأشجار الكبيرة" : "Specimen Trees Installation", image: tree1, path: "/landscaping/new-services" },
        { name: isRTL ? "العشب الطبيعي والصناعي" : "Paspalum & Synthetic Turf", image: grass4, path: "/landscaping/new-services" },
        { name: isRTL ? "الجدران الخضراء الرأسية" : "Vertical Green Walls", image: wall1, path: "/landscaping/new-services" },
        { name: isRTL ? "النباتات والأشجار الصناعية" : "Artificial Foliage & Plants", image: artificial1, path: "/landscaping/new-services" },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{isRTL ? "خدمات تنسيق الحدائق في دبي والإمارات | كاف جرينز لتصميم وصيانة الحدائق" : "Urban Landscaping Services Dubai | Kahf Greens UAE Landscape Design & Maintenance"}</title>
        <meta
          name="description"
          content={isRTL ? "اكتشف خدمات تنسيق الحدائق من كاف جرينز: تصميم حدائق الفلل، حدائق الشرفات، الأحواض الفاخرة، عقود الصيانة، البرجولات والأنظمة الموفرة للمياه في دبي والإمارات." : "Discover Kahf Greens' comprehensive landscaping services: villa garden design, balcony gardens, luxury planters, maintenance contracts, outdoor pergolas & water-saving systems across Dubai and UAE."}
        />
        <meta
          name="keywords"
          content="landscaping company Dubai, garden maintenance Dubai, landscape design UAE, vertical garden installation Dubai, outdoor living spaces Dubai, balcony garden Dubai"
        />
        <link rel="canonical" href="https://kahfgreens.com/landscaping" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#102a18] via-[#1a4d2e] to-[#2d5f3f] text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src={landscapingHero}
            alt="Luxury sustainable landscaping in UAE"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#102a18] via-black/40 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-5xl">
          {/* Division Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#c8d8b4] uppercase tracking-widest mb-5"
          >
            <Trees size={15} />
            <span>{isRTL ? "قطاع تنسيق وتصميم المساحات الخضراء" : "Urban Landscaping & Design Division"}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight"
          >
            {isRTL ? "تحويل المساحات الخارجية في الإمارات إلى واحات خضراء مستدامة" : "Transforming UAE Outdoor Spaces Into Thriving Green Sanctuaries"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto font-light leading-relaxed mb-8"
          >
            {isRTL
              ? "من حدائق الفلل الخاصة وشرفات الأبراج إلى المقرات التجارية — نجمع بين 20+ عاماً من علوم الزراعة الصحراوية ودقة التنفيذ الهندسية."
              : "From private villa gardens and rooftop balconies to commercial corporate headquarters — we combine 20+ years of desert horticulture science with Swiss-precision execution."}
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              onClick={() => {
                const el = document.getElementById("services-catalog");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="w-full sm:w-auto bg-[#90b77d] hover:bg-[#a3c990] text-[#102a18] font-bold px-8 py-6 rounded-xl shadow-lg transition-all"
            >
              {isRTL ? "استكشف 7 قطاعات متخصصة" : "Explore 7 Specialized Sub-Categories"}
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold px-8 py-6 rounded-xl backdrop-blur-md transition-all"
            >
              {isRTL ? "طلب استشارة مجانية في الموقع" : "Request Free On-Site Consultation"}
            </Button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-emerald-100/80 font-medium">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 size={15} className="text-[#90b77d]" />
              <span>{isRTL ? "أكثر من 20 عاماً في الإمارات" : "20+ Years UAE Experience"}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck size={15} className="text-[#90b77d]" />
              <span>{isRTL ? "معتمد من بلدية دبي" : "Dubai Municipality Approved"}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Droplets size={15} className="text-[#90b77d]" />
              <span>{isRTL ? "توفير مياه يصل إلى 50%" : "Up to 50% Water Savings"}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Award size={15} className="text-[#90b77d]" />
              <span>{isRTL ? "تغطية كافة الإمارات السبع" : "All 7 Emirates Covered"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Category Navigator Strip */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm py-3 px-4 overflow-x-auto">
        <div className="container mx-auto max-w-7xl flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider hidden lg:inline mr-2">
            {isRTL ? "الفئات:" : "Categories:"}
          </span>
          {categoryPills.map((pill) => (
            <Link
              key={pill.name}
              to={pill.path}
              className="flex-shrink-0 px-3.5 py-1.5 text-xs font-bold text-[#1a4d2e] bg-emerald-50 hover:bg-[#1a4d2e] hover:text-white rounded-full transition-all duration-200 border border-emerald-200/60"
            >
              {pill.name}
            </Link>
          ))}
        </div>
      </section>

      {/* 4-Pillar Capability Matrix */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a4d2e] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              {isRTL ? "خدمات تنسيق الحدائق الشاملة" : "Complete Landscape Delivery"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a4d2e] tracking-tight mt-3 mb-3">
              {isRTL ? "حلول متكاملة لتنسيق وتطوير المساحات الخضراء" : "Full-Spectrum Urban Landscape Capabilities"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              {isRTL
                ? "بدءاً من التصميم المعماري الأولي والتصاميم ثلاثية الأبعاد وحتى التنفيذ والصيانة الموسمية المستمرة."
                : "From initial architectural concept and 3D modeling through turnkey civil construction and ongoing seasonal maintenance."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-gray-50/70 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3.5 rounded-xl bg-emerald-100 text-[#1a4d2e] w-fit mb-4">
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
      <section id="services-catalog" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#fbfdfa] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#1a4d2e] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} className="text-emerald-600" />
              <span>{isRTL ? "استكشف حسب القطاع" : "Explore By Sector"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a4d2e] tracking-tight mb-4">
              {isRTL ? "قطاعات تنسيق الحدائق المتخصصة" : "Our Specialized Landscaping Categories"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              {isRTL
                ? "اضغط على أي عنوان أو منتج لعرض المواصفات الشاملة ومعارض الصور والتفاصيل الهندسية."
                : "Click any category header or item to view comprehensive specifications, photo galleries, and engineering details."}
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
                              <ArrowRight size={14} className={`text-[#90b77d] opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? "rotate-180" : ""}`} />
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
                    className="text-[#1a4d2e] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>{isRTL ? "عرض الكل" : `View All ${service.category}`}</span>
                    <ArrowRight size={12} className={isRTL ? "rotate-180" : ""} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kahf Greens */}
      <section className="bg-emerald-950/5 py-16 sm:py-20 border-t border-emerald-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a4d2e] tracking-tight mb-3">
              {isRTL ? "لماذا يختار العملاء في الإمارات كاف جرينز" : "Why UAE Clients Choose Kahf Greens"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {isRTL
                ? "أكثر من عقدين من الخبرة المحلية في تنفيذ حدائق ومساحات خضراء تدوم وتقاوم صيف الخليج."
                : "Over two decades of local experience delivering enduring landscapes that withstand the Arabian summer."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Award,
                title: isRTL ? "التميز في التنفيذ والجودة" : "Excellence in Craftsmanship",
                desc: isRTL
                  ? "يتم تركيب وتنفيذ كل حوض، فلّة، وشبكة ري بواسطة فرق متخصصة تفهم البيئة الصحراوية."
                  : "Every villa, planter, and irrigation line is installed by experienced teams who understand desert horticulture.",
              },
              {
                icon: Users,
                title: isRTL ? "إدارة مشاريع مخصصة" : "Dedicated Project Managers",
                desc: isRTL
                  ? "نقطة تواصل واحدة من العرض إلى التسليم لضمان الالتزام بالمواعيد والتواصل الواضح."
                  : "Single point of contact from quotation to installation, ensuring strict deadlines and clear communication.",
              },
              {
                icon: Globe,
                title: isRTL ? "الريادة في استدامة المياه" : "Water Conservation Leaders",
                desc: isRTL
                  ? "نولي الأولوية للنباتات المحلية المقاومة للجفاف وشبكات الري الذكية التي تخفض الفواتير."
                  : "We prioritize indigenous, drought-tolerant species and smart micro-drip networks that cut utility bills.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 text-center border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="inline-flex p-4 bg-emerald-50 rounded-2xl mb-4 text-[#1a4d2e]">
                    <Icon size={36} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a4d2e] mb-2">{item.title}</h3>
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
            backgroundImage: `url(${greener})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/80" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[#a3c990] text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-md">
            <Sparkles size={14} />
            <span>{isRTL ? "جاهز للبدء في مشروعك الأخضر؟" : "Ready To Start Your Landscape Project?"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            {isRTL ? "دعنا ننشئ واحتك الخضراء المستدامة اليوم" : "Let’s Create Your Sustainable Green Oasis Today"}
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            {isRTL
              ? "احجز معاينة مجانية في الموقع في أي مكان في دولة الإمارات. سيزور مهندسو الحدائق موقعك لتقييم المساحة وتقديم عرض فني مخصص."
              : "Book a complimentary on-site assessment anywhere in the UAE. Our landscape architects will visit, evaluate your space, and provide a tailored technical proposal."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="w-full sm:w-auto bg-[#90b77d] hover:bg-[#a3c990] text-[#102a18] font-bold text-base px-8 py-6 rounded-xl shadow-xl flex items-center justify-center gap-2"
            >
              <FileText size={18} />
              <span>{isRTL ? "احصل على عرض أسعار مجاني" : "Get Your Free Proposal"}</span>
            </Button>

            <a
              href="https://wa.me/971565096880?text=Hello%20Kahf%20Greens,%20I%20would%20like%20to%20inquire%20about%20landscaping%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base px-8 py-6 rounded-xl shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                <span>{isRTL ? "فريق التصميم عبر واتساب" : "WhatsApp Design Team"}</span>
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
            {isRTL
              ? "✓ فرق عمل محلية 100% • ✓ معتمد من بلدية دبي • ✓ عروض أسعار خلال 24 ساعة"
              : "✓ 100% UAE-based teams • ✓ Dubai Municipality Approved • ✓ Custom proposals within 24h"}
          </p>
        </div>
      </section>
    </>
  );
};

export default Landscaping;
