import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, TreeDeciduous, Droplets, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const rawFeatures = [
  {
    icon: Sprout,
    title: 'Planting',
    titleAr: 'الزراعة',
    subtitle: 'Desert-Adapted Selection',
    subtitleAr: 'انتقاء متأقلم مع البيئة الصحراوية',
    description:
      'Expert procurement and precision installation of mature palms, native acacia, resilient shrubs, and ground covers tailored to the UAE’s extreme heat and soil salinity.',
    descriptionAr:
      'توريد واحترافية عالية في زراعة النخيل المعمر، والأشجار المحلية، والشجيرات المقاومة لدرجات الحرارة والملوحة العالية في الإمارات.',
    color: '#1a4d2e',
    highlights: ['Native & acclimatized flora', 'Zero transplant shock protocol', 'Deep-root stabilization'],
    highlightsAr: ['نباتات محلية ومتأقلمة', 'بروتوكول حماية الجذور من الصدمة', 'تثبيت عميق للجذور'],
    bgImage:
      'https://cdn11.bigcommerce.com/s-ljo0upzvqc/product_images/uploaded_images/xeriscaping-with-large-boulders.png',
  },
  {
    icon: TreeDeciduous,
    title: 'Growing',
    titleAr: 'النمو',
    subtitle: 'Sustainable Horticulture',
    subtitleAr: 'بستانية مستدامة',
    description:
      'State-of-the-art climate-controlled propagation and nursery containers producing vigorously rooted, healthy specimen trees ready for rapid establishment across the Emirates.',
    descriptionAr:
      'مشاتل وحاويات زراعية متطورة لإنتاج أشجار قوية الجذور مجهزة للنمو السريع في مختلف مناطق الإمارات.',
    color: '#2d5f3f',
    highlights: ['Advanced greenhouse climate', 'Root-pruning container tech', 'Zero soil degradation methods'],
    highlightsAr: ['مناخ بيوت محمية متطور', 'تقنية أصص تقليم الجذور', 'أساليب حماية التربة من التدهور'],
    bgImage:
      'https://www.gulfagriculture.com/wp-content/uploads/2024/06/20230913_160333.jpg',
  },
  {
    icon: Droplets,
    title: 'Saving',
    titleAr: 'الترشيد',
    subtitle: 'Water Conservation',
    subtitleAr: 'توفير استهلاك المياه',
    description:
      'Smart automated sub-surface drip networks, weather-responsive controllers, and xeriscaping principles that slash water consumption by up to 50% without sacrificing lush visual beauty.',
    descriptionAr:
      'شبكات ري تنقيط تحت سطحية، وأجهزة تحكم ذكية، وتصاميم زيريسكيب تضمن توفير المياه حتى 50%.',
    color: '#1a4d2e',
    highlights: ['Up to 50% water savings', 'Smart ET weather sensors', 'Drought-tolerant xeriscaping'],
    highlightsAr: ['توفير المياه حتى 50%', 'أجهزة استشعار الطقس الذكية', 'حدائق زيريسكيب متحملة للجفاف'],
    bgImage:
      'https://cactuslap.com/wp-content/uploads/2025/04/DSCF8956-1024x683.jpg',
  },
];

const PlantingSection = () => {
  const { isRTL } = useLanguage();

  const features = rawFeatures.map((f) => ({
    ...f,
    title: isRTL ? f.titleAr : f.title,
    subtitle: isRTL ? f.subtitleAr : f.subtitle,
    description: isRTL ? f.descriptionAr : f.description,
    highlights: isRTL ? f.highlightsAr : f.highlights,
  }));

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#fbfdfa] to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#1a4d2e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-emerald-600" />
            <span>{isRTL ? 'فلسفتنا الجوهرية' : 'Our Core Philosophy'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a4d2e] tracking-tight mb-5">
            {isRTL ? (
              <>الزراعة <span className="text-[#90b77d]">·</span> النمو <span className="text-[#90b77d]">·</span> الترشيد</>
            ) : (
              <>Planting <span className="text-[#90b77d]">·</span> Growing <span className="text-[#90b77d]">·</span> Saving</>
            )}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 font-light leading-relaxed">
            {isRTL
              ? 'منهجيتنا المتكاملة تضمن إنشاء مساحات خضراء دائمة ومزارع منتجة مصممة للازدهار في بيئة الخليج العربي.'
              : 'Our integrated methodology delivers enduring, lush landscapes and productive farms engineered to thrive in the demanding Arabian Gulf environment.'}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-lg bg-white h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border border-gray-100 flex flex-col justify-between">
                  {/* Subtle background image overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-700"
                    style={{ backgroundImage: `url(${feature.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white pointer-events-none" />

                  <div className="relative p-7 sm:p-9 flex flex-col items-center text-center h-full z-10">
                    {/* Icon */}
                    <div
                      className="mb-6 p-5 rounded-2xl shadow-md text-white transition-all duration-400 group-hover:scale-110 group-hover:rotate-2"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color} 0%, #2d5f3f 100%)`,
                      }}
                    >
                      <Icon size={44} strokeWidth={1.8} />
                    </div>

                    {/* Badge */}
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                      {feature.subtitle}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1a4d2e] mb-4">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                      {feature.description}
                    </p>

                    {/* Highlights */}
                    <div className="w-full pt-4 border-t border-gray-100 space-y-2 text-left">
                      {feature.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlantingSection;
