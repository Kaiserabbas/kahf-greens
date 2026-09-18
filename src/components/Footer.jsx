import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Clock,
  Send,
  ShieldCheck,
  Award,
  CheckCircle2,
  Trees,
  Sprout,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { useToast } from './ui/use-toast';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logowhite.png';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [isOpenNow, setIsOpenNow] = useState(false);

  const currentYear = new Date().getFullYear();

  // UAE Time (GST is UTC+4) and Office Open calculation
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Dubai GST time
      const dubaiDateStr = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'Asia/Dubai',
      });
      const dubaiTimeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Dubai',
      });
      setCurrentDate(dubaiDateStr);
      setCurrentTime(dubaiTimeStr);

      // Check working hours: Mon-Fri 7:30-17:00, Sat 7:30-14:00, Sun Closed (Dubai time)
      const uaeHour = parseInt(
        now.toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, timeZone: 'Asia/Dubai' }),
        10
      );
      const uaeMinute = parseInt(
        now.toLocaleTimeString('en-US', { minute: 'numeric', timeZone: 'Asia/Dubai' }),
        10
      );
      const uaeDay = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' })).getDay();
      // 0: Sun, 1: Mon, ..., 6: Sat
      const currentDecHour = uaeHour + uaeMinute / 60;

      if (uaeDay >= 1 && uaeDay <= 5) {
        // Mon-Fri: 7:30 AM to 5:00 PM
        setIsOpenNow(currentDecHour >= 7.5 && currentDecHour < 17);
      } else if (uaeDay === 6) {
        // Sat: 7:30 AM to 2:00 PM
        setIsOpenNow(currentDecHour >= 7.5 && currentDecHour < 14);
      } else {
        setIsOpenNow(false);
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const landscapingServices = [
    { name: t('sectors.landscaping.waterSaving.name'), path: '/landscaping/water-saving' },
    { name: t('sectors.landscaping.balcony.name'), path: '/landscaping/balcony' },
    { name: t('sectors.landscaping.planters.name'), path: '/landscaping/planters' },
    { name: t('sectors.landscaping.outdoorLiving.name'), path: '/landscaping/outdoor-living' },
    { name: t('sectors.landscaping.maintenance.name'), path: '/landscaping/maintenance' },
    { name: t('sectors.landscaping.systems.name'), path: '/landscaping/systems' },
    { name: t('sectors.landscaping.newServices.name'), path: '/landscaping/new-services' },
    { name: isRTL ? 'جميع حلول تنسيق الحدائق' : 'All Landscaping Solutions', path: '/landscaping' },
  ];

  const agricultureServices = [
    { name: t('sectors.agriculture.greenhouses.name'), path: '/agriculture/greenhouses' },
    { name: t('sectors.agriculture.irrigation.name'), path: '/agriculture/irrigation' },
    { name: t('sectors.agriculture.planterPots.name'), path: '/agriculture/planter-pots' },
    { name: t('sectors.agriculture.planterBags.name'), path: '/agriculture/planter-bags' },
    { name: t('sectors.agriculture.pumpsHoses.name'), path: '/agriculture/pumps-and-hoses' },
    { name: t('sectors.agriculture.machinery.name'), path: '/agriculture/machinery' },
    { name: t('sectors.agriculture.waterSaving.name'), path: '/agriculture/water-saving' },
    { name: isRTL ? 'جميع الحلول والتقنيات الزراعية' : 'All Agriculture Solutions', path: '/agriculture' },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/kahfgreens',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/kahf-greens/',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/kahfgreens',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Subscribed successfully!',
      description: 'Thank you for subscribing to Kahf Greens UAE updates.',
      duration: 4000,
    });
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-[#0e331c] via-[#092414] to-[#05170d] text-white relative overflow-hidden border-t border-emerald-900/30">
      {/* Background Micro Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-16 pb-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-emerald-800/40">
          {/* Column 1: Brand & Newsletter (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt="Kahf Greens Logo"
                className="h-12 w-auto object-contain rounded-xl bg-white/10 p-1.5 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <span className="text-2xl font-black tracking-tight text-white block leading-none">
                  Kahf Greens
                </span>
                <span className="text-[11px] font-semibold text-[#90b77d] uppercase tracking-widest mt-1 block">
                  UAE Green Spaces Since 2004
                </span>
              </div>
            </Link>

            <p className="text-emerald-100/80 text-sm leading-relaxed max-w-sm">
              Over 20 years of pioneering sustainable desert landscaping, climate-adapted horticulture, and high-efficiency agricultural engineering across Dubai, Abu Dhabi, and the GCC.
            </p>

            {/* Newsletter Input */}
            <div className="bg-white/5 border border-emerald-500/20 rounded-2xl p-4 backdrop-blur-sm">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#90b77d] mb-2 flex items-center gap-1.5">
                <Sparkles size={13} />
                <span>Stay Informed on UAE AgTech & Design</span>
              </h5>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-black/40 border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-[#90b77d] focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="bg-[#90b77d] hover:bg-[#a3c990] text-[#102a18] p-2.5 rounded-xl font-bold transition-all duration-200 hover:scale-105 flex items-center justify-center"
                >
                  <Send size={15} />
                </button>
              </form>
              <span className="text-[10px] text-emerald-200/50 mt-1.5 block">
                No spam. Unsubscribe anytime.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-emerald-200/70 font-medium">Follow Us:</span>
              <div className="flex gap-2.5">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="bg-white/10 hover:bg-[#90b77d] text-white hover:text-[#102a18] p-2 rounded-xl transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Landscaping Division (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-emerald-800/40">
              <Trees size={18} className="text-[#90b77d]" />
              <h4 className="text-base font-bold text-white tracking-wide">
                Landscaping Division
              </h4>
            </div>

            <ul className="space-y-2.5 text-sm">
              {landscapingServices.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-emerald-100/75 hover:text-white transition-colors flex items-center gap-2 group py-0.5"
                  >
                    <span className="text-[#90b77d] text-xs transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Agriculture Division (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-emerald-800/40">
              <Sprout size={18} className="text-[#90b77d]" />
              <h4 className="text-base font-bold text-white tracking-wide">
                Agriculture Division
              </h4>
            </div>

            <ul className="space-y-2.5 text-sm">
              {agricultureServices.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-emerald-100/75 hover:text-white transition-colors flex items-center gap-2 group py-0.5"
                  >
                    <span className="text-[#90b77d] text-xs transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & UAE Headquarters (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-emerald-800/40">
              <Clock size={18} className="text-[#90b77d]" />
              <h4 className="text-base font-bold text-white tracking-wide">
                UAE Headquarters
              </h4>
            </div>

            {/* Live Office Status Badge */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5 text-xs">
              <span className={`h-2.5 w-2.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
              <div>
                <div className="font-bold text-white">
                  {isOpenNow ? 'Office Open Now' : 'Office Closed'}
                </div>
                <div className="text-[10px] text-emerald-200/60">
                  {isOpenNow ? '7:30 AM – 5:00 PM GST' : 'Opens Mon at 7:30 AM'}
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 text-xs text-emerald-100/80">
              <a
                href="https://maps.google.com/?q=Ras+Al+Khor,+Dubai,+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <MapPin size={15} className="text-[#90b77d] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Ras Al Khor Industrial 3, Dubai, UAE</span>
              </a>

              <a
                href="tel:+97142240733"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Phone size={15} className="text-[#90b77d] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+971 4 224 0733</span>
              </a>

              <a
                href="https://wa.me/971565096880?text=Hello%20Kahf%20Greens,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#25D366] hover:text-[#45e680] font-semibold transition-colors group"
              >
                <MessageCircle size={15} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+971 56 509 6880</span>
              </a>

              <a
                href="mailto:info@kahfgreens.ae"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Mail size={15} className="text-[#90b77d] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@kahfgreens.ae</span>
              </a>
            </div>

            {/* Quick consultation button */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#90b77d] hover:bg-[#a3c990] text-[#102a18] font-bold text-xs rounded-xl shadow-md transition-all duration-200 transform hover:scale-105"
              >
                Request Site Visit →
              </Link>
            </div>
          </div>
        </div>

        {/* Institutional Accreditation Trust Strip */}
        <div className="py-6 border-b border-emerald-800/40 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-emerald-200/80">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck size={16} className="text-[#90b77d]" />
            <span>{isRTL ? 'معتمد لدى بلدية دبي' : 'Dubai Municipality Approved'}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-[#90b77d]" />
            <span>{isRTL ? 'مقاول مسجل لدى هيئة كهرباء ومياه دبي (ديوا)' : 'DEWA Registered Contractor'}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award size={16} className="text-[#90b77d]" />
            <span>{isRTL ? 'خبرة معتمدة تتجاوز 20 عاماً في الإمارات' : '20+ Years UAE Proven Track Record'}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-[#90b77d]" />
            <span>{isRTL ? 'شبكة لوجستية وتوريد لكافة إمارات الدولة' : 'UAE-Wide Logistics in 7 Emirates'}</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language & Live Time */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-200/60">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-center md:text-left">
            <span>{t('footer.copyright', { year: currentYear })}</span>
            <span className="hidden sm:inline text-emerald-700">|</span>
            <span className="text-[#90b77d] font-mono">{currentDate}</span>
            <span className="hidden sm:inline text-emerald-700">|</span>
            <span className="text-[#90b77d] font-mono">{currentTime} GST</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <LanguageToggle />

            <Link to="/about" className="hover:text-white transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/partners" className="hover:text-white transition-colors">
              {t('nav.partners')}
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              {t('nav.contact')}
            </Link>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-emerald-200 hover:text-white transition-colors group cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>{isRTL ? 'إلى الأعلى' : 'Back to top'}</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
