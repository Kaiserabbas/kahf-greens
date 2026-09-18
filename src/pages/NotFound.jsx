import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Phone, Leaf } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const NotFound = () => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-5">
      <Helmet>
        <title>{isRTL ? "الصفحة غير موجودة | كهف جرينز" : "Page Not Found | Kahf Greens"}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-xl"
      >
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center">
              <Leaf size={56} className="text-[#1a4d2e]" strokeWidth={1.5} />
            </div>
            <span className={`absolute -top-2 ${isRTL ? "-left-2" : "-right-2"} bg-[#1a4d2e] text-white text-xs font-bold px-2 py-1 rounded-full`}>404</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#1a4d2e] mb-4 tracking-tight">
          {isRTL ? "هل تائه في المساحات الخضراء؟" : "Lost in the Greenery?"}
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          {isRTL
            ? "الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نرشدك للعودة إلى حدائقنا."
            : "The page you're looking for has wandered off. Let us guide you back to our garden."}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/')}
            className="bg-[#1a4d2e] hover:bg-[#2d6a4f] text-white px-8 py-6 rounded-xl text-base font-semibold shadow-lg flex items-center gap-2"
          >
            <Home size={18} />
            {isRTL ? "العودة للرئيسية" : "Back to Home"}
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/contact')}
            className="border-[#1a4d2e] text-[#1a4d2e] hover:bg-[#1a4d2e] hover:text-white px-8 py-6 rounded-xl text-base font-semibold flex items-center gap-2"
          >
            <Phone size={18} />
            {isRTL ? "تواصل معنا" : "Contact Us"}
          </Button>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-slate-500 mb-4 font-medium">
            {isRTL ? "روابط سريعة:" : "Quick links:"}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: isRTL ? 'الزراعة' : 'Agriculture', href: '/agriculture' },
              { label: isRTL ? 'تنسيق الحدائق' : 'Landscaping', href: '/landscaping' },
              { label: isRTL ? 'المشاريع' : 'Projects', href: '/projects' },
              { label: isRTL ? 'من نحن' : 'About Us', href: '/about' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-[#1a4d2e] rounded-full text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
