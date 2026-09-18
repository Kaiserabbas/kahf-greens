import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Tag, Sparkles, Images } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

import farm from '../assets/farm.jpg';
import largepot from '../assets/largepot.jpg';
import tree1 from '../assets/Landscaping/New/tree 1.jpg';
import orkey from '../assets/orkey.jpg';
import grass from '../assets/Landscaping/New/grass 1.jpg';
import plantsupport from '../assets/plantsupport.jpg';

const rawProjects = [
  {
    id: 1,
    title: 'Greenhouse Climate & Cooling Pads',
    titleAr: 'تبريد البيوت المحمية ووسائد السليلوز',
    category: 'Agriculture',
    categoryAr: 'القطاع الزراعي',
    location: 'Al Ain, Abu Dhabi',
    locationAr: 'العين، أبوظبي',
    scope: 'Commercial Farm',
    scopeAr: 'مزرعة تجارية',
    description: 'High-efficiency cellulose cooling pads and shade net integration for a major UAE commercial greenhouse operator, reducing internal temperatures by up to 12°C.',
    descriptionAr: 'وسائد تبريد سليلوز عالية الكفاءة مع شباك التظليل لبيت محمي تجاري، مما خفض درجات الحرارة الداخلية حتى 12 درجة مئوية.',
    image: farm,
  },
  {
    id: 2,
    title: 'Commercial Nursery Planter Containers',
    titleAr: 'أواني وأحواض المشاتل التجارية',
    category: 'Agriculture',
    categoryAr: 'القطاع الزراعي',
    location: 'Al Dhaid, Sharjah',
    locationAr: 'الذيد، الشارقة',
    scope: 'Agricultural Supply',
    scopeAr: 'توريدات زراعية',
    description: 'Supplied 15,000+ heavy-duty UV-stabilized root-pruning pots to a leading regional nursery, boosting plant root architecture and handling efficiency.',
    descriptionAr: 'توريد أكثر من 15,000 أصيص عالي التحمل ومقاوم للأشعة فوق البنفسجية لمشتل رائد، مما يعزز النمو الجذري وكفاءة النقل.',
    image: largepot,
  },
  {
    id: 3,
    title: 'Automated Date Palm Pollination',
    titleAr: 'التلقيح الآلي لمزارع النخيل',
    category: 'Agriculture',
    categoryAr: 'القطاع الزراعي',
    location: 'Liwa Oasis, Abu Dhabi',
    locationAr: 'واحة ليوا، أبوظبي',
    scope: 'Farm Mechanization',
    scopeAr: 'ميكنة المزارع',
    description: 'Deployment of specialised mechanised pollination units across 500+ date palms, slashing labor costs by 70% while improving fruit yields.',
    descriptionAr: 'تشغيل وحدات تلقيح ميكانيكية متخصصة على أكثر من 500 نخلة، مما خفض تكاليف العمالة بنسبة 70% وزاد الإنتاجية.',
    image: orkey,
  },
  {
    id: 4,
    title: '1 JBR – Exterior Landscaping & Lighting',
    titleAr: '1 جي بي آر – أعمال تنسيق الحدائق والإضاءة الخارجية',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    location: 'JBR, Dubai Marina, Dubai',
    locationAr: 'جي بي آر، دبي مارينا، دبي',
    scope: 'Luxury Residential',
    scopeAr: 'مجمع سكني فاخر',
    description: 'Full exterior soft & hard landscaping plus electrical lighting works for the iconic 1 JBR tower — planting beds, ornamental trees, pathways, and weatherproof lighting across the beachfront podium.',
    descriptionAr: 'أعمال متكاملة لتنسيق الحدائق الإنسكابية والصلبة والإضاءة الخارجية لبرج 1 JBR الفاخر على واجهة دبي مارينا.',
    image: '/images/projects/1jbr-exteriors/1jbr-exteriors-000.jpg',
    slug: 'jbr-exterior',
  },
  {
    id: 5,
    title: '1 JBR – Interior Planting & Green Design',
    titleAr: '1 جي بي آر – التنسيق الداخلي والتصميم الأخضر',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    location: 'JBR, Dubai Marina, Dubai',
    locationAr: 'جي بي آر، دبي مارينا، دبي',
    scope: 'Luxury Residential',
    scopeAr: 'مجمع سكني فاخر',
    description: 'Bespoke interior soft-landscaping for lobbies, corridors and amenity spaces at 1 JBR — tropical species, custom planters and moss walls designed to complement the luxury interior.',
    descriptionAr: 'تنسيق داخلي بتصاميم نباتية مخصصة لردهات وممرات ومرافق برج 1 JBR — نباتات استوائية، أحواض فاخرة وجدران طحالب.',
    image: '/images/projects/1jbr-interiors/1jbr-interiors-000.jpg',
    slug: 'jbr-interior',
  },
  {
    id: 6,
    title: 'JBR Marjan – Concrete Plinth & Pebble Works',
    titleAr: 'جي بي آر مرجان – القواعد الخرسانية ومقاعد الأحجار والحصى',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    location: 'JBR Marjan Walk, Dubai',
    locationAr: 'ممشى مرجان جي بي آر، دبي',
    scope: 'Commercial',
    scopeAr: 'تجاري',
    description: 'Construction of robust concrete plinths, natural bench stones, and decorative pebble-wash finishes along the JBR Marjan beachfront promenade — built to withstand the UAE coastal environment.',
    descriptionAr: 'بناء وتشطيب القواعد الخرسانية والمقاعد الحجرية وأعمال الحصى التجميلية على طول ممشى جي بي آر مرجان.',
    image: '/images/projects/jbr-marjan-plinth/jbr-marjan-plinth-000.jpg',
    slug: 'jbr-marjan-plinth',
  },
  {
    id: 7,
    title: 'Drought-Tolerant Paspalum Turf',
    titleAr: 'عشب باسبالوم متحمل للجفاف والملوحة',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    location: 'Dubai South, Dubai',
    locationAr: 'دبي الجنوب، دبي',
    scope: 'Urban Greening',
    scopeAr: 'تشجير حضري',
    description: 'Installation of high-salinity-tolerant Platinum TE Paspalum grass combined with sub-surface drip irrigation for wide public open spaces.',
    descriptionAr: 'تركيب عشب باسبالوم بلاتينيوم عالي التحمل للملوحة مع شبكة ري تنقيط تحت سطحية للمساحات العامة.',
    image: grass,
  },
  {
    id: 8,
    title: 'High-Wind Plant & Tree Stabilization',
    titleAr: 'أنظمة تثبيت وتدعيم الأشجار والنباتات',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    location: 'Palm Jumeirah, Dubai',
    locationAr: 'نخلة جميرا، دبي',
    scope: 'Coastal Landscaping',
    scopeAr: 'تنسيق ساحلي',
    description: 'Heavy-duty chain-lock ties, tree stakes, and flexible supports engineered for coastal wind resistance, protecting newly planted specimen trees.',
    descriptionAr: 'أربطة ودعامات متينة ومصممة لمقاومة الرياح البحرية القوية وحماية الأشجار المغروسة حديثاً.',
    image: plantsupport,
  },
  {
    id: 9,
    title: 'Specimen Date Palm & Tree Avenue',
    titleAr: 'ممشى النخيل المعمر والأشجار الاستوائية',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    location: 'Jumeirah Golf Estates, Dubai',
    locationAr: 'عقارات جميرا للجولف، دبي',
    scope: 'Luxury Residential',
    scopeAr: 'مجمع سكني فاخر',
    description: 'Curated selection and turnkey transplantation of 80+ mature specimen date palms creating a regal shaded pedestrian avenue with zero shock loss.',
    descriptionAr: 'اختيار ونقل متكامل لأكثر من 80 نخلة معمرة لخلق ممشى ملكي مظلل للمشاة دون أي تلف للنباتات.',
    image: tree1,
  },
];

