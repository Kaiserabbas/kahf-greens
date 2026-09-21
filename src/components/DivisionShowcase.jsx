import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, TreePine, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Landscaping Images
import balconyImg from '../assets/Landscaping/balcony/4.webp';
import plantersImg from '../assets/Landscaping/planters/landscaping.png';
import pergolaImg from '../assets/Landscaping/outdoor living/pergola.png';
import maintenanceImg from '../assets/Landscaping/Maintenance/Garden 1.jpg';
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
    titleAr: 'تنسيق حدائق موفر للمياه',
    link: '/landscaping/water-saving',
    badge: 'Eco-Smart',
    badgeAr: 'بيئي ذكي',
    image: sustainableImg,
    description: 'Desert-adapted xeriscaping, gravel mulching, and drought-hardy flora engineered to cut water consumption by up to 50%.',
    descriptionAr: 'تصاميم الزيريسكيب الصحراوية، التغطية بالحصى التجميلي، ونباتات تتحمل الجفاف لتقليل استهلاك مياه الري بنسبة تصل إلى 50%.',
    highlights: ['Desert-adapted plants', 'Up to 50% water reduction', 'Low maintenance luxury'],
    highlightsAr: ['نباتات متأقلمة مع البيئة الصحراوية', 'توفير حتى 50% من المياه', 'فخامة بأقل متطلبات صيانة'],
  },
  {
    title: 'Balcony & Terrace Gardens',
    titleAr: 'حدائق الشرفات والتراس',
    link: '/landscaping/balcony',
    badge: 'Urban Living',
    badgeAr: 'حياة عصرية',
    image: balconyImg,
    description: 'Transform apartments and penthouses into lush private sky sanctuaries with lightweight planters and automatic drip irrigation.',
    descriptionAr: 'تحويل شرفات الشقق والبنتهاوس إلى واحات خضراء خاصة باستخدام أحواض خفيفة الوزن وشبكات ري بالتنقيط المؤتمتة.',
    highlights: ['Micro-irrigation installed', 'Lightweight weather-proof pots', 'Custom urban layouts'],
    highlightsAr: ['شبكات ري دقيقة مدمجة', 'أحواض خفيفة مقاومة للطقس', 'تصاميم مخصصة للأبراج'],
  },
  {
    title: 'Luxury Planters & Greenery',
    titleAr: 'أحواض نباتات فاخرة وتجميل داخلي',
    link: '/landscaping/planters',
    badge: 'Indoor & Outdoor',
    badgeAr: 'داخلي وخارجي',
    image: plantersImg,
    description: 'Architectural fiberglass, ceramic, and modular planters paired with specimen plants for commercial lobbies and luxury villas.',
    descriptionAr: 'أحواض معمارية مصنوعة من الفايبر جلاس والسيراميك والـ GRC مع نباتات منتقاة بعناية للردهات التجارية والفلل الفاخرة.',
    highlights: ['UV & thermal resistant', 'Custom sizes & RAL colors', 'Interior & exterior grade'],
    highlightsAr: ['مقاومة للحرارة والأشعة فوق البنفسجية', 'مقاسات وألوان RAL مخصصة', 'معايير فندقية وتجارية'],
  },
  {
    title: 'Outdoor Living & Pergolas',
    titleAr: 'المظلات والبرجولات والجلسات الخارجية',
    link: '/landscaping/outdoor-living',
    badge: 'Outdoor Comfort',
    badgeAr: 'راحة وخصوصية',
    image: pergolaImg,
    description: 'Bespoke pergolas, gazebos, acoustic fencing, and shaded entertainment lounges built to endure the extreme UAE summer sun.',
    descriptionAr: 'برجولات خشبية ومعدنية مخصصة، مظلات تظليل معمارية، وسواتر خصوصية مصممة لتحمل حرارة شمس الصيف في الإمارات.',
    highlights: ['Aluminum & thermal wood', 'Custom ambient lighting', 'Climate-resilient shades'],
    highlightsAr: ['ألمنيوم عالي الجودة وخشب معالج حرارياً', 'إضاءة محيطية مخفية', 'مظلات متينة ومقاومة للعوامل الجوية'],
  },
  {
    title: 'Landscape Maintenance',
    titleAr: 'عقود صيانة الحدائق الدورية',
    link: '/landscaping/maintenance',
    badge: 'Year-Round Care',
    badgeAr: 'عناية شاملة على مدار العام',
    image: maintenanceImg,
    description: 'Comprehensive annual care contracts including automated irrigation checks, soil conditioning, seasonal pruning, and pest control.',
    descriptionAr: 'عقود صيانة سنوية متكاملة تشمل الفحص الدوري لشبكات الري، تغذية التربة، تقليم الشجيرات الموسمي، ومكافحة الآفات.',
    highlights: ['Certified horticulturists', 'Monthly irrigation audits', 'Residential & commercial'],
    highlightsAr: ['مهندسون زراعيون معتمدون', 'فحص شهري شامل للري', 'للمشاريع السكنية والتجارية'],
  },
  {
    title: 'Smart Landscape Systems',
    titleAr: 'أنظمة الحدائق الذكية والإنارة',
    link: '/landscaping/systems',
    badge: 'Automation',
    badgeAr: 'أتمتة وتحكم ذكي',
    image: systemsImg,
    description: 'Weather-sensing smart controllers, automated fertigation, and energy-efficient LED garden illumination systems.',
    descriptionAr: 'أجهزة تحكم ذكية مرتبطة بحالة الطقس عبر الواي فاي، شبكات تسميد آلي، وأنظمة إنارة معمارية ليد موفرة للطاقة.',
    highlights: ['App-controlled irrigation', 'Low-voltage garden LEDs', 'Soil moisture sensors'],
    highlightsAr: ['تحكم بالري عبر تطبيق الهاتف', 'إضاءة ليد منخفضة الجهد', 'حساسات رطوبة دقيقة للتربة'],
  },
];

