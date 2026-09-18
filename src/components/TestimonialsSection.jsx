import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const rawTestimonials = [
  {
    name: 'Mohammed Al Rashid',
    nameAr: 'محمد الراشد',
    role: 'Villa Owner',
    roleAr: 'مالك فيلا',
    location: 'Palm Jumeirah, Dubai',
    locationAr: 'نخلة جميرا، دبي',
    rating: 5,
    text: "Kahf Greens transformed our villa garden into a stunning oasis. Their team understood our vision perfectly and delivered a water-efficient landscape that thrives in Dubai's heat. The irrigation system they installed has cut our water usage by nearly half.",
    textAr: 'حولت كهف جرينز حديقة فيلتنا إلى واحة ساحرة. فهم فريقهم رؤيتنا تماماً وقدموا حديقة موفرة للمياه تزدهر في حرارة دبي. خفض نظام الري الذي قاموا بتركيبه استهلاكنا للمياه بالنصف تقريباً.',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
  },
  {
    name: 'Ahmed Hassan',
    nameAr: 'أحمد حسن',
    role: 'Farm Manager',
    roleAr: 'مدير مزرعة',
    location: 'Al Ain, Abu Dhabi',
    locationAr: 'العين، أبوظبي',
    rating: 5,
    text: "We sourced our greenhouse cooling pads and shade netting from Kahf Greens. Exceptional quality — the cooling efficiency improvement was immediate. Their technical team's knowledge of UAE agricultural requirements is unmatched in the region.",
    textAr: 'قمنا بتوريد وسائد تبريد البيوت المحمية وشباك التظليل من كهف جرينز. جودة استثنائية وكان التحسن في كفاءة التبريد فورياً. معرفة فريقهم التقني بالمتطلبات الزراعية في الإمارات لا مثيل لها.',
    category: 'Agriculture',
    categoryAr: 'القطاع الزراعي',
  },
  {
    name: 'Sarah Okoye',
    nameAr: 'سارة أوكوي',
    role: 'Facilities Director',
    roleAr: 'مديرة المرافق',
    location: 'Business Bay, Dubai',
    locationAr: 'الخليج التجاري، دبي',
    rating: 5,
    text: "We engaged Kahf Greens for our commercial office tower's outdoor planters and green wall installation. The project was completed on time, on budget, and the quality of the plants and craftsmanship is outstanding. Highly recommended for commercial projects.",
    textAr: 'تعاقدنا مع كهف جرينز لتركيب أحواض الجدران الخضراء الخارجية لبرجنا المكتبي. تم إنجاز المشروع في الوقت المحدد وضمن الميزانية وبجودة استثنائية. نوصي بهم بشدة.',
    category: 'Commercial',
    categoryAr: 'تجاري',
  },
  {
    name: 'Khalid Al Mansoori',
    nameAr: 'خالد المنصوري',
    role: 'Government Project Manager',
    roleAr: 'مدير مشاريع حكومية',
    location: 'Sharjah',
    locationAr: 'الشارقة',
    rating: 5,
    text: "Kahf Greens supplied and installed the planter bags and irrigation for our urban greening initiative across 3 districts. Their UAE-wide logistics capability and commitment to deadlines made them the ideal partner for a government-scale project.",
    textAr: 'قامت كهف جرينز بتوريد وتركيب أكياس الزراعة ونظم الري لمبادرتنا للتخضير الحضري عبر 3 مناطق. جعلتهم إمكانياتهم اللوجستية والالتزام بالمواعيد الشريك المثالي لمشروع حكومي ضخم.',
    category: 'Government',
    categoryAr: 'حكومي',
  },
  {
    name: 'Fatima Al Zaabi',
    nameAr: 'فاطمة الزعابي',
    role: 'Community Manager',
    roleAr: 'مديرة مجمع سكني',
    location: 'Al Reem Island, Abu Dhabi',
    locationAr: 'جزيرة الريم، أبوظبي',
    rating: 5,
    text: "Our residential compound had chronic overwatering issues damaging the lawns. Kahf Greens retrofitted the entire community with drip irrigation and smart controllers across 40+ villas. Six months later, our landscaping bills are down and the grass has never looked healthier.",
    textAr: 'كان مجمعنا السكني يعاني من مشاكل الري الزائد. قامت كهف جرينز بتحديث المجمع بالكامل بنظام ري بالتنقيط وأجهزة تحكم ذكية لأكثر من 40 فيلا. انخفضت فواتيرنا وأصبحت المسطحات الخضراء في أفضل حالاتها.',
    category: 'Residential Compound',
    categoryAr: 'مجمع سكني',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'fill-[#D4A843] text-[#D4A843]' : 'text-gray-300'}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { isRTL } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const testimonials = rawTestimonials.map((t) => ({
    ...t,
    name: isRTL ? t.nameAr : t.name,
    role: isRTL ? t.roleAr : t.role,
    location: isRTL ? t.locationAr : t.location,
    text: isRTL ? t.textAr : t.text,
    category: isRTL ? t.categoryAr : t.category,
  }));

  const initialCount = 4;
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, initialCount);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
    if (showAll) {
      const section = document.getElementById('testimonials-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section
      id="testimonials-section"
      className="py-20 md:py-28 bg-gradient-to-b from-[#f5f7f2] to-white overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#1a4d2e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-emerald-600" />
            <span>{isRTL ? 'آراء عملاء موثوقة في الإمارات' : 'Verified UAE Feedback'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a4d2e] tracking-tight mb-4">
            {isRTL ? (
              <>محل ثقة كبرى شركات التطوير والمزارع والمنازل في الإمارات</>
            ) : (
              <>Trusted by UAE's Leading Developers,<br className="hidden md:block" /> Farms & Homeowners</>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            {isRTL
              ? 'من الفلل والمنازل الفاخرة إلى المزارع والمرافق التجارية — استمع مباشرة لآراء عملائنا عبر الإمارات.'
              : 'From private luxury villas and resorts to commercial agricultural operations — hear directly from our clients across the Emirates.'}
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-500 font-medium">
            <span>{isRTL ? 'تقييمات عملاء معتمدة من كافة الإمارات' : 'Verified Client Reviews Across UAE'}</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">{isRTL ? 'متوسط تقييم 4.9 / 5.0' : '4.9 / 5.0 Average Rating'}</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {displayedTestimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx >= initialCount ? (idx - initialCount) * 0.05 : 0 }}
                className="relative bg-white rounded-3xl p-7 sm:p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Quote icon */}
                <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} opacity-10 pointer-events-none`}>
                  <Quote size={48} className="text-[#1a4d2e] fill-[#1a4d2e]" />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-emerald-50 text-[#1a4d2e] text-xs font-bold rounded-full uppercase tracking-wide border border-emerald-100">
                      {t.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50/70 px-2 py-0.5 rounded-md">
                      <CheckCircle2 size={12} />
                      <span>{isRTL ? 'عميل موثق في الإمارات' : 'Verified UAE Client'}</span>
                    </div>
                  </div>

                  <StarRating rating={t.rating} />

                  <p className="mt-4 text-slate-700 leading-relaxed text-sm sm:text-base italic">
                    "{t.text}"
                  </p>
                </div>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More / Show Less Button */}
        <div className="mt-12 text-center">
          <Button
            onClick={toggleShowAll}
            className="inline-flex items-center gap-2 px-8 py-6 rounded-2xl bg-white hover:bg-emerald-50 text-[#1a4d2e] font-bold text-sm sm:text-base border-2 border-emerald-200 hover:border-[#1a4d2e] shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? (
              <>
                <span>{isRTL ? 'عرض تقييمات أقل' : 'Show Fewer Reviews'}</span>
                <ChevronUp size={18} className="text-[#1a4d2e]" />
              </>
            ) : (
              <>
                <span>{isRTL ? 'عرض المزيد من التقييمات' : 'See More Client Reviews'}</span>
                <ChevronDown size={18} className="text-[#1a4d2e]" />
              </>
            )}
          </Button>
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center mt-10 pt-8 border-t border-gray-100"
        >
          <p className="text-slate-600 text-sm">
            {isRTL ? 'انضم لأكثر من 100 عميل راضٍ في كافة إمارات الدولة • ' : 'Join 100+ satisfied clients across the UAE • '}
            <Link to="/contact" className="text-[#1a4d2e] font-bold hover:underline">
              {isRTL ? 'اطلب استشارتك المجانية اليوم ←' : 'Request your free consultation today →'}
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