const FeaturedProjects = () => {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState('All');

  const projects = rawProjects.map((p) => ({
    ...p,
    title: isRTL ? p.titleAr : p.title,
    category: isRTL ? p.categoryAr : p.category,
    location: isRTL ? p.locationAr : p.location,
    scope: isRTL ? p.scopeAr : p.scope,
    description: isRTL ? p.descriptionAr : p.description,
  }));

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => (filter === 'Agriculture' ? p.categoryAr === 'القطاع الزراعي' || p.category === 'Agriculture' : p.categoryAr === 'تنسيق الحدائق' || p.category === 'Landscaping'));

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-slate-100/70 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#1a4d2e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-emerald-600" />
            <span>{t('home.featured.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a4d2e] tracking-tight mb-4">
            {t('home.featured.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            {t('home.featured.subtitle')}
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-gray-200 shadow-sm">
            {['All', 'Landscaping', 'Agriculture'].map((catKey) => {
              const label =
                catKey === 'All'
                  ? t('home.featured.filterAll')
                  : catKey === 'Landscaping'
                  ? t('home.featured.filterLandscaping')
                  : t('home.featured.filterAgriculture');
              return (
                <button
                  key={catKey}
                  onClick={() => setFilter(catKey)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    filter === catKey
                      ? 'bg-[#1a4d2e] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Badges */}
                  <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} flex gap-2`}>
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#1a4d2e] text-xs font-bold rounded-full shadow-sm">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-emerald-800/90 backdrop-blur-md text-white text-xs font-medium rounded-full shadow-sm">
                      {project.scope}
                    </span>
                  </div>

                  {/* Location badge */}
                  <div className={`absolute bottom-3 ${isRTL ? 'right-4' : 'left-4'} flex items-center gap-1.5 text-xs font-medium text-white/90 drop-shadow`}>
                    <MapPin size={13} className="text-[#90b77d]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a4d2e] mb-3 group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-gray-100">
                    {project.slug ? (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-emerald-50 hover:bg-[#1a4d2e] text-[#1a4d2e] hover:text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 group/btn"
                      >
                        <span className="flex items-center gap-1.5"><Images size={14} />{t('common.viewGallery')}</span>
                        <ArrowRight size={15} className={`group-hover/btn:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-emerald-50 hover:bg-[#1a4d2e] text-[#1a4d2e] hover:text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 group/btn"
                      >
                        <span>{t('common.inquireProject')}</span>
                        <ArrowRight size={15} className={`group-hover/btn:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Portfolio Link */}
        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-base font-bold text-[#1a4d2e] hover:text-[#2d5f3f] bg-white border border-gray-200 hover:border-emerald-300 shadow-sm hover:shadow-md px-7 py-3.5 rounded-xl transition-all duration-200 group"
          >
            <span>{t('common.viewAllProjects')}</span>
            <ArrowRight size={18} className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

