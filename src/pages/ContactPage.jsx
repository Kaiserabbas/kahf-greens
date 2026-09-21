import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Clock,
  ExternalLink,
  ChevronDown,
  Building2,
  Sparkles,
  ShieldCheck,
  Calendar,
  Compass,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import { useLanguage } from '../contexts/LanguageContext';

const rawEmirates = [
  { en: 'Dubai', ar: 'دبي' },
  { en: 'Abu Dhabi', ar: 'أبوظبي' },
  { en: 'Sharjah', ar: 'الشارقة' },
  { en: 'Ajman', ar: 'عجمان' },
  { en: 'Ras Al Khaimah', ar: 'رأس الخيمة' },
  { en: 'Fujairah', ar: 'الفجيرة' },
  { en: 'Umm Al Quwain', ar: 'أم القيوين' },
  { en: 'Other / Outside UAE', ar: 'خارج الإمارات / دولة أخرى' },
];

const rawServiceOptions = [
  { id: 'villa-landscape', label: 'Villa Landscaping & Design', labelAr: 'تنسيق وتصميم حدائق الفلل' },
  { id: 'maintenance', label: 'Garden & Turf Maintenance (AMC)', labelAr: 'عقود صيانة الحدائق والعشب (AMC)' },
  { id: 'balcony', label: 'Balcony Garden Packages', labelAr: 'تنسيق وحدائق الشرفات' },
  { id: 'commercial', label: 'Commercial & Developer Landscaping', labelAr: 'تنسيق حدائق المشاريع التجارية والمطورين' },
  { id: 'agriculture', label: 'Agriculture & Greenhouses', labelAr: 'التقنيات والبيوت المحمية الزراعية' },
  { id: 'irrigation', label: 'Smart Irrigation & Water Saving', labelAr: 'أنظمة الري الذكية وتقنيات توفير المياه' },
  { id: 'planters', label: 'Planters & Street Furniture', labelAr: 'أحواض النباتات والمظلات والجلسات' },
  { id: 'other', label: 'General / Product Inquiry', labelAr: 'استفسار عام / توريدات' },
];