const agricultureServices = [
  {
    title: 'Greenhouses & Cooling Pads',
    titleAr: 'البيوت المحمية ووسائد التبريد',
    link: '/agriculture/greenhouses',
    badge: 'Turnkey Climate',
    badgeAr: 'تحكم مناخي متكامل',
    image: greenhouseImg,
    description: 'Turnkey climate-controlled greenhouses, high-efficiency cellulose cooling pads, shade nets, and anti-insect thermal screens.',
    descriptionAr: 'إنشاء بيوت محمية تجارية متكاملة مع وسائد تبريد سليلوزية عالية الكفاءة، شباك تظليل معالجة، وستائر حرارية مضادة للحشرات.',
    highlights: ['Cellulose cooling pads', 'UV-stabilized shade nets', 'Severe climate resistance'],
    highlightsAr: ['وسائد تبريد سليلوزية فائقة', 'شباك تظليل مقاومة للأشعة فوق البنفسجية', 'صمود كامل في المناخ القاسي'],
  },
  {
    title: 'Smart Agricultural Irrigation',
    titleAr: 'شبكات الري الزراعي الذكي',
    link: '/agriculture/irrigation',
    badge: 'Precision Flow',
    badgeAr: 'تدفق عالي الدقة',
    image: smartIrriImg,
    description: 'Precision boom sprayers, misting systems, micro-drippers, and automated solenoid distribution networks for large-scale farms.',
    descriptionAr: 'أذرع رش متحركة متقدمة، أنظمة رذاذ وضباب، قطارات دقيقة، وصمامات توزيع أوتوماتيكية للمزارع التجارية الكبرى.',
    highlights: ['Overhead boom systems', 'Micro-misting nozzles', 'High-uniformity flow'],
    highlightsAr: ['أنظمة أذرع الري الرشاشة', 'فوهات رذاذ دقيقة', 'توزيع منتظم للمياه'],
  },
  {
    title: 'Planter Pots & Nursery Bags',
    titleAr: 'أحواض وأكياس الزراعة والمشاتل',
    link: '/agriculture/planter-pots',
    badge: 'Commercial Growing',
    badgeAr: 'إنتاج تجاري واسع',
    image: largepotImg,
    description: 'Heavy-duty HDPE nursery containers, UV-treated grow bags, and root-pruning pots designed for commercial plant propagation.',
    descriptionAr: 'أوعية شتلات قوية من البولي إيثيلين عالي الكثافة (HDPE)، وأكياس نمو معالجة، وأواني تقليم الجذور الهوائي للمشاتل والمزارع.',
    highlights: ['Root-breathable design', 'Heavy-duty HDPE build', 'Bulk nursery supply'],
    highlightsAr: ['تصميم يعزز تنفس الجذور', 'صناعة متينة من HDPE', 'توريد كميات كبرى للمشاتل'],
  },
  {
    title: 'Water-Saving AgTech',
    titleAr: 'تقنيات توفير مياه الزراعة',
    link: '/agriculture/water-saving',
    badge: 'Resource Efficiency',
    badgeAr: 'كفاءة الموارد الطبيعية',
    image: farmImg,
    description: 'Subsurface irrigation, polymer soil moisture enhancers, and closed-loop fertigation systems engineered for arid soil farming.',
    descriptionAr: 'شبكات ري تحت سطحية، محببات بوليمر لحفظ رطوبة التربة، وأنظمة تسميد مغلقة مصممة للأراضي الصحراوية الجافة.',
    highlights: ['Sub-surface drip lines', 'Evaporation barriers', 'Soil conditioner blends'],
    highlightsAr: ['خطوط ري تنقيط تحت السطح', 'تقليل التبخر السطحي', 'مخلطات تحسين التربة'],
  },
  {
    title: 'Misting & High-Pressure Pumps',
    titleAr: 'مضخات الضغط العالي وأنظمة الضباب',
    link: '/agriculture/pumps-and-hoses',
    badge: 'Flow Engineering',
    badgeAr: 'هندسة الضخ والتدفق',
    image: pumpsImg,
    description: 'Industrial-grade booster pumps, chemical dosing pumps, reinforced hoses, and specialized agricultural filtration equipment.',
    descriptionAr: 'مضخات تعزيز صناعية، مضخات حقن الأسمدة الكيميائية، خراطيم مقواة، ومحطات فلترة متقدمة للمزارع الكبرى.',
    highlights: ['Continuous duty motors', 'Chemical-resistant seals', 'Pressure control stations'],
    highlightsAr: ['محركات للتشغيل المستمر الشاق', 'موانع تسرب مقاومة للكيماويات', 'لوحات تحكم بالضغط'],
  },
  {
    title: 'Farm Machinery & Pollination',
    titleAr: 'الآلات الزراعية وتلقيح النخيل',
    link: '/agriculture/machinery',
    badge: 'Mechanization',
    badgeAr: 'ميكنة زراعية متطورة',
    image: orkeyImg,
    description: 'Specialized date palm pollination machines, potting transport carts, mechanical sprayers, and nursery harvest equipment.',
    descriptionAr: 'أجهزة آلية لتلقيح أشجار النخيل، عربات نقل أحواض الشتلات، رشاشات ميكانيكية، ومعدات حصاد المشاتل.',
    highlights: ['Date palm pollinators', 'Heavy nursery trolleys', 'Labor saving machinery'],
    highlightsAr: ['أجهزة تلقيح النخيل الآلية', 'عربات نقل شتلات ثقيلة', 'معدات توفر الجهد والعمالة'],
  },
];

