import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, FileText, Phone, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import greener from '../assets/greener.jpg';

const CTASection = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${greener})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Gradient Overlay for Maximum Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-white"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[#a3c990] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <Sparkles size={14} />
            <span>{isRTL ? 'ابدأ مشروعك في الإمارات اليوم' : 'Start Your UAE Project Today'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            {isRTL ? (
              <>هل أنت جاهز لبناء <span className="text-[#90b77d]">مساحتك الخضراء المستدامة</span> أو مزرعتك الحديثة؟</>
            ) : (
              <>Ready to Build Your <span className="text-[#90b77d]">Sustainable Green Sanctuary</span> or High-Tech Farm?</>
            )}
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-10 text-emerald-100/90 font-light leading-relaxed max-w-3xl mx-auto">
            {isRTL
              ? 'من حدائق الفلل الخاصة والأسطح، وتجميل الشوارع، إلى البيوت المحمية التجارية وشبكات الري الآلية — يقدم فريقنا نتائج متكيفة مع المناخ وموفرة للمياه.'
              : 'From private villa gardens, rooftop terraces, and municipal streetscapes to turnkey commercial greenhouses and automated farm irrigation — our team delivers climate-adapted, water-wise results.'}
          </p>

          {/* Action Buttons Group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Primary Action */}
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="w-full sm:w-auto bg-[#90b77d] hover:bg-[#a3c990] text-[#133820] font-bold text-base md:text-lg px-8 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2.5"
            >
              <FileText size={22} />
              <span>{isRTL ? 'احصل على عرض سعر مجاني' : 'Get Your Free Proposal'}</span>
              <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
            </Button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/971565096880?text=Hello%20Kahf%20Greens,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base md:text-lg px-8 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2.5"
              >
                <MessageCircle size={22} />
                <span>{isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
              </Button>
            </a>

            {/* Direct Phone Call */}
            <a href="tel:+97142240733" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold text-base md:text-lg px-7 py-7 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2.5"
              >
                <Phone size={20} />
                <span>{isRTL ? 'اتصل بنا +971 4 224 0733' : 'Call +971 4 224 0733'}</span>
              </Button>
            </a>
          </div>

          {/* Trust Guarantees Strip */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-emerald-100/80 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#90b77d] flex-shrink-0" />
              <span>{isRTL ? 'معاينة ميدانية مجانية في الإمارات' : 'Free On-Site Assessment in UAE'}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#90b77d] flex-shrink-0" />
              <span>{isRTL ? 'عرض فني وجدول كميات خلال 24 ساعة' : 'Custom Engineering & BOQ in 24h'}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#90b77d] flex-shrink-0" />
              <span>{isRTL ? 'مطابق لمعايير بلدية دبي وهيئة الكهرباء' : 'Dubai Municipality & DEWA Compliant'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