const rawFaqs = [
  {
    q: 'How fast can our team arrange a site visit or consultation?',
    qAr: 'ما هي السرعة التي يمكن لفريقكم فيها ترتيب زيارة ميدانية؟',
    a: 'For villas and commercial properties across Dubai and Sharjah, our specialists can typically conduct an on-site evaluation within 24 to 48 hours of your inquiry.',
    aAr: 'بالنسبة للفلل والمجموعات التجارية في دبي والشارقة وكافة الإمارات، عادةً ما يقيم خبراؤنا الموقع خلال 24 إلى 48 ساعة من طلبكم.',
  },
  {
    q: 'Do you provide end-to-end design, construction, and municipality approvals?',
    qAr: 'هل تقدمون خدمات متكاملة تشمل التصميم والتنفيذ والتراخيص الرسمية؟',
    a: 'Yes. Kahf Greens handles complete turnkey projects — from concept design and 3D visualization, to Dubai Municipality / DEWA / SEWA approvals, earthworks, hardscaping, softscaping, and ongoing maintenance.',
    aAr: 'نعم. تتكفل كهف جرينز بالتنفيذ الشامل من المخططات ثلاثية الأبعاد إلى استخراج موافقات بلدية دبي وديوا وسيوا وأعمال التسوية والتنسيق والصيانة.',
  },
  {
    q: 'Can individual clients purchase planters, irrigation gear, or hydrogel textiles?',
    qAr: 'هل يمكن للأفراد شراء الأحواض وأدوات الري أو الجيوتكستايل الموفر للمياه؟',
    a: 'Absolutely. We supply both retail quantities for villa owners and bulk wholesale quantities for agricultural farms, nurseries, and landscape contractors.',
    aAr: 'بالتأكيد. نوفر التجزئة لملاك الفلل والكميات بالجملة للمزارع والمشاتل ومقاولي الحدائق.',
  },
  {
    q: 'Which regions of the UAE and GCC do you serve?',
    qAr: 'ما هي المناطق التي تخدمونها في الإمارات ودول الخليج؟',
    a: 'We operate across all seven Emirates (Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ) with regional logistics support across the GCC for large-scale agricultural projects.',
    aAr: 'نعمل في كافة إمارات الدولة السبع مع تقديم الدعم اللوجستي الإقليمي لمشاريع الزراعة الكبرى في دول مجلس التعاون.',
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    emirate: 'Dubai',
    selectedServices: ['villa-landscape'],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const emiratesList = rawEmirates.map((e) => (isRTL ? e.ar : e.en));
  const serviceOptions = rawServiceOptions.map((s) => ({
    ...s,
    label: isRTL ? s.labelAr : s.label,
  }));
  const faqs = rawFaqs.map((f) => ({
    q: isRTL ? f.qAr : f.q,
    a: isRTL ? f.aAr : f.a,
  }));

  // Live UAE Business Status (GST = UTC+4)
  const officeStatus = useMemo(() => {
    const now = new Date();
    // UTC time + 4 hours for UAE Standard Time
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const uaeDay = now.getUTCDay(); // 0 = Sun, 1 = Mon ... 6 = Sat

    const totalUaeMinutes = ((utcHours + 4) % 24) * 60 + utcMinutes;

    // Mon - Fri: 7:30 AM (450 mins) to 5:00 PM (1020 mins)
    // Sat: 7:30 AM (450 mins) to 2:00 PM (840 mins)
    // Sun: Closed
    if (uaeDay === 0) {
      return {
        isOpen: false,
        text: isRTL ? 'مغلق اليوم (الأحد)' : 'Closed Today (Sunday)',
        subtext: isRTL ? 'يفتح الإثنين الساعة 7:30 صباحاً' : 'Opens Monday at 7:30 AM GST',
      };
    } else if (uaeDay >= 1 && uaeDay <= 5) {
      if (totalUaeMinutes >= 450 && totalUaeMinutes < 1020) {
        return {
          isOpen: true,
          text: isRTL ? 'مفتوح الان' : 'Open Now',
          subtext: isRTL ? 'يغلق المكتب الساعة 5:00 مساءً' : 'Office closes at 5:00 PM GST',
        };
      } else {
        return {
          isOpen: false,
          text: isRTL ? 'مغلق حالياً' : 'Currently Closed',
          subtext: isRTL ? 'يفتح الإثنين – السبت 7:30 صباحاً' : 'Opens Mon–Sat at 7:30 AM GST',
        };
      }
    } else if (uaeDay === 6) {
      if (totalUaeMinutes >= 450 && totalUaeMinutes < 840) {
        return {
          isOpen: true,
          text: isRTL ? 'مفتوح اليوم (السبت)' : 'Open Today (Saturday)',
          subtext: isRTL ? 'يغلق الساعة 2:00 ظهراً' : 'Closes at 2:00 PM GST',
        };
      } else {
        return {
          isOpen: false,
          text: isRTL ? 'مغلق حالياً' : 'Currently Closed',
          subtext: isRTL ? 'يفتح الإثنين الساعة 7:30 صباحاً' : 'Opens Monday at 7:30 AM GST',
        };
      }
    }
    return {
      isOpen: false,
      text: isRTL ? 'مغلق' : 'Closed',
      subtext: isRTL ? 'يفتح الإثنين – السبت 7:30 صباحاً' : 'Opens Mon–Sat at 7:30 AM GST',
    };
  }, [isRTL]);

  const handleServiceToggle = (id) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(id);
      if (exists) {
        // Keep at least one service selected
        if (prev.selectedServices.length === 1) return prev;
        return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== id) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, id] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: isRTL ? 'تم إرسال الطلب بنجاح' : 'Inquiry Submitted Successfully',
      description: t('contact.successMsg'),
      variant: 'success',
      icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      emirate: 'Dubai',
      selectedServices: ['villa-landscape'],
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleSendViaWhatsApp = () => {
    const selectedLabels = formData.selectedServices
      .map((id) => serviceOptions.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const text = `Hello Kahf Greens,%0A%0AMy name is: ${encodeURIComponent(formData.name || 'Client')}%0APhone: ${encodeURIComponent(formData.phone || 'Provided via WhatsApp')}%0ALocation: ${encodeURIComponent(formData.emirate)}%0AInterested in: ${encodeURIComponent(selectedLabels || 'General Inquiry')}%0A%0AMessage:%0A${encodeURIComponent(formData.message || 'I would like to request a consultation and quotation.')}`;

    window.open(`https://wa.me/971565096880?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{isRTL ? 'اتصل بنا | كهف جرينز – دبي، الإمارات' : 'Contact Kahf Greens | Sustainable Landscaping & Agriculture Dubai'}</title>
        <meta
          name="description"
          content={isRTL ? 'تواصل مع شركة كهف جرينز في رأس الخور، دبي. هاتف: +971 4 224 0733، واتساب: +971 56 509 6880 لتنسيق الحدائق والري والزراعة.' : "Connect with Kahf Greens in Ras Al Khor, Dubai. Call +971 4 224 0733, WhatsApp +971 56 509 6880, or visit our showroom for landscaping, irrigation, and farming solutions."}
        />
        <meta name="keywords" content="contact landscaping Dubai, garden contractor UAE, agriculture supplier Dubai, Kahf Greens phone number, landscaping quote UAE" />
        <link rel="canonical" href="https://kahfgreens.com/contact" />
        <meta property="og:title" content="Contact Kahf Greens | Landscaping & Agriculture in UAE" />
        <meta property="og:description" content="Reach our specialists in Ras Al Khor, Dubai for landscaping design, maintenance, and agriculture solutions." />
      </Helmet>

      {/* ---------------- HERO BANNER ---------------- */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400"
            alt="Luxury landscape in UAE"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl mx-auto"
          >
            {/* Live Office Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md bg-white/15 border border-white/20 mb-6 text-emerald-100">
              <span className={`w-2 h-2 rounded-full ${officeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>{officeStatus.text}</span>
              <span className="opacity-60">•</span>
              <span className="opacity-90">{officeStatus.subtext}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 font-light leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- 4 QUICK CHANNELS ---------------- */}
      <section className="relative -mt-8 z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Direct Phone */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#1a4d2e] mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">{isRTL ? 'الاتصال المباشر' : 'Call Our Office'}</h3>
            <p className="text-xs text-gray-500 mb-3">{isRTL ? 'تواصل فوري مع فريق المبيعات' : 'Instant connection with our support team'}</p>
            <div className="space-y-1">
              <a
                href="tel:+97142240733"
                className="block text-sm font-semibold text-[#1a4d2e] hover:underline"
              >
                +971 4 224 0733
              </a>
              <a
                href="tel:+971565096880"
                className="block text-sm font-semibold text-[#1a4d2e] hover:underline"
              >
                +971 56 509 6880
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#25D366] mb-4">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">{isRTL ? 'محادثة الواتساب السريعة' : 'WhatsApp Fast Track'}</h3>
            <p className="text-xs text-gray-500 mb-3">{isRTL ? 'أرسل صور الموقع أو موقعك الميداني' : 'Send project photos or location pin'}</p>
            <a
              href="https://wa.me/971565096880?text=Hello%20Kahf%20Greens%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1fb657] hover:underline"
            >
              <span>{t('common.whatsAppUs')}</span>
              <ExternalLink size={14} className={isRTL ? 'rotate-180' : ''} />
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#1a4d2e] mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">{isRTL ? 'البريد الإلكتروني' : 'Email Inquiries'}</h3>
            <p className="text-xs text-gray-500 mb-3">{isRTL ? 'للمناقصات وعروض الأسعار الرسمية' : 'Tenders, RFQs & formal proposals'}</p>
            <a
              href="mailto:info@kahfgreens.ae"
              className="block text-sm font-semibold text-[#1a4d2e] hover:underline truncate"
            >
              info@kahfgreens.ae
            </a>
          </div>

          {/* Card 4: Location */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#1a4d2e] mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">{isRTL ? 'زيارة معرضنا' : 'Visit Showroom'}</h3>
            <p className="text-xs text-gray-500 mb-3">{isRTL ? 'منطقة رأس الخور الصناعية 2، دبي' : 'Ras Al Khor Ind. Area 2, Dubai'}</p>
            <a
              href="https://maps.google.com/?q=Ras+Al+Khor,+Dubai,+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4d2e] hover:underline"
            >
              <span>{isRTL ? 'فتح في خرائط جوجل' : 'View on Maps'}</span>
              <ExternalLink size={14} className={isRTL ? 'rotate-180' : ''} />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- MAIN CONTACT SECTION ---------------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-xl">
              <div className="mb-8">
                <span className="text-xs font-semibold text-[#1a4d2e] uppercase tracking-wider bg-[#e8f5e9] px-3 py-1 rounded-full">
                  {isRTL ? 'طلب عرض سعر سريع' : 'Fast Quotation Request'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
                  {t('contact.formTitle')}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {isRTL ? 'قم بتعبئة النموذج وسيقوم مهندس بالرد عليك خلال 24 ساعة.' : 'Fill out the form below and an engineer will respond within 24 hours.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      {t('contact.nameLabel')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t('contact.namePlaceholder')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 outline-none transition-all text-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      {t('contact.phoneLabel')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder={t('contact.phonePlaceholder')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 outline-none transition-all text-sm text-gray-900"
                    />
                  </div>
                </div>

                {/* Email & Emirate */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      {t('contact.emailLabel')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder={t('contact.emailPlaceholder')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 outline-none transition-all text-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      {isRTL ? 'موقع المشروع / الإمارات' : 'Project Location / Emirate'}
                    </label>
                    <div className="relative">
                      <select
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 outline-none transition-all text-sm text-gray-900 bg-white appearance-none cursor-pointer"
                      >
                        {emiratesList.map((em) => (
                          <option key={em} value={em}>
                            {em}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none`}
                      />
                    </div>
                  </div>
                </div>

                {/* Service Pills Selection */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    {t('contact.serviceLabel')}
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {serviceOptions.map((item) => {
                      const isSelected = formData.selectedServices.includes(item.id);
                      return (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => handleServiceToggle(item.id)}
                          className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all ${
                            isSelected
                              ? 'bg-[#1a4d2e] text-white shadow-sm border border-[#1a4d2e]'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {isSelected && '✓ '}
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t('contact.messagePlaceholder')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 outline-none transition-all text-sm text-gray-900 resize-y min-h-[110px]"
                  />
                </div>

                {/* Dual Action Submit Buttons */}
                <div className="space-y-3 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white h-13 py-3.5 text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        {t('contact.submitting')}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send size={18} className={isRTL ? 'rotate-180' : ''} />
                        {t('contact.submitBtn')}
                      </span>
                    )}
                  </Button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-xs font-medium text-gray-400 uppercase">
                      {isRTL ? 'أو تواصل فورياً عبر الواتساب' : 'or prefer instant WhatsApp?'}
                    </span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb657] text-white py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle size={18} />
                    <span>{isRTL ? 'إرسال التفاصيل مباشرة عبر الواتساب' : 'Send Pre-Filled Inquiry via WhatsApp'}</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2 text-center">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-600" /> {isRTL ? 'استشارة مجانية' : 'Free Consultation'}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-emerald-600" /> {isRTL ? 'رد سريع مضمون' : 'Fast Response Guarantee'}
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Office Info, Map & FAQs (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Showroom & Operating Hours Card */}
            <div className="bg-[#f7faf7] rounded-3xl p-6 sm:p-8 border border-emerald-100">
              <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-4 flex items-center gap-2">
                <Building2 size={20} className="text-[#1a4d2e]" />
                {isRTL ? 'أوقات العمل والمعرض' : 'Showroom & Office Hours'}
              </h3>

              <div className="space-y-3 text-sm text-gray-700 mb-6">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/60">
                  <span className="font-medium text-gray-600">{isRTL ? 'الإثنين – الجمعة' : 'Monday – Friday'}</span>
                  <span className="font-semibold text-gray-900">7:30 AM – 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/60">
                  <span className="font-medium text-gray-600">{isRTL ? 'السبت' : 'Saturday'}</span>
                  <span className="font-semibold text-gray-900">7:30 AM – 2:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">{isRTL ? 'الأحد' : 'Sunday'}</span>
                  <span className="font-semibold text-red-600">{isRTL ? 'عطلة (الاستفسارات الإلكترونية متاحة)' : 'Closed (Online inquiries open)'}</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-emerald-100 text-xs text-gray-600 space-y-1.5">
                <p className="font-semibold text-gray-900 flex items-center gap-1.5">
                  <Compass size={14} className="text-[#1a4d2e]" /> {t('contact.officeLocation')}
                </p>
                <p>{isRTL ? 'سهولة الوصول من طريق رأس الخور (E44) مع مواقف مخصصة للعملاء.' : 'Easy access from Ras Al Khor Road (E44) with ample on-site customer parking.'}</p>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
              <div className="h-64 sm:h-72 w-full relative">
                <iframe
                  title="Kahf Greens Location - Ras Al Khor, Dubai"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.000!2d55.3575209!3d25.1696089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f678ecd0212b5%3A0xe1afca9da4d254e8!2sKahf%20Greens!5e0!3m2!1sen!2sae!4v1730000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 bg-white flex items-center justify-between border-t border-gray-100">
                <div>
                  <p className="text-xs font-semibold text-gray-900">{isRTL ? 'معرض كهف جرينز' : 'Kahf Greens Showroom'}</p>
                  <p className="text-[11px] text-gray-500">{isRTL ? 'رأس الخور، دبي، الإمارات' : 'Ras Al Khor, Dubai, UAE'}</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Ras+Al+Khor,+Dubai,+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>{isRTL ? 'فتح في الخريطة' : 'Open in Maps'}</span>
                  <ExternalLink size={12} className={isRTL ? 'rotate-180' : ''} />
                </a>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md">
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h3>
              <div className="divide-y divide-gray-100">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="py-3">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between gap-3 text-left font-semibold text-xs sm:text-sm text-gray-800 hover:text-[#1a4d2e] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 flex-shrink-0 transition-transform ${
                          openFaq === idx ? 'rotate-180 text-[#1a4d2e]' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-gray-600 leading-relaxed pt-2">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