const DivisionShowcase = () => {
  const [activeTab, setActiveTab] = useState('landscaping');
  const { isRTL } = useLanguage();

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
            <span>{isRTL ? 'دليل الحلول والخدمات المتكاملة' : 'Comprehensive Solutions Catalog'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a4d2e] tracking-tight mb-4">
            {isRTL ? 'استكشف قطاعينا المتخصصين' : 'Explore Our Two Specialized Divisions'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            {isRTL
              ? 'سواء كنت تؤسس حديقة فيلا فاخرة أو تجهز مزرعة تجارية بأحدث شبكات الري والبيوت المحمية، كهف جرينز تضع بين يديك خبرة 20+ عاماً في الإمارات.'
              : 'Whether you are creating a private villa garden sanctuary or outfitting a commercial farm with cutting-edge irrigation, Kahf Greens brings 20+ years of proven UAE expertise.'}
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
              <span>{isRTL ? 'تنسيق الحدائق' : 'Urban Landscaping'}</span>
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
              <span>{isRTL ? 'التقنيات الزراعية' : 'Agriculture Tech'}</span>
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
            {currentServices.map((service, index) => {
              const displayTitle = isRTL ? service.titleAr : service.title;
              const displayBadge = isRTL ? service.badgeAr : service.badge;
              const displayDesc = isRTL ? service.descriptionAr : service.description;
              const displayHighlights = isRTL ? service.highlightsAr : service.highlights;

              return (
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
                      alt={displayTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <span className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} px-3 py-1 bg-white/90 backdrop-blur-md text-[#1a4d2e] font-semibold text-xs rounded-full shadow-sm`}>
                      {displayBadge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#1a4d2e] group-hover:text-emerald-700 transition-colors mb-2">
                      {displayTitle}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                      {displayDesc}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-3 mb-6 border-t border-gray-100">
                      {displayHighlights.map((h, i) => (
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
                      <span>{isRTL ? 'عرض المواصفات الفنية' : 'View Specifications'}</span>
                      <ArrowRight size={15} className={`${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'} transition-transform`} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-[#1a4d2e] to-[#2d5f3f] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-1">
              {isRTL ? 'هل تحتاج إلى حل متكامل مخصص أو جدول كميات تجاري؟' : 'Need a Customized Turnkey Solution or Commercial BOQ?'}
            </h4>
            <p className="text-emerald-100 text-sm sm:text-base font-light">
              {isRTL
                ? 'يقدم مهندسونا ومعماريو الحدائق في الإمارات تصاميم مخصصة وحسابات هندسية وأسعار جملة مباشرة للمشاريع.'
                : 'Our UAE engineers and landscape architects provide custom designs, technical calculations, and direct wholesale pricing.'}
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 px-6 py-3.5 bg-white hover:bg-emerald-50 text-[#1a4d2e] font-bold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            {isRTL ? 'طلب استشارة هندسية' : 'Request Technical Consultation'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DivisionShowcase;
